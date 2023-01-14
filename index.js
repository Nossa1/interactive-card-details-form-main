let cardHolder = document.getElementById('cardHolder').value;
let cardNumber = document.getElementById("creditNumber").value;

let monthDate = document.getElementById("monthDate").value;

let yearDate = document.getElementById("yearDate").value;

let cvcNumber = document.getElementById("cvcNumber").value;


let input = document.getElementById("creditNumber");

input.onkeydown = function () {
    if (input.value.length > 0) {

        if (input.value.length % 4 == 0) {
            input.value += " ";
        }
    }
}



function confirmation(){
   if (document.getElementById('cardHolder').value == "FELICIA LEIRE" && document.getElementById("creditNumber").value == 9591648963891011
   && document.getElementById("monthDate").value == 09 && document.getElementById("yearDate").value == 00
   && document.getElementById("cvcNumber").value == 123){
      document.getElementById("myForm").style.display = "none";
      document.getElementById("thankYou").style.display = "block";
   } else {
    document.getElementsByClassName('incoName').style.display = "block";
    document.getElementsByClassName('incoDate').style.display = "block";
    document.getElementsByClassName('incoNumber').style.display = "block";
   }

    }
   


/*
cardHolder == "FELICIA LEIRE" && creditNumber == "9591648963891011" &&
    dateMonth == "09" && dateYear == "00" && numberCvc == "123" */