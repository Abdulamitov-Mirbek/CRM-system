namespace MyCrm.Api.Authorization;

public static class RbacPolicies
{
    public const string RequireOwner = "RequireOwner";
    public const string RequireAdmin = "RequireAdmin";
    public const string RequireManager = "RequireManager";
    public const string RequireWaiter = "RequireWaiter";
}
