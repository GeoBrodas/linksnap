import { Stack, Button } from '@chakra-ui/react';
import { useForm, FormProvider } from 'react-hook-form';

// contexts and components
import ProfileFormProvider from '../context/profile-form';
import DashboardDrawer from '../components/dashboard/DashboardDrawer';
import Footer from '../components/dashboard/layout-component/Footer';
import { useState } from 'react';

function DashboardLayout({ children, ...props }) {
  const methods = useForm();
  const [loading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    // if (data.github !== session.user.username)
    //   return alert('Github username must match your current username');

    setIsLoading(true);
    const res = await fetch('/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ ...data, github: 'GeoBrodas' }),
    });

    const message = await res.json();
    setIsLoading(false);

    try {
      fetch(
        `/api/revalidate/GeoBrodas?secret=${process.env.NEXT_PUBLIC_MY_SECRET_TOKEN}`
      );
    } catch (error) {
      console.log(error);
    }

    console.log(message);
  };

  function hideButton() {
    const { name, occupation, email, country } = methods.watch();

    if (!name || !occupation || !email || !country) return true;
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
                  isLoading={loading}
                  loadingText={'Saving...'}
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
