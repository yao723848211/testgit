


/* 内容渲染 */
/*右侧图标 */
var iconfont = '<div class="pull-right rightBox"><span class="play"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-bofang_huaban"></use></svg></span><span class="view">观看</span></div>';
/* 课程盒子 */
var fatherBox = '<div class="pull-left leftBox"><span class="empty"></span></div>'
$.ajax({
    url: 'http://59.111.104.104:8086/pc/course/detail/103' ,
    type: 'get',
    contentType: "application/json;charset=UTF-8",
    success: function (res) {
        var zzj = "<div class='box_same'><h3></h3><dt></dt></div>"
        console.log(res.data)
        /* 课程描述 */
        $('.midimg img').attr('src', res.data.coverFileUrl);
        $('.midText h3').html(res.data.courseTitle);
        $('.courseDetail').html(res.data.courseDetail);

        /* 目录标题 */
        for (let i = 0; i < res.data.sections.length; i++) {
           
            $('#childBox').append(zzj)
            $($('.box_same h3')[i]).html(i + 1 + ".&nbsp;&nbsp;" + res.data.sections[i].sectionName + '<button><svg class="icon" aria-hidden="true"><use xlink:href="#icon-xiazai_"></use></svg> 下载</button>')

            /* 目录子标题 */
            for (let j = 0; j < res.data.sections[i].subSections.length; j++) {

                $($('#childBox dt')[i]).append('<dl class="dlBox">' + iconfont + fatherBox + '</dl>');
                $($('.box_same')[i]).find('.leftBox').eq(j).html((i + 1) + '-' + (j + 1) + '&nbsp;&nbsp;' + res.data.sections[i].subSections[j].sectionName);



            }


        }

        


        /* 观看和播放小按钮 */
        $('.box_same .dlBox').hover(function () {
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


/* 评论 */
/* 大盒子 */
var plBOx = '<div class="message clearfix"><div class="pull-left"><span class="userimg"><img src="images/user.png" alt=""></span><span class="userName"></span></div><ul class="pull-right"><li class="lipl"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-wujiaoxing-"></use></svg></li><li class="lipl"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-wujiaoxing-"></use></svg></li><li class="lipl"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-wujiaoxing-"></use></svg></li><li class="lipl"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-wujiaoxing-"></use></svg></li><li class="lipl"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-wujiaoxing-"></use></svg></li></ul></div>'

/* 内容评论 */
var nrpl = '<p class="userText"></p>';
/* 评论时间 */
var timepl = '<p class="userTime"></p>';

$.ajax({
    url: 'http://59.111.104.104:8086/pc/comment/commentList/course/103',
    contentType: "application/json;charset=UTF-8",
    type: 'get',
    success: function (res) {
        // console.log(res.rows)

        for (var i = 0; i < res.rows.length; i++) {

            $('#userplBox').append('<div class="userpl clearfix">' + plBOx + nrpl + timepl + '</div>');
            /* 评论内容 */
            $($('.userText')[i]).html(res.rows[i].commentContent);
            $($('.userName')[i]).html(res.rows[i].user.nickname);
            $($('.userTime')[i]).html(res.rows[i].createdTime + '<span> 回复</span>');
        }
    },
    error: function (err) {
        console.log(err)
    }

})









