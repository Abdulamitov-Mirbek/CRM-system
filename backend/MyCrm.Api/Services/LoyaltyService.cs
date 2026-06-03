using MyCrm.Api.Models;

namespace MyCrm.Api.Services;

public interface ILoyaltyService
{
    void ProcessPurchase(Contact contact, decimal amount);
    decimal CalculateBonus(Contact contact, decimal amount);
}

public class LoyaltyService : ILoyaltyService
{
    private const decimal BronzeThreshold = 0;
    private const decimal SilverThreshold = 5000;
    private const decimal GoldThreshold = 20000;
    private const decimal PlatinumThreshold = 100000;

    private const decimal BronzeRate = 0.03m;
    private const decimal SilverRate = 0.05m;
    private const decimal GoldRate = 0.07m;
    private const decimal PlatinumRate = 0.10m;

    public void ProcessPurchase(Contact contact, decimal amount)
    {
        contact.TotalSpent += amount;
        contact.BonusBalance += CalculateBonus(contact, amount);
        UpdateLoyaltyLevel(contact);
    }

    public decimal CalculateBonus(Contact contact, decimal amount)
    {
        var rate = contact.LoyaltyLevel switch
        {
            "Silver" => SilverRate,
            "Gold" => GoldRate,
            "Platinum" => PlatinumRate,
            _ => BronzeRate
        };

        return amount * rate;
    }

    private void UpdateLoyaltyLevel(Contact contact)
    {
        if (contact.TotalSpent >= PlatinumThreshold)
            contact.LoyaltyLevel = "Platinum";
        else if (contact.TotalSpent >= GoldThreshold)
            contact.LoyaltyLevel = "Gold";
        else if (contact.TotalSpent >= SilverThreshold)
            contact.LoyaltyLevel = "Silver";
        else
            contact.LoyaltyLevel = "Bronze";
    }
}
