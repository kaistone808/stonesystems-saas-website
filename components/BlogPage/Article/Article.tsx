import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  rem,
} from '@mantine/core';
import classes from './Article.module.css';

interface ArticleProps {
  title: string;
  imageSrc: string;
  description: string;
  writer: string;
  writerImageSrc: string;
  link: string;
}

export function Article({
  title,
  imageSrc,
  description,
  writer,
  writerImageSrc,
  link,
}: ArticleProps) {
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a href={link} target="_blank">
          <Image src={imageSrc} height={180} />
        </a>
      </Card.Section>

      <Text className={classes.title} component="a" href={link} target="_blank">
        {title}
      </Text>

      <Text className={classes.description} c="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar src={writerImageSrc} size={24} radius="xl" mr="xs" />
          <Text fz="sm" inline>
            {writer}
          </Text>
        </Center>
      </Group>
    </Card>
  );
}
