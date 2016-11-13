// $(function(){
//     $("#BeginAjax").click(function(){
//         $.ajax({
//             type:"POST",
//             url: "http://localhost:1234",
//             dataType:"text",
//             success:function(data, dataType){
//                 alert(data);
//             },
//             error:function(x, y, z){
//                 alert(y);
//             }
//         });
//     });
// });
function CreateObj(a, b){
    this.a = a;
    this.b = b;
    this.c = function(){
        console.log("a is " + this.a + ", b is " + this.b);
    };
}

var obj = {
    a:"strA",
    b:"strB",
    c:function(){
        console.log("a is " + this.a + ", b is " + this.b);
    },
    d:function(){
        console.log("This is set by obj.");
    }
};
obj.c();

var obj2 = new CreateObj("a2", "b2");
obj2.c();
obj2.prototype = obj;
obj2.d();

