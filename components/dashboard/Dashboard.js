import DashboardLayout from '../../layouts/DashboardLayout';
import { HStack, Text, VStack, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import EditBio from './EditBio';
import SocialLinks from './SocialLinks';

function Dashboard() {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>

      <HStack
        style={{
          marginTop: '2rem',
        }}
      >
        <Heading fontSize={'2xl'} variant={'orange'}>
          Edit your profile
        </Heading>
      </HStack>

      <VStack alignItems={'flex-start'}>
        <Text variant={'orange'}>Spin up your DevTree profile now!</Text>
      </VStack>

      {/* Profile Form */}
      <EditBio />

      {/* Social links */}
      <SocialLinks />
    </DashboardLayout>
  );
}

export default Dashboard;
