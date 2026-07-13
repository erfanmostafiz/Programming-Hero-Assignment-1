// PLEASE NOTE:
// JavaScript code is only for the placeholder section for interactivity. AI has been used with guided prompts directing to the final outcome I want, to create this javascript code. All the other sections do not have any Javascript code.

const tabs = document.querySelectorAll(".tab");
const schedules = document.querySelectorAll(".schedule-content");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((btn) => btn.classList.remove("active"));
        schedules.forEach((content) => content.classList.remove("active"));

        tab.classList.add("active");

        document.getElementById(tab.dataset.day).classList.add("active");
        venueButtons.forEach((btn) => btn.classList.remove("active"));

        venueButtons[0].classList.add("active");

        document
            .querySelectorAll(".schedule-content.active .schedule-item")
            .forEach((item) => {
                item.style.display = "grid";
            });
    });
});

const venueButtons = document.querySelectorAll(".venue-btn");

venueButtons.forEach((button) => {
    button.addEventListener("click", () => {
        venueButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const selectedVenue = button.dataset.venue;

        // Only filter the currently visible day
        const activeSchedule = document.querySelector(
            ".schedule-content.active",
        );

        const items = activeSchedule.querySelectorAll(".schedule-item");

        items.forEach((item) => {
            if (
                selectedVenue === "all" ||
                item.dataset.venue === selectedVenue
            ) {
                item.style.display = "grid";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Modal:
const modal = document.getElementById("sessionModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".schedule-item").forEach((item) => {
    item.addEventListener("click", () => {
        modalTitle.textContent = item.querySelector("h3").textContent;

        modalDescription.textContent = item.dataset.description;

        modal.classList.add("show");
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});
