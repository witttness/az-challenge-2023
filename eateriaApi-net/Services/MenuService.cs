using Dapper;
using MenuApi.Models;
using Microsoft.Extensions.Logging;

namespace MenuApi.Services;

public interface IMenuService
{
    Task<int> ImportMenuAsync(string file);
    Task<IEnumerable<string>> GetCategoriesAsync();
    Task<IEnumerable<MenuRow>> GetMenuAsync();
}

public class MenuService : IMenuService
{
    private IConfiguration Config { get; set; }
    private ILogger<MenuService> Logger { get; set; }

    public MenuService(IConfiguration config, ILogger<MenuService> logger)
    {
        Config = config;
        Logger = logger;
    }

    private Microsoft.Data.SqlClient.SqlConnection GetSqlConnection()
    {
        var connstr = Config.GetConnectionString("Default");
        var conn = new Microsoft.Data.SqlClient.SqlConnection(connstr);
        return conn;
    }

    public async Task<int> ImportMenuAsync(string file)
    {
        var data = await GetDataFromFileAsync(file);

        var conn = GetSqlConnection();

        //truncate
        await conn.ExecuteAsync("TRUNCATE TABLE dbo.Menu_Original");

        // #if DEBUG
        //         foreach (var d in data)
        //             Logger.LogInformation($"{d.Name}|{d.Price}|{d.Calories}|{d.CustomerRating}");
        // #endif

        //insert new data
        var count = await conn.ExecuteAsync("INSERT dbo.Menu_Original ([Category],[Name],[Description],[Price],[Calories],[Customer Rating]) " +
        "VALUES (@Category,@Name,@Description,@Price,@Calories,@CustomerRating)", data);

        return count;
    }

    private async Task<MenuRow[]> GetDataFromFileAsync(string filePath)
    {
        var lines = await System.IO.File.ReadAllLinesAsync(filePath);

        //drop first line
        lines = lines.Skip(1).ToArray();

        var result = lines.Select(MenuRow.FromStringWithoutId).ToArray();

        return result;
    }

    public async Task<IEnumerable<string>> GetCategoriesAsync()
    {
        var conn = GetSqlConnection();

        var categories = await conn.QueryAsync<string>("SELECT DISTINCT Category FROM dbo.Menu_Original");
        return categories;
    }

    public async Task<IEnumerable<MenuRow>> GetMenuAsync()
    {
        var conn = GetSqlConnection();

        var items = await conn.QueryAsync<MenuRow>(@"
SELECT [MenuId]
      ,[Category]
      ,[Name]
      ,[Description]
      ,[Price]
      ,[Calories]
      ,[Customer Rating] as CustomerRating
  FROM [dbo].[Menu_Original]");
        return items;
    }
}