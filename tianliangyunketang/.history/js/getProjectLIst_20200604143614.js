// console.log(111)
$(".header_bb").mouseover(function(){
    // console.log(222)
    $.ajax({
        url:"http://59.111.104.104:8086/weChat/applet/subject/list",
        type:"POST",
        contentType:"application/json",
        data:{
            "enable":1
        },
        success:function(res){
            console.log(res);
        },
        error:function(err){
            console.log(err)
        },
        
    })
})