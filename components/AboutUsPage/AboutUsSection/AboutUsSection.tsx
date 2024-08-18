'use client';

import {
  Container,
  Text,
  SimpleGrid,
  Image,
  ActionIcon,
  Group,
  rem,
  useMantineTheme,
} from '@mantine/core';

import classes from './AboutUsSection.module.css';
import { IconBrandFacebook, IconBrandYoutube, IconBrandInstagram, IconBrandGoogle } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

export function AboutUsSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <SimpleGrid className={classes.grid} cols={mobile ? 1 : 2}>
          <div>
            <Text className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, fugit officia ipsam
              deserunt iure voluptas aperiam obcaecati dolores reprehenderit nulla porro minima eos
              quas dignissimos voluptatum harum, distinctio reiciendis perferendis. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Suscipit distinctio quisquam
              perspiciatis odit, laudantium enim atque neque consequatur. Commodi fugiat soluta
              recusandae consectetur magni nulla natus corrupti nisi dolore eveniet?
              <br /><br />
            </Text>
            <Text className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, fugit officia ipsam
              deserunt iure voluptas aperiam obcaecati dolores reprehenderit nulla porro minima eos
              quas dignissimos voluptatum harum, distinctio reiciendis perferendis. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Suscipit distinctio quisquam
              perspiciatis odit, laudantium enim atque neque consequatur. Commodi fugiat soluta
              recusandae consectetur magni nulla natus corrupti nisi dolore eveniet?
            </Text>
            <Group
              gap={0}
              className={classes.social}
              mt={'1rem'}
              justify="flex-start"
              wrap="nowrap"
            >
              <ActionIcon
                component='a' href='https://www.google.com/search?sca_esv=77e9856747e8aa3f&hl=en-GB&authuser=1&biw=1633&bih=924&q=Stone%20Systems&stick=H4sIAAAAAAAAAONgU1I1qDBJsjA2MjC0TDJKtkhONk6zMqhITEw1M0wxT7EwSzE1MExJXsTKG1ySn5eqEFxZXJKaWwwAgVnOcDkAAAA&mat=CRq79qeqTJVL&ved=2ahUKEwj9_5WunP-HAxWJxAIHHRvBNKkQrMcEegQIExAD'
                className={classes.icon}
                size="xl"
                mr={10}
                color="var(--blue)"
                variant="subtle"
              >
                <IconBrandGoogle style={{ width: rem(60), height: rem(60) }} stroke={1.5} />
              </ActionIcon>
              <ActionIcon
              component='a' href='https://www.youtube.com/@StoneSystemsGMB'
                className={classes.icon}
                size="xl"
                mx={10}
                color="var(--blue)"
                variant="subtle"
              >
                <IconBrandYoutube style={{ width: rem(60), height: rem(60) }} stroke={1.5} />
              </ActionIcon>
              <ActionIcon
              component='a' href='https://www.instagram.com/stonesystems.io/'
                className={classes.icon}
                size="xl"
                mx={10}
                color="var(--blue)"
                variant="subtle"
              >
                <IconBrandInstagram style={{ width: rem(60), height: rem(60) }} stroke={1.5} />
              </ActionIcon>
            </Group>
          </div>
          <Image src="/images/people/kai.jpeg" alt="About Us" className={classes.image} />
        </SimpleGrid>
      </Container>
    </div>
  );
}
