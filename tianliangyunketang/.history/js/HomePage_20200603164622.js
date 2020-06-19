// console.log(111)
//请求轮播图
$.ajax({
    url:"http://59.111.104.104:8086/weChat/applet/course/banner/list?number=5",
    type:"get",
    data:null,
    success:function(res){
        console.log(res)
        console.log(res.data)
        var obj;
        for (var i=0;i<res.data.length;i++){
            obj = res.data[i]
        }
        console.log(obj)
    },
    errof:function(err){

    },
})