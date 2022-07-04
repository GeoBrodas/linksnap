import DashboardLayout from '../../layouts/DashboardLayout';
import { HStack, Stack, Text, VStack, Heading } from '@chakra-ui/react';
import Head from 'next/head';

function Dashboard() {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>

      <HStack>
        <Heading fontSize={'2xl'} variant={'orange'}>
          Dashboard
        </Heading>
      </HStack>

      <VStack alignItems={'flex-start'}>
        <Text variant={'orange'}>Spin up your DevTree profile now!</Text>
      </VStack>
    </DashboardLayout>
  );
}

export default Dashboard;
