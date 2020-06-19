// console.log(11)
$(".main_project_1 span").click(function(){
    var index1 = $(this).index()
    console.log(11)
    $(this).eq(index1).addClass("active").siblings().removeClass("active");
})