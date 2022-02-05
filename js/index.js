import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: { smooth: true },
    smartphone: {
        smooth: true,
        multiplier: 2,
        lerp: 0.1,
    },
    multiplier: 0.65,
    lerp: 0.05
});
