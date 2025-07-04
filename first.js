function locomotiveanimation(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
 
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    

}
function loadinganime(){
    var tl = gsap.timeline()
tl.from(".line h1",{
  
        y:150,
        stagger:0.2,
        duration:0.3,
        delay:0.2,
   
});
tl.from("#line1part1",{
    opacity:0,
    onstart: function(){
        var h5timer  = document.querySelector("#line1part1 h5")
var grow = 0
setInterval(function(){
    if(grow<100){
        grow++
        h5timer.innerHTML = grow++
    }
    else{
        h5timer.innerHTML = grow
    }
    
   
},35)
    }
})
tl.to(".line h2",{
    animationName:"anime",
    opacity:1,
})
tl.to("#loader",{
    opacity:0,
    duration:0.9,
    delay:2,
})

tl.from("#page1",{
    delay:0.2,
    y:1200,
    opacity:0,


})
tl.to("#loader",{
    display:"none",
    
})
tl.from("#nav",{
    opacity:0,
})
tl.from("#hero1 h1, #hero2 h1, #hero3 h2 ,#hero4 h1",{
    y:120,
    stagger:0.1, 
    
})
tl.from("#hero1 , #page2",{
    opacity:0,
    
})
}
loadinganime();

function cursoraime(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
        })
    
    })
    
    Shery.makeMagnet("#nav2 h4" , {});
}
cursoraime();
//locomotiveanimation()


function newanimation(){
Shery.imageEffect(".imagediv",{
    style:6,
    config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":1.98,"range":[0,10]},"scale":{"value":7.63,"range":[0,100]},"speed":{"value":0.71,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.275946279428525},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.45,"range":[0,10]},"metaball":{"value":0.52,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},
    "noise_height":{"value":0.18,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true
})
}

newanimation()

