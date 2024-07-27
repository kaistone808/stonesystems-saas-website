'use client';

import { Image, Container, Title, Button, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck, IconCircleDashedCheck } from '@tabler/icons-react';
import classes from './Feature5.module.css';

export function Feature5() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <Image
          src="https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61d300b1e9f3319ca31a51fc_ProSite%20-%20Hero%20Home-p-1080.png"
          className={classes.image}
        />

        <div className={classes.content}>
          <Title className={classes.title}>Voice Search</Title>
          <Text className={classes.description} mt="md">
            Get found through voice search when someone asks their phone to find a business like
            yours.
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
            <List.Item>Get found through Siri, Alexa & More</List.Item>
            <List.Item>Let people find you on the go</List.Item>
            <List.Item>
              Show customers you're up-to-date with the latest technology
            </List.Item>
            <List.Item>Be accessible to everyone</List.Item>
          </List>

          <Button size="md" className={classes.control}>
            Learn More
          </Button>
        </div>
      </div>
    </Container>
  );
}
