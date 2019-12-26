
$("li").click( function(){
  
 let id = $(this).attr("id")
  if(id === "about-button"){
    $(".about").fadeIn(3000)

} else if (id === "contact-button"){
    $(".contact-container").fadeIn(3000)

} else if (id === "work-button"){
  $(".carousel-background").fadeIn(3000)
}
})