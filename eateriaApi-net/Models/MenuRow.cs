using System.Text.RegularExpressions;

namespace MenuApi.Models;

public class MenuRow
{
    public int MenuId { get; set; }
    public string Category { get; set; } = "";
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public decimal Price { get; set; }
    public int Calories { get; set; }
    public decimal CustomerRating { get; set; }

    public static MenuRow FromStringWithoutId(string line)
    {
        var regex = new Regex("(?<=^|,)(\"(?:[^\"]|\"\")*\"|[^,]*)");

        var matches = regex.Matches(line);
        var row = new MenuRow
        {
            Category = matches[0].Value,
            Name = matches[1].Value,
            Description = matches[2].Value.Replace("\"", ""),
            Price = decimal.Parse(matches[3].Value),
            Calories = IsNumeric(matches[4].Value) ? int.Parse(matches[4].Value) : -1,
            CustomerRating = IsNumeric(matches[5].Value) ? decimal.Parse(matches[5].Value) : -1
        };

        return row;
    }

    private static bool IsNumeric(string text)
    {
        double test;
        return double.TryParse(text, out test);
    }
}