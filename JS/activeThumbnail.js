            // Smooth scroll the active thumbnail into view
            function currentSlide(n) {
                showSlidesManual(slideIndex = n);
                
                // Scroll the active thumbnail into view
                const activeThumbnail = document.querySelector('.active-thumbnail');
                if (activeThumbnail) {
                    activeThumbnail.scrollIntoView({
                        behavior: 'smooth',
                        inline: 'center'
                    });
                }
            }