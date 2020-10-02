/*//Calculate Tip
function calculateTip() {
    var bill = document.getElementById("bill").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("numberOfPeople").value;
  
    //validate input
    if (bill === "" || serviceQual === 0) {
      alert("Please enter values");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
    
    //Calculate tip
    var total = (bill * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);

    //Display the tip
    document.getElementById("total-tip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  }  
  
  
    //Hide the tip amount on load
    document.getElementById("total-tip").style.display = "none";
    document.getElementById("each").style.display = "none";
    
    //click to call function
    document.getElementById("calculate").onclick = function() {
      calculateTip();
    }*/




//Calculate tips
function CalculateTIp(){
  var bill = document.getElementById('bill').value;
  var serviceQual = document.getElementById('serviceQual').value;
  var noOfPeople = document.getElementById('noOfPeople').value;

  //check if value was entered
  if (bill ===''|| serviceQual == 0){
    alert('Please input value')
    return;
  } 
  //check if number of people is empty or less than 1
  if (noOfPeople === ""|| noOfPeople <= 1){
    noOfPeople = 1
    document.getElementById('each').style.display = "none"
  } else{
    document.getElementById('each').style.display = "block"
  }

  //Calculate Tip
  let tip = bill*serviceQual/noOfPeople;
  tip = Math.round(tip*100)/100;
  tip = tip.toFixed(2);
  
  //display tip
  document.getElementById('total-tip').style.display = "block"
  document.getElementById('tip').innerHTML = tip  
} 
  //Hide tip on load
  document.getElementById('total-tip').style.display= 'none'
  document.getElementById('each').style.display = 'none'
  //click to call function
  document.getElementById('calculate').onclick = function() {
    CalculateTIp();
  }

  