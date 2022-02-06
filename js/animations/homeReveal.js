import gsap from 'gsap';

const homeReveal = (container) => {
 const tl = gsap.timeline({})
  tl.from('.skill-block', {
    x: -100,
    autoAlpha: 0,
    ease: 'power1.out',
    stagger: {
      each: 0.15
    }
  })
  return tl
}

export default homeReveal