// window.addEventListener('DOMContentLoaded', event => {
//
// // Activate Bootstrap scrollspy on the main nav element
//   const mainNav = document.body.querySelector('#navbar')
//   if (mainNav) {
//     new bootstrap.ScrollSpy(document.body, {
//       target: '#navbar',
//       offset: 74,
//     })
//   }


// animate lazy loading image
  gsap.defaults({ ease: 'power1' })
  gsap.set('.lazy', { y: 50, opacity: 0 })

  ScrollTrigger.batch('.lazy', {
    onEnter: batch => gsap.to(batch,
      { opacity: 1, y: 0, stagger: 0.5 }),
    // onLeaveBack: batch => gsap.to(batch,
    //   { opacity: 0, y:100, stagger: 0.5 }),
  })

// })
