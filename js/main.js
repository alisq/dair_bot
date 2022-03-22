let text1, text2, contrast, output;

$("#generate").click(function(){
    
    text1 = $("#text01").val()
    text2 = $("#text02").val()
    contrast = $("#contrast").find(":selected").text()
    alert(contrast)


    if (contrast == "scale") {

        big = (Math.floor(Math.random()*100)+50)+"px"

        output  = `<div class="contrast--scale">
                    <h1 class="text01" style="font-size:${big}">${text1}</h1>
                    <p class="text02">${text1}</p>
                    </div>`
    
    }



    $("#output").html(output)


})