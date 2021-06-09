//IMPORTS
import { gsap } from "gsap";
// import { MorphSVGPlugin} from "gsap/MorphSVGPlugin";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import {CustomWiggle} from "gsap/CustomWiggle";
// import { GSDevTools } from "gsap/GSDevTools";
// import {MotionPathPlugin} from "gsap/MotionPathPlugin";
// import {CustomEase} from "gsap/CustomEase";


//register Plugins
// gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin,);

//**** SELECT ELEMENTS without jQuery ****\\

// jQuery, all instances of .box
//$(".box");

// first instance of .box
//document.querySelector(".box");

// all instances of .box
//document.querySelectorAll(".box");
//example:
//let someBox = document.querySelector("#box");


//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
  //Variables
  let mainTL = gsap.timeline({id:"main"});



  function init(){

  // gsap.set(["#speed", "#gas", "#gear"],{alpha:0});
   gsap.set(["#logo2", "#logowing"],{alpha:0});

  // INTRO BASE
    gsap.set("#logo", {transformOrigin: "50% 50%"});
    gsap.set("#logowing", {transformOrigin: "50% 50%"});
    gsap.set("#minitype", {scale:0.9, transformOrigin: "50% 50%"});
    gsap.set("#mywheel1", {transformOrigin: "50% 50%", alpha:0});
    gsap.set("#mywheel2", {transformOrigin: "50% 50%", alpha:0});
    gsap.set("#backgroundb1", {transformOrigin: "50% 50%"});
    // gsap.set("#logowing1", {transformOrigin: "50% 50%"});
    // gsap.set("#logowing2", {transformOrigin: "50% 50%"});
    // gsap.set("#backgroundw1", {transformOrigin: "50% 50%"});
    gsap.set("#logo2", {transformOrigin: "50% 50%"});
    // gsap.set("#speed", {transformOrigin: "center top", alpha:0});
    // gsap.set("#gas", {transformOrigin: "center top", alpha:0});
    // gsap.set("#gear", {transformOrigin: "center top", alpha:0});
    // gsap.set("#mydials", {transformOrigin: "50% 50%", alpha:0});
    // gsap.set("#backgroundb1", {alpha:0});


    //   //****** transformOrigin VS. svgOrigin  *****\\

    // WHEEL 2 ROTATE/ SHRINK DOWN
    // gsap.set("#mywheel2", {transformOrigin: "50% 50%"});
    // gsap.to("#mywheel2", {duration:3.5, rotation:360, ease:"bounce"},"mywheel2");
    // gsap.to("#mywheel2", {scale: 0.5, transformOrigin:"center bottom"});
  // $('#mywheel2').attr("transform", "scale(0.5,1)");


  // DIAL CIRCLES/ GROW UP
  // $('#mydials').attr("transform", "scale(1,0.5)");
  // gsap.set("#mydials", {transformOrigin:"center top"});


  }




  //Nested Timelines
  //***********  fadeInTL  ****************
  function fadeInTL(){
    let tl = gsap.timeline();

// INTRO FADE IN


// WHEEL1 FADE IN
    tl.from("#logo", {alpha:0, duration:1.5, scale:0.9})
    // .from("#minitype", {alpha:0, duration:1.5}, "minitype")
    .to("#minitype", {alpha:0, duration:.5, scale:0.7, ease:"expo"}, "minitype")
    .to("#logo", {alpha:0, duration:2, scale:1, ease:"back"})
    // .to("#logo", {transformOrigin:"50% 50%", duration:1.5})
    // .to("#minitype", {alpha:0, duration:.2, scale:0.9})
    // .to("#minitype", {alpha:0, duration:.5, scale:1, ease:"back"})

// //  .add("logowing1", "-=0.2")
//     .from("#logowing1", { alpha:0, duration:.2, ease:"back"})
//     .to ("#logowing1", {alpha:0, duration:.2, ease:"back"})
//     // .to("#logo", {alpha:0, duration:1})

// // .add("logowing2", "-=0.2")
//     .from ("#logowing2", {alpha:0, duration:.2 , ease:"back"})
//     .to("#logowing2", {alpha:0, duration:.2, ease:"back"})

// .from("#logowing", {alpha:0, duration:0.2, scale:0.9})
// .to("#logowing", {alpha:0, duration:0.2,fill:"#000",scale:1, ease:"back"})

    // .add("logowing", "-=0.6")
    // .to ("#logowing", {alpha:1, duration:1, fill:"#000", ease:"back", transformOrigin:"50% 50%"},"logowing")
    // .to("#logowing", {x:"+=1000"})
    // .to("#logo", {alpha:0, duration:1})
    
    
    .from("#backgroundb1", {alpha:0, duration:1.5, ease:"expo"}, "backgroundb1")
    .from("#mywheel1", { duration:1, scale:3, ease:"expo"}, "mywheel1")
    .to("#mywheel1", {alpha:1, duration:0.4, ease:"expo"}, "mywheel1")

    .add("mywheel2", "-=0.5")
    .to ("#mywheel2", {alpha:1, duration:2, rotation:360, ease:"bounce+=0.5", transformOrigin:"50% 50%"},"mywheel2")
    .to("#mywheel2", {scale: 0.5, transformOrigin:"center bottom"})
    .to("#mywheel1", {alpha:0, duration:0.2}, "mywheel2+=2")

// seat belt


    .from("#seatbelt", {alpha:0, duration:1, y:"+=150"})
    .to ("#seatbelt", {y:"-=30", duration:.5})

    // .from ("#arrow", { duration:.1, transformOrigin:"50% 50%"})
    // .to ("#arrow", {alpha:1, duration:.1, fill: "#FF5200", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})


.to ("#arrow", {duration:.3, fill: "#DD575E",transformOrigin:"50% 50%"})

    
// degree

.from("#degree", {alpha:0, scale:0.5, duration:.5})
.to("#degree", { duration:.5, scale:1, ease:"bounce", transformOrigin:"50% 50%"})

// Dial circles Fade UP
    .from("#circle1", {alpha:0, duration:0.5, scale:0.25, ease:"expo"})
    .from("#circle2", {alpha:0, duration:0.6, scale:0.25, ease:"expo"})
    .from("#circle3", {alpha:0, duration:0.7, scale:0.25, ease:"expo"})


// SECOND circles Fade UP
    // .to("#circle1", {alpha:0, y:"-=225", x:"-=150", duration:0.5, ease:"back"})
    // .to("#circle2", {alpha:0, y:"-=225", duration:0.5, ease:"back"})
    .to("#circle1", {scale:3, x:"-=100", y:"+=100",  duration:0.5, ease:"back", transformOrigin:"100% 50%"}, "circles")
    .to("#circle2", {scale:3, duration:0.5, ease:"back", transformOrigin:"50% 100%"}, "circles")
    //fix
    .to("#circle3", {scale:3, x:"+=100", y:"-=20",  duration:0.5, ease:"back"}, "circles")
   

  // gears enter
    .from ("#speed", {alpha:0, duration:0.15, scale:1, transformOrigin:"50% 50%"}, "circles+=0.30")
    .from("#gas", {alpha:0, duration:0.15, scale:0.5, transformOrigin:"50% 50%"}, "circles+=0.10" )
    //fix
    .from("#gear", {alpha:0, duration:0.15, scale:1, transformOrigin:"50% 50%"}, "circles+=0.50")


  .from ("#gearsquare", {scale:2, duration:1.5, transformOrigin:"center bottom"})
  .to ("#gearsquare", {y:"+=100",duration:.7, fill: "#DD575E", transformOrigin:"center bottom"})
  // fill:#FF5200,


// gearsquare and D turn orange
.from ("#D", {alpha:0, fill: "#FFF"})
.to ("#D", {fill: "#D3A1A3"})
// FFA500



// gas icon flickers and goes yellow
.from ("#gas-symbol", { duration:.2, transformOrigin:"50% 50%"})
.to ("#gas-symbol", {alpha:1, duration:.3, fill: "#DD575E", scale:0.8, ease:"expo", transformOrigin:"50% 50%"})
.to ("#gas-symbol", {alpha:1, duration:.3, scale:1.2, ease:"bounce", transformOrigin:"50% 50%"})
.to ("#gas-symbol", {alpha:1, duration:.3, fill: "#000", scale:1, ease:"bounce", transformOrigin:"50% 50%"})

// gas bubbles turn color staggered 1 at a time 
.from ("#gas-color1", { duration:.1, transformOrigin:"50% 50%"})
.to ("#gas-color1", {alpha:1, duration:.1, fill: "#FF0000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#gas-color2", { duration:.1, transformOrigin:"50% 50%"})
.to ("#gas-color2", {alpha:1, duration:.1, fill: "#FF0000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#gas-color3", { duration:.1, transformOrigin:"50% 50%"})
.to ("#gas-color3", {alpha:1, duration:.1, fill: "#FF0000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#gas-color4", { duration:.1, transformOrigin:"50% 50%"})
.to ("#gas-color4", {alpha:1, duration:.1, fill: "#FF0000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#gas-color5", { duration:.1, transformOrigin:"50% 50%"})
.to ("#gas-color5", {alpha:1, duration:.1, fill: "#FF0000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#gas-color6", { duration:.1, transformOrigin:"50% 50%"})
.to ("#gas-color6", {alpha:1, duration:.1, fill: "#FF0000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#gas-color7", { duration:.1, transformOrigin:"50% 50%"})
.to ("#gas-color7", {alpha:1, duration:.1, fill: "#FF0000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#gas-color8", { duration:.1, transformOrigin:"50% 50%"})
.to ("#gas-color8", {alpha:1, duration:.1, fill: "#FF0000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})


// speed dial rotates slowly

.from ("#spinner", { duration:1.3, transformOrigin:"50% 50%"})
.to ("#spinner", {alpha:1, duration:4, rotation:90, ease:"expo", transformOrigin:"50% 50%"})

// .from ("#mywheel2", {transformOrigin:"50% 50%"},"mywheel2")
// .to ("#mywheel2", {alpha:1, duration:2, rotation:360, ease:"bounce+=0.5", transformOrigin:"50% 50%"},"mywheel2")




// speed bubbles turn color staggered 1 at a time 
.from ("#scolor-1", { duration:.1, transformOrigin:"50% 50%"})
.to ("#scolor-1", {alpha:1, duration:.1, fill: "#FF0000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#scolor-2", { duration:.1, transformOrigin:"50% 50%"})
.to ("#scolor-2", {alpha:1, duration:.1, fill: "#FF0000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#scolor-3", { duration:.1, transformOrigin:"50% 50%"})
.to ("#scolor-3", {alpha:1, duration:.1, fill: "#FF0000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#scolor-4", { duration:.1, transformOrigin:"50% 50%"})
.to ("#scolor-4", {alpha:1, duration:.1, fill: "#FF0000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#scolor-5", { duration:.1, transformOrigin:"50% 50%"})
.to ("#scolor-5", {alpha:1, duration:.1, fill: "#FF0000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#scolor-6", { duration:.1, transformOrigin:"50% 50%"})
.to ("#scolor-6", {alpha:1, duration:.1, fill: "#FF0000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#scolor-7", { duration:1, transformOrigin:"50% 50%"})
.to ("#scolor-7", {alpha:1, duration:1, fill: "#FF0000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

// speed wiggles and goes to base (spin and bubbles)
.from ("#scolor-7", { duration:.1, transformOrigin:"50% 50%"})
.to ("#scolor-7", {alpha:1, duration:.3, fill: "	#000000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#scolor-6", { duration:.2, transformOrigin:"50% 50%"})
.to ("#scolor-6", {alpha:1, duration:.3, fill: "	#000000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#scolor-5", { duration:.2, transformOrigin:"50% 50%"})
.to ("#scolor-5", {alpha:1, duration:.3, fill: "#000000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#scolor-4", { duration:.2, transformOrigin:"50% 50%"})
.to ("#scolor-4", {alpha:1, duration:.3, fill: "	#000000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#scolor-3", { duration:.2, transformOrigin:"50% 50%"})
.to ("#scolor-3", {alpha:1, duration:.3, fill: "	#000000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#scolor-2", { duration:.2, transformOrigin:"50% 50%"})
.to ("#scolor-2", {alpha:1, duration:.3, fill: "	#000000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#scolor-1", { duration:.2, transformOrigin:"50% 50%"})
.to ("#scolor-1", {alpha:1, duration:.3, fill: "	#000000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})


// speed wiggles and goes to base (spin and bubbles)
.to ("#spinner", { duration:1, transformOrigin:"50% 50%"})
// .to ("#spinner", {scale:1, duration:0.5, ease:"expo")
.to ("#spinner", { duration:4, rotation:-2, ease:"expo", transformOrigin:"50% 50%"})

// gas goes to base (bubbles)


.from ("#gas-color8", { duration:.2, transformOrigin:"50% 50%"})
.to ("#gas-color8", {alpha:1, duration:.3, fill: "#000000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#gas-color7", { duration:.2, transformOrigin:"50% 50%"})
.to ("#gas-color7", {alpha:1, duration:.3, fill: "#000000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#gas-color6", { duration:.2, transformOrigin:"50% 50%"})
.to ("#gas-color6", {alpha:1, duration:.3, fill: "#000000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#gas-color5", { duration:.2, transformOrigin:"50% 50%"})
.to ("#gas-color5", {alpha:1, duration:.3, fill: "#000000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#gas-color4", { duration:.2, transformOrigin:"50% 50%"})
.to ("#gas-color4", {alpha:1, duration:.3, fill: "#000000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#gas-color3", { duration:.2, transformOrigin:"50% 50%"})
.to ("#gas-color3", {alpha:1, duration:.3, fill: "#000000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#gas-color2", { duration:.2, transformOrigin:"50% 50%"})
.to ("#gas-color2", {alpha:1, duration:.3, fill: "#000000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

.from ("#gas-color1", { duration:.2, transformOrigin:"50% 50%"})
.to ("#gas-color1", {alpha:1, duration:.3, fill: "#000000", scale:1.2, ease:"expo", transformOrigin:"50% 50%"})

// drive goes to base and goes back to white
// .add("gearsquare", "-=0.5")
.from ("#gearsquare", { duration:1})
.to ("#gearsquare", {y:"-=100",fill: "#ffffff", ease:"bounce", duration: 1})


// .from ("#D", {alpha:0 })
.to ("#D", {fill: "#fff"})

// white background comes in

// .from("#backgroundw1", {alpha:0, scale:3, duration:1.5, ease:"expo"}, "backgroundw1")

// // black mini comes in from scale:0.5

// .from ("#logo2", {alpha:0, duration:0.8, scale:1}, "logo2")
// .to ("#logo2", {scale:3, alpha:0, duration:1, ease:"power4.out"}, "logo2")





  // gears up
  // .to("#speed", {alpha:0, y:"-=50", duration:0.5})
  // .to("#gas", {alpha:0, y:"-=50", duration:0.5})
  // .to("#gear", {alpha:0, y:"-=50", duration:0.5})

    // .to("#circle1","#circle2","#circle3", {repeat:-1, alpha:0, stagger:0.6, y:"-=225", duration:3, ease:"back"})
    // .to("#mydials", {scale: 0.5, transformOrigin:"center top"})
    // to("#mydials", {alpha:0, duration:0.4}, "mydials+=2")


    ;//tl END
    return tl;

  }

// function wigTL(){
// let tl = gsap.timeline();
//     CustomWiggle.create("myWiggle", {wiggles: 10, type:"uniform"});
//   // ***********  fadeInTL init ****************
//     gsap.set("#speed", { y:"+=200", delay:2});

//     gsap.to("#speed", {duration:1, y:"1400", ease:"myWiggle"});

//   }
  // function logomorphTL(){

  //   let tl = gsap.timeline();
  //   // MORPH LOGO
  //     tl.from("#logo", { duration:1, scale:3, ease:"expo"}, "logo")
  //     .from ("#minitype", {alpha:0, duration:0.8, scale:3}, "minitype")
  //     .from("#logo", {alpha:0, duration:1, ease:"expo"}, "logo")
  //     //.from ("#logo", {alpha:0})
  //         .to ("#logo", {duration:2, morphSVG: "#logowing"}, "+=1")
  //     .to ("#logo", {duration:2, morphSVG: "#logo2"}, "+=1")

  //   // //background/ wheel 1 to 2 MORPH
  //   //     .from ("#mywheel1", {alpha:0})
  //   //     .to ("#mywheel1", {duration:2, morphSVG: "#mywheel2"}, "+=1")



  //   ;//tl END
  //   return tl;

  // }






// QUESTIONS--
// where in JS do I put the draw svg tool?
// how do I order the elements so they are working individually// how do I hide old elements that have served their purpose
// Gsap.set and timeline
// do I need to keep putting tl if im starting on a new part or can i continue to add .from
// if I want the details of my dial boxes to come in at staggered times (ex the speeds come in one number at a time) how / where do i do that
// ^ same question but for circle color fills, I want them to turn colors 1 by 1


    //   //gsap.to("#moon", {duration:5, rotation:360, svgOrigin:"512 512"});
    // //*********** zoomTL init ****************
    // gsap.set(["#orange-mtn","#red-mtn","#front-mtns",".trees"], {transformOrigin:"center center"});
    // //*********** spaceshipTL init ****************
    // gsap.set(["#window",".engines"], {transformOrigin:"center center"});
    // gsap.set(".flames", {display:"none"});
    // gsap.set(".left-engines", {rotation:90});
    // gsap.set(".right-engines", {rotation:-90});
    // //*********** liftOffTL init ****************
    // gsap.set("#space-ship",{transformOrigin:"center"});
    // gsap.set(["#smoke-1","#smoke-2"],{transformOrigin:"center bottom"});
    // gsap.set(".smoke",{display:"none"});

    // //*********** flightTL init ****************
    // // gsap.set("#space-ship", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%"});
    // //*********** moonLandingTL init ****************



  //*********** zoomTL ****************
  // function zoomTL(){
  //   let tl = gsap.timeline();

  // tl.from("#mywheel1", {duration:2, scale:10, y:"+=1500", ease:"bounce"}, "mywheel1")
  //   .from("#red-mtn", {duration:5.75, scale:10, y:"+=800", ease:"power4.out", tranformOrigin:"50% 50%"}, "zoom")
  //   .from("#front-mtns", {duration:5.5, scale:10, y:"+=600", ease:"power4.out"}, "zoom")
  //   .from("#trees-5", {duration:5.5, scale:10, y:"+=420", ease:"power4.out"}, "zoom")
  //   .from("#trees-4", {duration:5.5, scale:10, y:"+=420", ease:"power4.out"}, "zoom")
  //   .from("#trees-3", {duration:5.25, scale:10, y:"+=420", ease:"power4.out", onStart:callBackTest}, "zoom")
  //   .from("#trees-2", {duration:5, scale:10, y:"+=420", ease:"power4.out"}, "zoom")
  //   .from("#trees-1", {duration:4.75, scale:10, y:"+=400", ease:"power4.out"}, "zoom")

  //   ;//tl END

  //   return tl;

  // }

  //*********** spaceshipTL ****************
  // function spaceshipTL(){
  //   let tl = gsap.timeline();

  //   tl.from("#space-ship",{y:"+=500", duration:0.5})
  //   .from("#shadow",{alpha:0, duration:0.5})
  //   .from("#cone",{alpha:0, duration:0.5})
  //   .from("#window",{scale:0, duration:0.5})
  //   .from("#window-bg",{alpha:0, duration:0.5})
  //   .from("#window-glass",{alpha:0, duration:0.5})
  //   .from("#window-bars",{alpha:0, duration:0.5})

  //   .from("#eng-middle-left",{alpha:0, duration:0.25},"mid-eng-1")
  //   //.from("#left-mid-bone",{scale:0, duration:0.25},"mid-eng-2")
  //   .to("#eng-middle-left",{rotation:0, duration:0.25},"mid-eng-3")
  //   .from("#eng-middle-right",{alpha:0, duration:0.25},"mid-eng-1")
  //   //.from("#right-mid-bone",{scale:0, duration:0.25},"mid-eng-2")
  //   .to("#eng-middle-right",{rotation:0, duration:0.25},"mid-eng-3")

  //   .from("#eng-left",{alpha:0, duration:0.25},"eng-1")
  //   //.from("#left-bone",{scale:0, duration:0.25},"eng-2")
  //   .to("#eng-left",{rotation:0, duration:0.25},"eng-3")
  //   .from("#eng-right",{alpha:0, duration:0.25},"eng-1")
  //   //.from("#right-bone",{scale:0, duration:0.25},"eng-2")
  //   .to("#eng-right",{rotation:0, duration:0.25},"eng-3")
  //   .from("#eng-left-bottom",{y:"-=20", duration:0.5})
  //   .from("#eng-right-bottom",{y:"-=20", duration:0.5},"-=0.25")
  //   .to("#space-ship",{y:"+=320", duration:2, ease: "bounce.out"},"shipBounce")
  //   .set("#moon",{x:200},"shipBounce+=1")

  //   ;//tl END

  //   return tl;

  // }

  //*********** liftOffTL ****************

  // function liftOffTL(){
  //   let tl = gsap.timeline();

  //   tl.to("#space-ship",{duration:0.15, rotation:-10,ease:"none"})
  //   .to("#space-ship",{duration:0.15, rotation:10, yoyo:true, repeat:10,ease:"none"})
  //   .to("#space-ship",{duration:0.15, rotation:0,ease:"none", onComplete:controlFlames})
  //   .from("#smoke-1",{duration:3.5, y:"+=150", scale:.75, alpha:0.5, ease: "power3.in"},'upAndAway')
  //   .from("#smoke-2",{duration:4, y:"+=150", scale:.75, alpha:0.5, ease: "power3.in"},'upAndAway')
  //   .to("#space-ship",{duration:5, y:"-=700", scale:0.5, ease: "power3.in"},"upAndAway")
  //   .to("#clouds",{duration:5, y:"+=700", ease: "power3.in"},'upAndAway')
  //   .to("#front",{duration:5, y:"+=600", ease: "power3.in"},'upAndAway')
  //   .to("#middle",{duration:5, y:"+=500", ease: "power3.in"},'upAndAway')
  //   .from("#space",{duration:5,alpha:0, ease: "power3.in"},'upAndAway')

  //   ;//tl END

  //   return tl;

  // }

  //*********** flightTL ****************
  // function flightTL(){
  //   let tl = gsap.timeline();

  //   tl.to("#space-ship", {
  //     duration:15,
  //     motionPath:{
  //       path:"#flightPath",
  //       align:"#flightPath",
  //       alignOrigin:[0.5, 0.5],
  //       autoRotate:90
  //       // start: 0.1,
  //       // end: 0.5,
  //     },
  //     ease:"power4.out"


  //   })
  //   //.to("#moon", {alpha:1});

  //   ;//tl END

  //   return tl;

  // }


//*********** moonLandingTL ****************


//*********** flame functions DO NOT INCLUDE IN MAIN TL ****************

// function callBackTest(){

//   console.log("hello");

// }

// function controlFlames(){

//   showSmoke();

//   console.log('SHOW TIME');
//   gsap.set(".flames",{display:"block"});

//   flamesTL.to("#left-blue",{duration:0.25, scaleY:.25,yoyo:true, repeat:-1},"flames")
//   .to("#left-dark-blue",{duration:0.15, scaleY:.15,yoyo:true, repeat:-1},"flames")
//   .to("#right-blue",{duration:0.25, scaleY:.25,yoyo:true, repeat:-1},"flames")
//   .to("#right-dark-blue",{duration:0.15, scaleY:.15,yoyo:true, repeat:-1},"flames")

//   flamesTL.play()
// }

// function showSmoke(){
//   gsap.set(".smoke",{display:"block"});
// }


//1. set initial properties
init();

//2. show content - prevents FOUC
gsap.set('#svg-container',{visibility:"visible"});

//3. BUILD Main timeline
mainTL
// .add(logomorphTL())
.add(fadeInTL())
// .add(wigTL())
// .add(liftOffTL())
// .add(flightTL(),"target")

;//tl END

//mainTL.play("target");



});//ready END
