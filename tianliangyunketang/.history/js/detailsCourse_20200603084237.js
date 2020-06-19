// console.log(111)
// 发表回复
$(".comments_3_1_span").click(function(){
    // $(".fbhf").show()
    $(".comments_3").eq($(".comments .comments_3").index()).find(".fbhf").show()
    console.log($(".comments  .comments_3").index());
})