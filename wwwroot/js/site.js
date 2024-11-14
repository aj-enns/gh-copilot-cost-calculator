// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function calculate() {
    const numDevs = parseFloat(document.getElementById('NumberOfDevelopers').value) || 0;
    const hoursPerDev = parseFloat(document.getElementById('TotalHoursPerDevPerYear').value) || 0;
    const percentCoding = parseFloat(document.getElementById('PercentCoding').value) || 0;
    const hourlyRate = parseFloat(document.getElementById('HourlyRate').value) || 0;
    const productivityBoost = parseFloat(document.getElementById('ProductivityBoost').value) || 0;
    const adoptionPercentage = parseFloat(document.getElementById('AdoptionPercentage').value) || 0;

    const usersUsingCopilot = numDevs * (adoptionPercentage / 100);
    const totalHours = usersUsingCopilot * hoursPerDev * (percentCoding / 100);
    const hoursNotCoding = usersUsingCopilot * hoursPerDev - totalHours;
    const totalCost = totalHours * hourlyRate;
    const boostedProductivity = totalCost * (1 + (productivityBoost / 100)) * (adoptionPercentage / 100);

    document.getElementById('usersUsingCopilot').innerText = usersUsingCopilot.toLocaleString(undefined, { maximumFractionDigits: 0 });
    document.getElementById('totalCost').innerText = totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('boostedProductivity').innerText = boostedProductivity.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('hoursCodingBeforeCopilot').innerText = totalHours.toLocaleString(undefined, { maximumFractionDigits: 0 });
    document.getElementById('hoursNotCoding').innerText = hoursNotCoding.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', calculate);
    });
    calculate(); // Initial calculation

    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});