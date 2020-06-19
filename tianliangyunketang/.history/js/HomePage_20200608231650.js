// console.log(111)
//请求轮播图
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/banner/list?number=5",
    type: "get",
    data: null,
    success: function (res) {
        // console.log(res)
        // console.log(res.data)
        // console.log(res.data[0].imgUrlPc)
        /* 我感觉这么写没有问题 不知道为啥获取的一直是一张图片 希望老哥看到讲一下
         for (var i =0;i<res.data.length;i++){
                var imgUrlPc = res.data[i].imgUrlPc;
                $(".item img").attr("src",imgUrlPc);
        } */
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
        console.log(res)
        console.log(res.rows)
        for (x in res.rows) {
            // console.log(res.rows[x]
            var obj = res.rows[x]  
        }
        // 1
        $("#con1 img").attr("src",res.rows[0].bannerFileUrl);
        $("#con1 .dt2").text(res.rows[0].courseTitle)
        $("#con1 .span1").text(res.rows[0].subSectionNum)
        $("#con1 .span2").text(res.rows[0].participationsCount)
        //2
        $("#con2 img").attr("src",res.rows[1].bannerFileUrl);
        $("#con2 .dt2").text(res.rows[1].courseTitle)
        $("#con2 .span1").text(res.rows[1].subSectionNum)
        $("#con2 .span2").text(res.rows[1].participationsCount)
        //3
        $("#con3 img").attr("src",res.rows[2].bannerFileUrl);
        $("#con3 .dt2").text(res.rows[2].courseTitle)
        $("#con3 .span1").text(res.rows[2].subSectionNum)
        $("#con3 .span2").text(res.rows[2].participationsCount)
        //4
        $("#con4 img").attr("src",res.rows[3].bannerFileUrl);
        $("#con4 .dt2").text(res.rows[3].courseTitle)
        $("#con4 .span1").text(res.rows[3].subSectionNum)
        $("#con4 .span2").text(res.rows[3].participationsCount)
        //5
        $("#con5 img").attr("src",res.rows[4].bannerFileUrl);
        $("#con5 .dt2").text(res.rows[4].courseTitle)
        $("#con5 .span1").text(res.rows[4].subSectionNum)
        $("#con5 .span2").text(res.rows[4].participationsCount)
        //6
        $("#con6 img").attr("src",res.rows[5].bannerFileUrl);
        $("#con6 .dt2").text(res.rows[5].courseTitle)
        $("#con6 .span1").text(res.rows[5].subSectionNum)
        $("#con6 .span2").text(res.rows[5].participationsCount)
        //7
        $("#con7 img").attr("src",res.rows[6].bannerFileUrl);
        $("#con7 .dt2").text(res.rows[6].courseTitle)
        $("#con7 .span1").text(res.rows[6].subSectionNum)
        $("#con7 .span2").text(res.rows[6].participationsCount)
        //8
        $("#con8 img").attr("src",res.rows[7].bannerFileUrl);
        $("#con8 .dt2").text(res.rows[7].courseTitle)
        $("#con8 .span1").text(res.rows[7].subSectionNum)
        $("#con8 .span2").text(res.rows[7].participationsCount)
        //9
        $("#con9 img").attr("src",res.rows[8].bannerFileUrl);
        $("#con9 .dt2").text(res.rows[8].courseTitle)
        $("#con9 .span1").text(res.rows[8].subSectionNum)
        $("#con9 .span2").text(res.rows[8].participationsCount)
        //10
        $("#con10 img").attr("src",res.rows[9].bannerFileUrl);
        $("#con10 .dt2").text(res.rows[9].courseTitle)
        $("#con10 .span1").text(res.rows[9].subSectionNum)
        $("#con10 .span2").text(res.rows[9].participationsCount)
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
        "type": "free",
        "pageNum": "1",
        "pageSize": "10",
    },
    success:function(){

    },
    error:function(err){
        console.log(err)
    }


})