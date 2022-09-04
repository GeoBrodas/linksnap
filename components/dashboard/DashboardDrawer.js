import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from '@chakra-ui/react';

// auth
import { signOut } from 'next-auth/react';

// icons
import { VscChevronDown } from 'react-icons/vsc';
import { FaDiscord } from 'react-icons/fa';
import { BsClipboardCheck } from 'react-icons/bs';
import { BiExit } from 'react-icons/bi';
import Toast from '../ui/Toast';

function DashboardDrawer({ user }) {
  const toast = useToast();

  function copyToClipboard() {
    navigator.clipboard.writeText(process.env.NEXT_PUBLIC_BASE_URL + user);

    toast({
      title: 'Copied to clipboard',
      status: 'success',
      position: 'top-left',
      render: () => <Toast title={'Copied to clipboard'} />,
    });
  }

  return (
    <HStack justify={'end'}>
      <Menu placement={'bottom-end'}>
        <MenuButton
          as={Button}
          aria-label="Dashboard Options"
          rightIcon={<VscChevronDown />}
        >
          Options
        </MenuButton>

        <MenuList bgColor={'gray.200'}>
          <MenuItem icon={<BiExit />} onClick={() => signOut()}>
            SignOut
          </MenuItem>

          <a
            href="https://discord.gg/qr6mDan55G"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MenuItem icon={<FaDiscord />}>Discord</MenuItem>
          </a>
          {user && (
            <MenuItem onClick={copyToClipboard} icon={<BsClipboardCheck />}>
              Copy Link
            </MenuItem>
          )}
        </MenuList>
      </Menu>
    </HStack>
  );
}

export default DashboardDrawer;
