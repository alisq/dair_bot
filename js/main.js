let text1, text2, contrast1, contrast2,contrast3, output;

$("#generate").click(function(){
    
    text1 = $("#text01").val()
    text2 = $("#text02").val()
    contrast1 = $("#contrast1").find(":selected").text()
    contrast2 = $("#contrast2").find(":selected").text()
    contrast3 = $("#contrast3").find(":selected").text()


    output = `<div class="contrast--scale">
    <h1 class="text01">${text1}</h1>
    <h1 class="text02">${text2}</h1>
    </div>`

    $("#output").html(output)


    if (contrast1 == "scale" || contrast2 == "scale" || contrast3 == "scale" ) {

        big = (Math.floor(Math.random()*100)+50)+"px"
        $(".text01").css({"font-size": big});
    
    }if (contrast1 == "direction" || contrast2 == "direction" || contrast3 == "direction"){
        
        rotate1 = "rotate("+(Math.floor(Math.random()*4)*45)+"deg)"
        rotate2 = "rotate("+(Math.floor(Math.random()*4)*45)+"deg)"

        $(".text01").css({"transform":rotate1, "max-width":"fit-content"});
        $(".text02").css({"transform":rotate2, "max-width":"fit-content"});
        $("#output").css({"margin-top": "200px", "margin-left": "150px"});

    }if (contrast1 == "weight" || contrast2 == "weight" || contrast3 == "weight"){
        heavyWeights = [700, 800, 900];
        heavy = heavyWeights[(Math.floor(Math.random()*3))%3];
        lightWeights = [200, 300, 400, 500];
        light = lightWeights[(Math.floor(Math.random()*4))%4];
        $(".text01").css({"font-weight":heavy});
        $(".text02").css({"font-weight":light});

        
    }if (contrast1 == "form" || contrast2 == "form" || contrast3 == "form"){
       
        if(contrast1 == "scale" || contrast2 == "scale" || contrast3 == "scale" ){
            $(".text01").css({"text-transform":"uppercase"});
        }else{       
            size = parseInt($(".text01").css("font-size"))-2; 
            $(".text01").css({"text-transform":"uppercase", "letter-spacing":"0.2em", "font-size": size+"px"});
            $(".text02").css({"font-size": size-10+"px"});

        }
        
    }




})