// console.log(111)
// 发表回复
$(".comments_3_1_span").click(function(){
    // $(".fbhf").show()
    $(".comments_3").eq($(this).index()).find(".fbhf").show().siblings();
})