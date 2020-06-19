// console.log(111)
// 发表回复
$(".comments_3_1_span").click(function () {
    // $(".fbhf").show()
    // $(".comments_3").eq(0).find(".fbhf").show();
    // $(".comments_3").eq($(this).index()).find(".fbhf").show();
    $(this).parent().siblings(".fbhf").show();
    $(".fbhf").not($(this).parent().siblings(".fbhf")).hide();
    // $(this).not()
})
console.log(localStorage.courseId)
$.ajax({
    url: "http://59.111.104.104:8086/pc/course/detail/courseId=" + localStorage.courseId,
    type: "GET",
    data: null,
    success: function (res) {
        console.log(res)
    }
})