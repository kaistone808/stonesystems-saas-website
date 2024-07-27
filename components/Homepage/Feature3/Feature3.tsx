'use client';

import { Image, Container, Title, Button, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck, IconCircleDashedCheck } from '@tabler/icons-react';
import classes from './Feature3.module.css';

export function Feature3() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <Image
          src="https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61d300b1e9f3319ca31a51fc_ProSite%20-%20Hero%20Home-p-1080.png"
          className={classes.image}
        />

        <div className={classes.content}>
          <Title className={classes.title}>Missed call text back</Title>
          <Text className={classes.description} mt="md">
            Automatically follow up with missed calls via text message and never miss a lead.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="md"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCircleDashedCheck style={{ width: rem(20), height: rem(20) }} />
              </ThemeIcon>
            }
          >
            <List.Item>Never miss another lead</List.Item>
            <List.Item>Show customers you care by responding immediately</List.Item>
            <List.Item>Always stay connected</List.Item>
            <List.Item>Automatically respond 24/7</List.Item>
          </List>

          <Button size="md" className={classes.control}>
            Learn More
          </Button>
        </div>
      </div>
    </Container>
  );
}
