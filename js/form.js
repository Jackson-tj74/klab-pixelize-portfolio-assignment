// contact form validation and submit

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');
    var submitBtn = document.getElementById('submit-btn');
    var successMsg = document.getElementById('form-success');
    var inputs = form.querySelectorAll('input, textarea');

    // check if all fields are filled
    function checkForm() {
        var allFilled = true;
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim() === '') {
                allFilled = false;
                break;
            }
        }

        if (allFilled) {
            submitBtn.disabled = false;
            submitBtn.className = 'btn-primary submit-btn';
        } else {
            submitBtn.disabled = true;
            submitBtn.className = 'btn-disabled submit-btn';
        }
    }

    // listen on every input
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', checkForm);
    }

    // handle submit
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // show loading
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        // fake submit delay
        setTimeout(function () {
            // show success message
            successMsg.classList.add('show');

            // reset form
            form.reset();
            checkForm();
            submitBtn.textContent = 'Submit';

            // hide success after 5 seconds
            setTimeout(function () {
                successMsg.classList.remove('show');
            }, 5000);
        }, 1500);
    });

    // newsletter subscribe
    var subscribeBtn = document.getElementById('subscribe-btn');
    subscribeBtn.addEventListener('click', function () {
        var emailInput = document.getElementById('newsletter-email');
        var email = emailInput.value.trim();

        if (email && email.indexOf('@') !== -1) {
            showToast('Successfully subscribed! Thank you.');
            emailInput.value = '';
        } else {
            showToast('Please enter a valid email address.');
        }
    });
});