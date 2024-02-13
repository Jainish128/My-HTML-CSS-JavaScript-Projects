
// For Getting Rectangle Element 
var rect = document.querySelector("#Rectangle");

// Mousemove Event on Rect [Variable]
rect.addEventListener("mousemove", function (details) {

    // Get Boundaries of Rect [Variable]
    var rectLocation = rect.getBoundingClientRect();
    // Get Only X Location & Minus in rectLocation.left side [Variable]
    var insideRectVal = details.clientX - rectLocation.left;

    /* Condition = when insideRectVal(Inside Rectangle Value)[Variable] is less than(<) of rectLocaton(Rectangle Location)[Variable] 
       divide by that full Element's Width by(/) 2(Two) */ 
    if (insideRectVal < rectLocation.width/2) 
    {
        // When Condition was True then in new redColor[Variable] gsap Library was used.
        // in gsap library we use mapRange. (inMin, inMax, outMin, outMax, CurrentLocation)
        /* 
            (inMin = Starting Location,
            isMax = Ending Location,
            outMin = Starting Color Range,
            outMax = Ending Color Range,
            CurrentLocation = Show Result according Location of in to(->) out.) 
        */
        var redColor = gsap.utils.mapRange(
            0,
            rectLocation.width/2,
            255,
            50,
            insideRectVal
        );
        // using gsap.to( Variable Name, { Apply Styles and Something Else. } )
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        });
    } 
    else 
    {
        var blueColor = gsap.utils.mapRange(
            rectLocation.width/2,
            rectLocation.width,
            50,
            255,
            insideRectVal
        );
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        })   
    }
})

// When Mouseleave from Rect[Variable] then Rect[Variable] Background Color was change to White(As Normal).
// We use gsap.to because gsap is overRiding.
rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white"
    })
});