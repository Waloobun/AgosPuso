document.addEventListener('DOMContentLoaded', () => {

  // Patient per Department
  const deptCtx = document.getElementById('deptChart');
  if (deptCtx) {
    new Chart(deptCtx, {
      type: 'bar',
      data: {
        labels: ['Cons', 'OPD', 'ECG', 'Benza', 'Warfarin'],
        datasets: [{
          data: [0, 0, 0, 0, 0],
          backgroundColor: '#2d86b3',
          borderRadius: 8
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, max: 60 },
          x: { grid: { display: false } }
        }
      }
    });
  }

  // Queue Analytics
  const queueCtx = document.getElementById('queueChart');
  if (queueCtx) {
    new Chart(queueCtx, {
      type: 'bar',
      data: {
        labels: ['7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'],
        datasets: [{
          data: [0,0,0,0,0,0,0,0,0,0,0],
          backgroundColor: '#3fa9f5',
          borderRadius: 8
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, max: 100 },
          x: { grid: { display: false } }
        }
      }
    });
  }
console.log('PpD.js loaded');
});
