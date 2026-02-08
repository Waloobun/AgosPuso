const monthYear = document.getElementById('monthYear');
const datesEl = document.getElementById('calendarDates');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentDate = new Date();

function renderCalendar() {
  datesEl.innerHTML = '';

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  monthYear.textContent = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  // Blank lang to until may first day na
  for (let i = 0; i < firstDay; i++) {
    datesEl.appendChild(document.createElement('div'));
  }

  // Days
for (let day = 1; day <= daysInMonth; day++) {
  const dateEl = document.createElement('div');
  dateEl.className = 'calendar-date';
  dateEl.textContent = day;

  // Highlight today
  if (
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear()
  ) {
    dateEl.classList.add('today');
  }

  datesEl.appendChild(dateEl);
}


}

prevBtn.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
};

nextBtn.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
};

renderCalendar();
