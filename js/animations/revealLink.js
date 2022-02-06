import gsap from 'gsap';

const revealLink = () => {
    gsap.from('.sub-nav-link', {
      y: 15,
      autoAlpha: 0,
      ease: 'power1.out',
      stagger: {
        each: 0.15,
      }
    }) 
}

export default revealLink