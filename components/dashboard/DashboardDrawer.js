import {
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

// icons
import { VscChevronDown } from 'react-icons/vsc';
import { FaDiscord } from 'react-icons/fa';
import { BsClipboardCheck } from 'react-icons/bs';
import { BiExit } from 'react-icons/bi';

function DashboardDrawer() {
  return (
    <HStack justify={'end'}>
      <Menu>
        <MenuButton
          as={Button}
          aria-label="Dashboard Options"
          rightIcon={<VscChevronDown />}
        >
          Options
        </MenuButton>

        <MenuList>
          <MenuItem icon={<BiExit />}>SignOut</MenuItem>
          <MenuItem icon={<FaDiscord />}>Discord</MenuItem>
          <MenuItem icon={<BsClipboardCheck />}>
            Copy Link To Clipboard
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}

export default DashboardDrawer;
