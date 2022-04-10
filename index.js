const input=document.getElementById("input_value");
const submit=document.getElementById("submit");
const city_name=document.getElementById("name");
const disp_result=document.getElementById("display");
const temp=document.getElementById("temp");

submit.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ce32b7870239008d8856db5df442b69e')
    .then(response => response.json())
    .then(data =>{
    const value_name=data['name'];
    const temp_value=data['main']['temp'];
    const display_value=data['weather'][0]['description'];
    city_name.innerText=value_name;
    disp_result.innerText=display_value;
    temp.innerText=temp_value;
    })
.catch(err => alert("Wrong City Name!"))
})
