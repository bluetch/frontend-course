import { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import './App.css';

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function App() {
  const [dataDoughnut, setDataDoughnut] = useState({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });
  const [dataLine, setDataLine] = useState({
    labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013"],
    datasets: [
      {
        label: "Men",
        data: [106898, 103937, 99492, 87213, 101943, 118848, 103120],
        borderColor: 'blue',
        tension: 0,
        pointStyle: 'rect',
        pointBorderColor: 'blue',
        pointBackgroundColor: '#fff',
        showLine: true,
      },
      {
        label: "Female",
        data: [97516, 94796, 91818, 79673, 94684, 110633, 95993],
        borderColor: 'black',
        tension: 0,
        pointStyle: 'rect',
        pointBorderColor: 'black',
        pointBackgroundColor: '#fff',
        showLine: true
      }
    ]
  })
  return (
    <div className="App">
      <div className="grid">
        <div className="box">
          <h1>Doughnut Chart</h1>
          <Doughnut data={dataDoughnut} />
        </div>
        <div className="box">
          <h1>Line Chart</h1>
          <Line data={dataLine} />
        </div>
      </div>
    </div>
  );
}

export default App;
