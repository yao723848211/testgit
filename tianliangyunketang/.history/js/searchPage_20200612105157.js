// console.log(11)
$(".main_project_1 span").click(function(){
    $(this).addClass("active");
    $(".main_project_1 span").not($(this)).removeClass("active");
})
$(".mian_type_1 span").click(function(){
    $(this).addClass("active");
    $(".mian_type_1 span").not($(this)).removeClass("active");
})
$(".mian_way_1 span").click(function(){
    $(this).addClass("active");
    $(".mian_way_1 span").not($(this)).removeClass("active");
})







var page_ = 1;
function veiwMain(keyword, pageNum, subjectId = "", type = "") {
    var searchData = {
        pageNum: pageNum,
        pageSize: 10,
    };
    if (subjectId) {
        searchData.subjectId = subjectId
    }
    if (type) {
        searchData.type = type
    }
    $.ajax({
        url: 'http://59.111.104.104:8086/pc/course/search/keyword',
        type: 'get',
        data: searchData,
        success: function (res) {
            console.log(res)
            if ($('.courseBox').children().length > 0) {
                $('.courseBox').empty()
            }
            if ($('.paging').children().length > 0) {
                $('.paging').empty()
            }

            /* 图片数据 */
            var courseBoxFree = '<li><a href="#"><div class="imgBox"><img src="images/免费2.png"></div><p class="bt"> web前端基础之html+css </p><p class="course">共<span class="dsJK"> 56 </span>节课 | <span class="dsR"></span> 人报名</p><p class="free">免费</p></a></li>';
            var courseBoxBoutique = '<li><a href="#"><div class="imgBox"><img src="images/免费2.png"></div><p class="bt"> web前端基础之html+css </p><p class="course">共<span class="dsJK"> 56 </span>节课 | <span class="dsR">147</span> 人报名</p> <p class="charge">￥99.9 <del> ￥&nbsp;800</del></p><div class="xsjh pull-right">限时钜惠</div></a></li>';

            for (var i = 0; i < res.courseList.length; i++) {

                if (res.courseList[i].isFree == 1) {
                    $('.courseBox').append(courseBoxFree);
                } else {
                    $('.courseBox').append(courseBoxBoutique);
                }
                $($('.courseBox li')[i]).attr('name', res.courseList[i].courseId)
                $($('.courseBox img')[i]).attr('src', res.courseList[i].coverFileUrl);
                $($('.courseBox .bt')[i]).html(res.courseList[i].courseTitle);
                $($('.courseBox .dsJK')[i]).html('&nbsp;' + res.courseList[i].subSectionNum + '&nbsp;');
                $($('.courseBox .dsR')[i]).html(res.courseList[i].participationsCount);
            }

            $('.courseBox li').click(function () {
                localStorage.setItem('courseId', $(this).attr('name'));
                location.href = "detailsCourse.html";
            })

            /* 分页 */
            if (res.total == 0) {
                $('.courseBox').append('<p>没有数据</p>')
            } else if (res.total % 10 == 0) {
                var pageCount = Math.floor((res.total / 10))
            } else {
                var pageCount = Math.floor((res.total / 10) + 1)
            }
            $('.paging').append('<li class="liColor" id="previousPage_"><a><span class="glyphicon glyphicon-chevron-left"></span></a></li>')
            for (var i = 0; i < pageCount; i++) {

                $('.paging').append('<li class="pagingLi"></li>')

                $($('.paging .pagingLi')[i]).html(i + 1)
            }
            $('.paging').append('<li class="liColor" id="nextPage_"><a><span class="glyphicon glyphicon-chevron-right"></span></a></li>')
            $('.pagingLi').eq(page_ - 1).addClass('asdasd').siblings('.pagingLi').removeClass('asdasd');
            /* 点击下一页 */
            $('#nextPage_').click(function () {
                if (page_ < pageCount) {
                    $('#previousPage_').removeClass('not-click')
                    page_ += 1;
                    veiwMain(localStorage.keyword, page_, localStorage.pageId, localStorage.Class)
                } else {
                    $(this).addClass('not-click')
                }
            })
            /* 点击上一页 */
            $('#previousPage_').click(function () {
                if (page_ > 1) {
                    $('#nextPage_').removeClass('not-click')
                    page_ -= 1;
                    veiwMain(localStorage.keyword, page_, localStorage.pageId, localStorage.Class)
                } else {
                    $(this).addClass('not-click')
                }
            })
            /* 点击数字 */
            $('.pagingLi').click(function () {
                console.log($(this))
                page_ = $(this).html()
                $(this).addClass('asdasd').siblings('.pagingLi').removeClass('asdasd');
                veiwMain(localStorage.keyword, $(this).html(), localStorage.pageId, localStorage.Class);
            })

        },
        error: function (err) {
            console.log(err)
        }
    })
}



/* 专题列表 */
$.ajax({
    url: 'http://59.111.104.104:8086/weChat/applet/subject/list',
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify({
        'enable': 1,
    }),
    success: function (res) {
        // console.log(res.rows)

        /* 专题列表数据渲染 */
        $('#special').append('<span class="active" name="">全部专题</span>');
        for (var i = 0; i < res.rows.length; i++) {
            $('#special').append('<span class="SpecialS"></span>')
            $($('#special .SpecialS')[i]).html(res.rows[i].title)
            $($('#special .SpecialS')[i]).attr('name', res.rows[i].subjectId)
        }

        /* 专题点击添加类 + 请求接口 + 判断显示内个 */
        $('.midBox1 span').each(function () {
            if ($(this).attr('name') == localStorage.pageId) {
                $(this).addClass('active').siblings().removeClass('active');
                veiwMain(localStorage.keyword, page_, localStorage.pageId, localStorage.Class);
            }
            /* 首页传的数在搜索页显示+调用接口 */
            if ($(this).html() == localStorage.course) {
                $(this).addClass('active').siblings().removeClass('active');
                veiwMain(localStorage.keyword, page_, $(this).attr('name'));
            }
        });
        $('.midBox1 span').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            localStorage.setItem('pageId', $(this).attr('name'));
            veiwMain(localStorage.keyword, page_, localStorage.pageId, localStorage.Class);
        })

        /* 类型点击添加类 + 请求接口 + 判断显示内个 */
        $('.midBox2 span').each(function () {
            if ($(this).attr('id') == localStorage.Class) {
                $(this).addClass('active').siblings().removeClass('active')
                veiwMain(localStorage.keyword, page_, localStorage.pageId, localStorage.Class)
            }
        });
        $('.midBox2 span').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            localStorage.setItem('Class', $(this).attr('name'))
            veiwMain(localStorage.keyword, page_, localStorage.pageId, localStorage.Class);
        });
    },
    error: function (err) {
        console.log(err)
    }
})













