$(function() {

    $("#navbar-toggle").blur(function (event){
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapse-nav").collapse('hide');
        }
    });
    
});