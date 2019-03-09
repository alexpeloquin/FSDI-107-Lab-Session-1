//returns the square root of theNumber

//returns if theNumber is even; true or false


module.exports = {
    sqrt: function (theNumber){
        var answer = Math.sqrt(theNumber);
        return answer;
    },

    even: function (theNumber){
        var even = (theNumber % 2 ==0); //true or false
        return even;
    },
    itsValidInt: function(theNumber){
        var theInt = parseInt(theNumber);
        if(theInt) 
            return true;
        else
            return false;

    },
    itsValidFloat: function(theNumber){
        var theFloat = parseFloat(theNumber);
        if(theFloat)
            return true;
        else
            return false;
    }
};
