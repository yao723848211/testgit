// console.log(111)
$.ajax({
    url:"http://59.111.104.104:8086/system/dict/data/list/open",
    type:"post",
    contentType:"application/x-www-form-urlencoded",
    data:{
        "dictType":"blogroll",
        "pageNum":"1",
        "pageSize":"1",
        "orderByColumn":"dictSort",
        "isAsc":"asc"
    },
    success:function(res){
        console.log(res)
    },
    error:function(err){
        console.log(err)
    }
    
})