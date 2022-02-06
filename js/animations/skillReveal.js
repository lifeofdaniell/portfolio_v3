import gsap from 'gsap';

const skillReveal = (container) => {
 const tl = gsap.timeline({})
  tl.from('.skill-block.title', {
    x: 100,
    autoAlpha: 0,
    ease: 'power1.out',
  })
  tl.from('.stack-header', {
    y: 100,
    autoAlpha: 0,
    ease: 'power1.out',
  }, '<')
  tl.from('.stack-item', {
    y: 100,
    autoAlpha: 0,
    ease: 'power1.out',
    stagger: {
      each: 0.15
    },
  }, '<')
  tl.from('.project-link', {
    x: -100,
    autoAlpha: 0,
    ease: 'power1.out',
    stagger: {
      each: 0.15
    },
  }, '<+0.3')
  tl.from('.skill-block.small', {
    x: -100,
    autoAlpha: 0,
    ease: 'power1.out',
    stagger: {
      each: 0.2
    },
  }, '>')
  tl.from('.note', {
    autoAlpha: 0,
    ease: 'power1.out',
  }, '<')
  return tl
}

export default skillReveal