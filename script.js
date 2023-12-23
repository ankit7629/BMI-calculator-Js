// BMI = Body mass index


const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calculate = document.getElementById('cal');
const bmi_value = document.getElementById('bmi-value');
const bmi_status = document.getElementById('bmi-status');

calculate.addEventListener('click', () =>{
    if(height.value === '' || weight.value === ""){
        alert('Plese enter the height and weight value');
        return
    }else{
        let h = height.value/100;
        let bmi = weight.value/ (h*h)
        bmi_value.innerHTML = bmi.toFixed(2);
        if(bmi <= 18.4){
            bmi_status.textContent = 'Underweight';
        }else if( bmi >= 18.5 && bmi <= 24.9){
            bmi_status.textContent = 'Normal'
        }else if( bmi >= 25 && bmi <= 29.9){
            bmi_status.textContent = 'Overweight';
        }else if(bmi >= 30){
            bmi_status.textContent = 'Obese';
        }
    }
});

