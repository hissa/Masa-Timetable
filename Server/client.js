$(function(){
    $("#BeginAjax").click(function(){
        $.ajax({
            type:"POST",
            url: "http://localhost:1234",
            dataType:"text",
            success:function(data, dataType){
                alert(data);
            },
            error:function(x, y, z){
                alert(y);
            }
        });
    });
});