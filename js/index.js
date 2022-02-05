import LocomotiveScroll from 'locomotive-scroll';

function isMobile(x) {
    if (x.matches) {
       document.querySelector('.project-detail-block').removeAttribute('data-scroll-sticky');  
       document.querySelector('.project-detail-block').removeAttribute('data-scroll-target');  
    } else {
          document.querySelector('.project-detail-block').setAttribute('data-scroll-sticky')
       document.querySelector('.project-detail-block').removeAttribute('data-scroll-target');   
    }
}
var x = window.matchMedia('(max-width: 767px)')
isMobile(x) // Call listener function at run time
x.addListener(isMobile) // Attach listener function on state changes

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: { smooth: true },
    smartphone: {
        smooth: true,
        multiplier: 1,
         lerp: 0.1
    },
    multiplier: .5,
    lerp: 0.05
});
