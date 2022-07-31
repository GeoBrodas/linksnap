import { Stack, Button, Alert, useToast } from '@chakra-ui/react';
import { useForm, FormProvider } from 'react-hook-form';

// contexts and components
import ProfileFormProvider from '../context/profile-form';
import DashboardDrawer from '../components/dashboard/DashboardDrawer';
import Footer from '../components/dashboard/layout-component/Footer';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Toast from '../components/ui/Toast';
import { useRouter } from 'next/router';

function DashboardLayout({ children, ...props }) {
  const methods = useForm();
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);
  const { data: session } = useSession();

  const toast = useToast();

  const onSubmit = async (data) => {
    if (!session.user)
      return Alert(
        'You are not logged in, if this persists, please contact support.'
      );

    if (session.user.email !== data.email)
      return alert('Use your respective email to update your profile');

    setIsLoading(true);

    // check if github username is valid
    let checkuser;
    let response;
    if (data.github) {
      try {
        response = await fetch(`https://api.github.com/users/${data.github}`);

        console.log('Checking for valid username');

        checkuser = await response.json();
        if (checkuser.message === 'Not Found') {
          setIsLoading(false);
          return toast({
            title: 'Invalid Github Username',
            status: 'error',
            position: 'top-left',
            render: () => (
              <Toast
                title={
                  checkuser.message === 'Not Found'
                    ? 'Invalid GitHub Username'
                    : checkuser.message
                }
                status={'error'}
              />
            ),
          });
        }
      } catch (error) {
        setIsLoading(false);
        return toast({
          title:
            checkuser?.message ||
            'Something went wrong, if this continues, please contact support.',
          status: 'error',
          position: 'top-left',
          render: () => <Toast title={checkuser.message} status={'error'} />,
        });
      }
    }

    // check if someone has used the github name already!

    let fetchErr;
    try {
      const res = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...data,
          imgUrl: session.user.image,
          theme: 'dark',
        }),
      });

      fetchErr = await res.json();

      console.log(fetchErr);

      setIsLoading(false);
      toast({
        title: fetchErr.message,
        status: 'success',
        position: 'top-left',
        render: () => <Toast title={fetchErr.message} status={'success'} />,
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast({
        title: fetchErr.message || 'Something went wrong, please try again',
        status: 'error',
        position: 'top-left',
        render: () => (
          <Toast
            title={fetchErr.message || 'Something went wrong, please try again'}
            status={'error'}
          />
        ),
      });
    }

    try {
      fetch(
        `/api/revalidate/GeoBrodas?secret=${process.env.NEXT_PUBLIC_MY_SECRET_TOKEN}`
      );
    } catch (error) {
      console.log(error);
      toast({
        title:
          'Error revalidating page, if changes are not saved, try again in some time!',
        status: 'error',
        position: 'top-left',
        render: () => (
          <Toast
            title={
              'Error revalidating page, if changes are not saved, try again in some time!'
            }
            status={'error'}
          />
        ),
      });
    }

    router.replace('/dashboard');
  };

  function hideButton() {
    const { name, occupation, email, country, github } = methods.watch();

    if (!name || !occupation || !email || !country || !github) return true;
  }

  function disableButton() {
    if (!props?.user?.name) return false;

    if (loading) return true;

    const {
      name,
      occupation,
      linkedin,
      twitter,
      github,
      email,
      country,
      facebook,
      devto,
      hashnode,
    } = props.user;

    if (
      methods.watch().name === name &&
      methods.watch().occupation === occupation &&
      methods.watch().linkedin === linkedin &&
      methods.watch().twitter === twitter &&
      methods.watch().github === github &&
      methods.watch().email === email &&
      methods.watch().country === country &&
      methods.watch().facebook === facebook &&
      methods.watch().devto === devto &&
      methods.watch().hashnode === hashnode
    )
      return true;
    else false;
  }

  return (
    <ProfileFormProvider>
      <FormProvider {...methods}>
        <Stack>
          <Stack
            position={'relative'}
            width={{ base: '85vw', md: '60vw' }}
            margin={'8rem auto 0'}
          >
            {/* Signout - github - discord dropdown */}
            <DashboardDrawer user={props?.user?.github} />

            <Stack position="relative">
              {/* overlay for Saving Button */}
              <Stack
                zIndex={'overlay'}
                padding={{ base: '10px', md: '4rem' }}
                position="fixed"
                bottom="0"
                right="0"
              >
                <Button
                  disabled={disableButton()}
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
                  size={'lg'}
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
