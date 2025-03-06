

/* CALENDER */
const time = document.getElementById('time');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const days = document.querySelector('.days');

function updateCalendar() {
    const now = new Date();

    // Time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    time.innerText = `${hours}:${minutes}`;

    // Day of the week
    let dayOfMonth = now.getDate();
    if (dayOfMonth % 10 == 1) {
        dayOfMonth += 'st'
    } else if (dayOfMonth % 10 == 2) {
        dayOfMonth += 'nd'
    } else if (dayOfMonth % 10 == 3) {
        dayOfMonth += 'rd'
    } else {
        dayOfMonth += 'th'
    }
    day.innerText = dayOfMonth;

    // Month
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month.innerText = months[now.getMonth()];

    // Year
    year.innerText = now.getFullYear();
}

// Initial update
updateCalendar();

// Update every second
setInterval(updateCalendar, 1000);


function daysInCalender() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 (Sunday) to 6 (Saturday)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get number of days in the month

    const days = document.querySelector('.days'); // Get the days ul
    days.innerHTML = ''; // Clear existing days

    // Adjust firstDayOfMonth to start on Monday (1) instead of Sunday (0)
    const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    // Add empty divs for the days before the 1st of the month
    for (let i = 0; i < adjustedFirstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day-item', 'empty'); // Add empty class for styling
        days.appendChild(emptyDay);
    }

    // Add divs for each day of the month
    for (let i = 1; i <= daysInMonth; i++) {
        const newDay = document.createElement('div');
        newDay.textContent = i;
        newDay.classList.add('day-item');
        newDay.onclick = () => {
            document.getElementById('todo').innerText = newDay.textContent;
        };
        days.appendChild(newDay);
    }
}

// Initial days in Calender Call
daysInCalender();