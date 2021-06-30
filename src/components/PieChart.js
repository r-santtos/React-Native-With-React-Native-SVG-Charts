import React from 'react';
import {Text} from 'react-native-svg';
import {PieChart} from 'react-native-svg-charts';

function Pizza() {
  const data = [
      {
          key: 1,
          amount: 50,
          svg: { fill: '#86EBC7' },
      },
      {
          key: 2,
          amount: 40,
          svg: { fill: '#E0867E' }
      },
      {
          key: 3,
          amount: 10,
          svg: { fill: '#839ED4' }
      },
  ]

  const Labels = ({ slices }) => {
      return slices.map((slice, index) => {
          const { pieCentroid, data } = slice;
          return (
              <Text
                  key={index}
                  x={pieCentroid[ 0 ]}
                  y={pieCentroid[ 1 ]}
                  fill={'white'}
                  textAnchor={'middle'}
                  alignmentBaseline={'middle'}
                  fontSize={16}
                  stroke={'black'}
                  strokeWidth={0.2}
              >
              </Text>
          )
      })
  }

  return (
    <PieChart
        style={{ height: 175, width: '100%' }}
        valueAccessor={({ item }) => item.amount}
        data={data}
        spacing={0}
        outerRadius={'100%'}
    >
        <Labels/>
    </PieChart>
  );
}

export default Pizza;
