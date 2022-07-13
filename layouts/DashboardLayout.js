import { Stack, Button, Text } from '@chakra-ui/react';
import { useForm, FormProvider } from 'react-hook-form';

// contexts and components
import ProfileFormProvider from '../context/profile-form';
import DashboardDrawer from '../components/dashboard/DashboardDrawer';
import Footer from '../components/dashboard/layout-component/Footer';

function DashboardLayout({ children, ...props }) {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  function hideButton() {
    const { Name, Occupation, email, country, github } = methods.watch();

    if (!Name || !Occupation || !email || !country || !github) return true;
  }

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
                  hidden={hideButton()}
                  type={'submit'}
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
          <Footer />
        </Stack>
      </FormProvider>
    </ProfileFormProvider>
  );
}

export default DashboardLayout;
