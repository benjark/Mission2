//Function which happens upon the press of the Calculate Grade Button

$("#BtnSend").click(function () {

    //Turning the input into integers which can be used by the function.

    var QZ = parseInt($("#QZ").val(), 10);
    var EX = parseInt($("#EX").val(), 10);
    var IN = parseInt($("#IN").val(), 10);
    var GP = parseInt($("#GP").val(), 10);
    var AS = parseInt($("#AS").val(), 10);

    //Calculating the final grade and letter grade.

    finalGrade = ((QZ * .10)
        + (EX * .20)
        + (IN * .10)
        + (GP * .05)
        + (AS * .55))

    if (finalGrade >= 94)
        letterGrade = "A";
    else if (finalGrade >= 90)
        letterGrade = "A-";
    else if (finalGrade >= 87)
        letterGrade = "B+";
    else if (finalGrade >= 84)
        letterGrade = "B";
    else if (finalGrade >= 80)
        letterGrade = "B-";
    else if (finalGrade >= 77)
        letterGrade = "C+";
    else if (finalGrade >= 74)
        letterGrade = "C";
    else if (finalGrade >= 70)
        letterGrade = "C-";
    else if (finalGrade >= 67)
        letterGrade = "D+";
    else if (finalGrade >= 64)
        letterGrade = "D";
    else if (finalGrade >= 60)
        letterGrade = "D-";
    else
        letterGrade = "F";

//Displaying alert with the final grade.

    alert("Your final grade is " + finalGrade + "%." + " This means your letter grade is a(n) " + letterGrade + "." );


//Animation which removes the picture upon the pressing of the button. 

    $("#picme").fadeOut("slow");

})
