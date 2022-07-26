import { Stack, Text } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { VscError } from 'react-icons/vsc';

function Toast({ title, status }) {
  function showIcon(status) {
    switch (status) {
      case 'success':
        return <FaCheckCircle size={'1.3rem'} />;

      case 'error':
        return <VscError size={'1.3rem'} />;

      default:
        return <FaCheckCircle size={'1.3rem'} />;
    }
  }

  return (
    <Stack
      spacing={0}
      flexDirection={'row'}
      bgColor={'white'}
      alignItems={'center'}
      padding={'1rem 0 0 1rem'}
      rounded={'xl'}
      margin={'40px 0 0 40px'}
    >
      {showIcon(status)}
      <Text
        style={{
          marginLeft: '1rem',
        }}
        fontWeight={'semibold'}
      >
        {title}
      </Text>
    </Stack>
  );
}

export default Toast;
