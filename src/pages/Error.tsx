import { Button, Container, Group, Text, Title } from "@mantine/core";

import { useNavigate } from "react-router-dom";
import Illustration from "../components/Illustration";

export default function Error() {
  const navigate = useNavigate();
  return (
    <Container className="py-20">
      <div className="relative">
        <Illustration className="absolute inset-0 text-gray-300 opacity-75" />
        <div className="relative z-10 pt-32 sm:pt-56">
          <Title className="text-center text-3xl font-extrabold sm:text-4xl">
            Nothing to see here
          </Title>
          <Text
            c="dimmed"
            size="lg"
            ta="center"
            className="mx-auto my-4 max-w-2xl"
          >
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Group justify="center">
            <Button onClick={() => navigate("/")} size="md">
              Take me back to home page
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}
