import gsap from 'gsap';

const homeToPage = (container) => {
 const tl = gsap.timeline({})
  tl.to('.skill-block', {
    x: -100,
    autoAlpha: 0,
    ease: 'power1.out',
    stagger: {
      each: 0.15
    }
  })
  return tl
}

export default homeToPage