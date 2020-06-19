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



/* 内容渲染 */
/* 字体图标 */
var iconfont = '<div class="pull-right rightBox"><span class="play"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-bofang"></use></svg></span><span class="view">观看</span></div>';
/* 课程盒子 */
var knob = '<div class="pull-left leftBox"><span class="empty"></span></div>'
$.ajax({
    url: 'http://59.111.104.104:8086/pc/course/detail/' + localStorage.id,
    type: 'get',
    contentType: "application/json;charset=UTF-8",
    success: function (res) {

        // console.log(res.data)

        /* 目录标题 */
        for (let i = 0; i < res.data.sections.length; i++) {
            var nm1 = "<div class='one'><h3></h3><dt></dt></div>"
            $('#nrxr').append(nm1)
            $($('.one h3')[i]).html(i + 1 + ".&nbsp;&nbsp;" + res.data.sections[i].sectionName + '<button><svg class="icon" aria-hidden="true"><use xlink:href="#icon-ziyuan"></use></svg> 下载</button>')

            /* 目录子标题 */
            for (let j = 0; j < res.data.sections[i].subSections.length; j++) {

                $($('#nrxr dt')[i]).append('<dl class="dlBox">' + iconfont + knob + '</dl>');
                $($('.one')[i]).find('.leftBox').eq(j).html((i + 1) + '-' + (j + 1) + '&nbsp;&nbsp;' + res.data.sections[i].subSections[j].sectionName);



            }


        }

        /* 课程描述 */
        $('.midimg img').attr('src', res.data.coverFileUrl);
        $('.midText h3').html(res.data.courseTitle);
        $('.nrlp').html(res.data.courseDetail);


        /* 观看和播放小按钮 */
        $('.one .dlBox').hover(function () {
            $(this).find('.play').hide()
            $(this).find('.view').show()
        }, function () {
            $(this).find('.play').show()
            $(this).find('.view').hide()
        })


    },
    error: function (err) {
        console.log(err)
    }
})


