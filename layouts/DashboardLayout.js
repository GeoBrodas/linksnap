import { Stack, Button, Text } from '@chakra-ui/react';
import DashboardDrawer from '../components/dashboard/DashboardDrawer';
import ProfileFormProvider from '../context/profile-form';
import { useForm, FormProvider } from 'react-hook-form';

function DashboardLayout({ children, ...props }) {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ProfileFormProvider>
      <FormProvider {...methods}>
        <Stack>
          <Stack position={'relative'} width={'60vw'} margin={'8rem auto 0'}>
            {/* Signout - github - discord dropdown */}
            <DashboardDrawer />

            <Stack position="relative">
              {/* overlay for Saving Button */}
              <Stack
                zIndex={'overlay'}
                padding={'4rem'}
                position="fixed"
                bottom="0"
                right="0"
              >
                <Button
                  type={'submit'}
                  form="hook-form"
                  // zooom animation
                  _hover={{
                    transform: 'scale(1.06)',
                    transition: 'all 0.1s ease-in-out',
                  }}
                  rounded={'2xl'}
                  bgColor={'#ff8906'}
                  color={'#fffffe'}
                  onClick={methods.handleSubmit(onSubmit)}
                >
                  Save changes ✨
                </Button>
              </Stack>

              {children}
            </Stack>
          </Stack>

          {/* Footer */}
          <Stack
            style={{
              margin: '6rem 0 0',
              width: '100%',
            }}
            bgColor={'#fffffe'}
            paddingY={'2rem'}
          >
            <Stack width={'60vw'} marginX={'auto'}>
              <Text color={'gray.500'}>
                ©{new Date().getFullYear()} DevTree. All rights reserved
              </Text>
              <Text color={'gray.500'} fontStyle={'italic'}>
                Built using Chakra-Ui💖 + PlanetScale🚀
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </FormProvider>
    </ProfileFormProvider>
  );
}

export default DashboardLayout;
