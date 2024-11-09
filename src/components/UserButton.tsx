import { Avatar, Group, Menu, Text, UnstyledButton, rem } from "@mantine/core";
import { IconChevronDown, IconLogout } from "@tabler/icons-react";
import { auth } from "../firebase/config";
import useGlobalState from "../hooks/useGlobalState";

export function UserButton() {
  const { user, dispatch } = useGlobalState();

  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: "pop-top-right" }}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className="flex items-center">
          <Group gap={7}>
            <Avatar
              src={user?.photoURL}
              alt={user?.displayName || "profile picture"}
              radius="xl"
              size={40}
            />
            <div className="flex flex-col gap-1">
              <Text fw={500} size="sm" lh={1} mr={3}>
                {user?.displayName}
              </Text>
              <Text size="xs" lh={1} mr={3}>
                {user?.email}
              </Text>
            </div>
            <IconChevronDown
              style={{ width: rem(12), height: rem(12) }}
              stroke={1.5}
            />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Settings</Menu.Label>
        <Menu.Item
          leftSection={
            <IconLogout
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          onClick={() => {
            auth.signOut();
            dispatch({ type: "SET_USER", payload: null });
          }}
        >
          Logout
        </Menu.Item>

        <Menu.Divider />
      </Menu.Dropdown>
    </Menu>
  );
}
