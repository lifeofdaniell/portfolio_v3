import barba from '@barba/core';
// import gsap from 'gsap'
import {
  homeReveal,
  homeToPage,
  skillReveal,
  skillToPage,
  aboutReveal,
  aboutToPage,
  projectReveal,
  projectToPage
} from "./animations";
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
    {
      name: 'Project Reveal',
      to: { namespace: ['btm', 'events', 'portraits', 'stills'] },
      once ({ next }) {
          projectReveal()
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
        scroll.update();
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
        scroll.update();
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
        scroll.update();
         skillReveal()
      }
    },
    {
      name: 'Skill to About',
      from: { namespace: ['web', 'photography', 'mobile']  },
      to: { namespace: 'about' },
      leave: (data) => skillToPage(data.current),
      enter ({ next }) {
        scroll.update();
         aboutReveal()
      }
    },
    {
      name: 'Skill to Skill',
      from: { namespace: ['web', 'photography', 'mobile']  },
      to: { namespace: ['web', 'photography', 'mobile']  },
      leave: (data) => skillToPage(data.current),
      enter ({ next }) {
        scroll.update();
         skillReveal()
      }
    },
    {
      name: 'Skill to Project',
      from: { namespace:  'photography' },
      to: { namespace: ['btm', 'events', 'portraits', 'stills'] },
      leave: (data) => skillToPage(data.current),
      enter ({ next }) {
        scroll.update()
        initLocoScroll()
        projectReveal()
        // initLocoScroll()
      },
      beforeEnter() {
				scroll.setScroll(0,0);
			}
    },
    {
      name: 'Project to Project',
      from: { namespace: ['btm', 'events', 'portraits', 'stills'] },
      to: { namespace: ['btm', 'events', 'portraits', 'stills'] },
      leave: (data) => projectToPage(data.current),
      enter ({ next }) {
        scroll.update();
        initLocoScroll()
        projectReveal()
        // initLocoScroll()
      },
      beforeEnter() {
				scroll.setScroll(0,0);
			}
    },
    {
      name: 'Project to Home',
      from: { namespace: ['btm', 'events', 'portraits', 'stills'] },
      to: { namespace: 'home' },
      leave: (data) => projectToPage(data.current),
      enter ({ next }) {
        homeReveal()
      },
    },
    {
      name: 'Project to About',
      from: { namespace: ['btm', 'events', 'portraits', 'stills'] },
      to: { namespace: 'about' },
      leave: (data) => projectToPage(data.current),
      enter ({ next }) {
        aboutReveal()
        // initLocoScroll()
      },
      beforeEnter() {
				scroll.setScroll(0,0);
			}
    },
    {
      name: 'Project to Skill',
      from: { namespace: ['btm', 'events', 'portraits', 'stills'] },
      to: { namespace:  'photography' },
      leave: (data) => projectToPage(data.current),
      enter ({ next }) {
        skillReveal()
      },
    },
    {
      name: 'Home to Project',
      from: { namespace: 'home' },
      to: { namespace:['btm', 'events', 'portraits', 'stills']  },
      leave: (data) => homeToPage(data.current),
      enter ({ next }) {
        scroll.update();
        initLocoScroll()
        projectReveal()
      }
    },
    {
      name: 'About to Project',
      from: { namespace: 'about' },
      to: { namespace:['btm', 'events', 'portraits', 'stills']  },
      leave: (data) => aboutToPage(data.current),
      enter ({ next }) {
        scroll.update();
        initLocoScroll()
        projectReveal()
      },
       beforeEnter() {
				scroll.setScroll(0,0);
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

   function isMobile(x) {
    if (x.matches) {
    
    } else {
      
    }
  }
  var x = window.matchMedia('(max-width: 767px)')
  isMobile(x) // Call listener function at run time
  x.addListener(isMobile) // Attach listener function on state changes
