'use client';

import {
  Title,
  Container,
  Image,
  SimpleGrid,
  ThemeIcon,
  Text,
  Flex,
  useMantineTheme,
} from '@mantine/core';
import classes from './OurProcessSection.module.css';
import {
  IconNumber1,
  IconNumber2,
  IconNumber3,
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

export function OurProcessSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle}>What working with us looks like...</Title>
        <div className={classes.card}>
        <SimpleGrid cols={mobile ? 1 : 3}>
            <Flex direction="column" align="center" ta={'center'} px={'2rem'}>
              <ThemeIcon
                className={classes.iconThing}
                radius="100%"
                size={85}
                color="var(--yellow)"
                variant="filled"
              >
                <IconNumber1 width={40} height={40} />
              </ThemeIcon>
              <Image src={'/images/line.svg'} className={classes.line} />
              <Text className={classes.stepTitle}>
                Demo Call <br />
                (20 mins)
              </Text>
              <Text className={classes.stepDescription}>
                It's actually a sales call, we just didn't want to scare you. But seriously... we'll
                answer all your questions, show you any features you have questions about, and show
                you live client accounts & results.
              </Text>
            </Flex>
            <Flex direction="column" align="center" ta={'center'} px={'2rem'}>
              <ThemeIcon
                className={classes.iconThing}
                radius="100%"
                size={85}
                color="var(--yellow)"
                variant="filled"
              >
                <IconNumber2 width={40} height={40} />
              </ThemeIcon>
              <Image src={'/images/line.svg'} className={classes.line} />
              <Text className={classes.stepTitle}>
                We build your system <br />
                (7-10 days)
              </Text>
              <Text className={classes.stepDescription}>
                Fill out a basic onboarding form with your business details. After we have the
                correct information, we'll get to work on building your new website & marketing
                system.
              </Text>
            </Flex>
            <Flex direction="column" align="center" ta={'center'} px={'2rem'}>
              <ThemeIcon
                mb={mobile ? 10 : '3.5rem'}
                radius="100%"
                size={85}
                color="var(--yellow)"
                variant="filled"
                className={classes.iconThing}
              >
                <IconNumber3 width={40} height={40} />
              </ThemeIcon>
              <Text className={classes.stepTitle}>
                Launch Call
                <br /> (25 mins)
              </Text>
              <Text className={classes.stepDescription}>
                We'll walk you through your new website & marketing system, answer any questions you
                have, and show you how "everything" works... And by everything, we’re
                really just talking about pressing two buttons. 
              </Text>
            </Flex>
          </SimpleGrid>
        </div>
      </Container>
    </div>
  );
}
