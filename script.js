function compareCars() {
    const car1 = document.getElementById('car1').value;
    const car2 = document.getElementById('car2').value;
    const comparisonResults = document.getElementById('comparison-results');

    if (car1 && car2) {
        // Sample comparison logic, in real application, you would fetch this data from a server
        comparisonResults.innerHTML = `
            <h4>Comparison between ${car1} and ${car2}</h4>
            <p>${car1} has better fuel efficiency.</p>
            <p>${car2} has better safety features.</p>
            <p>${car1} has better speed than ${car2}.</p>
        `;
    } else {
        comparisonResults.innerHTML = '<p>Please enter both car models to compare.</p>';
    }
}

function submitUserContent() {
    const username = document.getElementById('username').value;
    const userReview = document.getElementById('user-review').value;
    const userContentDisplay = document.getElementById('user-content-display');

    if (username && userReview) {
        const newUserContent = document.createElement('div');
        newUserContent.className = 'user-review';
        newUserContent.innerHTML = `
            <h4>${username}</h4>
            <p>${userReview}</p>
        `;
        userContentDisplay.appendChild(newUserContent);

        // Clear the form
        document.getElementById('username').value = '';
        document.getElementById('user-review').value = '';
    } else {
        alert('Please fill out both fields.');
    }
}

function startTypingAnimation() {
    const messageElement = document.getElementById("welcome-message");
    messageElement.style.width = "0"; // Reset width for new animation
    messageElement.style.animation = "none"; // Reset animation
    setTimeout(() => {
        messageElement.style.animation = "typing 4s steps(22, end), blink-caret 0.75s step-end infinite"; // Start typing animation
    }, 10);

    setTimeout(() => {
        messageElement.style.width = "0"; // Hide message after typing
        messageElement.style.animation = "none"; // Reset animation for disappearing
    }, 5000); // Adjust time for how long the message stays before disappearing

    setTimeout(() => {
        startTypingAnimation(); // Restart animation
    }, 6000); // Time before the message starts typing again
}

// Start the typing animation on page load
window.onload = startTypingAnimation;


document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.star');

  stars.forEach(star => {
    star.addEventListener('click', function () {
      const value = this.getAttribute('data-value');
      
      stars.forEach(s => {
        s.classList.remove('selected');
      });
      
      for (let i = 0; i < value; i++) {
        stars[i].classList.add('selected');
      }
    });
  });
});

