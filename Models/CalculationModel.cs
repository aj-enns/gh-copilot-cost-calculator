namespace gh_copilot_cost_calculator.Models
{
    public class CalculationModel
    {
        public int NumberOfDevelopers { get; set; }
        public string AggregationTimePeriod { get; set; }
        public int TotalHoursPerDevPerYear { get; set; }
        public double PercentCoding { get; set; }
        public double HourlyRate { get; set; }
        public double ProductivityBoost { get; set; }
        public double TotalCost { get; set; }
        public double BoostedProductivity { get; set; }
        public double TotalHours { get; set; } // Add this line

    }
}