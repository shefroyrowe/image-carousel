const moveLeftButton = document.querySelector('.move-left');
const moveRightButton = document.querySelector('.move-right');
const navDots = document.querySelectorAll('.nav-dot');
let slideCount = 0;

//slides right
moveRightButton.addEventListener('click', () => {
    window.scrollBy({
        top: 0,
        left: 1417,//move by this many pixels
        behavior: "smooth"
    })

    slideCount++;
});

//slides left
moveLeftButton.addEventListener('click', () => {
    window.scrollBy({
        top: 0,
        left: -1417,//move by this many pixels
        behavior: "smooth"
    })

    slideCount--;
});

navDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        switch (e.target.id) {
            case '1':
                window.scrollBy({
                    top: 0,
                    left: -5000,//move by this many pixels
                    behavior: "smooth"
                })

                slideCount = 0;
                break;

            case '2':
                if (slideCount === 0) {
                    window.scrollBy({
                        top: 0,
                        left: 1417,//move by this many pixels
                        behavior: "smooth"
                    })

                    slideCount = 1;
                }
                break;

            case '3':
                if (slideCount === 1) {
                    window.scrollBy({
                        top: 0,
                        left: 1417,//move by this many pixels
                        behavior: "smooth"
                    })

                    slideCount = 2;
                }
                break;

            case '4':
                window.scrollBy({
                    top: 0,
                    left: 5000,//move by this many pixels
                    behavior: "smooth"
                })

                slideCount = 3;
                break;
        }
    })
})

let trackEachPass = 0;

    setInterval(() => {
        if (trackEachPass < 4) {
        window.scrollBy({
            top: 0,
            left: 1417,//move by this many pixels right
            behavior: "smooth"
        });
        trackEachPass++;
    }
    if (trackEachPass === 4) {
        window.scrollBy({
            top: 0,
            left: -5000,//move by this many pixels right
            behavior: "smooth"
        });
        trackEachPass = 0;
    }
}, 6000);

   
    
