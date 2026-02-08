const patients = [
  { age: 5, date: '2025-11-05' },
  { age: 34, date: '2025-11-05' },
  { age: 42, date: '2025-11-05' },
  { age: 8, date: '2025-11-06' },
  { age: 30, date: '2025-11-06' },
  { age: 12, date: '2025-11-07' },
  { age: 55, date: '2025-11-07' },
  { age: 60, date: '2025-11-07' },
];

const grouped = {};

patients.forEach(p => {
  const day = p.date.slice(8); // "05", "06", etc

  if (!grouped[day]) {
    grouped[day] = { child: 0, adult: 0 };
  }

  if (p.age < 18) grouped[day].child++;
  else grouped[day].adult++;
});

const chart = document.getElementById('chart');
const maxValue = 10; // scale (adjust later)

Object.entries(grouped).forEach(([day, data]) => {
  const dayEl = document.createElement('div');
  dayEl.className = 'day';

  dayEl.innerHTML = `
    <div class="bars">
      <div class="bar child" style="height:${(data.child / maxValue) * 100}%"></div>
      <div class="bar adult" style="height:${(data.adult / maxValue) * 100}%"></div>
    </div>
    <div class="label">${day} Nov</div>
  `;

  chart.appendChild(dayEl);
});