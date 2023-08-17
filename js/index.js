console.log("Your index.js file is loaded correctly!");

$(".inline-block").on( "mouseenter", function() {
    $( this ).css({
      "color": "orange",
      
    });
  })
  .on( "mouseleave", function() {
    $( this ).css({
        "color": "white",
        
    });
})