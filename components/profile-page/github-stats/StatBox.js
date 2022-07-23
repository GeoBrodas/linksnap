import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import React from 'react';

function StatBox({ title, data }) {
  return (
    <Stat color="white">
      <StatLabel fontSize="lg">{title}</StatLabel>
      {typeof data === 'string' ? (
        <StatLabel fontSize="lg" color={'whiteAlpha.700'}>
          @{data}
        </StatLabel>
      ) : (
        <StatNumber>{data}</StatNumber>
      )}
    </Stat>
  );
}

export default StatBox;
