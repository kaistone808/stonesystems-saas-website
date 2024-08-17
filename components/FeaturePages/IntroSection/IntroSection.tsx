'use client';

import {
  Container,
  Title,
  Text,
  Flex,
  Grid,
  AspectRatio,
  Paper,
  SimpleGrid,
  List,
  useMantineTheme,
  Image,
} from '@mantine/core';
import classes from './IntroSection.module.css';
import { useMediaQuery } from '@mantine/hooks';

interface FeatureProps {
  statistics: [{ stat: string; description: string }];
  benefits: [{ title: string; description: string; icon: string }];
  title: string;
  title2: string;
  videoSrc: string;
}

export function IntroSection({ statistics, benefits, title, title2, videoSrc }: FeatureProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const benefitsContent = benefits.map((benefit) => (
    <Paper className={classes.featureInfo} radius="md" key={benefit.title}>
      <Flex align={'center'} mb={'sm'}>
        <Image src={benefit.icon} className={classes.icon} />
        <Title order={3} className={classes.infoTitle}>
          {benefit.title}
        </Title>
      </Flex>
      <Text dangerouslySetInnerHTML={{ __html: benefit.description }} />
    </Paper>
  ));
  const statsContent = statistics.map((statistic) => (
    <Paper className={classes.statistic} radius="md">
      <Text>
        <span className={classes.percentage}>{statistic.stat}</span> <br />
        {statistic.description}
      </Text>
    </Paper>
  ));

  return (
    <>
      <div className={classes.outer}>
        <Container size="lg">
          <Title className={classes.mainTitle}>{title}</Title>
          <Grid columns={18}>
            {!mobile && (
              <Grid.Col span={6}>
                <SimpleGrid className={classes.statisticDiv}>{statsContent}</SimpleGrid>
              </Grid.Col>
            )}
            <Grid.Col span={mobile ? 18 : 12}>
              <Paper className={classes.video} radius="md">
                <Title order={2} className={classes.videoTitle}>
                  See a 30 sec demo below
                </Title>
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src={videoSrc}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </AspectRatio>
              </Paper>
            </Grid.Col>
          </Grid>
          {mobile && <SimpleGrid className={classes.statisticDiv}>{statsContent}</SimpleGrid>}
        </Container>
      </div>
      <div className={classes.outer2}>
        <Container size="lg">
          <Title className={classes.mainTitle2}>{title2}</Title>
          <SimpleGrid cols={mobile ? 1 : 2}>{benefitsContent}</SimpleGrid>
        </Container>
      </div>
    </>
  );
}
