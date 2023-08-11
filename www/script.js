$(document).ready(function () {
    $("#login-form").submit(function (event) {
        event.preventDefault();
        ajaxPost();
    });
    function ajaxPost() {
        var formData = {
            email: $("#email").val(),
            upwd: $("#upwd").val()
        };
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "api/login",
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function (customer) {
                if (customer.valid == true) {
                    $("#login-form").removeClass("fail");
                    $("#login-form").addClass("success");
                    window.location.href = '/test.html';
                } else {
                    $("#login-form").removeClass("success");
                    $("#login-form").addClass("fail");
                }
                $("#postResultDiv").html("<p>" + "Post Successfully! <br>" + "Email Address: " + customer.email + "</br>" +
                    "Password" + customer.upwd + "</br>" + "Valid User:" + customer.valid + "</p>");

                // Reset FormData after Posting
                resetData();
            },
            error: function (e) {
                alert("Error");
                console.log("Error:", e);
            }
        });
        resetData();
    }

    
    function resetData() {
        $("#email").val("");
        $("#upwd").val("");
    }
});