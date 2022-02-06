import barba from '@barba/core';
import gsap from 'gsap'
import { fadeIn, fadeOut } from "./animations";
import LocomotiveScroll from 'locomotive-scroll'

let scroll

barba.hooks.after(() => {
	scroll.update();
});

barba.init({
  transitions: [
    {
      once ({next}) {
        fadeIn(next.container)
        initLocoScroll()
      },

      leave: ({ current }) => fadeOut(current.container),
      
      enter ({ next }) {
        fadeIn(next.container)
      },

      beforeEnter () {
        scroll.setScroll(0,0);
      }
    }
  ]
});

 function initLocoScroll() {
	scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: {smooth: true},
    multiplier: 0.65,
    lerp: 0.075,
  });
}
