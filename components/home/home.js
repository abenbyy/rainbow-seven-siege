$(document).ready(function(){
    var slides = $('.slides')
    var curr = 0
    var prev = 0

    for(let i=1;i<slides.length;i++){
        slides.eq(i).hide();
    }

    $("#slide-right").click(function(){
        prev = curr
        curr++
        if(curr > slides.length){
            curr = 0
        }
        slides.eq(prev).fadeOut(0)
        slides.eq(curr).fadeIn(1000)
    })
    
    $("#slide-left").click(function(){
        prev = curr
        curr--
        if(curr < 0){
            curr = slides.length - 1
        }
        slides.eq(prev).fadeOut(0)
        slides.eq(curr).fadeIn(1000)
    })

    setInterval(() => {
        prev = curr
        curr++
        if(curr > slides.length){
            curr = 0
        }
        slides.eq(prev).fadeOut(0)
        slides.eq(curr).fadeIn(1000)
    }, 5000);


})