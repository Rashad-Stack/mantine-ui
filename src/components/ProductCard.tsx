import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";

export default function ProductCard() {
  const { image, title, description, country, badges } = mockdata;
  const features = badges.map((badge) => (
    <Badge
      color="orange"
      variant="light"
      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));
  return (
    <Card withBorder radius="md" p="md" className="bg-slate-300">
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className="border-b border-gray-400 px-4 pb-4" mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge color="orange" size="sm" variant="light">
            {country}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className="border-b border-gray-400 px-4 pb-4">
        <Text mt="md" className="text-xs font-bold uppercase" c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button color="orange" radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className="h-5 w-5 text-brand-orange-800" stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}

const mockdata = {
  image:
    "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
  title: "Verudela Beach",
  country: "Croatia",
  description:
    "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  badges: [
    { emoji: "☀️", label: "Sunny weather" },
    { emoji: "🦓", label: "Onsite zoo" },
    { emoji: "🌊", label: "Sea" },
    { emoji: "🌲", label: "Nature" },
    { emoji: "🤽", label: "Water sports" },
  ],
};
