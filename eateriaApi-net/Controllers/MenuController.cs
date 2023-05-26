using MenuApi.Models;
using MenuApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace MenuApi.Controllers;

[ApiController]
[Route("[controller]")]
public class MenuController : ControllerBase
{
    private IConfiguration Config { get; set; }
    private ILogger<MenuController> Logger { get; set; }
    private IMenuService MenuSvc { get; set; }

    public MenuController(IConfiguration configuration, ILogger<MenuController> logger, IMenuService menuService)
    {
        Config = configuration;
        Logger = logger;
        MenuSvc = menuService;
    }

    [HttpGet("get-categories")]
    public async Task<IEnumerable<string>> GetCategories()
    {
        return await MenuSvc.GetCategoriesAsync();
    }

    [HttpGet("get-full-menu")]
    public async Task<IEnumerable<MenuRow>> GetFullMenu()
    {
        return await MenuSvc.GetMenuAsync();
    }

    [HttpPost("import-menu")]
    public async Task<IActionResult> OnPostMenuAsync(IFormFile menu)
    {
        var size = menu.Length;

        if (size > 0)
        {
            Logger.LogInformation($"Importing menu: {size} bytes");
            var menuPath = Path.GetTempFileName();

            using (var stream = System.IO.File.Create(menuPath))
            {
                await menu.CopyToAsync(stream);
            }

            var result = await MenuSvc.ImportMenuAsync(menuPath); // TODO create ImportService
            return Ok(result);
        }
        return BadRequest("No data");
    }
}