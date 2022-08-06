function calculator(string){
    let strArray = [], flag = 0;
    strArray = string.split(' ');
    if (strArray.length != 3) throw new Error('Incorrect');
    throwError(checkingRomanOrArabic(strArray))
    switch (strArray[1]){
        case '+' : console.log('Сумма равна' + ' ' + sum(checkingRomanOrArabic(strArray))); return sum(checkingRomanOrArabic(strArray)); break;
        case '-' : console.log('Разность равна' + ' ' + minus(checkingRomanOrArabic(strArray))); return minus(checkingRomanOrArabic(strArray)); break;
        case '*' : console.log('Произведение равно' + ' ' + proizvedenie(checkingRomanOrArabic(strArray))); return proizvedenie(checkingRomanOrArabic(strArray)); break;
        case '/' : console.log('Деление равно' + ' ' + delenie(checkingRomanOrArabic(strArray))); return delenie(checkingRomanOrArabic(strArray)); break;
        default : console.log('default throws Error')
    }
    function sum(strArray){
        let sum = 0;
        if(romanFlag() > 2){
            if (strArray[0] === '10' || strArray[2] === '10'){
                sum = arabicToRoman(strArray[0]) + arabicToRoman(strArray[2]);
                return sum;
            }
            sum =  +strArray[0] + +strArray[2];
            return arabicToRoman(String(sum));
        }
        sum = +strArray[0] + +strArray[2];
        return String(sum)
    }
    function minus(strArray){
        let minus = 0;
        if(romanFlag() > 2){
            if(+strArray[0] <= +strArray[2]) return String('');
            minus =  +strArray[0] - +strArray[2];
            return arabicToRoman(String(minus));
        }
        minus =  +strArray[0] - +strArray[2];
        return String(minus);
    }
    function proizvedenie(strArray){
        let umnozh = 0, bigRoman = 0;
        if(romanFlag() > 2){
            umnozh =  +strArray[0] * +strArray[2];
            if (umnozh > 10){
                umnozh = String(umnozh);
                if(umnozh === '100') bigRoman = 'C'
                else bigRoman = bigRomanNumber(String(umnozh[0])) + arabicToRoman(String(umnozh[1]));
                return bigRoman;
            }
            return arabicToRoman(String(umnozh));
        }
        umnozh =  +strArray[0] * +strArray[2];
        return String(umnozh);
    }
    function delenie(strArray){
        let del = 0;
        if(romanFlag() > 2){
            if(+strArray[0] < +strArray[2]) return String('');
            del = parseInt( +strArray[0] / +strArray[2]);
            return arabicToRoman(String(del));
        }
        del =  parseInt(+strArray[0] / +strArray[2]);
        return String(del);
    }
    function throwError(throwErrorArray){
        for(let i = 0; i < throwErrorArray.length; i++){
            switch (`throwErrorArray[${i}]`){
                case 'throwErrorArray[0]' :
                    if(throwErrorArray[0] > 0 && throwErrorArray[0] < 11
                        && Number.isInteger(+throwErrorArray[0]) === true) {
                        continue ;
                    }
                    else {
                        throw new Error('Incorrect');
                    }

                case 'throwErrorArray[1]' :
                    if (throwErrorArray[1] === '-' || throwErrorArray[1] === '+' || throwErrorArray[1] === '*' || throwErrorArray[1] === '/'){
                        continue ;
                    }
                    else if(throwErrorArray[1] === ' ' || throwErrorArray[1] === '') {
                        throw new Error('Incorrect');
                    }
                    else {
                        throw new Error('Incorrect');
                    }

                case 'throwErrorArray[2]' :
                    if(throwErrorArray[2] > 0 && throwErrorArray[2] < 11
                        && Number.isInteger(+throwErrorArray[2]) === true) {
                        continue ;
                    }
                    else {
                        throw new Error('Incorrect');
                    }

                default: throw new Error('Incorrect');
            }
            return throwErrorArray;
        }
    }
    function checkingRomanOrArabic(strArray){
        let changeString = [], element;
        if ((arabicNumber(strArray[0]) === true && arabicNumber(strArray[2]) === false)
            || (arabicNumber(strArray[0]) === false && arabicNumber(strArray[2]) === true) )
            throw new Error('Incorrect');
        else {
            for(let i = 0; i < strArray.length; i++){
                element = strArray[i];
                if (!isOperator(element)){
                    if (!arabicNumber(element)){
                        romanFlag();
                        changeString.push(romanToArabic(element));
                    }
                    else changeString.push(element);
                }
                else changeString.push(element);
            }
            return changeString;
        }
    }
    function romanFlag(){
        return flag++;
    }
    function bigRomanNumber(string){
        switch (string) {
            case '1':  return 'X';
            case '2':  return 'XX';
            case '3':  return 'XXX';
            case '4':  return 'XL';
            case '5':  return 'L';
            case '6':  return 'LX';
            case '7':  return 'LXX';
            case '8':  return 'LXXX';
            case '9':  return 'XC';
            case '10': return 'C';

        }
    }
    function arabicToRoman(string){
        switch (string) {
            case '0':  return '';
            case '1':  return 'I';
            case '2':  return 'II';
            case '3':  return 'III';
            case '4':  return 'IV';
            case '5':  return 'V';
            case '6':  return 'VI';
            case '7':  return 'VII';
            case '8':  return 'VIII';
            case '9':  return 'IX';
            case '10': return 'X';

        }
    }
    function romanToArabic(string){
        switch (string) {
            case 'I':    return String(1);
            case 'II':   return String(2);
            case 'III':  return String(3);
            case 'IV':   return String(4);
            case 'V':    return String(5)
            case 'VI':   return String(6);
            case 'VII':  return String(7);
            case 'VIII': return String(8);
            case 'IX':   return String(9);
            case 'X':    return String(10);

            }
    }
    function arabicNumber(string){
        switch (string) {
            case '1':  return true;
            case '2':  return true;
            case '3':  return true;
            case '4':  return true;
            case '5':  return true;
            case '6':  return true;
            case '7':  return true;
            case '8':  return true;
            case '9':  return true;
            case '10': return true;
            default: return false;

        }
    }
    function isOperator(stringElement){
        switch (stringElement) {
            case '+' : return true
            case '-' : return true
            case '*' : return true
            case '/' : return true
            default: return false
        }
    }
}
calculator('X * X');