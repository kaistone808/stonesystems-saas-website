'use client';

import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Image,
  Flex,
  Divider,
  Button,
  Modal,
} from '@mantine/core';
import { IconBrandYoutube, IconBrandInstagram, IconBrandGoogle } from '@tabler/icons-react';
import classes from './Footer.module.css';
import { useDisclosure } from '@mantine/hooks';
import { CalendarPopup } from '../Popups/CalendarPopup/CalendarPopup';

const data = [
  {
    title: 'Links',
    links: [
      { label: 'Pricing', link: '/pricing' },
      { label: 'Testimonials', link: '/testimonials' },
      { label: 'Trades We Serve', link: '/trades-we-serve' },
      { label: 'Log in', link: 'https://app.stonesystems.io' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About Us', link: '/about-us' },
      { label: 'Our Process', link: '/our-process' },
      { label: 'Careers', link: '/careers' },
      { label: 'Partners', link: '/partners' },
      { label: 'Contact', link: '/contact-us' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'Functional Website', link: '/features/functional-website' },
      { label: 'Missed Call Text Back', link: '/features/missed-call-text-back' },
      { label: '5 Star Magic Funnel', link: '/features/5-star-magic-funnel' },
      { label: 'Printing Services', link: '/features/printing-services' },
    ],
  },
  {
    links: [
      { label: 'Automated Lead Follow Up', link: '/features/automated-lead-follow-up' },
      { label: 'Marketing Campaigns', link: '/features/marketing-campaigns' },
      { label: 'All-In-One Inbox', link: '/features/all-in-one-inbox' },
      { label: 'Business Phone', link: '/features/business-phone' },
      { label: 'Local SEO', link: '/features/seo' },
    ],
  },
];

export function Footer() {
  const [opened, { close, open }] = useDisclosure(false);
  const groups = data.map((group, groupIndex) => {
    const links = group.links.map((linkItem) => (
      <Text
        key={linkItem.label}
        className={classes.link}
        component="a"
        mb={'1rem'}
        href={linkItem.link}
      >
        {linkItem.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title || `group-${groupIndex}`}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size={'lg'}>
        <Flex className={classes.logo} align={'center'} justify={'space-between'} direction={'row'}>
          <Image
            className={classes.logoImage}
            src={'/images/footerlogo.png'}
            alt="logo"
            width={250}
            height={101}
          />

          <Flex className={classes.ctaDiv} align={'center'}>
            <Text className={classes.cta}>Ready to get started?</Text>
            <Button onClick={open} className={classes.button} size="md">
              Book A Call
            </Button>
            <Modal opened={opened} onClose={close} size={'xl'}>
              <CalendarPopup />
            </Modal>
          </Flex>
        </Flex>
        <Divider my={'2.5rem'} color="var(--border-color)" />
      </Container>
      <Container size={'lg'} className={classes.inner}>
        <div className={classes.bigCta}>
          <Text className={classes.description}>Want to learn more about how we can help?</Text>
          <Button onClick={open} className={classes.button} mt={'1rem'} size="xl">
            Book A Call
          </Button>
          <Modal opened={opened} onClose={close} size={'xl'}>
            <CalendarPopup />
          </Modal>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container size="lg" className={classes.afterFooter}>
        <Flex>
          <Text
            className={classes.specialLink}
            component="a"
            mr={'3rem'}
            href={'/terms-and-conditions'}
            onClick={(event) => event.preventDefault()}
          >
            Terms & Conditions
          </Text>
          <Text<'a'>
            className={classes.specialLink}
            component="a"
            href={'/privacy-policy'}
            onClick={(event) => event.preventDefault()}
          >
            Privacy Policy
          </Text>
        </Flex>
        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon
            component="a"
            href="https://www.google.com/search?sca_esv=77e9856747e8aa3f&hl=en-GB&authuser=1&biw=1633&bih=924&q=Stone%20Systems&stick=H4sIAAAAAAAAAONgU1I1qDBJsjA2MjC0TDJKtkhONk6zMqhITEw1M0wxT7EwSzE1MExJXsTKG1ySn5eqEFxZXJKaWwwAgVnOcDkAAAA&mat=CRq79qeqTJVL&ved=2ahUKEwj9_5WunP-HAxWJxAIHHRvBNKkQrMcEegQIExAD"
            size="lg"
            mx={10}
            color="white"
            variant="subtle"
          >
            <IconBrandGoogle style={{ width: rem(24), height: rem(24) }} stroke={2} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.youtube.com/@StoneSystemsGMB"
            size="lg"
            mx={10}
            color="white"
            variant="subtle"
          >
            <IconBrandYoutube style={{ width: rem(24), height: rem(24) }} stroke={2} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.instagram.com/stonesystems.io/"
            size="lg"
            mx={10}
            color="white"
            variant="subtle"
          >
            <IconBrandInstagram style={{ width: rem(24), height: rem(24) }} stroke={2} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
