import {
  Box,
  Burger,
  Button,
  Collapse,
  Container,
  Divider,
  Drawer,
  Flex,
  Group,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import { Link, NavLink } from "react-router-dom";
import { navbar } from "../constant/data";
import useGlobalState from "../hooks/useGlobalState";
import { UserButton } from "./UserButton";

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened] = useDisclosure(false);
  const { user } = useGlobalState();

  const links = navbar.map((item) => (
    <NavLink
      key={item.url}
      to={item.url}
      onClick={closeDrawer}
      className={({ isActive }) =>
        `text-orange-400 ${isActive ? "font-bold underline underline-offset-2" : ""}`
      }
    >
      {item.name}
    </NavLink>
  ));

  return (
    <Box className="sticky top-0 z-50 border-b bg-white/25 backdrop-blur-sm">
      <header>
        <Container size="xl" py="sm">
          <Group justify="space-between" h="100%">
            <MantineLogo size={30} color="orange" />

            <Group h="100%" gap="lg" visibleFrom="sm">
              {links}
            </Group>

            <Group visibleFrom="sm">
              {user ? (
                <UserButton />
              ) : (
                <Link to="/auth">
                  <Button bg="orange">Log in</Button>
                </Link>
              )}
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </Group>
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <Collapse in={linksOpened}>{links}</Collapse>
          <Flex pb="xl" px="md" direction="column">
            {links}
          </Flex>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            {user ? (
              <UserButton />
            ) : (
              <Link to="/login">
                <Button bg="orange">Log in</Button>
              </Link>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
