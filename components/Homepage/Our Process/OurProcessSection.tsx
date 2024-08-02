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

export function OurProcessSection() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle}>Our Process</Title>
        <div className={classes.card}>
          <SimpleGrid cols={3}>
            <Flex direction="column" align="center" ta={'center'} pt={'2rem'} px={'2rem'}>
              <ThemeIcon radius="xl" size="xl" color="blue" variant="filled">
                <CheckIcon />
              </ThemeIcon>
              <Image src={'/images/line.svg'} className={classes.line} />
              <Text className={classes.stepTitle}>Initial Consultation</Text>
              <Text className={classes.stepDescription}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis inventore iste
                deserunt accusamus? Qui quam tempora iure, iste totam dicta perspiciatis unde sint,
                esse neque blanditiis hic ipsam possimus nisi?
              </Text>
            </Flex>
            <Flex direction="column" align="center" ta={'center'} pt={'2rem'} px={'2rem'}>
              <ThemeIcon radius="xl" size="xl" color="blue" variant="filled">
                <CheckIcon />
              </ThemeIcon>
              <Image src={'/images/line.svg'} className={classes.line} />
              <Text className={classes.stepTitle}>Initial Consultation</Text>
              <Text className={classes.stepDescription}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis inventore iste
                deserunt accusamus? Qui quam tempora iure, iste totam dicta perspiciatis unde sint,
                esse neque blanditiis hic ipsam possimus nisi?
              </Text>
            </Flex>
            <Flex direction="column" align="center" ta={'center'} pt={'2rem'} px={'2rem'}>
              <ThemeIcon mb={'3.5rem'} radius="xl" size="xl" color="blue" variant="filled">
                <CheckIcon />
              </ThemeIcon>
              <Text className={classes.stepTitle}>Initial Consultation</Text>
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
