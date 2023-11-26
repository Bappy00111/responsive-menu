import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {

  const studentsData = [
    {
      name: "Student 1",
      mathematics: 85,
      physics: 78,
      biology: 92,
    },
    {
      name: "Student 2",
      mathematics: 90,
      physics: 88,
      biology: 95,
    },
    {
      name: "Student 3",
      mathematics: 76,
      physics: 82,
      biology: 89,
    },
    {
      name: "Student 4",
      mathematics: 92,
      physics: 95,
      biology: 87,
    },
    {
      name: "Student 5",
      mathematics: 80,
      physics: 91,
      biology: 84,
    },
    {
      name: "Student 6",
      mathematics: 88,
      physics: 79,
      biology: 93,
    },
    {
      name: "Student 7",
      mathematics: 94,
      physics: 86,
      biology: 78,
    },
    {
      name: "Student 8",
      mathematics: 83,
      physics: 90,
      biology: 85,
    },
    {
      name: "Student 9",
      mathematics: 89,
      physics: 92,
      biology: 91,
    },
    {
      name: "Student 10",
      mathematics: 77,
      physics: 84,
      biology: 88,
    },
  ];



  return (
    <div>
      <BarChart
        width={1000}
        height={600}
        data={studentsData}
      >
        <Bar dataKey="mathematics" fill="#2ecc71"></Bar>
        <Bar dataKey="physics" fill="#8884d8"></Bar>
        <Bar dataKey="biology" fill="#8e44ad"></Bar>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    </div>
  );
};

export default Chart;