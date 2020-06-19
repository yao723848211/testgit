// console.log(111)
$(".directory_2 dl dt").click(function(){
    console.log(22)
    $(this).eq($(this).index()).addClass("active2").siblings("dt").removeClass("active2")
})