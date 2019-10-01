var indicators_palletclass = [
    "",
    "blue_bullet",
    "orange_bullet",
    "green_bullet"
]
function Init(){
    $(".element[data-step='1'] input")
        .addClass("active")


    $(".signup_text[data-element='1']").removeClass("hide").addClass("text_active");
    $(".indicator[data-indicator='1'] .bullet").addClass("indicator_active blue_bullet");

    setTimeout(function(){
        $(".element[data-step='1'] #icon span").removeClass("hide").addClass("show_icon");
        $(".element[data-step='1'] input").attr("placeholder","Who are you ?").focus();

    },1200)
}

function next(el,step,placeholder){
    
    $(el).parent().find("#icon").addClass("icon_active");
    
    setTimeout(function(){
        $(el).parent().find("input")
            .addClass("forward")
            .removeClass("active")
            

        $(el).parent().find("#svg").removeClass("hide").addClass("show");
        $(el).parent().find(".path").addClass("path_active");

        $(".signup_text[data-element='"+step+"']").addClass("hide");

    },600)

    setTimeout(function(){
        $(el).parent().find("input").addClass("hide d-none");
    },800)

    setTimeout(function(){

        $(el).parent().addClass("d-none");
        var x = step + 1;
        $(".element[data-step='"+x+"'] input").addClass("active");
        $(".signup_text[data-element='"+x+"']").removeClass("hide").addClass("text_active");

        switch_indicator(step,x);


        setTimeout(function(){
            $(".element[data-step='"+x+"'] #icon span")
                .removeClass("hide")
                .addClass("show_icon");

            $(".element[data-step='"+x+"'] input").attr("placeholder",placeholder).focus();

        },1200)


    },1600)

}


function switch_indicator(prev,next){
    $(".indicator[data-indicator='"+next+"'] .bullet").addClass("indicator_active "+indicators_palletclass[next]);
    $(".indicator[data-indicator='"+prev+"'] .bullet").removeClass("indicator_active "+indicators_palletclass[prev]);
}




$(document).ready(function(){

    Init();
    
});


