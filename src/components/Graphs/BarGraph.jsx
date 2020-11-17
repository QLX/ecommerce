import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

import dataConverter from "services/dataConverter";

const origDataFormat = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    series: { 
        "Subcriptions": {
            count: [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
            isActive: true,
            Background_Color: 'blue'
        }, 
        "Renewals": {
            count: [202, 243, 320, 243, 243, 243, 326, 243, 243, 243, 243, 243],
            isActive: true,
            Background_Color: 'green'
        } 
    }
}

export default function BarGraph(props) {
    const colors = ["#932bad", "#55ae59", "#19bcd0", "#eb4946"];
    const [realData, keys] = dataConverter(origDataFormat);

    return (
        <ResponsiveContainer width="110%" height={250}>
            <BarChart data={realData} barGap={0}
                margin={{ top: 5, right: 60, left: -30, bottom: 5 }}>>
                <CartesianGrid strokeDasharray="3 3" stroke="white" />
                <XAxis dataKey="name" stroke="white" strokeWidth="2"/>
                <YAxis fontSize="10px" stroke="white" strokeWidth="2" />
                <Tooltip />
                <Legend iconSize={20} />
                {keys.map((key, index) => <Bar dataKey={key} fill={colors[index]} />)}
            </BarChart>
        </ResponsiveContainer>
    )

}
