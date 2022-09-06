import { HStack, Text, useRadioGroup } from '@chakra-ui/react';
import { useForm, useFormContext } from 'react-hook-form';
import { color } from '../profile-page/bgcolor';
import SectionLayout from './layout-component/SectionLayout';
import RadioBox from './RadioBox';

function ChangeBackgroundSelector({ user }) {
  const options = Object.keys(color);
  const methods = useForm();

  const { setValue } = useFormContext();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'backgroundColor',
    defaultValue: 'ocean',
    onChange: (value) => {
      setValue('background', value);
    },
    value:
      methods.watch().background === user.background
        ? user.background
        : methods.watch().background,
  });

  console.log(user);

  const group = getRootProps();

  return (
    <SectionLayout>
      <Text fontWeight={'bold'} fontSize={'xl'}>
        Select Background
      </Text>

      {/* Selector */}
      <HStack {...group}>
        {options.map((value, index) => {
          const radio = getRadioProps({ value });

          return (
            <RadioBox user={user} key={index} {...radio}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </RadioBox>
          );
        })}
      </HStack>
    </SectionLayout>
  );
}

export default ChangeBackgroundSelector;
