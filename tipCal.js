//hide elements on load
/*Moved this to top for clarity */
document.getElementById('tipDisplay').style.display = 'none';

function calTip()
{
  /* The capitalizations of your methods were off slighly, changed variable declaration to es6 for block scope. */
  let billTotal = document.getElementById('billAmt').value;
  /* Check out the type that you are getting back when you parse the value from the DOM */
  console.log(typeof billTotal);

  /* Changing variable declaration to es6 */
  let Service = document.getElementById('serviceAmt').value;
  console.log('billTotal: ' + billTotal);

  //Checks to see if billAmount is a number
  if (Number.isInteger(billTotal) === false)
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

  var TipAmt = billTotal * Service;
  document.getElementByID("tipDisplay").style.display="block";
  
  document.getElementByID("tip").innerHTML = TipAmt;
}

// passing the function to the onclick listener
document.getElementById('Cal').onclick = calTip;
