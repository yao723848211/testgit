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







var ye = 1;
function seekContent(key, y, id = "", cost = "") {
    var searchData = {
        pageNum: y,
        pageSize: 10,
    };
    if (id && id != 'undefined' && id != undefined) {
        searchData.subjectId = id
    }
    if (key) {
        searchData.keyword = key
    }

    if (cost) {
        searchData.type = cost
    }

    $.ajax({
        url: 'http://59.111.104.104:8086/pc/course/search/keyword',
        type: 'get',
        async: false,
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
            var courseBoxFree = '<li><a href="#"><div class="imgBox"><img src="images/免费2.png"></div><p class="bt"> web前端基础之html+css </p><p class="course">共<span class="dsJK"> 56 </span>节课 | <span class="dsR">147</span> 人报名</p><p class="free">免费</p></a></li>';
            var courseBoxBoutique = '<li><a href="#"><div class="imgBox"><img src="images/免费2.png"></div><p class="bt"> web前端基础之html+css </p><p class="course">共<span class="dsJK"> 56 </span>节课 | <span class="dsR">147</span> 人报名</p> <p class="charge">￥99.9 <del> ￥&nbsp;800</del></p><div class="xsjh pull-right">限时钜惠</div></a></li>';

            for (var i = 0; i < res.courseList.length; i++) {

                if (res.courseList[i].isFree == 1) {
                    $('.courseBox').append(courseBoxFree);
                } else {
                    $('.courseBox').append(courseBoxBoutique);
                }
                $($('.courseBox li')[i]).attr('name', res.courseList[i].courseId)
                // 图片
                $($('.courseBox img')[i]).attr('src', res.courseList[i].coverFileUrl);
                // 标题
                $($('.courseBox .bt')[i]).html(res.courseList[i].courseTitle);
                // 课
                $($('.courseBox .dsJK')[i]).html('&nbsp;' + res.courseList[i].subSectionNum + '&nbsp;');
                // 人
                $($('.courseBox .dsR')[i]).html(res.courseList[i].participationsCount);
            }

            /* 进入缓冲页 */
            $('.courseBox li').click(function () {
                localStorage.setItem('id', $(this).attr('name'));
                location.href = "../详情页.html";
            })

            /* 分页 */
            if (res.total == 0) {
                //    没有数据
                $('.courseBox').append('<p>没有数据</p>')
            } else if (res.total % 10 == 0) {
                var pageCount = Math.floor((res.total / 10))
            } else {
                var pageCount = Math.floor((res.total / 10) + 1)
            }
            $('.paging').append('<li class="liColor" id="shangye"><a><span class="glyphicon glyphicon-chevron-left"></span></a></li>')
            for (var i = 0; i < pageCount; i++) {

                $('.paging').append('<li class="pagingLi"></li>')

                $($('.paging .pagingLi')[i]).html(i + 1)
            }
            $('.paging').append('<li class="liColor" id="xiaye"><a><span class="glyphicon glyphicon-chevron-right"></span></a></li>')

            /* 分页左右按钮 */
            $('.pagingLi').eq(ye - 1).addClass('asdasd').siblings('.pagingLi').removeClass('asdasd');
            
            /* 点击下一页 */
            $('#xiaye').click(function () {
                if (ye < pageCount) {
                    $('#shangye').removeClass('not-click')
                    ye += 1;
                    seekContent(localStorage.keyword, ye, localStorage.pageId, localStorage.Class)
                } else {
                    $(this).addClass('not-click')
                }
            })
            /* 点击上一页 */
            $('#shangye').click(function () {
                if (ye > 1) {
                    $('#xiaye').removeClass('not-click')
                    ye -= 1;
                    seekContent(localStorage.keyword, ye, localStorage.pageId, localStorage.Class)
                } else {
                    $(this).addClass('not-click')
                }
            })
            /* 单机页数 */
            $('.pagingLi').click(function () {
                console.log($(this))
                ye = $(this).html()
                $(this).addClass('asdasd').siblings('.pagingLi').removeClass('asdasd');
                seekContent(localStorage.keyword, $(this).html(), localStorage.pageId, localStorage.Class);
            })

        },
        error: function (err) {
            console.log(err)
        }
    })
}












