function updateClock () {
    let currentDate = new Date;
    let hour = (currentDate.getHours() % 12) * 30 + 90;
    let minute = currentDate.getMinutes() * 6 + 90;
    let second = currentDate.getSeconds() * 6 + 90;

    let hourHandDiv = document.querySelector('.hour-hand');
    hourHandDiv.style.transform = 'rotate(' + hour + 'deg)';

    let minHandDiv = document.querySelector('.min-hand');
    minHandDiv.style.transform = 'rotate(' + minute + 'deg)';

    let secHandDiv = document.querySelector('.second-hand');
    secHandDiv.style.transform = 'rotate(' + second + 'deg)';
  
  }

  setInterval(updateClock, 1000);