import { Stack, Text } from '@chakra-ui/react';
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';

function Toast({ title, status }) {
  function showIcon(status) {
    switch (status) {
      case 'success':
        return <BiCheckCircle />;

      case 'error':
        return <BiErrorCircle />;

      default:
        return <BiCheckCircle />;
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
      margin={'20px 0 0 20px'}
    >
      {showIcon(status)}
      <Text
        style={{
          marginLeft: '1rem',
        }}
      >
        {title}
      </Text>
    </Stack>
  );
}

export default Toast;
