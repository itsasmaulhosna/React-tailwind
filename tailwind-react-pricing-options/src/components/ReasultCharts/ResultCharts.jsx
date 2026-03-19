
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import React from 'react';
const resultData=[
  {
    name: "Asma",
    class: 10,
    physics: 85,
    chemistry: 78,
    biology: 90
  },
  {
    name: "Rahim",
    class: 10,
    physics: 75,
    chemistry: 82,
    biology: 88
  },
  {
    name: "Karim",
    class: 10,
    physics: 92,
    chemistry: 80,
    biology: 85
  }
];
const ResultCharts = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
            <Line dataKey='physics'></Line>
            <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>

        </div>
    );
};

export default ResultCharts;