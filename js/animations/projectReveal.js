import gsap from 'gsap'

const projectReveal = (container) => {
  const tl = gsap.timeline({})
  tl.from('.skill-block.title', {
    x: -100,
    autoAlpha: 0,
    duration: 1,
    ease: 'power1.out',
  })
  tl.from(
    '.next-link',
    {
      x: -100,
      autoAlpha: 0,
      duration: 1,
      ease: 'power1.out',
      stagger: {
        each: 0.5,
      },
    },
    '<+0.5'
  )
  tl.from(
    '.project-link.title',
    {
      y: 100,
      autoAlpha: 0,
      ease: 'power1.out',
      duration: 1,
    },
    '<+0.2'
  )
  tl.from(
    '.project-details',
    {
      y: 100,
      autoAlpha: 0,
      ease: 'power1.out',
      duration: 1,
    },
    '<+0.4'
  )

  function isMobile(x) {
    if (!x.matches) {
      tl.from(
        '.photo-inner-block.left',
        {
          y:
            '-' +
            document.querySelector('.photo-inner-block.left').clientHeight,
          ease: 'power1.out',
          duration: 5,
        },
        '<'
      )
      tl.from(
        '.photo-inner-block.left',
        {
          autoAlpha: 0,
          ease: 'power1.out',
          duration: 1,
        },
        '<+0.5'
      )
      tl.from(
        '.photo-inner-block.right',
        {
          y: '100vh',
          ease: 'power1.out',
          duration: 5,
        },
        '<'
      )
      tl.from(
        '.photo-inner-block.right',
        {
          autoAlpha: 0,
          ease: 'power1.out',
          duration: 1,
        },
        '<+0.5'
      )
    } else {
      tl.from(
        '.photo-block',
        {
          y: 150,
          autoAlpha: 0,
          ease: 'power1.out',
          duration: 1,
          stagger: {
            each: 0.3
          }
        },
        '<'
      )
    }
  }
  var x = window.matchMedia('(max-width: 767px)')
  isMobile(x) // Call listener function at run time
  x.addListener(isMobile) // Attach listener function on state changes
  return tl
}

export default projectReveal
