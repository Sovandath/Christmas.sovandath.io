const snowContainer = document.getElementById("snow-container");

// Generate a moderate number of snowflakes
function createSnowflakes() {
  for (let i = 0; i < 30; i++) {
    // Adjust the number of snowflakes here
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄";

    // Randomize snowflake position and size
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 2 + 6 + "s"; // Slightly slower fall
    snowflake.style.animationDelay = Math.random() * 3 + "s";
    snowflake.style.fontSize = Math.random() * 8 + 12 + "px";

    snowContainer.appendChild(snowflake);

    // Remove the snowflake after its animation ends
    snowflake.addEventListener("animationend", () => {
      snowflake.remove();
    });
  }
}

// Repeat snowflake creation every few seconds
setInterval(createSnowflakes, 2000); // Lower frequency for fewer snowflakes
