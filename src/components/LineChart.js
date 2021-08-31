import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
export default function LineChart({ toDay, todayMinusTen }) {
  const [bitcoinData, setBitcoinData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nomics.com/v1/exchange-rates/history?key=d243749c51db1d292f6854e14d68e1f162cb5686&currency=BTC&start=${todayMinusTen}T00%3A00%3A00Z&end=${toDay}T00%3A00%3A00Z`
    )
      .then((response) => response.json())
      .then((data) => {
        setBitcoinData(data);
      })
      .catch((error) => console.error(error));
  }, [todayMinusTen, toDay]);

  return (
    <div>
      <Line
        data={{
          labels: bitcoinData.map((date) => date?.timestamp),
          datasets: [
            {
              label: "USD/BITCOIN",
              data: bitcoinData.map((rates) => Number(rates?.rate)),
              borderColor: ["rgba(44, 130, 201, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 10,
            },
          },
        }}
      />
    </div>
  );
}
