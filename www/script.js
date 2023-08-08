const { type } = require("express/lib/response");

$(document).ready(function() {
    $("#loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    });
})

function ajaxPost(){
    var formdata= {
        email: $("email").val(),
        upwd: $("upwd").val()
    }
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: window.location + "api/login",
        data: JSON.stringify(FormData),
        dataType: 'json',
        success : function(customer) {
            if(customer.valid == true){
                $("#loginform").removeClass("fail");
                $("#loginform").addClass("success");
            }else{
                $("#loginform").removeClass("success");
                $("#loginform").addClass("fail");
            }
            $("postResultDiv").html("<p>" + "Post Successfully! <br>" + "Email Address: " + customer.email + "<br>" + "Password: " +customer.upwd + "<br>" + "Valid User: " + customer.valid + "</p>");
        },
        error : function(e){
            alert("Error!")
            console.log("Error: ", e);
        }
    });
    resetData();
}

function resetData(){
    $("#email").val("");
    $("#upwd").val("");
}