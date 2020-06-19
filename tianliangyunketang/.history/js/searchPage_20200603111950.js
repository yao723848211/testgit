// console.log(11)
$(".main_project_1 span").click(function(){
    $(this).addClass("active");
    $(".main_project_1 span").not($(this)).removeClass("active");
})