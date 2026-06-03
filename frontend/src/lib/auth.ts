import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import prisma from "./prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email.trim().toLowerCase(),
          },
        });

        if (!user) {
          throw new Error("Invalid credentials");
        }

        if (!user.isActive) {
          throw new Error("Account is blocked");
        }

        // If it's a firebase sync, we trust it (it's called from our client after firebase auth)
        if (credentials.password === 'FIREBASE_AUTH_EXTERNAL') {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
            role: user.role,
            emailVerified: user.emailVerified,
            isActive: user.isActive,
          };
        }

        if (!user.password || user.password === 'FIREBASE_MANAGED') {
          throw new Error("Please use Google or Firebase login");
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role,
          emailVerified: user.emailVerified,
          isActive: user.isActive,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).id = token.sub;
        (session.user as any).emailVerified = token.emailVerified;
        (session.user as any).role = token.role;
        (session.user as any).isActive = token.isActive;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.emailVerified = (user as any).emailVerified;
        token.role = (user as any).role;
        token.isActive = (user as any).isActive;
      } else if (token.sub) {
        const currentUser = await prisma.user.findUnique({
          where: { id: token.sub },
          select: {
            emailVerified: true,
            role: true,
            isActive: true,
          },
        });

        if (currentUser) {
          token.emailVerified = currentUser.emailVerified;
          token.role = currentUser.role;
          token.isActive = currentUser.isActive;
        }
      }
      return token;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};
