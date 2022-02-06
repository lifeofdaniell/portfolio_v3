import gsap from 'gsap';

const aboutToPage = (container) => {
  const tl = gsap.timeline({})
    tl.to('.bio-header-block', {
    y: 100,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 0.75,
    })
    tl.to('.bio-inner.last', {
    x: '50vw',
    rotate: -80,
    autoAlpha: 0,
    duration: 1,
    ease: 'power1.out',
  }, '<')
    tl.to('.bio-text-wrapper', {
    y: 100,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 1,
   /*    stagger: {
      each: 0.2
    } */
    }, '<')
    tl.to('.bio-subtext-wrapper', {
    y: 100,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 0.5,
  }, '<')
    tl.to('.service-header', {
    y: 10,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 0.5,
  }, '<')
    tl.to('.service-item', {
    y: 10,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 0.5,
   /*    stagger: {
      each: 0.1
    } */
    }, '<')
     tl.to('.role-header', {
    y: 10,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 0.5,
  }, '<')
    tl.to('.role-item', {
    y: 10,
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