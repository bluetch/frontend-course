import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend, RadialLinearScale, Filler } from 'chart.js';
import { Doughnut, Line, Bar, Radar } from 'react-chartjs-2';
import './App.css';

function App() {
  ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    RadialLinearScale,
    Title,
    Filler,
    Tooltip,
    Legend
  );

  // Radar Chart
  const dataRadar = {
    labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
    datasets: [
      {
        label: '# of Votes',
        data: [9, 4, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  const optionsRadar = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Radar Chart',
      },
    },
  };
  // Doughnut Chart
  const dataDoughnut = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
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
  };
  const dataLine = {
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
  }
  const dataBar = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Dataset 1",
        data: [300, 400, 500, 600, 700, 800],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: "Dataset 2",
        data: [450, 500, 550, 600, 650, 700],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ],
  };
  
  const optionsDoughnut = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Doughnut Chart',
      },
    },
  };
  const optionsLine = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Line Chart',
      },
    },
  };
  const optionsBar = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Bar Chart',
      },
    },
  };
  return (
    <div className="App">
      <h1 className="title">My Dashboard</h1>
      <div className="grid">
        <div className="box">
          <Radar options={optionsRadar} data={dataRadar} />
        </div>
        <div className="box">
          <Doughnut options={optionsDoughnut} data={dataDoughnut} />
        </div>
        <div className="box">
          <Line options={optionsLine} data={dataLine} />
        </div>
        <div className="box">
          <Bar options={optionsBar} data={dataBar} />
        </div>
      </div>
    </div>
  );
}

export default App;