/* The below variable will be what will start the menu animation once clicked by the user */
const navButton = document.querySelector('.nav-button');

/* This variable will be used to control the pointer events activating them once the menu animation has been activated upon users click. This will also change to opacity */
const navOpen = document.querySelector('.nav-open');

/* The below variable is the default animation settings */
const tl = new TimelineLite({paused : true, reversed: true });

/* The below is the animation will first shrink the cover image to 60% width once user clicks 'shop' */
tl.to('.cover', 1, {
    width: '60%',
    ease: Power2.easeOut
})
/* The below is the animation will allow the nav section to increase in heigth to 100% after the cover image shinks to 60% */
.to('nav', 1, {
    height: '100%',
    ease: Power2.easeOut
}, '-=0.8')
/* The fromTo will allow me to animate from 1 thing to the next. the first {object} is the from part, the second {object} is the to part. */
.fromTo('.nav-open', 0.3, {
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
},{
    opacity: 1,
    x: 0,
    /* The below will be a function I add after to to part of this animation is complete to bring back the pointer events using the const navOpen above*/
    onComplete: function(){
        navOpen.style.pointerEvents = 'auto';
        console.log('done');
    }
})

navButton.addEventListener('click', () => {

    /* The below if function will prevent the user from stoping the animation whilst it is in mid animation */
    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }

    toggleTween(tl);
})

/* The below function will allow the user to toggle between the menu display by using the turnerary function ( ?   :   ), like an if/else statement, switching between play and reverse functions. */
function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
}



/* PREVIOUS NOTE FOR HOW THE TIMELINE ANIMATION LOGIC WORKS- The below will be used to select the object I want to move or animate, the timeing and the animation properties such as the colour and position.. const tween = TweenLite.to(object, time, {animate}) */
/* const tween = TweenLite.to('.cover', 1, {
    width: "40%"
});
 */
