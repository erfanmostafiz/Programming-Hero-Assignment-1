const tabs = document.querySelectorAll(".tab");
const schedules = document.querySelectorAll(".schedule-content");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((btn) => btn.classList.remove("active"));
        schedules.forEach((content) => content.classList.remove("active"));

        tab.classList.add("active");

        document.getElementById(tab.dataset.day).classList.add("active");
    });
});
