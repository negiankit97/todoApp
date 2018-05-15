/*if(jQuery)
{
    alert("jQery is running");
}
*/
$("ul").on("click","li", function(){
    $(this).toggleClass("completed")
});
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
})

$("input[type='text']").on("keypress", function(event){
if(event.which === 13)
{
    var text = $(this).val();
    console.log(text);
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + text + "</li>");
}
})
$("#wrap").click(function(){
    $("input[type='text']").fadeToggle();
})