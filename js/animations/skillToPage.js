import gsap from 'gsap';

const skillToPage = (container) => {
 const tl = gsap.timeline({})
  tl.to('.skill-block.title', {
    x: 100,
    autoAlpha: 0,
    ease: 'power1.out',
  })
  tl.to('.stack-header', {
    //  y: 10,
    autoAlpha: 0,
    ease: 'power1.out',
  }, '<')
  tl.to('.stack-item', {
    // y: 10,
    autoAlpha: 0,
    ease: 'power1.out',
    stagger: {
      each: 0.1
    }
  }, '<')
  tl.to('.skill-block.small', {
    x: -100,
    autoAlpha: 0,
    ease: 'power1.out',
    stagger: {
      each: 0.1
    }
  }, '<')
  tl.to('.project-link', {
    x: -100,
    autoAlpha: 0,
    ease: 'power1.out',
    stagger: {
      each: 0.1
    }
  }, '<')
  tl.to('.note', {
    autoAlpha: 0,
    ease: 'power1.out',
  }, '<')
  return tl
}

export default skillToPage