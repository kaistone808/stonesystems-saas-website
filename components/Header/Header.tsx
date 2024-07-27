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
} from '@tabler/icons-react';
import classes from './Header.module.css';

const mockdata = [
  {
    icon: IconAppWindow,
    title: 'Functional Website',
    description: 'Get a lead-generating Website in just days',
  },
  {
    icon: IconDeviceMobileVibration,
    title: 'Missed Call Text Back',
    description: 'Automatically text back missed calls',
  },
  {
    icon: IconReport,
    title: 'Automated Lead Follow Up',
    description: 'Automatically follow up with leads via text',
  },
  {
    icon: IconStarFilled,
    title: '5 Star Only Review',
    description: 'Get more 5 star reviews and prevent bad ones',
  },
  {
    icon: IconSearch,
    title: 'Bi-Weekly Blog Postss',
    description: 'Keep your audience engaged',
  },
  {
    icon: IconSpeakerphone,
    title: 'VoiceSearch',
    description: 'Get found on voice search',
  },
  {
    icon: IconPrinter,
    title: 'Printing Services',
    description: 'Put your business out there both on and offline',
  },
  {
    icon: IconFileAnalytics,
    title: 'Marketing Campaigns',
    description: 'Keep your audience thinking about you',
  },
  {
    icon: IconFileAnalytics,
    title: 'Reputation Management',
    description: 'Reactivate old leads and customers',
  },
  {
    icon: IconFileAnalytics,
    title: 'All-In-One Inbox',
    description: 'Get all your messages in one place',
  },
  {
    icon: IconFileAnalytics,
    title: 'Business Info Synchronization',
    description: 'Put your business on hundreds of websites',
  },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton pt={'md'} pb={'md'} pr={'xl'} className={classes.subLink} key={item.title}>
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
        <Group justify="space-between" h="100%">
          <MantineLogo size={30} />

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
                  <UnstyledButton pt={'md'} pb={'md'} className={classes.subLink}>
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
                  <UnstyledButton pt={'md'} pb={'md'} className={classes.subLink}>
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
                  <UnstyledButton pt={'md'} pb={'md'} className={classes.subLink}>
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
                  <UnstyledButton pt={'md'} pb={'md'} className={classes.subLink}>
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
                  <UnstyledButton pt={'md'} pb={'md'} className={classes.subLink}>
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
            <a href="#" className={classes.link}>
              Pricing
            </a>
            <a href="#" className={classes.link}>
              Testimonials
            </a>
            <a href="#" className={classes.link}>
              Trades We Serve
            </a>
            <HoverCard width={350} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Resources
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
                  <UnstyledButton pt={'md'} pb={'md'} className={classes.subLink}>
                    <Group wrap="nowrap" align="center">
                      <ThemeIcon size={52} variant="default" radius="md" bd={'none'} bg={'#F1F1F1'}>
                        <IconBlockquote
                          style={{ width: rem(32), height: rem(32) }}
                          color={'#000000'}
                        />
                      </ThemeIcon>
                      <div>
                        <Text className={classes.subLinkTitle} fw={500}>
                          {'Blog'}
                        </Text>
                        <Text className={classes.subLinkDescription} c="dimmed">
                          {"Let's Build your business together"}
                        </Text>
                      </div>
                    </Group>
                  </UnstyledButton>
                  <UnstyledButton pt={'md'} pb={'md'} className={classes.subLink}>
                    <Group wrap="nowrap" align="center">
                      <ThemeIcon size={52} variant="default" radius="md" bd={'none'} bg={'#F1F1F1'}>
                        <IconBrandYoutube
                          style={{ width: rem(32), height: rem(32) }}
                          color={'#000000'}
                        />
                      </ThemeIcon>
                      <div>
                        <Text className={classes.subLinkTitle} fw={500}>
                          {'Youtube'}
                        </Text>
                        <Text className={classes.subLinkDescription} c="dimmed">
                          {'Learn directly from the best'}
                        </Text>
                      </div>
                    </Group>
                  </UnstyledButton>
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Get started</Button>
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
