import {
  Button,
  HStack,
  IconButton,
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

function DashboardDrawer({ user }) {
  const toast = useToast();

  function copyToClipboard() {
    navigator.clipboard.writeText(process.env.NEXT_PUBLIC_BASE_URL + user);

    toast({
      title: 'Copied to clipboard',
      status: 'success',
      position: 'top-left',
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
          <MenuItem icon={<FaDiscord />}>Discord</MenuItem>
          <MenuItem onClick={copyToClipboard} icon={<BsClipboardCheck />}>
            Copy Link
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}

export default DashboardDrawer;
