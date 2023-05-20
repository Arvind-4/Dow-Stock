import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useRef, useState } from 'react';
import { getDefaultEndDate, getDefaultStartDate } from '@src/utils/dates';
import { fetchData } from '@src/utils/data';
import options from '@src/chart/options';
import Header from '@src/components/Header';
import Loading from '@src/components/Loading';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Home() {
  const [defaultData, setDefaultData] = useState(null) as any;

  useEffect(() => {
    fetchData(getDefaultStartDate(), getDefaultEndDate()).then((data) => {
      if (data) {
        setDefaultData(data);
      }
    });
  }, []);

  const lineChartRef = useRef(null);

  function renderChart() {
    const chart = lineChartRef.current as any;
    const start = (document.getElementById('start') as HTMLInputElement).value;
    const end = (document.getElementById('end') as HTMLInputElement).value;

    fetchData(start, end).then((data) => {
      if (data) {
        setDefaultData(data);
      }
    });
    if (chart) {
      chart.data = defaultData;
      chart.update();
    }
  }
  return (
    <div>
      <Header />
      {defaultData ? (
        <Line
          data={defaultData as any}
          width={100}
          height={50}
          options={options}
          ref={lineChartRef}
        />
      ) : (
        <Loading />
      )}
      <br />
      <br />

      <div className='flex'>
        <div className='m-auto'>
          <h1 className='text-2xl'>Select Date Range ( Start and End Date)</h1>
          <br />
          <input
            id='start'
            className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500'
            defaultValue={getDefaultStartDate()}
            type='date'
            onChange={renderChart}
          />
          <br />
          <br />
          <input
            id='end'
            className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500'
            defaultValue={getDefaultEndDate()}
            type='date'
            onChange={renderChart}
          />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
