
   
   
  
     
    
  
    
  
  export default function giveChange(num) {
      let arr = num.toString().split(".");
      if (arr.length === 2) {
        if (arr[1].length === 1) {
          arr.splice(1, 1, arr[1] + "0");
        }
      }
      let arr1 = arr;
      let changBox = [];
      for (let i = 0; i <= 1; i++) {
        let num = arr1[i];
        let num1 = num % 50;
        let num2 = num1 % 20;
        let num3 = num2 % 10;
        let num4 = num3 % 5;
        let num5 = num4 % 2;
        if (i === 0) {
          if (num >= 50) {
            changBox.push(`"50 Euro" : ${parseInt(num/50)}` );
          }
          if (num1 >= 20) {
            changBox.push( `"20 Euro" : ${parseInt(num1 / 20)}`   );
          }
          if (num2 >= 10) {
            changBox.push(`"10 Euro" : ${parseInt(num2 / 10)}`  );
          }
          if (num3 >= 5) {
            changBox.push(`"5 Euro" : ${parseInt(num3 / 5)} `);
          }
          if (num4 >= 2) {
            changBox.push(`"2 Euro" : ${ parseInt(num4 / 2) }`);
          }
          if (num5 >= 1) {
            changBox.push(`"1 Euro" : ${ num5 }`);
          }
        } else {
          if (num >= 50) {
            changBox.push(`"50 Cent" : ${ parseInt(num / 50) }`);
          }
          if (num1 >= 20) {
            changBox.push(`"20 Cent" : ${ parseInt(num1 / 20) }`);
          }
          if (num2 >= 10) {
            changBox.push(`"10 Cent" : ${  parseInt(num2 / 10) }`);
          }
          if (num3 >= 5) {
            changBox.push(`"5 Cent" : ${  parseInt(num3 / 5) }`);
          }
          if (num4 >= 2) {
            changBox.push(`"2 Cent" : ${ parseInt(num4 / 2) }`);
          }
          if (num5 >= 1) {
            changBox.push(`"1 Cent" : ${  num5 }`);
          }
        }
      }
  
      return changBox.join(" , ") ;
    }
 
    
 