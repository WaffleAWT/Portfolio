document.addEventListener('DOMContentLoaded', function() {
    const webDesignButton = document.getElementById('web-design');
    const gameDevButton = document.getElementById('game-dev');
    const modelingButton = document.getElementById('modeling');
    const pixelArtButton = document.getElementById('pixel-art');
    const musicButton = document.getElementById('music');

    const webImg = document.getElementById('web-img');
    const gameImg = document.getElementById('game-img');
    const modeling = document.getElementById('modeling-img');
    const pixel = document.getElementById('pixel-img');
    const musicImg = document.getElementById('music-img');

    const hoverSound = document.getElementById('hover-sound');
    const clickSound = document.getElementById('click-sound');

    gameImg.style.display = 'none';
    modeling.style.display = 'none';
    pixel.style.display = 'none';
    musicImg.style.display = 'none';

    const displayImage = (imgToShow) => {
        webImg.style.display = imgToShow === 'web' ? 'block' : 'none';
        gameImg.style.display = imgToShow === 'game' ? 'block' : 'none';
        modeling.style.display = imgToShow === 'modeling' ? 'block' : 'none';
        pixel.style.display = imgToShow === 'pixel' ? 'block' : 'none';
        musicImg.style.display = imgToShow === 'music' ? 'block' : 'none';
    };

    webDesignButton.addEventListener('click', () => {
        displayImage('web');
    });

    gameDevButton.addEventListener('click', () => {
        displayImage('game');
    });

    modelingButton.addEventListener('click', () => {
        displayImage('modeling');
    });

    pixelArtButton.addEventListener('click', () => {
        displayImage('pixel');
    });

    musicButton.addEventListener('click', () => {
        displayImage('music');
    });

    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            hoverSound.play();
        });

        button.addEventListener('click', () => {
            clickSound.play();
            const targetId = button.getAttribute('data-scroll');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const learnMoreButton = document.querySelector('.hero-button');
    learnMoreButton.addEventListener('mouseenter', () => {
        hoverSound.play();
    });

    learnMoreButton.addEventListener('click', () => {
        clickSound.play();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    const skillsButton = document.querySelector('.about-button');
    skillsButton.addEventListener('mouseenter', () => {
        hoverSound.play();
    });

    skillsButton.addEventListener('click', () => {
        clickSound.play();
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    const skillButtons = [webDesignButton, gameDevButton, modelingButton, pixelArtButton, musicButton];
    skillButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            hoverSound.play();
        });

        button.addEventListener('click', () => {
            clickSound.play();
        });
    });

    const submitButton = document.querySelector('input[type="submit"]');
    submitButton.addEventListener('mouseenter', () => {
        hoverSound.play();
    });

    submitButton.addEventListener('click', () => {
        clickSound.play();
    });

    const externalButtons = document.querySelectorAll('.social-icons a');
    externalButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            hoverSound.play();
        });

        button.addEventListener('click', () => {
            clickSound.play();
        });
    });
    
});
