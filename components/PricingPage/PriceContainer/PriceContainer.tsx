'use client';

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useState } from 'react';
import Switch from 'react-switch';
import classes from './PriceContainer.module.css';

export const PriceContainer = () => {
  const theme = useMantineTheme();
  const [monthly, setMonthly] = useState(true);

  const handleChange = () => {
    setMonthly(!monthly);
  };

  return (
    <>
      <div className={classes.outer}>
        <Container className={classes.main} size={'lg'}>
          <Stack>
            {/** header section */}
            <Flex direction="column" gap={10} align="center" justify="start">
              <Title className={classes.title} order={1}>
                Our Pricing
              </Title>
              <Paper className={classes.headerBox}>
                <Text mr={'md'} fz={'md'}>
                  Monthly
                </Text>
                <Switch
                  checked={!monthly}
                  onChange={handleChange}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  width={45}
                  height={25}
                  onColor={'#E8A743'}
                  offColor={'#E8A743'}
                  handleDiameter={18}
                />
                <Text ml={'md'} fz={'md'}>
                  Annually
                </Text>
              </Paper>
            </Flex>
            {/** cards section */}
            <Group>
              <Flex
                align={'center'}
                direction={{ base: 'column', sm: 'row' }}
                color={'hsl(232, 13%, 33%)'}
                gap={{ base: '1.5rem', sm: 0 }}
              >
                <Paper shadow={'md'} className={classes.cardBox1}>
                  <Stack w={'100%'} align={'center'} p={20}>
                    <Text fw={900} fz={'xl'}>
                      Contractor Basic
                    </Text>
                    <Title order={2} className={classes.moneyTitle}>
                      <Text fz={'2rem'}>$</Text>
                      {monthly ? '197/mo' : '165/mo'}
                    </Title>
                    <Stack w={'100%'} align="center" p={10}>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Functional Website
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Missed Call Text Back
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Web Hosting & Security
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        All In One Inbox
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Website Updates
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Reputation Management
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                    </Stack>
                    <Button bg={'var(--yellow)'} w="100%">
                      START NOW
                    </Button>
                  </Stack>
                </Paper>
                <Paper shadow={'md'} className={classes.cardBox2}>
                  <Stack w={'100%'} align={'center'} p={20}>
                    <Text fw={900} fz={'xl'}>
                      Contractor Advanced
                    </Text>
                    <Title order={2} className={classes.moneyTitle}>
                      <Text fz={'2rem'}>$</Text>
                      {monthly ? '297/mo' : '249/mo'}
                    </Title>
                    <Stack w={'100%'} align="center" p={10}>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Everything in Contractor Basic
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Full Website SEO Optimizations
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Automated SMS Lead Follow Up
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        5-Star Magic Funnel
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Marketing Campaigns
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Live Website Chat
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Blog Posts
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                    </Stack>
                    <Button c={'var(--blue)'} bg={'var(--white)'} w="100%">
                      START NOW
                    </Button>
                  </Stack>
                </Paper>
                <Paper shadow={'md'} className={classes.cardBox3}>
                  <Stack w={'100%'} align={'center'} p={20}>
                    <Text fw={900} fz={'xl'}>
                      Contractor Supreme
                    </Text>
                    <Title order={2} className={classes.moneyTitle}>
                      <Text fz={'2rem'}>$</Text>
                      {monthly ? '397/mo' : '333/mo'}
                    </Title>
                    <Stack w={'100%'} align="center" p={10}>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Everything in Contractor Advanced
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        GMB Posts
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Shotgun SEO
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Voice Search
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Business Info Sync
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text ta={'center'} fz={'sm'} fw={600}>
                        Custom QR Codes
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                    </Stack>
                    <Button bg={'var(--yellow)'} w="100%">
                      START NOW
                    </Button>
                  </Stack>
                </Paper>
              </Flex>
            </Group>
          </Stack>
        </Container>
      </div>
    </>
  );
};
