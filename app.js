/* The below variable will be what will start the menu animation once clicked by the user */
const navButton = document.querySelector('.nav-button');

/* This variable will be used to control the pointer events activating them once the menu animation has been activated upon users click. This will also change to opacity */
const navOpen = document.querySelector('.nav-open');

const tl = new TimelineLite({paused : true });

tl.to('.cover', 1, {
    width: '60%',
    ease: Power2.easeOut
})
.to('nav', 1, {
    height: '100%',
    ease: Power2.easeOut
});

navButton.addEventListener('click', () => {
    tl.play();
})

/* The below will be used to select the object I want to move or animate, the timeing and the animation properties such as the colour and position.. const tween = TweenLite.to(object, time, {animate}) */
/* const tween = TweenLite.to('.cover', 1, {
    width: "40%"
});
 */
