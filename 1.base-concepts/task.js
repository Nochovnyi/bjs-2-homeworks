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

  const percentParam = Number(percent);
  const contributionParam = Number(contribution);
  const amountParam = Number(amount);

  const percentWarning = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  const contributionWarning = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  const amountWarning = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  const dateWarning = "Вы не указали дату";
  

  if (Number.isFinite(percentParam)) {
    
  } else {
    return percentWarning;
  }

  if (Number.isFinite(contributionParam) ) {
  
  } else { 
    return contributionWarning
  }

  if (isNaN(amountParam)) {
    return amountWarning;
  } 


    
    let bodyCredit = amountParam - contributionParam;
    creditTime = (creditTime / 1000 / 60 / 60 / 24 / 365) * 12;
    creditTime = Math.round(creditTime);
    monthPay = bodyCredit * ((percentParam/100/12) + ((percentParam/100/12) / (((1 + (percentParam/100/12))**creditTime) - 1)));
  
    totalAmount = monthPay * creditTime;
    totalAmount = totalAmount.toFixed(2);
    totalAmount = Number(totalAmount);

   

  return totalAmount;
}
