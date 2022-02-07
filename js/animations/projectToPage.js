import gsap from 'gsap'

const projectToPage = (container) => {
  const tl = gsap.timeline({})
   function isMobile(x) {
    if (!x.matches) {
      tl.to(
        '.photo-inner-block.left',
        {
          y:
            '-' +
            document.querySelector('.photo-inner-block.left').clientHeight,
          ease: 'power1.out',
          duration: 2,
        },
        '<'
      )
       tl.to(
        '.photo-inner-block.left',
        {
          autoAlpha: 0,
          ease: 'power1.out',
          duration: 1,
        },
        '<+0.25'
      )
      tl.to(
        '.photo-inner-block.right',
        {
          y: '100vh',
          ease: 'power1.out',
          duration: 2,
        },
        '<'
      )
       tl.to(
        '.photo-inner-block.right',
        {
          autoAlpha: 0,
          ease: 'power1.out',
          duration: 1,
        },
        '<+0.25'
      )
    } else {
        tl.to(
        '.photo-block',
        {
          y: 150,
          autoAlpha: 0,
          ease: 'power1.out',
          duration: 0.5,
          stagger: {
            each: 0.2
          }
        },
        '<'
      )
    }
  }
  var x = window.matchMedia('(max-width: 767px)')
  isMobile(x) // Call listener function at run time
  x.addListener(isMobile) // Attach listener function on state changes

  tl.to('.skill-block.title', {
    x: -100,
    autoAlpha: 0,
    duration: 0.5,
    ease: 'power1.out',
  }, '<')

  tl.to(
    '.next-link',
    {
      // x: -100,
      autoAlpha: 0,
      duration: 0.5,
      ease: 'power1.out',
      stagger: {
        each: 0.2,
      },
    },
    '<'
  )

  tl.to(
    '.project-details',
    {
      y: 50,
      autoAlpha: 0,
      ease: 'power1.out',
      duration: 0.5,
    },
    '<'
  )

  tl.to(
    '.project-link.title',
    {
      y: 50,
      autoAlpha: 0,
      ease: 'power1.out',
      duration: 0.5,
    },
    '<+0.2'
  )

 
  return tl
}

export default projectToPage
