'use client';

import { Container, Flex, Image, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './ValuesSection.module.css';

export function ValuesSection() {
  return (
    <>
      <div className={classes.outer}>
        <Container size="lg">
          <Title className={classes.mainTitle}>
            We are deliberate in every aspect of our culture.
          </Title>
          <SimpleGrid cols={2}>
            <div>
              <Flex className={classes.aboutValue}>
                <Image w={80} h={80} mt={'md'} mr={'lg'} src="/images/one.webp" alt="Contractor" />
                <div>
                  <Title order={3} className={classes.aboutTitle}>
                    We Give a Shit
                  </Title>
                  <Text c="dimmed" className={classes.aboutDescription}>
                    We’re a team of passionate professionals who truly care for our work and for
                    each other.
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
                    Radical Integrity
                  </Title>
                  <Text c="dimmed" className={classes.aboutDescription}>
                    We're accountable to one another and our clients to do what’s right all of the
                    time.
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
                    People First
                  </Title>
                  <Text c="dimmed" className={classes.aboutDescription}>
                    We believe that a company culture focused on people is the key to a thriving
                    business.
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
                    Process Perfection
                  </Title>
                  <Text c="dimmed" className={classes.aboutDescription}>
                    We’re driven to always improve our approach and processes.
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
                    Empower One Another
                  </Title>
                  <Text c="dimmed" className={classes.aboutDescription}>
                    We stand together as a team and support each others goals to ensure everyone is
                    successful.
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
