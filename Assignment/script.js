// execute when the window is fully loaded
window.onload = function() {
    // user enters name function
    var name = prompt("Welcome! Please enter your name:");
    // checks if name has been entered
    if (name != null && name != "") {
        // displays the name entered by user
        document.getElementById("welcomeMessage").innerHTML = "Hello, " + name + "! Welcome to Kavo's Barbershop.";
    }
}

// generates a random number for the email subject
function generateRandomNumber() {
    return Math.floor(Math.random() * 10000) + 1;
}

//  function for actually sending the email collects the message and email input
function sendEmail() {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // checks if both have been both have been enterd 
    if (email && message) {
        // random number generator for the email subject
        var subject = "Hair Appointment #" + generateRandomNumber();
        var body = "Email: " + email + "\nMessage: " + message;
        // set up to link to an email the message can be read at
        var mailtoLink = "mailto:youremail@example.com?cc=youremail@example.com&subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        // just a email window
        window.location.href = mailtoLink;

        document.getElementById("contactForm").style.display = "none";
        document.getElementById("successMessage").style.display = "block";

        //  setTimeout(returnHome, 9000); // Return to homepage after 9 seconds prefer not to uses AtM
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
}
// function for sending user back to the homepage
function returnHome() {
    window.location.href = "landingPage.html";
}

//  eventlistener for form submission that calls the sendemailfunction when form is submitted
document.getElementById("contactForm").addEventListener("submit", function(event) {
    sendEmail();
    event.preventDefault();
});


