function locomotive(){
  gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();
}
locomotive()



function canvas() {
  const canvas = document.querySelector(".page1>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
  
  ./assets/images/download.png
  ./assets/images/download (1).png
  ./assets/images/download (2).png
  ./assets/images/download (3).png
  ./assets/images/download (4).png
  ./assets/images/download (5).png
  ./assets/images/download (6).png
  ./assets/images/download (7).png
  ./assets/images/download (8).png
  ./assets/images/download (9).png
  ./assets/images/download (10).png
  ./assets/images/download (11).png
  ./assets/images/download (12).png
  ./assets/images/download (13).png
  ./assets/images/download (14).png
  ./assets/images/download (15).png
  ./assets/images/download (16).png
  ./assets/images/download (17).png
  ./assets/images/download (18).png
  ./assets/images/download (19).png
  ./assets/images/download (20).png
  ./assets/images/download (21).png
  ./assets/images/download (22).png
  ./assets/images/download (23).png
  ./assets/images/download (24).png
  ./assets/images/download (25).png
  ./assets/images/download (26).png
  ./assets/images/download (27).png
  ./assets/images/download (28).png
  ./assets/images/download (29).png
  ./assets/images/download (30).png
  ./assets/images/download (31).png
  ./assets/images/download (32).png
  ./assets/images/download (33).png
  ./assets/images/download (34).png
  ./assets/images/download (35).png
  ./assets/images/download (36).png
  ./assets/images/download (37).png
  ./assets/images/download (38).png
  ./assets/images/download (39).png
  ./assets/images/download (40).png
  ./assets/images/download (41).png
  ./assets/images/download (42).png
  ./assets/images/download (43).png
  ./assets/images/download (44).png
  ./assets/images/download (45).png
  ./assets/images/download (46).png
  ./assets/images/download (47).png
  ./assets/images/download (48).png
  ./assets/images/download (50).png
  ./assets/images/download (51).png
  ./assets/images/download (52).png
  ./assets/images/download (53).png
  ./assets/images/download (54).png
  ./assets/images/download (55).png
  ./assets/images/download (56).png
  ./assets/images/download (57).png
  ./assets/images/download (58).png
  ./assets/images/download (59).png
  ./assets/images/download (60).png
  ./assets/images/download (61).png
  ./assets/images/download (62).png
  ./assets/images/download (63).png
  ./assets/images/download (64).png
  ./assets/images/download (65).png
  ./assets/images/download (66).png
  ./assets/images/download (67).png
  ./assets/images/download (68).png
  ./assets/images/download (69).png
  ./assets/images/download (70).png
  ./assets/images/download (71).png
  ./assets/images/download (72).png
  ./assets/images/download (73).png
  ./assets/images/download (74).png
  ./assets/images/download (75).png
  ./assets/images/download (76).png
  ./assets/images/download (77).png
  ./assets/images/download (78).png
  ./assets/images/download (79).png
  ./assets/images/download (80).png
  ./assets/images/download (81).png
  ./assets/images/download (82).png
  ./assets/images/download (83).png
  ./assets/images/download (84).png
  ./assets/images/download (85).png
  ./assets/images/download (86).png
  ./assets/images/download (87).png
  ./assets/images/download (88).png
  ./assets/images/download (89).png
  ./assets/images/download (90).png
  ./assets/images/download (91).png
  ./assets/images/download (92).png
  ./assets/images/download (93).png
  ./assets/images/download (94).png
  ./assets/images/download (95).png
  ./assets/images/download (96).png
  ./assets/images/download (97).png
  ./assets/images/download (98).png
  ./assets/images/download (99).png
  ./assets/images/download (100).png
  ./assets/images/download (100).png
  ./assets/images/downlod(101).png
  ./assets/images/downlod(102).png
  ./assets/images/downlod(103).png
  ./assets/images/downlod(104).png
  ./assets/images/downlod(105).png
  ./assets/images/downlod(106).png
  ./assets/images/downlod(107).png
  ./assets/images/downlod(108).png
  ./assets/images/downlod(109).png
  ./assets/images/downlod(110).png
  ./assets/images/downlod(111).png
  ./assets/images/downlod(112).png
  ./assets/images/downlod(113).png
  ./assets/images/downlod(114).png
  ./assets/images/downlod(115).png
  ./assets/images/downlod(116).png
  ./assets/images/downlod(117).png
  ./assets/images/downlod(118).png
  ./assets/images/downlod(119).png
  ./assets/images/downlod(120).png
  ./assets/images/downlod(121).png
  ./assets/images/downlod(122).png
  ./assets/images/downlod(122).png
  ./assets/images/downlod(123).png
  ./assets/images/downlod(124).png
  ./assets/images/downlod(125).png
  ./assets/images/downlod(126).png
  ./assets/images/downlod(127).png
  ./assets/images/downlod(128).png
  ./assets/images/downlod(129).png
  ./assets/images/downlod(130).png
  ./assets/images/downlod(131).png
  ./assets/images/downlod(132).png
  ./assets/images/downlod(133).png
  ./assets/images/downlod(134).png
  ./assets/images/downlod(135).png
  ./assets/images/downlod(136).png
  ./assets/images/downlod(137).png
  ./assets/images/downlod(138).png
  ./assets/images/downlod(139).png
  ./assets/images/downlod(140).png
  ./assets/images/downlod(141).png
  ./assets/images/downlod(142).png
  ./assets/images/downlod(143).png
  ./assets/images/downlod(143).png
  ./assets/images/downlod(144).png
  ./assets/images/downlod(145).png
  ./assets/images/downlod(146).png
  ./assets/images/downlod(147).png
  ./assets/images/downlod(148).png
  ./assets/images/downlod(149).png
  ./assets/images/downlod(160).png
  ./assets/images/downlod(161).png
  ./assets/images/downlod(162).png
  ./assets/images/downlod(163).png
  ./assets/images/downlod(164).png
  ./assets/images/downlod(165).png
  ./assets/images/downlod(166).png
  ./assets/images/downlod(167).png
  ./assets/images/downlod(168).png
  ./assets/images/downlod(169).png
  ./assets/images/downlod(170).png
  ./assets/images/downlod(171).png
  ./assets/images/downlod(172).png
  ./assets/images/downlod(173).png
  ./assets/images/downlod(174).png
  ./assets/images/downlod(175).png
  ./assets/images/downlod(177).png
  ./assets/images/downlod(178).png
  ./assets/images/downlod(179).png
  ./assets/images/downlod(180).png
  ./assets/images/downlod(181).png
  ./assets/images/downlod(182).png
  ./assets/images/downlod(183).png
  ./assets/images/downlod(184).png
  ./assets/images/downlod(185).png
  ./assets/images/downlod(186).png
  ./assets/images/downlod(187).png
  ./assets/images/downlod(188).png
  ./assets/images/downlod(189).png
  ./assets/images/downlod(190).png
  ./assets/images/downlod(191).png
  ./assets/images/downlod(192).png
  ./assets/images/downlod(193).png
  ./assets/images/downlod(194).png
  ./assets/images/downlod(195).png
  ./assets/images/downlod(196).png
  ./assets/images/downlod(197).png

  
  

 
 `;
    return data.split("\n")[index];
  }

  const frameCount = 196;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `.page1`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `body`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: ".page1>canvas",
    pin: true,
    // markers:true,
    scroller: `body`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });

  gsap.to(".page1 canvas", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".page4",
      scroller: "body",
      markers: false,
      start: "60%",
      end: "100%",
      scrub: true,
    }
  })

}
canvas();


function textAnam() {
  gsap.to(".textanam span", {
    color: "black",

    scrollTrigger: {
      trigger: ".page-anam-text",
      scroller: "body",
      markers: false,
      start: "-50%",
      end: "40%",
      scrub: true,
      stagger: 0.4,

    }

  })
}

textAnam()

function videoAnam() {


  var videos = document.querySelectorAll(".video")


  for (let index = 0; index < videos.length; index++) {

    const video = videos[index];
    // console.log(video)

    video.addEventListener("mouseenter", function (e) {

      var enterVideo = document.querySelectorAll(".inner-video")

      for (let index = 0; index < enterVideo.length; index++) {

        const element = enterVideo[index];

        element.play()

      }



    });



    video.addEventListener("mouseleave", function (e) {

      var enterVideo = document.querySelectorAll(".inner-video")

      for (let index = 0; index < enterVideo.length; index++) {

        const element = enterVideo[index];

        element.pause()

      }


    });

  }

}

videoAnam()

function backgroundAnam() {
var tl = gsap.timeline({
  repeat:-1
})

tl.to(".non-animated",{
  backgroundImage:" linear-gradient(180deg,#BF0D27,black)",
  ease: "slow(0.7,0.7,false)",
  duration:1.5,
})
}

backgroundAnam()