//carrousel menus

new Glide(".images", {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    gap: 30,
    breakpoints: {
        1200: {
            perView: 3
        },
        768: {
            perView: 2
        },
        576: {
            perView: 1
        }
    }
}).mount();

new Glide(".images-1", {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    gap: 30,
    breakpoints: {
        1200: {
            perView: 3
        },
        768: {
            perView: 2
        },
        576: {
            perView: 1
        }
    }
}).mount();

new Glide(".images-2", {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    gap: 30,
    breakpoints: {
        1200: {
            perView: 3
        },
        768: {
            perView: 2
        },
        576: {
            perView: 1
        }
    }
}).mount();

//date picker