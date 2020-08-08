let cities = {
    Moscow: 524894,
    Kyiv: 703448,
    Minsk: 625144,
    London: 2643743,
}

function createForecast(city) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${city}&appid=bb88905b8a3ce97376bed7cacebdd0c8`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {

            document.querySelector('.item__icon-1').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[0].weather[0]['icon']}@2x.png">`;
            document.querySelector('.item__temp-1').innerHTML = Math.round(data.list[0].main.temp - 273.15) + '&deg;';
            document.querySelector('.item__description-1').textContent = data.list[0].weather[0]['description'];
            document.querySelector('.item__pressure-1').innerHTML = Math.round(data.list[0].main.pressure / 1.333) + ' mm hg';
            document.querySelector('.item__icon-2').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[1].weather[0]['icon']}@2x.png">`;
            document.querySelector('.item__data-2').innerHTML = `Date and time:<br><br>${data.list[8].dt_txt}`;
            document.querySelector('.item__temp-2').innerHTML = Math.round(data.list[8].main.temp - 273.15) + '&deg;';
            document.querySelector('.item__description-2').textContent = data.list[8].weather[0]['description'];
            document.querySelector('.item__pressure-2').innerHTML = Math.round(data.list[8].main.pressure / 1.333) + ' mm hg';
            document.querySelector('.item__icon-3').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[3].weather[0]['icon']}@2x.png">`;
            document.querySelector('.item__data-3').innerHTML = `Date and time:<br><br>${data.list[16].dt_txt}`;
            document.querySelector('.item__temp-3').innerHTML = Math.round(data.list[16].main.temp - 273.15) + '&deg;';
            document.querySelector('.item__description-3').textContent = data.list[16].weather[0]['description'];
            document.querySelector('.item__pressure-3').innerHTML = Math.round(data.list[0].main.pressure / 1.333) + ' mm hg';
            document.querySelector('.item__icon-4').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[4].weather[0]['icon']}@2x.png">`;
            document.querySelector('.item__data-4').innerHTML = `Date and time:<br><br>${data.list[24].dt_txt}`;
            document.querySelector('.item__temp-4').innerHTML = Math.round(data.list[24].main.temp - 273.15) + '&deg;';
            document.querySelector('.item__description-4').textContent = data.list[24].weather[0]['description'];
            document.querySelector('.item__pressure-4').innerHTML = Math.round(data.list[24].main.pressure / 1.333) + ' mm hg';
            document.querySelector('.item__data-1').innerHTML = `Date and time:<br><br>${data.list[0].dt_txt}`;
        })
        .catch(function () {
            // catch any errors
        })
}
createForecast(cities.Moscow);

function city_check() {
    let selected_option = document.querySelector('select').value;
    if (selected_option === 'Moscow') {
        createForecast(cities.Moscow);
    }
    if (selected_option === 'Kyiv') {
        createForecast(cities.Kyiv);
    }
    if (selected_option === 'Minsk') {
        createForecast(cities.Minsk);
    }
    if (selected_option === 'London') {
        createForecast(cities.London);
    }
}