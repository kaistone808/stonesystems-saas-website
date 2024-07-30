'use client';

import { Container, Text, SimpleGrid, Image } from '@mantine/core';

import classes from './AboutUsSection.module.css';

export function AboutUsSection() {
  return (
    <Container size="lg">
      <SimpleGrid className={classes.grid} cols={2}>
        <Text className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, fugit officia ipsam
          deserunt iure voluptas aperiam obcaecati dolores reprehenderit nulla porro minima eos quas
          dignissimos voluptatum harum, distinctio reiciendis perferendis. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Suscipit distinctio quisquam perspiciatis odit,
          laudantium enim atque neque consequatur. Commodi fugiat soluta recusandae consectetur
          magni nulla natus corrupti nisi dolore eveniet?
        </Text>
        <Image
          src="https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61d300b1e9f3319ca31a51fc_ProSite%20-%20Hero%20Home-p-1080.png"
          alt="About Us"
          className={classes.image}
        />
      </SimpleGrid>
    </Container>
  );
}
