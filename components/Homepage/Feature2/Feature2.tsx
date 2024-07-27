'use client';

import { Image, Container, Title, Button, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck, IconCircleDashedCheck } from '@tabler/icons-react';
import classes from './Feature2.module.css';

export function Feature2() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>5-Star Only Reviews</Title>
          <Text className={classes.description} mt="md">
            Automatically prevent bad reviews from being published and only get 5-star reviews.
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
            <List.Item>Never get bad reviews again</List.Item>
            <List.Item>Become more reputable online</List.Item>
            <List.Item>
              Get notified when someone tried to leave a bad review
            </List.Item>
            <List.Item>Ask for reviews, knowing you're protected</List.Item>
          </List>

          <Button size="md" className={classes.control}>
            Learn More
          </Button>
        </div>
        <Image
          src="https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61d300b1e9f3319ca31a51fc_ProSite%20-%20Hero%20Home-p-1080.png"
          className={classes.image}
        />
      </div>
    </Container>
  );
}
