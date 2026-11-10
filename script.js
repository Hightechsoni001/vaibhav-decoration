
// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// CLOSE MENU AFTER CLICK

document.querySelectorAll("#navMenu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

// FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();

// SET MINIMUM EVENT DATE

const eventDate = document.getElementById("eventDate");

const today = new Date();
const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

eventDate.min = localToday;

// WHATSAPP BOOKING FORM

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const eventType = document.getElementById("eventType").value;
    const date = document.getElementById("eventDate").value;
    const location = document.getElementById("eventLocation").value.trim();
    const budget = document.getElementById("budget").value;
    const message = document.getElementById("eventMessage").value.trim();

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10 digit mobile number.");
        return;
    }

    const whatsappMessage =
`Hello Vaibhav Decoration And Event Planner!

I want to book an event.

Customer Name: ${name}
Mobile Number: ${phone}
Event Type: ${eventType}
Event Date: ${date}
Event Location: ${location}
Budget: ${budget}

Decoration Requirements:
${message || "Please contact me for details."}

I would also like to know about the 40% launch offer.

Please contact me.

Thank you!`;

    const whatsappURL =
        "https://wa.me/917221954556?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");


});/* GALLERY LIGHTBOX */

document.querySelectorAll(".gallery-grid img").forEach(function(img) {

    img.addEventListener("click", function() {

        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";

        const bigImage = document.createElement("img");
        bigImage.src = img.src;
        bigImage.alt = img.alt;

        const close = document.createElement("span");
        close.className = "lightbox-close";
        close.innerHTML = "&times;";

        close.addEventListener("click", function() {
            lightbox.remove();
        });

        lightbox.addEventListener("click", function(event) {
            if (event.target === lightbox) {
                lightbox.remove();
            }
        });

        lightbox.appendChild(bigImage);
        lightbox.appendChild(close);

        document.body.appendChild(lightbox);
    });

});
