'use client';

import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Image,
} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import {
  IconDeviceMobileVibration,
  IconStarFilled,
  IconReport,
  IconSpeakerphone,
  IconSearch,
  IconPrinter,
  IconChevronDown,
  IconAppWindow,
  IconFileAnalytics,
  IconBlockquote,
  IconBrandYoutube,
  IconHeartHandshake,
  IconMail,
  IconNotebook,
  IconTimeline,
  IconUsers,
  IconDeviceDesktop,
} from '@tabler/icons-react';
import classes from './Header.module.css';

const mockdata = [
  {
    icon: IconAppWindow,
    title: 'Functional Website',
    description: 'Get a lead-generating Website in just days',
    href: '/features/functional-website',
  },
  {
    icon: IconDeviceMobileVibration,
    title: 'Missed Call Text Back',
    description: 'Automatically text back missed calls',
    href: '/features/missed-call-text-back',
  },
  {
    icon: IconStarFilled,
    title: '5-Star Magic Funnel',
    description: 'Get more 5 star reviews and prevent bad ones',
    href: '/features/5-star-magic-funnel',
  },
  {
    icon: IconSearch,
    title: 'Blog Posts',
    description: 'Keep your audience engaged',
    href: '/features/blog-posts',
  },
  {
    icon: IconSpeakerphone,
    title: 'Voice Search',
    description: 'Get found on voice search',
    href: '/features/voice-search',
  },
  {
    icon: IconPrinter,
    title: 'Printing Services',
    description: 'Put your business out there both on and offline',
    href: '/features/printing-services',
  },
  {
    icon: IconReport,
    title: 'Automated SMS Lead Follow Up',
    description: 'Automatically follow up with leads via text',
    href: '/features/automated-sms-lead-follow-up',
  },
  {
    icon: IconFileAnalytics,
    title: 'Business Info Synchronization',
    description: 'Put your business on hundreds of websites',
    href: '/features/business-info-sync',
  },
  {
    icon: IconFileAnalytics,
    title: 'Reputation Management',
    description: 'Reactivate old leads and customers',
    href: '/features/reputation-management',
  },
  {
    icon: IconFileAnalytics,
    title: 'Marketing Campaigns',
    description: 'Keep your audience thinking about you',
    href: '/features/marketing-campaigns',
  },
  {
    icon: IconFileAnalytics,
    title: 'All-In-One Inbox',
    description: 'Get all your messages in one place',
    href: '/features/all-in-one-inbox',
  },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton
      component="a"
      href={item.href}
      pt={'md'}
      pb={'md'}
      pr={'xl'}
      pl={'md'}
      className={classes.subLink}
      key={item.title}
    >
      <Group wrap="nowrap" align="center">
        <ThemeIcon size={52} variant="default" radius="md" bd={'none'} bg={'#F1F1F1'}>
          <item.icon style={{ width: rem(32), height: rem(32) }} color={'#000000'} />
        </ThemeIcon>
        <div>
          <Text className={classes.subLinkTitle} fw={500}>
            {item.title}
          </Text>
          <Text className={classes.subLinkDescription} c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" w="75em" h="100%">
          <a href="/" className={classes.link}>
            <Image src={'/images/logo.png'} w={200} />
          </a>
          <Group h="100%" gap={0} visibleFrom="sm">
            <HoverCard width={900} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Product
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={'#000000'}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Text fw={500}>Systems & Features</Text>

                <Divider my="sm" />

                <SimpleGrid cols={3} spacing={0}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            <a href="/pricing" className={classes.link}>
              Pricing
            </a>
            <a href="/testimonials" className={classes.link}>
              Testimonials
            </a>
            <a href="/trades-we-serve" className={classes.link}>
              Trades We Serve
            </a>
            <HoverCard width={350} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Company
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={'#000000'}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <SimpleGrid cols={1} spacing={0}>
                  <UnstyledButton
                    component="a"
                    href="/about-us"
                    pt={'md'}
                    pb={'md'}
                    pr={'xl'}
                    pl={'md'}
                    className={classes.subLink}
                  >
                    <Group wrap="nowrap" align="center">
                      <ThemeIcon size={52} variant="default" radius="md" bd={'none'} bg={'#F1F1F1'}>
                        <IconUsers style={{ width: rem(32), height: rem(32) }} color={'#000000'} />
                      </ThemeIcon>
                      <div>
                        <Text className={classes.subLinkTitle} fw={500}>
                          {'About Us'}
                        </Text>
                        <Text className={classes.subLinkDescription} c="dimmed">
                          {'Get to know StoneSystems'}
                        </Text>
                      </div>
                    </Group>
                  </UnstyledButton>
                  <UnstyledButton
                    component="a"
                    href="/our-process"
                    pt={'md'}
                    pb={'md'}
                    pr={'xl'}
                    pl={'md'}
                    className={classes.subLink}
                  >
                    <Group wrap="nowrap" align="center">
                      <ThemeIcon size={52} variant="default" radius="md" bd={'none'} bg={'#F1F1F1'}>
                        <IconTimeline
                          style={{ width: rem(32), height: rem(32) }}
                          color={'#000000'}
                        />
                      </ThemeIcon>
                      <div>
                        <Text className={classes.subLinkTitle} fw={500}>
                          {'Our Process'}
                        </Text>
                        <Text className={classes.subLinkDescription} c="dimmed">
                          {'Discover how we work'}
                        </Text>
                      </div>
                    </Group>
                  </UnstyledButton>
                  <UnstyledButton
                    component="a"
                    href="/our-work"
                    pt={'md'}
                    pb={'md'}
                    pr={'xl'}
                    pl={'md'}
                    className={classes.subLink}
                  >
                    <Group wrap="nowrap" align="center">
                      <ThemeIcon size={52} variant="default" radius="md" bd={'none'} bg={'#F1F1F1'}>
                        <IconDeviceDesktop
                          style={{ width: rem(32), height: rem(32) }}
                          color={'#000000'}
                        />
                      </ThemeIcon>
                      <div>
                        <Text className={classes.subLinkTitle} fw={500}>
                          {'Our Work'}
                        </Text>
                        <Text className={classes.subLinkDescription} c="dimmed">
                          {'See some of our previous work'}
                        </Text>
                      </div>
                    </Group>
                  </UnstyledButton>
                  <UnstyledButton
                    component="a"
                    href="/careers"
                    pt={'md'}
                    pb={'md'}
                    pr={'xl'}
                    pl={'md'}
                    className={classes.subLink}
                  >
                    <Group wrap="nowrap" align="center">
                      <ThemeIcon size={52} variant="default" radius="md" bd={'none'} bg={'#F1F1F1'}>
                        <IconNotebook
                          style={{ width: rem(32), height: rem(32) }}
                          color={'#000000'}
                        />
                      </ThemeIcon>
                      <div>
                        <Text className={classes.subLinkTitle} fw={500}>
                          {'Careers'}
                        </Text>
                        <Text className={classes.subLinkDescription} c="dimmed">
                          {'Join the team'}
                        </Text>
                      </div>
                    </Group>
                  </UnstyledButton>
                  <UnstyledButton
                    component="a"
                    href="/partners"
                    pt={'md'}
                    pb={'md'}
                    pr={'xl'}
                    pl={'md'}
                    className={classes.subLink}
                  >
                    <Group wrap="nowrap" align="center">
                      <ThemeIcon size={52} variant="default" radius="md" bd={'none'} bg={'#F1F1F1'}>
                        <IconHeartHandshake
                          style={{ width: rem(32), height: rem(32) }}
                          color={'#000000'}
                        />
                      </ThemeIcon>
                      <div>
                        <Text className={classes.subLinkTitle} fw={500}>
                          {'Partners'}
                        </Text>
                        <Text className={classes.subLinkDescription} c="dimmed">
                          {'Meet our partners'}
                        </Text>
                      </div>
                    </Group>
                  </UnstyledButton>
                  <UnstyledButton
                    component="a"
                    href="/contact-us"
                    pt={'md'}
                    pb={'md'}
                    pr={'xl'}
                    pl={'md'}
                    className={classes.subLink}
                  >
                    <Group wrap="nowrap" align="center">
                      <ThemeIcon size={52} variant="default" radius="md" bd={'none'} bg={'#F1F1F1'}>
                        <IconMail style={{ width: rem(32), height: rem(32) }} color={'#000000'} />
                      </ThemeIcon>
                      <div>
                        <Text className={classes.subLinkTitle} fw={500}>
                          {'Contact'}
                        </Text>
                        <Text className={classes.subLinkDescription} c="dimmed">
                          {'Chat with us'}
                        </Text>
                      </div>
                    </Group>
                  </UnstyledButton>
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Group visibleFrom="sm">
            <Button
              className={classes.button}
              size="lg"
              variant="default"
              bg={'transparent'}
              bd={'none'}
            >
              Log In
            </Button>
            <Button className={classes.button} size="lg" bg="var(--yellow)" color="var(--gray)">
              Get Started
            </Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
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

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Systems & Features
              </Box>
              <IconChevronDown style={{ width: rem(16), height: rem(16) }} color={'#000000'} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
