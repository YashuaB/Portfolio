
$("li").click( function(){
// fading out main elements on home page
  $(".nav-intro-container").fadeOut(1000)
  $(".logo").fadeOut(2000)
  $(".social-icons").fadeOut(1000)

 let id = $(this).attr("id")
  if(id === "about-button"){
    $(".about").css({"margin-top":"0"})
    $(".about").fadeIn(3000)

} else if (id === "contact-button"){
  $(".contact").css({"margin":"0"})
    $(".contact-container").fadeIn(3000)

} else if (id === "work-button"){
  $(".carousel-background").fadeIn(3000)
}
})

var timerDelay = false

$(".close-icon").click( function(){
    timerDelay = true
  // $(".closed").css({"display":"none"})
  $(".nav-intro-container").fadeIn(3000)
  $(".logo").fadeIn(3000)
  $(".social-icons").fadeIn(3000)
  $(".closed").fadeOut(2000)
})


$(".filter-button").click( function(){
  
  var value = $(this).attr('data-filter')

  if(value == "all"){
       $('.filter').show('1000')
  }else
  { $(".filter").not('.'+value).hide('1000')
    $('.filter').filter('.'+value).show('1000')
      
  }
})

if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active")
}
$(this).addClass("active")

//////////////////////////////////////Form Validator//////////
// var frmvalidator = new Validator("contactform")
// frmvalidator.addValidation("name","req","Please provide your name")
// frmvalidator.addValidation("email","req","Please provide your email")
// frmvalidator.addValidation("email","email", "Please enter a valid email address")


//////////////////////////////////////Animation////////////////
function classTimer(text){
  $(text).css("display", "block")
  $(text).addClass("animated bounceInLeft")
}

if (!timerDelay){ 
  console.log(timerDelay)
  setTimeout(classTimer(".intro-text"),500)
} else {
  console.log(timerDelay)
  setTimeout(classTimer(".intro-text"),4000)
}

setTimeout(classTimer("nav"),500)
 



