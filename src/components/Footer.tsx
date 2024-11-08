import { ActionIcon, Container, Group, rem, Text } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { footer } from '../constant/data';

export default function Footer() {

  const groups = footer.map((group) => {
    const links = group.links.map((link, index) => (
      <Link
        key={index}
        to={link.link}
        onClick={(event) => event.preventDefault()}
        className='text-gray-400 block text-sm'
      >
        {link.label}
      </Link>
    ));

    return (
      <div className='w-40 md:flex flex-col gap-2 hidden' key={group.title}>
        <Text size='xl' fw="bold">{group.title}</Text>
       <Group display="block" className='space-y-2'>
          {links}
        </Group>
      </div>
    );
  });

  return (
    <footer className="mt-32 bg-gray-100 pt-20">
      <Container size='xl' className='flex justify-between max-md:items-center max-md:flex-col'>
        <div className='w-48 space-y-5'>
          <MantineLogo size={30} color='orange'/>
          <Text size="xs" c='gray'>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className='flex flex-wrap'>{groups}</div>
      </Container>
      <Container size='xl' className='flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-300 mt-8'>
        <Text c="gray" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group gap={0}  justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  )
}
