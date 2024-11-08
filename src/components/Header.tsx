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
import { NavLink } from "react-router-dom";
import { navbar } from "../constant/data";
import auth from "../firebase/config";
import { UserButton } from "./UserButton";

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened] = useDisclosure(false);

  const user = auth.currentUser;

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
    <Box>
      <header className="sticky">
        <Container size="xl" py="sm">
          <Group justify="space-between" h="100%">
            <MantineLogo size={30} color="orange" />

            <Group h="100%" gap="lg" visibleFrom="sm">
              {links}
            </Group>

            <Group visibleFrom="sm">
              {user ? <UserButton /> : <Button bg="orange">Log in</Button>}
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
            {user ? <UserButton /> : <Button bg="orange">Log in</Button>}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
