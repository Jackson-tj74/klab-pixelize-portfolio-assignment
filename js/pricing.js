// pricing monthly/yearly toggle

document.addEventListener('DOMContentLoaded', function () {
    var monthlyBtn = document.getElementById('monthly-btn');
    var yearlyBtn = document.getElementById('yearly-btn');
    var prices = document.querySelectorAll('.price-value');
    var periods = document.querySelectorAll('.plan-period');

    var currentPlan = 'monthly';

    function switchPlan(plan) {
        if (plan === currentPlan) return;
        currentPlan = plan;

        // update buttons
        monthlyBtn.classList.toggle('active', plan === 'monthly');
        yearlyBtn.classList.toggle('active', plan === 'yearly');

        // update prices
        for (var i = 0; i < prices.length; i++) {
            prices[i].textContent = prices[i].getAttribute('data-' + plan);
        }

        // update period text
        for (var j = 0; j < periods.length; j++) {
            periods[j].textContent = plan === 'monthly' ? '/month' : '/year';
        }
    }

    monthlyBtn.addEventListener('click', function () { switchPlan('monthly'); });
    yearlyBtn.addEventListener('click', function () { switchPlan('yearly'); });
});