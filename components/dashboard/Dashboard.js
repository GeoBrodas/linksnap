import DashboardLayout from '../../layouts/DashboardLayout';
import { HStack, Text, VStack, Heading, Input } from '@chakra-ui/react';
import Head from 'next/head';
import EditBio from './EditBio';
import SocialLinks from './SocialLinks';

function Dashboard({ user }) {
  return (
    <DashboardLayout user={user}>
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
      <EditBio user={user} />

      {/* Social links */}
      <SocialLinks user={user} />
    </DashboardLayout>
  );
}

export default Dashboard;
