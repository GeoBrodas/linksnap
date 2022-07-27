import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import React from 'react';

function StatBox({ title, data }) {
  return (
    <Stat color="white">
      <StatLabel fontSize="lg">{title}</StatLabel>
      {typeof data === 'string' ? (
        <StatLabel fontSize="lg" color={'#ff8906'}>
          {data}
        </StatLabel>
      ) : (
        <StatNumber color={'#ff8906'}>{data}</StatNumber>
      )}
    </Stat>
  );
}

export default StatBox;
