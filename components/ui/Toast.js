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
      padding={'1rem'}
      rounded={'xl'}
      margin={{ base: '10px 0 0 10px', md: '40px 0 0 40px' }}
    >
      <Stack spacing={0} flexDirection={'row'} alignItems={'center'}>
        {showIcon(status)}
        <Text
          style={{
            margin: 'auto 0 auto .5rem',
          }}
          fontWeight={'semibold'}
        >
          {title}
        </Text>
      </Stack>
    </Stack>
  );
}

export default Toast;
