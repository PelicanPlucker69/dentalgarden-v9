        // Smooth scroll functionality for title click
        const titleElement = document.getElementById('scroll-to-top'); // Get the h1 element

        titleElement.addEventListener('click', function() {
            // Scroll to the top first, then scroll down
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // After 600ms, scroll down 500px
            setTimeout(function() {
                window.scrollBy({
                    top: 1000,  // Scrolls 500px down
                    behavior: 'smooth'
                });
            }, 450);  // Delay of 450ms
        });