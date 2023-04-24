const day = document.getElementById('day');
const month = document.getElementById('month');
const year =  document.getElementById('year');

const resultDay = document.getElementById('resultDays')
const resultMonth = document.getElementById('resultMonth')
const resultYear = document.getElementById('resultYears')


function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    var years = ageDate.getUTCFullYear() - 1970;
    var months = ageDate.getUTCMonth();
    var days = ageDate.getUTCDate() - 1;
    return { years: years, months: months, days: days };
    
    
  }
  
  
const calculate = () =>{
    const valueD = day.value
    const valueM = month.value
    const valueY = year.value 
    var birthday = new Date(`${valueY}-${valueM}-${valueD}`);
    var age = calculateAge(birthday);
    resultDay.textContent = `${age.days}`
    resultMonth.innerHTML =`${age.months}`
    resultYear.innerHTML =`${age.years}`
    console.log(age);
}
  

