import gsap from 'gsap';

const aboutReveal = (container) => {
  const tl = gsap.timeline({})
    tl.from('.bio-header-block', {
    y: 100,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 2,
    clearProps: 'all',
    })
    tl.from('.bio-inner.last', {
    // x: '50vw',
    // rotate: -80,
    autoAlpha: 0,
    duration: 1,
    ease: 'power1.out',
    clearProps: 'all',
  }, '<')
    tl.from('.bio-text-wrapper', {
    y: 100,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 1.5,
      clearProps: 'all',
      stagger: {
      each: 0.2
    }
    }, '<+0.5')
  tl.from('.bio-subtext-wrapper', {
    y: 100,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 1.5,
    clearProps: 'all',
  }, '<+0.35')
    tl.from('.service-header', {
    y: 10,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 0.5,
    clearProps: 'all',
  }, '<')
    tl.from('.service-item', {
    y: 10,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 0.5,
      clearProps: 'all',
      stagger: {
      each: 0.1
    }
    }, '<')
     tl.from('.role-header', {
    y: 10,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 0.5,
    clearProps: 'all',
  }, '<+1')
    tl.from('.role-item', {
    y: 10,
    autoAlpha: 0,
    ease: 'power1.out',
    duration: 0.5,
      clearProps: 'all',
      stagger: {
      each: 0.1
    }
  }, '<')

  return tl
}

export default aboutReveal