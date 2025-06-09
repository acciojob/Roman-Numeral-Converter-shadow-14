function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	 let ones = {"","I","II","III","IV","V","VI","VII","VIII","IX"};
        let tens = {"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"};
        let hrns = {"","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"};
        let ths={"","M","MM","MMM"};
        
        return ths[num/1000] + hrns[(num%1000)/100] + tens[(num%100)/10] + ones[num%10

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
