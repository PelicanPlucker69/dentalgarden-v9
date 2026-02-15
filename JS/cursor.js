const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
});

// Function to update the mouse position with the scroll offset
function updateMousePosition(e) {
    coords.x = e.clientX + window.scrollX;
    coords.y = e.clientY + window.scrollY;
}

// Attach event listener for mouse movement
window.addEventListener("mousemove", updateMousePosition);

// Main animation function to move and scale the circles
function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        // Move each circle to the mouse position
        circle.style.left = x - 12 + "px"; // Adjust based on circle size
        circle.style.top = y - 12 + "px";  // Adjust based on circle size

        // Scale the circles based on their index (larger circles come first)
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        // Store the new position for the circle
        circle.x = x;
        circle.y = y;

        // Move to the next circle (creating a trail effect)
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    // Continue the animation loop
    requestAnimationFrame(animateCircles);
}

// Start the animation loop
requestAnimationFrame(animateCircles);