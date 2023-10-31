document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("countdown");

    function countdown(num, callback) {
        if (num > 0) {
            countdownElement.innerText = num;
            setTimeout(function() {
                countdown(num - 1, callback);
            }, 1000); // Wait for 1 second
        } else {
            callback();
        }
    }

    countdown(10, function() {
        countdownElement.innerText = "Happy Independence Day!!!";
        countdownElement.classList.add("anim")
    });
});
