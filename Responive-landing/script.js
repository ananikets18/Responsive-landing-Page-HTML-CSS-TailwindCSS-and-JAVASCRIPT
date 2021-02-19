
function mobMenu() {
    if($("#nav_menu").hasClass("hidden")){
        $("#nav_menu").removeClass("hidden");
        $("#hamburger_btn").css({display : "none"});
        $("#close_menu").css({display : "block"});
    }
    else{
        $("#nav_menu").addClass("hidden");
        $("#hamburger_btn").css({display : "block"});
        $("#close_menu").css({display : "none"});
    }
}
