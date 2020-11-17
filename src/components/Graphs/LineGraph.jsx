import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

import dataConverter from "services/dataConverter";

export default function LineGraph(props) {
    const colors = ["#fea320", "#932bad", "#eb4946", "#19bcd0"];

    const graphColor = "#545B4E"
    return (
        <ResponsiveContainer width="100%" height={props.height}>
            <LineChart data={props.data}
                margin={{ top: 5, right: 40, left: -40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={graphColor} />
                <XAxis dataKey="name" stroke={graphColor} strokeWidth="2"/>
                <YAxis fontSize="10px" stroke={graphColor} strokeWidth="2" />
                <Tooltip />
                <Legend iconSize={20} />
                {props.keys.map((key, index) => <Line type="linear" dataKey={key} stroke={colors[index]} strokeWidth="3" dot={{strokeWidth: "4"}} />)}
            </LineChart>
        </ResponsiveContainer>
    )
}
