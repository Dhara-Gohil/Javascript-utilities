const endDate = "20 March 2026 10:00 AM"; 
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000; // Difference in seconds

    if (diff < 0) return; // Stop if countdown is over

    // Calculate days, hours, minutes, seconds correctly
    const days = Math.floor(diff / (3600 * 24));
    const hours = Math.floor((diff % (3600 * 24)) / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = Math.floor(diff % 60);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
}

clock(); // Initial call to display
setInterval(clock, 1000); // Update every second
