const { PrismaClient } = require('./node_modules/@prisma/client');
const bcrypt = require('./node_modules/bcrypt');
const crypto = require('crypto');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@crm.com';
  const password = 'admin123';

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log('Owner already exists:', email);
    return;
  }

  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      id: crypto.randomUUID(),
      email,
      name: 'Admin Owner',
      password: hash,
      role: 'OWNER',
      isActive: true,
      emailVerified: true,
    },
  });
  console.log('Owner created:', user.email, '| password:', password);
}

main().catch(console.error).finally(() => prisma.$disconnect());
