//Function which happens upon the press of the Calculate Grade Button

$("#BtnSend").click(function () {

    //Turning the input into integers which can be used by the function.
    
    var QZ = parseInt(document.getElementById("QZ").value);
    var EX = parseInt(document.getElementById("EX").value);
    var IN = parseInt(document.getElementById("IN").value);
    var GP = parseInt(document.getElementById("GP").value);
    var AS = parseInt(document.getElementById("AS").value);

    //Calculating the final grade.

    finalGrade = ((QZ * .10)
        + (EX * .20)
        + (IN * .10)
        + (GP * .05)
        + (AS * .55))

//Displaying alert with the final grade.

    alert("Your final grade is " + finalGrade + "%." );


//Animation which removes the picture upon the pressing of the button. 
    $("#picme").fadeOut("slow");

})
