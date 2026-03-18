import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';



const resultData = [
  {
    "id": 1,
    "name": "Rahim",
    "physics": 85,
    "chemistry": 78,
    "math": 90
  },
  {
    "id": 2,
    "name": "Karim",
    "physics": 72,
    "chemistry": 75,
    "math": 80
  },
  {
    "id": 3,
    "name": "Ayesha",
    "physics": 95,
    "chemistry": 88,
    "math": 92
  },
  {
    "id": 4,
    "name": "Fatima",
    "physics": 88,
    "chemistry": 82,
    "math": 85
  },
  {
    "id": 5,
    "name": "Hasan",
    "physics": 70,
    "chemistry": 68,
    "math": 74
  },
  {
    "id": 6,
    "name": "Sadia",
    "physics": 80,
    "chemistry": 79,
    "math": 83
  },
  {
    "id": 7,
    "name": "Jamal",
    "physics": 65,
    "chemistry": 70,
    "math": 68
  },
  {
    "id": 8,
    "name": "Nusrat",
    "physics": 98,
    "chemistry": 94,
    "math": 97
  },
  {
    "id": 9,
    "name": "Imran",
    "physics": 76,
    "chemistry": 73,
    "math": 79
  },
  {
    "id": 10,
    "name": "Tania",
    "physics": 84,
    "chemistry": 86,
    "math": 88
  }
]

const ResultsChart = () => {
    return (
        <div>
           <LineChart width={500} height={500} data={resultData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis ></YAxis>
            <Line dataKey="math"></Line>
            <Line dataKey={"physics"} stroke='red'></Line>
           </LineChart>
        </div>
    );
};

export default ResultsChart;