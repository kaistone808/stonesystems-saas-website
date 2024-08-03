'use client';

import {
  Title,
  Container,
  Image,
  SimpleGrid,
  ThemeIcon,
  CheckIcon,
  Text,
  Flex,
} from '@mantine/core';
import classes from './OurProcessSection.module.css';
import { IconDeviceMobile, IconSettingsCog, IconRocket } from '@tabler/icons-react';

export function OurProcessSection() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle}>Our Process</Title>
        <div className={classes.card}>
          <SimpleGrid cols={3}>
            <Flex direction="column" align="center" ta={'center'} px={'2rem'}>
              <ThemeIcon radius="xl" size={50} color="var(--yellow)" variant="filled">
                <IconDeviceMobile width={40} height={40} />
              </ThemeIcon>
              <Image src={'/images/line.svg'} className={classes.line} />
              <Text className={classes.stepTitle}>Consultation Call</Text>
              <Text className={classes.stepDescription}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis inventore iste
                deserunt accusamus? Qui quam tempora iure, iste totam dicta perspiciatis unde sint,
                esse neque blanditiis hic ipsam possimus nisi?
              </Text>
            </Flex>
            <Flex direction="column" align="center" ta={'center'} px={'2rem'}>
              <ThemeIcon radius="xl" size={50} color="var(--yellow)" variant="filled">
                <IconSettingsCog width={40} height={40} />
              </ThemeIcon>
              <Image src={'/images/line.svg'} className={classes.line} />
              <Text className={classes.stepTitle}>Buildout</Text>
              <Text className={classes.stepDescription}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis inventore iste
                deserunt accusamus? Qui quam tempora iure, iste totam dicta perspiciatis unde sint,
                esse neque blanditiis hic ipsam possimus nisi?
              </Text>
            </Flex>
            <Flex direction="column" align="center" ta={'center'} px={'2rem'}>
              <ThemeIcon mb={'3.5rem'} radius="xl" size={50} color="var(--yellow)" variant="filled">
                <IconRocket width={40} height={40} />
              </ThemeIcon>
              <Text className={classes.stepTitle}>Launch</Text>
              <Text className={classes.stepDescription}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis inventore iste
                deserunt accusamus? Qui quam tempora iure, iste totam dicta perspiciatis unde sint,
                esse neque blanditiis hic ipsam possimus nisi?
              </Text>
            </Flex>
          </SimpleGrid>
        </div>
      </Container>
    </div>
  );
}
