'use client';

import { Image, Container, Title, Button, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck, IconCircleDashedCheck } from '@tabler/icons-react';
import classes from './Feature4.module.css';

export function Feature4() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Referral & Remarketing campaigns</Title>
          <Text className={classes.description} mt="md">
            Generate repeat business, create loyal customers that refer others & boost your online
            presence. All without spending a penny on advertising.
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
            <List.Item>Generate repeat business</List.Item>
            <List.Item>Create loyal customers that refer others</List.Item>
            <List.Item>Boost your online reputation with positive reviews</List.Item>
            <List.Item>Generate a surge of business when the season is slow</List.Item>
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
