const months = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ];
  
  setInterval(() => {
      const date = new Date();
      const monthIndex = date.getMonth();
      const month = months[monthIndex];
      const day = date.getDate();
      const year = date.getFullYear();
  
      const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
      const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
      const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
      const timezone = date.toLocaleString('ru', { timeZoneName: 'short' }).split(' ').pop();
      const formattedDate = `${day} ${month}, ${year}`;
      const formattedTime = `${timezone}: ${hours}:${minutes}:${seconds}`;
  
      document.querySelector('.current-date').textContent = formattedDate;
      document.querySelector('.current-time').textContent = formattedTime;
  }, 1);
  
