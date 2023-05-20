const options = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Dow 30 Index data',
      color: 'black',
      font: {
        size: 16,
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 0.5,
      borderColor: 'lightblue',
      fill: 'start',
      backgroundColor: 'lightblue',
    },
    point: {
      radius: 10,
      hitRadius: 10,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Date',
      },
      grid: {
        display: false,
      },
      display: true,
      ticks: {
        color: 'black',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Dow 30 Index',
      },
      grid: {
        display: false,
      },
      display: true,
      ticks: {
        color: 'black',
      },
    },
  },
};

export default options;
