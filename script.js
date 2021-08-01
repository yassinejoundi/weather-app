const Api_key = "50533d6bc20e7232b015a257acd99b8e"
document.querySelector('#search').addEventListener('click', ()=>{
    const city = document.querySelector('#city').value
    let ok = true
    let Api_data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`)
    .then((response) => {
        if (!response.ok) {
            ok = false
        } else {
            return response.json();
        }   
    })
    .then((data) => {
        if (ok) {
            document.querySelector('.state').innerText = city
            document.querySelector('.date').innerText = `${('0' + new Date().getDate()).slice(-2)}-${('0' + new Date().getMonth()).slice(-2)}-${new Date().getUTCFullYear()}`
            document.querySelector('.degre span').innerText = data.main.temp
            document.querySelector('.time').innerText = `Updated ${('0' + new Date().getHours()).slice(-2)}:${('0' + new Date().getMinutes()).slice(-2)}`
            document.querySelectorAll('.circle p')[0].innerText = data.main.humidity
            document.querySelectorAll('.circle p')[2].innerText = data.wind.speed

            switch (data.weather[0].icon) {
                case "01d":
                    document.querySelector('.icon-div i').classList = "fas fa-sun"
                    break;
                case "01n":
                    document.querySelector('.icon-div i').classList = "fas fa-ooon"
                    break;
                case "02d":
                    document.querySelector('.icon-div i').classList = "fas fa-cloud-sun"
                    break;
                case "02":
                    document.querySelector('.icon-div i').classList = "fas fa-cloud-moon"
                    break;
                case "03d":
                    document.querySelector('.icon-div i').classList = "fas fa-cloud"
                    break;
                case "03n":
                    document.querySelector('.icon-div i').classList = "fas fa-cloud"
                    break;
                case "04d":
                    document.querySelector('.icon-div i').classList = "fas fa-smog"
                    break;
                case "04n":
                    document.querySelector('.icon-div i').classList = "fas fa-smog"
                    break;
                case "09d":
                    document.querySelector('.icon-div i').classList = "fas fa-cloud-showers-heavy"
                    break;
                case "09n":
                    document.querySelector('.icon-div i').classList = "fas fa-cloud-showers-heavy"
                    break;
                case "10d":
                    document.querySelector('.icon-div i').classList = "fas fa-cloud-sun-rain"
                    break;
                case "10n":
                    document.querySelector('.icon-div i').classList = "fas fa-cloud-moon-rain"
                    break;
                case "11d":
                    document.querySelector('.icon-div i').classList = "fas fa-bolt"
                    break;
                case "11n":
                document.querySelector('.icon-div i').classList = "fas fa-bolt"
                break;
                case "13d":
                    document.querySelector('.icon-div i').classList = "fas fa-snowflake"
                    break;
                case "13n":
                    document.querySelector('.icon-div i').classList = "fas fa-snowflake"
                    break;
                case "50d":
                    document.querySelector('.icon-div i').classList = "fas fa-wind"
                    break;
                case "50n":
                    document.querySelector('.icon-div i').classList = "fas fa-wind"
                    break;
            }

            document.querySelector('.no-data').style.display = 'none'
            document.querySelector('.main').style.display = 'block'
        } else {
            document.querySelector('.no-data').style.display = 'flex'
            document.querySelector('.main').style.display = 'none'
        }
        
    })
})