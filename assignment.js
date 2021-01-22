//  https://github.com/shiblurcse/assignment3-JavaScript

// First problem -- Kilometer To Meter Convert 

function kilometerToMeter(kilometer){
    var meter

    if (kilometer < 0){// For negetive Input, it shows error message.
        meter = 'Your input is invalid'
    } else{ //For positive input
        meter = kilometer * 1000
    }
    return meter
}


// Second problem -- Budget Calculator

function budgetCalculator(watch, mobile, laptop){
    if (watch < 0){ // for invalid input
  
        console.log('Invalid Quantity')
    
      } else{
        var watchAmount = watch * 50;
      }

    if (mobile < 0){// For invalid input
  
        console.log('Invalid Quantity')
    
      } else{
        var mobileAmount = mobile * 100;
      }
    if (laptop < 0){// For invalid input
  
        console.log('Invalid Quantity')
    
      } else{
        var laptopAmount = laptop * 500;
      }
    var amount = watchAmount + mobileAmount + laptopAmount;
    return amount;
}

// Third Problem -- Hotel Cost 

function hotelCost(dayStay){
    var amount

    if (dayStay< 0){ // For negetive input
      amount = "It's not possible"  
    }
    else if (dayStay <= 10){  
      amount = dayStay * 100
    }
    else if (dayStay <=20){
        amount = 10 * 100 + (dayStay - 10) * 80 
    }
    else if (dayStay > 20){ 
      amount = 10 * 100 + 10 * 80 + (dayStay - 20) * 50
    }  
    return amount  
  }
  
// Fourth Problem -- Mega Friend 

function megaFriend(name){
    var letter = 0
    var emtyName = ""

  if (name.length == 0){// For emty input shows error
    return 'Sorry there is no name!!'
  }
    for (var i=0; i< name.length; i++){
     if (name[i].length > letter){  
        letter = name[i].length
        var biggestName = i 
      }  
    } 
    letter = name[biggestName] 
    return letter 
  }
  