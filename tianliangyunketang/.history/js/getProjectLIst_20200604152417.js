// console.log(111)
$(".header_bb").mouseover(function(){
    // console.log(222)
    $.ajax({
        url:"http://59.111.104.104:8086/weChat/applet/subject/list",
        type:"POST",
        contentType:"application/json",
        data:JSON.stringify({
            "enable":1
        }),
        success:function(res){
            console.log(res);
            $(".header_cc_1").text(res.rows[0].title)
            $(".header_cc_2").text(res.rows[1].title)
            $(".header_cc_3").text(res.rows[2].title)
            $(".header_cc_4").text(res.rows[3].title)
            $(".header_cc_5").text(res.rows[4].title)
            $(".header_cc_6").text(res.rows[5].title)
            $(".header_cc_7").text(res.rows[6].title)
            $(".header_cc_8").text(res.rows[7].title)
            $(".header_cc_9").text(res.rows[8].title)
        },
        error:function(err){
            console.log(err)
        },
        
    })
})