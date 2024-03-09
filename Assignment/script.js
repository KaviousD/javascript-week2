window.onload = function() {
    var name = prompt("Welcome! Please enter your name:");
    if (name != null && name != "") {
        document.getElementById("welcomeMessage").innerHTML = "Hello, " + name + "! Welcome to Kavo's Barbershop.";
    }
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 10000) + 1;
}

function sendEmail() {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (email && message) {
        var subject = "Hair Appointment #" + generateRandomNumber();
        var body = "Email: " + email + "\nMessage: " + message;
        var mailtoLink = "mailto:youremail@example.com?cc=youremail@example.com&subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        window.location.href = mailtoLink;

        document.getElementById("contactForm").style.display = "none";
        document.getElementById("successMessage").style.display = "block";

        // setTimeout(returnHome, 9000); // Return to homepage after 9 seconds
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
}

function returnHome() {
    window.location.href = "landingPage.html";
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    sendEmail();
    event.preventDefault();
});


