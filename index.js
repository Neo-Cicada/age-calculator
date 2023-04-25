const day = document.getElementById('day');
const month = document.getElementById('month');
const year =  document.getElementById('year');

const resultDay = document.getElementById('resultDays');
const resultMonth = document.getElementById('resultMonth');
const resultYear = document.getElementById('resultYears');

const errorone = document.getElementsByClassName('errorone')[0];
const errortwo = document.getElementsByClassName('errortwo')[0];
const errorthree = document.getElementsByClassName('errorthree')[0];


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


    console.log(valueD)
    console.log(valueM)
    console.log(valueY)
    const torf = validate(valueD, valueM, valueY);
    console.log(torf)
    if(torf){
    var birthday = new Date(`${valueY}-${valueM}-${valueD}`);
   
   
    
    var age = calculateAge(birthday);
    resultDay.textContent = `${age.days}`
    resultMonth.innerHTML =`${age.months}`
    resultYear.innerHTML =`${age.years}`
    console.log(age);
    }
  
  else{
    for(var i = 0; i<3; i++){
      const label = document.getElementsByClassName('label')[i].style.color= "red";
    }
    for(var i = 0; i<3; i++){
      const border = document.getElementsByTagName('input')[i].style.border = "1px solid red";
    }
    


    errorone.innerHTML = "Must be a valid day";
    errortwo.innerHTML = "Must be a valid month"
    errorthree.innerHTML = "Must be a valid year";
    console.log('error')
  }
}

const validate = (d, m, y) => {
  const vd = d < 31 && d > 1;
  const vm = m < 12 && m > 1;
  const vy = y < 2023 && y > 1920

  if(vd && vm && vy){
    return(true)    
  }
  else{
    return(false)
  }
}
