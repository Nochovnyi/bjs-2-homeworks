"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b**2 - (4*a*c);
  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant) )/(2*a);
    const x2 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(x1);
    arr.push(x2);
  }

  if (discriminant === 0) {
    const x1 = -b/(2*a);
    arr.push(x1);
  }


  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let monthPay;
  let dateNow = new Date().getTime();
  date = date.getTime();
  let creditTime = (+date) - (+dateNow);
  let percentWarning = `"Параметр "Процентная ставка" содержит неправильное значение ${percent}"`;
  let contributionWarning = `"Параметр "Начальный взнос" содержит неправильное значение ${contribution}"`;
  let amountWarning = `"Параметр "Общая стоимость" содержит неправильное значение ${amount}"`;
  let dateWarning = "Вы не указали дату";

  if (percent === "") {
   return percentWarning;
  }

    percent = Number(percent);

    if (percent !== percent){
   return percentWarning;
    }

    if (contribution === "") {
      return contributionWarning;
     }
     contribution = Number(contribution)
   
       if (contribution !== contribution){
      return contributionWarning;
       }

       if (amount === "") {
        return amountWarning;
       }

       amount = Number(amount);
     
         if (amount !== amount){
        return amountWarning;
         }

         if (date !== date) {
          return dateWarning;
         }

    
    let bodyCredit = amount - contribution;
    creditTime = (creditTime / 1000 / 60 / 60 / 24 / 365) * 12;
    creditTime = Math.round(creditTime);
    monthPay = bodyCredit * ((percent/100/12) + ((percent/100/12) / (((1 + (percent/100/12))**creditTime) - 1)));
  
    totalAmount = monthPay * creditTime;
    totalAmount = totalAmount.toFixed(2);
    totalAmount = Number(totalAmount);

   

  return totalAmount;
}
