// console.log(111)
//请求轮播图
$.ajax({
    url:"http://59.111.104.104:8086/weChat/applet/course/banner/list?number=5",
    type:"get",
    data:null,
    success:function(res){
        // console.log(res)
        // console.log(res.data)
        // console.log(res.data[0].imgUrlPc)
        /* 我感觉这么写没有问题 不知道为啥获取的一直是一张图片 希望老哥看到讲一下
         for (var i =0;i<res.data.length;i++){
                var imgUrlPc = res.data[i].imgUrlPc;
                $(".item img").attr("src",imgUrlPc);
        } */
        $(".swiper_pic_0").attr("src",res.data[0].imgUrlPc)
        $(".swiper_pic_1").attr("src",res.data[1].imgUrlPc)
        $(".swiper_pic_2").attr("src",res.data[2].imgUrlPc)
        $(".swiper_pic_3").attr("src",res.data[2].imgUrlPc)
        $(".swiper_pic_4").attr("src",res.data[4].imgUrlPc)
    },
    error:function(err){
        console.log(err)
    },
})
// 请求课程类型获取列表
$.ajax({
    url:"http://59.111.104.104:8086/weChat/applet/course/list/type",
    type:"POST",
    contentType:"application/x-www-form-urlencoded",
    data:{
        "type":"free",
        "pageNum": "1",
        "pageSize":"10",
    },
    success:function(res){
        console.log(res)
        console.log(res.rows[0].bannerFileUrlPc)
        $(".con1Img").attr("src",res.rows[0].bannerFileUrlPc)
    },
    error:function(err){
        console.log(err)
    },
})