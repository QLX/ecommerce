import React from "react";
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveContainer } from "recharts";

import currencyFormatter from 'services/currencyFormatter';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


export default function CustomPieChart(props) {
    const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
        let total = 0
        dataWithArc.forEach(datum => {
            total += datum.value
        })
        total=total;

        if (props.totalSales) {
            total = currencyFormatter(total);
        }
    
        return (
            <text
                x={centerX}
                y={centerY}
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                    fontSize: '30px',
                    fontWeight: '600',
                }}
            >
                {total}
            </text>
        )
    }

    return (
        <ResponsiveContainer width="80%" height={350}>
            <ResponsivePie
                data={props.totalSales ? props.totalSales : props.products}
                layers={['slices', 'sliceLabels', 'radialLabels', 'legends', CenteredMetric]}
                margin={{ top: 30, right: 75, bottom: 40, left: 88 }}
                innerRadius={0.65}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ datum: 'data.color' }}
                borderColor={{ from: 'color', modifiers: [['darker', '0']] }}
                radialLabelsSkipAngle={2}
                radialLabelsTextXOffset={5}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={3}
                radialLabelsLinkDiagonalLength={17}
                radialLabelsLinkHorizontalLength={17}
                radialLabelsLinkStrokeWidth={3}
                radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
                sliceLabelsSkipAngle={10}
                sliceLabelsTextColor="white"
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 35,
                        itemsSpacing: 0,
                        itemWidth: 52,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </ResponsiveContainer>
    )
}