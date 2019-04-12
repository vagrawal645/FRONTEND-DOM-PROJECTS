$('ul').on("click","li",function(){
    $(this).toggleClass("completed");
})
//To delete the entry when span is clicked
$('ul').on("click","span",function(e){
    //to avoid bubbling
    e.stopPropagation();
    //to remove the li
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
});
$('input[type="text"]').keypress(function(e){
    if(e.which === 13){
        var todotext = $(this).val();
        $('ul').append("<li><span><i class='fas fa-trash'></i></span>"+todotext+"</li>")
        $(this).val("");
    }
});
$('#icon').click(function(){
    console.log("sadad");
    $('input[type="text"]').fadeToggle();
})