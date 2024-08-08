'use client';

import { Container, Flex, Image, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './ValuesSection.module.css';

export function ValuesSection() {
  return (
    <>
      <div className={classes.outer}>
        <Container size="lg">
          <Title className={classes.mainTitle}>
            Our culture? It’s no accident. We’ve crafted it with the same precision as a Tinder bio
            that actually works.
          </Title>
          <SimpleGrid cols={2}>
            <div>
              <Flex className={classes.aboutValue}>
                <Image w={80} h={80} mt={'md'} mr={'lg'} src="/images/one.webp" alt="Contractor" />
                <div>
                  <Title order={3} className={classes.aboutTitle}>
                    F*cks Given
                  </Title>
                  <Text c="dimmed" className={classes.aboutDescription}>
                    We’re in the business of giving a f*ck. And business is booming.
                  </Text>
                </div>
              </Flex>
              <Flex className={classes.aboutValue}>
                <Image
                  w={80}
                  h={55}
                  mt={'xl'}
                  mr={'lg'}
                  src="/images/icon2.webp"
                  alt="Contractor"
                />
                <div>
                  <Title order={3} className={classes.aboutTitle}>
                    Humor
                  </Title>
                  <Text c="dimmed" className={classes.aboutDescription}>
                    We're serious about results, but our team meetings might as well be stand-up
                    gigs.
                  </Text>
                </div>
              </Flex>
              <Flex className={classes.aboutValue}>
                <Image
                  w={80}
                  h={55}
                  mt={'xl'}
                  mr={'lg'}
                  src="/images/icon3.webp"
                  alt="Contractor"
                />
                <div>
                  <Title order={3} className={classes.aboutTitle}>
                    Genuine
                  </Title>
                  <Text c="dimmed" className={classes.aboutDescription}>
                    Real talk and real action. We’re genuine because anything else is boring.
                  </Text>
                </div>
              </Flex>
              <Flex className={classes.aboutValue}>
                <Image
                  w={80}
                  h={55}
                  mt={'xl'}
                  mr={'lg'}
                  src="/images/icon4.webp"
                  alt="Contractor"
                />
                <div>
                  <Title order={3} className={classes.aboutTitle}>
                    Humility
                  </Title>
                  <Text c="dimmed" className={classes.aboutDescription}>
                    We’re perfect, we've never made a mistake, not one time, ever... (wink wink).
                  </Text>
                </div>
              </Flex>
              <Flex className={classes.aboutValue}>
                <Image
                  w={80}
                  h={55}
                  mt={'xl'}
                  mr={'lg'}
                  src="/images/icon5.webp"
                  alt="Contractor"
                />
                <div>
                  <Title order={3} className={classes.aboutTitle}>
                    Integrity
                  </Title>
                  <Text c="dimmed" className={classes.aboutDescription}>
                    When we say we'll do something we do it. It's that simple.
                  </Text>
                </div>
              </Flex>
            </div>
            <Image src="/images/stone-systems-guy.png" alt="Contractor" />
          </SimpleGrid>
        </Container>
      </div>
    </>
  );
}
