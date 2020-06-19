// console.log(111)
//请求轮播图
$.ajax({
    url:"http://59.111.104.104:8086/weChat/applet/course/banner/list?number=5",
    type:"get",
    data:null,
    success:function(res){
        console.log(res)
        // console.log(res.data)
        console.log(res.data[0].imgUrlPc)
        $(".swiper_pic_1").attr("scr",res.data[0].imgUrlPc)
    },
    errof:function(err){

    },
})