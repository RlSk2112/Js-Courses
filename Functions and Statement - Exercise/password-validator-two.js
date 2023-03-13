function passwordValidator (password) {


    let validators = [];

	validators.push({
		message: 'Password must be between 6 and 10 characters',
		validator: isValidLength
	});


    validators.push({
        message: 'Password must consist only of letters and digits',
        validator: isValidContent
    });


    validators.push({
        message: 'Password must have at least 2 digits',
        validator: hasEnoughDigits
    });


    let isValid = true;

    validators.forEach(validatorEntry => {
        if (!validatorEntry.validator(password)) {
            console.log(validatorEntry.message);
            isValid = false;
        }
    });

   
    if (isValid) {
        console.log('Password is valid');
    }


    function isValidLength(text) {
        return text.length >= 6 && text.length <= 10;
    }


    function isValidContent(text) {
    
        for (let index = 0; index < text.length; index++) {
            
            let currentSymbol = text.charAt(index);

            if (!isDigit(currentSymbol) && !isLetter(currentSymbol)) {
                return false;
            }
        }

        return true;

    }


    function hasEnoughDigits(text) {

        let hasTwoDigits = false;
        let digitCounter = 0;

         for (let index = 0; index < text.length; index++) {
            
            let currentSymbol = text.charAt(index);

            if (isDigit(currentSymbol)) {
                digitCounter++;
            }

            if (digitCounter == 2) {
                hasTwoDigits = true;
                break;
            }
        }

       return hasTwoDigits;
    }



    function getSymbolCode(symbol) {
        let symbolCode = symbol.charCodeAt(0);
        return symbolCode;
    }



    function isDigit(symbol) {
        let isDigit =  getSymbolCode(symbol)>= 48 && getSymbolCode(symbol) <= 57;
        return isDigit;
    }


    function isLetter(symbol) {
         let isLetter = getSymbolCode(symbol) >= 65 && getSymbolCode(symbol) <= 90 
         || getSymbolCode(symbol) >= 97 && getSymbolCode(symbol) <= 122;
         return isLetter;
    }

}

passwordValidator('MyPass123');