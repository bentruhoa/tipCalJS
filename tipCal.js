// function calTip(){
// var billTotal = document.getElementByID("billAmt").value;
// console.log(billTotal);

// var Service = document.getElementByID("serviceAmt").value;
// console.log(billTotal);

// //Checks to see if billAmount is a number
// if (billTotal.isInteger()== false)
// {
//   alert("Please enter the bill amount");
//   return;
// }

// // Checks to see if customer chose an option
// if(Service == -1)
//   {
//     alert("Please choose an option");
//     return;
//   }

// var TipAmt= billTotal*Service;
//   document.getElementbyID("tipDisplay").style.display="block";
  
//   document.getElementbyID("tip").innerHTML=TipAmt;
  
// }

// //hide elements on load
// document.getElementbyID("tipDisplay").style.display="none";

// //how to activie on click of button
// document.getElementbyID("Cal").onclick=function()
// {
//   calTip();
// };



//hide elements on load
/*Moved this to top for clarity */
document.getElementById('tipDisplay').style.display = 'none';

function calTip()
{
  /* The capitalizations of your methods were off slighly, changed variable declaration to es6 for block scope. */
  let billTotal = document.getElementById('billAmt').value;
  /* Check out the type that you are getting back when you parse the value from the DOM */
  console.log(typeof billTotal);
  console.log('billTotal: ' + billTotal);
  let billConvert = parseFloat(billTotal);
  console.log(typeof billConvert);
  console.log('billConvert:'+ billConvert);

  /* Changing variable declaration to es6 */
  let Service = document.getElementById('serviceAmt').value;
  console.log(typeof Service);
  let serviceConvert = parseFloat(Service);
  console.log(typeof serviceConvert);
  
  let TipAmt = billConvert * serviceConvert;
  console.log(TipAmt);
  //Checks to see if billAmount is a number
  if (billConvert <= 0)
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

  
  
  document.getElementById("tipDisplay").style.display="block";
  
  document.getElementById("tip").innerHTML = TipAmt.toFixed(2);
}

// passing the function to the onclick listener
document.getElementById('Cal').onclick = calTip;



