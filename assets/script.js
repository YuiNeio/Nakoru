document.addEventListener("DOMContentLoaded", function() {
    function adjustLayout() {
        const buttons = document.querySelectorAll('.btn');
        const smallButtons = document.querySelectorAll('.btn-small');
        
        if (window.innerWidth <= 768) {
            buttons.forEach(button => {
                button.style.padding = '10px 20px';
                button.style.fontSize = '1em';
                button.style.borderRadius = '20px';
                button.style.paddingLeft = '30px';
            });

            smallButtons.forEach(button => {
                button.style.padding = '8px 15px';
                button.style.fontSize = '0.8em';
                button.style.minWidth = '100px';
            });
        } else {
            buttons.forEach(button => {
                button.style.padding = '15px';
                button.style.fontSize = '1.1em';
                button.style.borderRadius = '30px';
                button.style.paddingLeft = '50px';
            });

            smallButtons.forEach(button => {
                button.style.padding = '10px 20px';
                button.style.fontSize = '0.9em';
                button.style.minWidth = '140px';
            });
        }
    }

    // Adjust layout on load
    adjustLayout();

    // Adjust layout on window resize
    window.addEventListener('resize', adjustLayout);
});
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});
window.addEventListener('resize', function() {
    const buttons = document.querySelectorAll('.button, .other-link-button');
    buttons.forEach(button => {
        if (window.innerWidth < 600) {
            button.style.width = '90%';
        } else {
            button.style.width = '80%';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const notification = document.getElementById('notification');

    // Show the notification after 3 seconds
    setTimeout(() => {
        notification.classList.add('show');
        // Hide the notification after 10 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 10000); // 10 seconds
    }, 3000); // Adjust the timing as needed
});