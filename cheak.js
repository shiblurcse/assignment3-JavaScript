function megaFriend(name){
    var letter = 0;
    
    for(var i=0; i< name.length; i++){
     if(name[i].length > letter){  
        letter = name[i].length;
        var biggestName = i;  
      }  
    } 
    letter = name[biggestName];  
    return letter;  
  }
  console.log(megaFriend(['shiblur', 'rahman', 'lipu', 'chutmarani']))