 // Function to update the current time every second
  function updateTime() {
    const timeInfo = document.getElementById('time-info');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    timeInfo.innerHTML = `Current Time: ${formattedTime}`;
  }
  
  
  // Call the updateTime function every second
  setInterval(updateTime, 1000);