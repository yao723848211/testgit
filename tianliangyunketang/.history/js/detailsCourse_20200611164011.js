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
/*<div class="pull-right">
                                           
                                                <span class="tubiao"><i style="font-size: 16px;
                                                    margin: 0 10px 0 0;"><svg class="icon" aria-hidden="true">
                                                            <use xlink:href="#icon-bofang_huaban"></use>
                                                        </svg></i></span>
                                                <span class="watch">观看</span>
                                           
                                        </div>*/
var iconfont = '<div class="pull-right rightBox"><span class="tubiao"><i style="font-size:16px;margin:0 10px 0 0;"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-bofang_huaban"></use></svg></i></span><span class="watch">观看</span></div>';
// 子章节的盒子
/* 课程盒子 */
/*<div class="pull-left ">1-1 <span class="box_10 box_3"></span> </div> */
var knob = '<div class="pull-left leftBox"><span class="empty"></span></div>'
console.log(localStorage.courseId)
$.ajax({
    url: "http://59.111.104.104:8086/pc/course/detail/103",
    type: "GET",
    data: null,
    success: function (res) {
        /* 目录标题 */
        for (let i = 0; i < res.data.sections.length; i++) {
            var nm1 = "<div class='one'><h3></h3><dt></dt></div>"
            $('#directory').append(nm1)
            $($('.one h3')[i]).html(i + 1 + ".&nbsp;&nbsp;" + res.data.sections[i].sectionName + '<button><svg class="icon" aria-hidden="true"><use xlink:href="#icon-ziyuan"></use></svg> 下载</button>')

            /* 目录子标题 */
            for (let j = 0; j < res.data.sections[i].subSections.length; j++) {

                $($('#directory dt')[i]).append('<dl class="dlBox">' + iconfont + knob + '</dl>');
                $($('.one')[i]).find('.leftBox').eq(j).html((i + 1) + '-' + (j + 1) + '&nbsp;&nbsp;' + res.data.sections[i].subSections[j].sectionName);


            }


        }

    },
    error(err) {
        console.log(err);
    }
})