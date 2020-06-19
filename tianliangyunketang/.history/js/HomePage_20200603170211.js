// console.log(111)
//请求轮播图
$.ajax({
    url:"http://59.111.104.104:8086/weChat/applet/course/banner/list?number=5",
    type:"get",
    data:null,
    success:function(res){
        console.log(res)
        // console.log(res.data)
        // console.log(res.data[0].imgUrlPc)
        for (var i =0;i<res.data.length;i++){
            for (var j =0;j<res.data.length;j++)
        }
        $(".swiper_pic_0").attr("src",res.data[0].imgUrlPc)
        $(".swiper_pic_1").attr("src",res.data[1].imgUrlPc)
        $(".swiper_pic_2").attr("src",res.data[2].imgUrlPc)
        $(".swiper_pic_3").attr("src",res.data[2].imgUrlPc)
        $(".swiper_pic_4").attr("src",res.data[4].imgUrlPc)
    },
    errof:function(err){

    },
})