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



//课程描述 目录 评论ajax请求 
// 目录右侧图标
var iconfont = '<div class="pull-right rightBox"><span class="play"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-bofang"></use></svg></span><span class="view">观看</span></div>';
console.log(localStorage.courseId)
$.ajax({
    url: "http://59.111.104.104:8086/pc/course/detail/103",
    type: "GET",
    data: null,
    success: function (res) {
        
    },
    error(err) {
        console.log(err);
    }
})