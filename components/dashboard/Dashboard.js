import DashboardLayout from '../../layouts/DashboardLayout';
import { HStack, Text, VStack, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import EditProfileForm from './EditProfileForm';

function Dashboard() {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>

      <HStack>
        <Heading fontSize={'2xl'} variant={'orange'}>
          Edit your profile
        </Heading>
      </HStack>

      <VStack alignItems={'flex-start'}>
        <Text variant={'orange'}>Spin up your DevTree profile now!</Text>
      </VStack>

      {/* Profile Form */}
      <EditProfileForm />
    </DashboardLayout>
  );
}

export default Dashboard;
