let text1, text2, contrast, output;

$("#generate").click(function(){
    
    text1 = $("#text01").val()
    text2 = $("#text02").val()
    contrast = $("#contrast").find(":selected").text()



    if (contrast == "scale") {

        big = (Math.floor(Math.random()*100)+50)+"px"

        output  = `<div class="contrast--scale">
                    <h1 class="text01" style="font-size:${big}">${text1}</h1>
                    <p class="text02">${text1}</p>
                    </div>`
    
    } else if (contrast == "direction"){

        rotate1 = "rotate("+(Math.floor(Math.random()*4)*45)+"deg)"
        rotate2 = "rotate("+(Math.floor(Math.random()*4)*45)+"deg)"

        output  = `<div class="contrast--direction">
                    <h3 class="text01" style="transform:${rotate1}">${text1}</h1>
                    <h3 class="text02" style="transform:${rotate2}">${text2}</h1>
                    </div>`

    }

    console.log(output)

    $("#output").html(output)


})