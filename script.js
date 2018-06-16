$("ul").on("click" ,"li" ,function(){
	// if($(this).css("color")==="rgb(128, 128, 128)"){
 //         $(this).css({color: "#1d7316" ,
 //         	textDecoration:"none"})

	// }else
	// {$(this).css({
	// 	color:"gray",
	// 	textDecoration:"line-through"
	// });}
	$(this).toggleClass("completed")
});
$("ul").on("click" ,"span" ,function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove()
	})
	event.stopPropagation()
})
$("input[type='text']").keypress(function(event){
    if(event.which===13){
    	var todoText=$(this).val();
    	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>");
    	$(this).val("")}})
    
//     // $(".fa-edit").click(function(){
//     // 	$("input[type='text']").fadeToggle()
//     // });
// 