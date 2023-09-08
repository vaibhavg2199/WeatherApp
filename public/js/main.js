const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city-name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer')

const getInfo =async(e) =>{
    e.preventDefault(); 
    let cityVal=cityName.value;

    if(cityVal === ""){
        city_name.innerText = 'please write the name before search'
        datahide.classList.add('data_hide')
    }
    else{
       try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=738db9a1a87bf2fc869038b8644f984d`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const arrData = [data]
       
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        temp_status1 = arrData[0].weather[0].main;


        if(temp_status1 === 'Clear'){
            temp_status.innerHTML =
            "<i class='fa-solid fa-sun' style='color:#eccc68'></i>"
        }else if(temp_status1 === 'Clouds'){
            temp_status.innerHTML =
            "<i class='fa-solid fa-cloud' style='color:gray'></i>"
        }else if(temp_status1 === 'Rain'){
            temp_status.innerHTML =
            "<i class='fa-solid fa-cloud-rain' style='color:#a4b0be'></i>"
        }else if(temp_status1 === 'Snow'){
            temp_status.innerHTML =
            `<i class="fa-solid fa-snowflake" style='color:white'></i>`
        }
        else{
            temp_status.innerHTML =
            `<i class="fa-solid fa-ban" style="color:white;"></i>`
        }

        datahide.classList.remove('data_hide')
       }
       catch{
        city_name.innerText ='please enter the city name properly';
        datahide.classList.add('data_hide')
       }
    }
}

submitBtn.addEventListener('click',getInfo);