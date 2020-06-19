// console.log(111)
//请求轮播图
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/banner/list?number=5",
    type: "get",
    data: null,
    success: function (res) {
        $(".swiper_pic_0").attr("src", res.data[0].imgUrlPc)
        $(".swiper_pic_1").attr("src", res.data[1].imgUrlPc)
        $(".swiper_pic_2").attr("src", res.data[2].imgUrlPc)
        $(".swiper_pic_3").attr("src", res.data[2].imgUrlPc)
        $(".swiper_pic_4").attr("src", res.data[4].imgUrlPc)

    },
    error: function (err) {
        console.log(err)
    },
})
// 请求课程类型获取列表
// 免费课程
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/list/type",
    type: "POST",
    contentType: "application/x-www-form-urlencoded",
    data: {
        "type": "free",
        "pageNum": "1",
        "pageSize": "10",
    },
    success: function (res) {
        var free = document.getElementsByClassName("free");
        // var arr = [];
        // 给所有图片及文字获取渲染接口
        for (var i = 0; i < free.length; i++) {
            $(".free").find("img")[i].src = res.rows[i].bannerFileUrl;
            $(".free").find(".dt2")[i].innerText = res.rows[i].courseTitle;
            $(".free").find(".span1")[i].innerText = res.rows[i].subSectionNum;
            $(".free").find(".span2")[i].innerText = res.rows[i].participationsCount;
            // $(".free")[i].setAttribute("name", res.rows[i].courseId);
            // console.log($(".free")[i].getAttribute("name"))
            // arr.push(localStorage.setItem("courseId", res.rows[i].courseId))
            //   var arr =  localStorage.setItem("courseId", res.rows[i].courseId)
            // console.log(localStorage.courseId)
            console.log(free[i])
            free[i].onclick = function () {
                // console.log(111)
                // $(".free")[i].setAttribute("name", res.rows[i].courseId);
                // console.log($(".free")[i].getAttribute("name"))
            }
        }



    },
    error: function (err) {
        console.log(err)
    },
})
// 精品课程

$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/list/type",
    type: "POST",
    contentType: "application/x-www-form-urlencoded",
    data: {
        "type": "boutique",
        "pageNum": "1",
        "pageSize": "5",
    },
    success: function (res) {
        var boutique = document.getElementsByClassName("boutique");
        // console.log(boutique);
        for (let i = 0; i < boutique.length; i++) {
            // console.log(boutique[i]);
            // console.log($(".boutique img"))
            // console.log(i)
            // $(".boutique")[0];
            // console.log($(".boutique")[i])
            // $(".boutique img").attr("src", res.rows[i].bannerFileUrl);
            $(".boutique").find("img")[i].src = res.rows[i].bannerFileUrl;
            $(".boutique").find(".dt2")[i].innerText = res.rows[i].courseTitle;
            $(".boutique").find(".span1")[i].innerText = res.rows[i].subSectionNum;
            $(".boutique").find(".span2")[i].innerText = res.rows[i].participationsCount;
            // console.log(res.rows[i].isFree)
            if (res.rows[i].isFree == 1) {
                $(".boutique").find(".span3")[i].innerText = "免费";
                $(".boutique").find(".box2")[i].style = "dispaly:none"
            } else if (res.rows[i].isFree == 0) {
                $(".boutique").find(".span4")[i].innerText = res.rows[i].discountPrice
                $(".boutique").find(".span5")[i].innerText = res.rows[i].coursePrice;
                $(".boutique").find(".box2")[i].innerText = res.rows[i].discountDesc;
            }
        }
        // console.log($(".boutique").find("img")[0])
        //  $(".boutique").find("img")[0].src = res.rows[0].bannerFileUrl;
    },
    error: function (err) {
        console.log(err)
    },

})

//限时折扣课程
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/list/type",
    type: "POST",
    contentType: "application/x-www-form-urlencoded",
    data: {
        "type": "discount",
        "pageNum": "1",
        "pageSize": "5",
    },
    success: function (res) {
        // console.log(res);
        var boutique = document.getElementsByClassName("discount");
        for (let i = 0; i < boutique.length; i++) {
            $(".discount").find("img")[i].src = res.rows[i].bannerFileUrl;
            $(".discount").find(".dt2")[i].innerText = res.rows[i].courseTitle;
            $(".discount").find(".span1")[i].innerText = res.rows[i].subSectionNum;
            $(".discount").find(".span2")[i].innerText = res.rows[i].participationsCount;
            // console.log(res.rows[i].isFree)
            if (res.rows[i].isFree == 1) {
                $(".discount").find(".span3")[i].innerText = "免费";
                $(".discount").find(".box2")[i].style = "dispaly:none"
            } else if (res.rows[i].isFree == 0) {
                $(".discount").find(".span4")[i].innerText = res.rows[i].discountPrice
                $(".discount").find(".span5")[i].innerText = res.rows[i].coursePrice;
                $(".discount").find(".box2")[i].innerText = res.rows[i].discountDesc;
            }
        }
        // console.log($(".discount").find("img")[0])
    },
    error: function (err) {
        console.log(err)
    },

})