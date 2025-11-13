



// gsap.from(".logo",{
//     x:-20,
//     opacity:0,
//     duration:2,
//     delay:1,
// })

var tl = gsap.timeline();

tl.from("h2", {
  y: -25,
  opacity: 0,
  duration: 2,
  delay: 0.1,
});
tl.from("a", {
  y: -25,
  opacity: 0,
  duration: 2,
  stagger: 0.5,
});
tl.from(".image", {
  opacity: 0,
  duration: 2,
  scale: 0.2,
});

tl.from(".name",{
    x:-20,
    opacity:0,
    duration:2,
})
tl.from(".about", {
  x: -20,
  opacity: 0,
  duration: 2,
});

tl.from(".ft", {
  y: 20,
  opacity: 0,
  duration: 2,
});

