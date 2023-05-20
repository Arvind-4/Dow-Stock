import { baseUrl } from '@src/config';

let labels: Array<String> = [];

async function fetchData(start: string, end: string) {
  const res = await fetch(`${baseUrl}/api/stocks?start=${start}&end=${end}`);
  if (!res.ok) return null;
  const data = await res.json();
  labels = Object.keys(data.data).map((label) => label.slice(0, 10));
  return {
    labels: labels,
    datasets: [
      {
        data: Object.values(data.data),
      },
    ],
  };
}

export { fetchData };
