function calTip(){
var billTotal = document.getElementByID("billAmt").value;

var Service = document.getElementByID("serviceAmt").value;

//Checks to see if billAmount is a number
if (billTotal.isInteger()== false)
{
  alert("Please enter the bill amount");
  return;
}

// Checks to see if customer chose an option
if(Service == -1)
  {
    alert("Please choose an option");
    return;
  }

var TipAmt= billTotal*Service;
  document.getElementbyID("tipDisplay").style.display="block";
  
  document.getElementbyID("tip").innerHTML=TipAmt;
  
}

//hide elements on load
document.getElementbyID("tipDisplay").style.display="none";

//how to activie on click of button
document.getElementbyID("Cal").onclick=function()
{
  calTip();
};