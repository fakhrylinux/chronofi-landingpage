// animate lazy loading image
gsap.defaults({ ease: 'power1' })
gsap.set('.lazy', { y: 50, opacity: 0 })

ScrollTrigger.batch('.lazy', {
  onEnter: batch => gsap.to(batch,
    { opacity: 1, y: 0, stagger: 0.5 }),
  // onLeaveBack: batch => gsap.to(batch,
  //   { opacity: 0, y:100, stagger: 0.5 }),
})