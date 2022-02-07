import gsap from 'gsap';

const aboutToPage = (container) => {
  const tl = gsap.timeline({})
   tl.to('.bio-subtext-wrapper', {
    y: 50,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 0.5,
   }, )
  
    tl.to('.bio-text-wrapper', {
    y: 50,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 1,
    }, '<')
  
    tl.to('.bio-header-block', {
    y: 50,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 0.75,
    }, '<+0.15')
  
    tl.to('.bio-inner.last', {
    x: '50vw',
    rotate: -80,
    autoAlpha: 0,
    duration: 1,
    ease: 'power1.out',
  }, '<')
  
   
    tl.to('.service-header', {
    y: 50,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 0.5,
  }, '<')
    tl.to('.service-item', {
    y: 50,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 0.5,
   /*    stagger: {
      each: 0.1
    } */
    }, '<')
     tl.to('.role-header', {
    y: 50,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 0.5,
  }, '<')
    tl.to('.role-item', {
    y: 50,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 0.5,
   /*    stagger: {
      each: 0.1
    } */
  }, '<')
  return tl
}

export default aboutToPage