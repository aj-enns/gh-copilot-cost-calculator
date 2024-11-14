using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using gh_copilot_cost_calculator.Models;

namespace gh_copilot_cost_calculator.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

    [HttpPost]
    public IActionResult Calculate(CalculationModel model)
    {
        if (ModelState.IsValid)
        {
            model.TotalHours = model.NumberOfDevelopers * model.TotalHoursPerDevPerYear * (model.PercentCoding / 100);
            model.TotalCost = model.TotalHours * model.HourlyRate;
            model.BoostedProductivity = model.TotalCost * (1 + (model.ProductivityBoost / 100));

            return View("Result", model);
        }

        return View("Index");
    }
}
