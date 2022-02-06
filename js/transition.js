import barba from '@barba/core';
// import gsap from 'gsap'
import { homeReveal, homeToPage, skillReveal, skillToPage, aboutReveal, aboutToPage } from "./animations";
import LocomotiveScroll from 'locomotive-scroll'

let scroll

barba.hooks.after(() => {
	scroll.update();
});

barba.init({
  transitions: [
    //Page Loaded Animations
    {
      name: 'Home Reveal',
      to: { namespace: 'home' },
      once ({ next }) {
        homeReveal()
        initLocoScroll()
      },
      enter ({ next }) {
        homeReveal()
      },
    },
    {
      name: 'Skill Reveal',
      to: { namespace: ['web', 'photography', 'mobile'] },
      once ({ next }) {
        skillReveal()
        initLocoScroll()
      },
    },
    {
      name: 'About Reveal',
      to: { namespace: ['about'] },
      once ({ next }) {
          aboutReveal()
          initLocoScroll()
      },
    },
    //Page Transition Animations
    {
      name: 'Home to Skill',
      from: { namespace: 'home' },
      to: { namespace: ['web', 'photography', 'mobile'] },
      leave: (data) => homeToPage(data.current),
      enter ({ next }) {
        skillReveal()
      }
    },
    {
      name: 'Skill to Home',
      from: { namespace: ['web', 'photography', 'mobile'] },
      to: { namespace: 'home' },
      leave: (data) => skillToPage(data.current),
      enter ({ next }) {
        homeReveal()
      }
    },
    {
      name: 'Home to About',
      from: { namespace: 'home' },
      to: { namespace: 'about' },
      leave: (data) => homeToPage(data.current),
      enter ({ next }) {
        aboutReveal()
      }
    },
    {
      name: 'About to Home',
      from: { namespace: 'about' },
      to: { namespace: 'home' },
      leave: (data) => aboutToPage(data.current),
      enter ({ next }) {
        homeReveal()
      }
    },
    {
      name: 'About to Skill',
      from: { namespace: 'about' },
      to: { namespace: ['web', 'photography', 'mobile']  },
      leave: (data) => aboutToPage(data.current),
      enter ({ next }) {
         skillReveal()
      }
    },
    {
      name: 'Skill to About',
      from: { namespace: ['web', 'photography', 'mobile']  },
      to: { namespace: 'about' },
      leave: (data) => skillToPage(data.current),
      enter ({ next }) {
         aboutReveal()
      }
    },
    {
      name: 'Skill to Skill',
      from: { namespace: ['web', 'photography', 'mobile']  },
      to: { namespace: ['web', 'photography', 'mobile'] },
      leave: (data) => skillToPage(data.current),
      enter ({ next }) {
         skillReveal()
      }
    },
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
