'use client';

import {
  Accordion,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { MutableRefObject, createRef, useState } from 'react';
import Switch from 'react-switch';
import classes from './PriceContainer.module.css';
import { useMediaQuery } from '@mantine/hooks';

export const PriceContainer = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [monthly, setMonthly] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [showDiscount, setShowDiscount] = useState(!monthly);

  const handleChange = () => {
    setIsFading(true);
    setTimeout(() => {
      setMonthly(!monthly);
      setShowDiscount(!showDiscount);
      setIsFading(false);
    }, 300);
  };

  type RefObjectMap = {
    [key: string]: MutableRefObject<HTMLDivElement | null>;
  };

  const advancedRefs: RefObjectMap = {
    website: createRef<HTMLDivElement>(),
    websiteseo: createRef<HTMLDivElement>(),
    leadconf: createRef<HTMLDivElement>(),
    mctb: createRef<HTMLDivElement>(),
    reviews: createRef<HTMLDivElement>(),
    marketing: createRef<HTMLDivElement>(),
    bcards: createRef<HTMLDivElement>(),
  };
  
  const supremeRefs: RefObjectMap = {
    /* gmb: createRef<HTMLDivElement>(), */
    onsite: createRef<HTMLDivElement>(),
    gmbopt: createRef<HTMLDivElement>(),
    reports: createRef<HTMLDivElement>(),
    blogs: createRef<HTMLDivElement>(),
  };

  return (
    <>
      <div className={classes.outer}>
        <Container className={classes.main} size={'xl'}>
          <Stack>
            {/** header section */}
            <Flex direction="column" gap={10} align="center" justify="start">
              <Title className={classes.mainTitle} order={1}>
                Our pricing
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
                  onColor={'#e8a743'}
                  offColor={'#e8a743'}
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
                gap={{ base: '1.5rem', sm: '1.5rem' }}
              >
                <Paper shadow={'md'} className={classes.cardBox2}>
                  <Stack w={'100%'} align={'center'} p={20}>
                    <Text className={classes.popular} fw={900} fz={'24'}>
                      MOST POPULAR
                    </Text>
                    <Text fw={900} fz={mobile ? '24' : '30'}>
                      Contractor Advanced
                    </Text>
                    <Flex
                      className={`${classes.discountBox} ${isFading ? classes.fadeOut : classes.fadeIn}`}
                    >
                      <Title order={2} className={classes.moneyTitle}>
                        {monthly ? '$297/mo' : '$2970/yr'}
                      </Title>
                      {!monthly && !isFading && <Text className={classes.discount}>$600 off</Text>}
                    </Flex>
                    <Stack w={'100%'} align="center" p={10}>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text ta={'center'} fz={'lg'} fw={700} className={classes.featureName}>
                        Functional Website
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'lg'} fw={700} className={classes.featureName}>
                          Automated Lead Follow Up
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'lg'} fw={700} className={classes.featureName}>
                          Missed Call Text Back
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.6} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'lg'} fw={700} className={classes.featureName}>
                          5-Star Magic Review Funnel
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.6} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'lg'} fw={700} className={classes.featureName}>
                          One-Click Marketing Campaigns
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.6} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'lg'} fw={700} className={classes.featureName}>
                          Scannable Google Review Cards
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.6} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'lg'} fw={700} className={classes.featureName}>
                          Shotgun SEO
                        </Text>
                      </Flex>
                    </Stack>
                    <Button
                      className={classes.button2}
                      component="a"
                      target="_blank"
                      href={
                        monthly
                          ? 'https://buy.stripe.com/9AQg1IeUz3LrcDK4h7'
                          : 'https://buy.stripe.com/9AQg1IeUz3LrcDK4h7'
                      }
                      c={'var(--blue)'}
                      bg={'var(--white)'}
                      w="75%"
                    >
                      START NOW
                    </Button>
                  </Stack>
                </Paper>
                <Paper shadow={'md'} className={classes.cardBox3}>
                  <Stack w={'100%'} align={'center'} p={20}>
                    <Text fw={900} fz={'24'} mt={mobile ? 0 : '3.75rem'}>
                      Contractor Supreme
                    </Text>
                    <Flex
                      className={`${classes.discountBox} ${isFading ? classes.fadeOut : classes.fadeIn}`}
                    >
                      <Title order={2} className={classes.moneyTitle}>
                        {monthly ? '$750/mo' : '$7500/yr'}
                      </Title>
                      {!monthly && !isFading && <Text className={classes.discount}>$1600 off</Text>}
                    </Flex>
                    <Stack w={'100%'} align="center" p={10}>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text c={'var(--yellow)'} fs={'italic'} ta={'center'} fz={'md'} fw={900}>
                        Everything in Contractor Advanced +
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'lg'} fw={700} className={classes.featureName}>
                          Unlimited Leads & Appointments
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'lg'} fw={700} className={classes.featureName}>
                          AI Business Systems
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'lg'} fw={700} className={classes.featureName}>
                          Google Ads
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'lg'} fw={700} className={classes.featureName}>
                          Google My Business Optimizations
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'lg'} fw={700} className={classes.featureName}>
                          Blog Posts
                        </Text>
                      </Flex>
                    </Stack>
                    <Button
                      component="a"
                      target="_blank"
                      href={
                        monthly
                          ? 'https://buy.stripe.com/9AQcPw7s7dm18nu9Bs'
                          : 'https://buy.stripe.com/9AQcPw7s7dm18nu9Bs'
                      }
                      className={classes.button1}
                      bg={'var(--yellow)'}
                      w="75%"
                    >
                      START NOW
                    </Button>
                  </Stack>
                </Paper>
              </Flex>
            </Group>
          </Stack>
        </Container>
      </div>
      <div className={classes.outer2}>
        <Container className={classes.container} size={'xl'}>
          {!mobile && (
            <SimpleGrid cols={2}>
              <div className={classes.header}>
                <Text className={classes.planTitle}>Contractor Advanced </Text>
              </div>
              <div className={classes.header}>
                <Text className={classes.planTitle}>Contractor Supreme </Text>
              </div>
            </SimpleGrid>
          )}
          <SimpleGrid cols={mobile ? 1 : 2} className={classes.content}>
            {mobile && (
              <div className={classes.header}>
                <Text className={classes.planTitle}>Contractor Advanced </Text>
              </div>
            )}
            <Accordion variant="separated">
              <Accordion.Item value="website" ref={advancedRefs.website}>
                <Accordion.Control bg={'var(--white)'}>Functional Website</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    No customer wants to go back and forth over email… Get a website that turns
                    leads into text conversations
                  </Text>
                  <List>
                    <List.Item>
                      Website chat that creates text conversations and instant sms confirmations
                      sent to your leads on autopilot
                    </List.Item>
                    <List.Item>
                      Quote forms with automated text confirmations to your phone and your customers
                      phone creating a SMS conversation with your lead
                    </List.Item>
                    <List.Item>Hyperlinked phone numbers </List.Item>
                    <List.Item>
                      Website fully optimized to create text conversations. Everything gets sent to
                      you over text, never email.
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="leadconf" ref={advancedRefs.leadconf}>
                <Accordion.Control bg={'var(--white)'}>Automated Lead Follow Up</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Once again, it’s not rocket science… it’s going to make you more money and make
                    you look more professional
                  </Text>
                  <List>
                    <List.Item>Instant SMS confirmations sent to all website leads.</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="mctb" ref={advancedRefs.mctb}>
                <Accordion.Control bg={'var(--white)'}>Missed Call Text Back</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    It’s not rocket science… getting back to customers right away is going to make
                    you more money.
                  </Text>
                  <List>
                    <List.Item>
                      Responding within an hour makes you 7 times more likely to qualify a lead
                    </List.Item>
                    <List.Item>
                      67% of customers will go to a competitor if they don’t receive a quick
                      response to their missed call
                    </List.Item>
                    <List.Item>
                      67% of customers will go to a competitor if they don’t receive a quick
                      response to their missed call
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="reviews" ref={advancedRefs.reviews}>
                <Accordion.Control bg={'var(--white)'}>
                  5-Star Magic Review Funnel
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Okay… It’s not magic but it comes pretty close, and it’s automated
                  </Text>
                  <List>
                    <List.Item>
                      We’ll prevent any bad reviews from being published on any of your public pages
                    </List.Item>
                    <List.Item>
                      Automatically follow up with customers until they leave you a review (we
                      promise not to harass them with more than 4 reminders)
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="marketing" ref={advancedRefs.marketing}>
                <Accordion.Control bg={'var(--white)'}>
                  One-Click Marketing Campaigns
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    You know it, and we know it… The best customers are referrals and return
                    customers. Let’s get you both
                  </Text>
                  <List>
                    <List.Item>
                      “sounds complicated...” We set it all up and all you have to do is click a
                      button. If you can’t do that we might have a problem
                    </List.Item>
                    <List.Item>
                      We'll design marketing campaigns to automatically send discount offers to your
                      past customers and request referrals at the same time
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="bcards" ref={advancedRefs.bcards}>
                <Accordion.Control bg={'var(--white)'}>
                  Scannable Google Review Cards
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Honestly, if you don't have any of these yet, I don't know what you're waiting
                    for...
                  </Text>
                  <List>
                    <List.Item>QR codes for Google reviews </List.Item>
                    <List.Item>Easy to scan and never expire </List.Item>
                    <List.Item>Branded business cards with all business info on </List.Item>
                    <List.Item>Review QR code on the back of the business card </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="websiteseo" ref={advancedRefs.websiteseo}>
                <Accordion.Control bg={'var(--white)'}>Shotgun SEO</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Okay, let’s see how much we can confuse you… Some nerdy tech mumbo jumbo with a
                    bunch of buzzwords but it’s actually super important.
                  </Text>
                  <List>
                    <List.Item>Keyword research </List.Item>
                    <List.Item>Optimizing all content for keywords </List.Item>
                    <List.Item>Adding alt tags & json schema </List.Item>
                    <List.Item>Optimizing images & pagespeed </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

            </Accordion>
            {mobile && (
              <div className={classes.header}>
                <Text className={classes.planTitle}>Contractor Supreme </Text>
              </div>
            )}
            <Accordion variant="separated">
              <Accordion.Item value="everything2">
                <Accordion.Control className={classes.everythingControl}>
                  Everything From Contractor Advanced +
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Contractor Supreme also includes everything from Contractor Advanced
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="gmbopt" ref={supremeRefs.gmbopt}>
                <Accordion.Control bg={'var(--white)'}>
                  Google My Business Optimizations
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Because your business needs more than just a pin on the map
                  </Text>
                  <List>
                    <List.Item>GMB SEO Evaluations</List.Item>
                    <List.Item>Full GMB Revamp</List.Item>
                    <List.Item>Optimize profile for keywords & local area</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="reports" ref={supremeRefs.reports}>
                <Accordion.Control bg={'var(--white)'}>
                  Unlimited Leads & Appointments
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Because who doesn't enjoy a fresh batch of appointments every day
                  </Text>
                  <List>
                    <List.Item>Get unlimited leads and appointments for your business</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="keyword" ref={supremeRefs.reports}>
                <Accordion.Control bg={'var(--white)'}>Google Ads</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    So that people don't just find your business, but they find it for the right
                    reasons
                  </Text>
                  <List>
                    <List.Item>PPC Ads</List.Item>
                    <List.Item>LSA Ads</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="voicesearch" ref={supremeRefs.reports}>
                <Accordion.Control bg={'var(--white)'}>AI Business Systems</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Literally the future... and we're making sure you're ready for it
                  </Text>
                  <List>
                    <List.Item>
                      AI optimized ads so that you're constantly improving
                    </List.Item>
                    <List.Item>AI Chat bots</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="blogs" ref={supremeRefs.blogs}>
                <Accordion.Control bg={'var(--white)'}>Blog Posts</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Let’s be honest, nobody reads these… They’re good for SEO though and make you
                    rank higher on google
                  </Text>
                  <List>
                    <List.Item>
                      We create meaningful blog posts on your website to give visitors something to
                      read
                    </List.Item>
                    <List.Item>
                      Blog posts are packed with keywords and fully SEO optimized to make you rank
                      higher on google
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </SimpleGrid>
        </Container>
      </div>
    </>
  );
};
