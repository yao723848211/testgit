// console.log(111)
$.ajax({
    url:"http://59.111.104.104:8086/system/dict/data/list/open",
    type:"post",
    contentType:"application/x-www-form-urlencoded",
    data:{
        "dictType":"blogroll",
        "pageNum":"1",
        "pageSize":"10",
        "orderByColumn":"dictSort",
        "isAsc":"asc",
    },
    success:function(res){
        // console.log(res)
        $(".footer_nav .a_1").text(res.rows[0].dictLabel);
        $(".footer_nav .a_1").attr("href",res.rows[0].dictValue);
        $(".footer_nav .a_2").text(res.rows[1].dictLabel);
        $(".footer_nav .a_2").attr("href",res.rows[1].dictValue);
        $(".footer_nav .a_3").text(res.rows[2].dictLabel);
        $(".footer_nav .a_3").attr("href",res.rows[2].dictValue);
        $(".footer_nav .a_4").text(res.rows[3].dictLabel);
        $(".footer_nav .a_4").attr("href",res.rows[3].dictValue);
        $(".footer_nav .a_5").text(res.rows[4].dictLabel);
        $(".footer_nav .a_5").attr("href",res.rows[4].dictValue);
    },
    error:function(err){
        console.log(err)
    }
    
})