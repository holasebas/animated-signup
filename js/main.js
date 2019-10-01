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
        circle_path(el);

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

        },800)


    },1500)

}


function switch_indicator(prev,next){
    $(".indicator[data-indicator='"+next+"'] .bullet").addClass("indicator_active "+indicators_palletclass[next]);
    $(".indicator[data-indicator='"+prev+"'] .bullet").removeClass("indicator_active "+indicators_palletclass[prev]);
}

function circle_path(el){
    $(el).parent().find(".path").addClass("path_active");
    setTimeout(function(){
        $(el).parent().find(".path").addClass("path_backwords");
    },350)
}




$(document).ready(function(){

     Init();
    
});


