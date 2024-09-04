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

  const basicRefs: RefObjectMap = {
    website: createRef<HTMLDivElement>(),
    mctb: createRef<HTMLDivElement>(),
    hosting: createRef<HTMLDivElement>(),
    inbox: createRef<HTMLDivElement>(),
    repmanage: createRef<HTMLDivElement>(),
    bphone: createRef<HTMLDivElement>(),
    qrcode: createRef<HTMLDivElement>(),
    bcards: createRef<HTMLDivElement>(),
  };

  const advancedRefs: RefObjectMap = {
    websiteseo: createRef<HTMLDivElement>(),
    leadconf: createRef<HTMLDivElement>(),
    reviews: createRef<HTMLDivElement>(),
    marketing: createRef<HTMLDivElement>(),
    chat: createRef<HTMLDivElement>(),
    blogs: createRef<HTMLDivElement>(),
  };

  const supremeRefs: RefObjectMap = {
    /* gmb: createRef<HTMLDivElement>(), */
    onsite: createRef<HTMLDivElement>(),
    offsite: createRef<HTMLDivElement>(),
    techseo: createRef<HTMLDivElement>(),
    gmbopt: createRef<HTMLDivElement>(),
    reports: createRef<HTMLDivElement>(),
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
                  onColor={'#5adbff'}
                  offColor={'#5adbff'}
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
                    <Text fw={900} fz={'24'}>
                      Contractor Essentials
                    </Text>
                    <Flex
                      className={`${classes.discountBox} ${isFading ? classes.fadeOut : classes.fadeIn}`}
                    >
                      <Title order={2} className={classes.moneyTitle}>
                        {monthly ? '$197/mo' : '$165/mo'}
                      </Title>
                      {!monthly && !isFading && (
                        <Text className={classes.discount}>17% off</Text>
                      )}
                    </Flex>
                    <Stack w={'100%'} align="center" p={10}>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Functional Website
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Missed Call Text Back
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Web Hosting & Security
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          All In One Inbox
                        </Text>
                      </Flex>

                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Reputation Management
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Business Phone
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Review QR Codes
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          250 Branded Business Cards
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                    </Stack>
                    <Button
                      component="a"
                      target="_blank"
                      href={
                        monthly
                          ? 'https://buy.stripe.com/00g8xNa0ogPYb9CcMN'
                          : 'https://buy.stripe.com/9AQ29pa0o43c3Ha4gi'
                      }
                      className={classes.button1}
                      bg={'var(--yellow)'}
                      w="75%"
                    >
                      START NOW
                    </Button>
                  </Stack>
                </Paper>
                <Paper shadow={'md'} className={classes.cardBox2}>
                  <Stack w={'100%'} align={'center'} p={20}>
                    <Text fw={900} fz={'24'}>
                      Contractor Advanced
                    </Text>
                    <Flex
                      className={`${classes.discountBox} ${isFading ? classes.fadeOut : classes.fadeIn}`}
                    >
                      <Title order={2} className={classes.moneyTitle}>
                        {monthly ? '$297/mo' : '$249/mo'}
                      </Title>
                      {!monthly && !isFading && (
                        <Text className={classes.discount}>17% off</Text>
                      )}
                    </Flex>
                    <Stack w={'100%'} align="center" p={10}>
                      <Divider w={'100%'} opacity={0.6} />
                      <Text c={'var(--blue)'} fs={'italic'} ta={'center'} fz={'md'} fw={900}>
                        Everything in Contractor Essentials +
                      </Text>
                      <Divider w={'100%'} opacity={0.6} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Full Website SEO Optimizations
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.6} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Automated Lead Follow Up
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.6} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          5-Star Magic Funnel
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.6} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Marketing Campaigns
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.6} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Live Website Chat
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.6} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Blog Posts
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.6} />
                    </Stack>
                    <Button
                      className={classes.button2}
                      component="a"
                      target="_blank"
                      href={
                        monthly
                          ? 'https://buy.stripe.com/7sIbJZc8wczIfpScMP'
                          : 'https://buy.stripe.com/7sI29p4G42Z83HabIM'
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
                    <Text fw={900} fz={'24'}>
                      Contractor Supreme
                    </Text>
                    <Flex
                      className={`${classes.discountBox} ${isFading ? classes.fadeOut : classes.fadeIn}`}
                    >
                      <Title order={2} className={classes.moneyTitle}>
                        {monthly ? '$997/mo' : '$833/mo'}
                      </Title>
                      {!monthly && !isFading && (
                        <Text className={classes.discount}>17% off</Text>
                      )}
                    </Flex>
                    <Stack w={'100%'} align="center" p={10}>
                      <Divider w={'100%'} opacity={0.7} />
                      <Text c={'var(--yellow)'} fs={'italic'} ta={'center'} fz={'md'} fw={900}>
                        Everything in Contractor Advanced +
                      </Text>
                      <Divider w={'100%'} opacity={0.7} />
                      {/*                     <Text
                        ta={'center'}
                        fz={'md'}
                        fw={700}
                        className={classes.featureName}
                        onClick={() => openAccordionItem('supreme', 'gmb')}
                      >
                        GMB Posts
                      </Text>
                      <Divider w={'100%'} opacity={0.7} /> */}
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          On-Site SEO
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Off-Site SEO
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Technical SEO
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Google My Business Optimizations
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Monthly SEO Reports
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Keyword Optimizations
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                      <Flex className={classes.featureDiv}>
                        <Text ta={'center'} fz={'md'} fw={700} className={classes.featureName}>
                          Voice Search
                        </Text>
                      </Flex>
                      <Divider w={'100%'} opacity={0.7} />
                    </Stack>
                    <Button
                      component="a"
                      target="_blank"
                      href={
                        monthly
                          ? 'https://buy.stripe.com/7sI29p4G42Z83HabIM'
                          : 'https://buy.stripe.com/cN2aFVdcA1V44LedQW'
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
            <SimpleGrid cols={3}>
              <div className={classes.header}>
                <Text className={classes.planTitle}>Contractor Essentials </Text>
              </div>
              <div className={classes.header}>
                <Text className={classes.planTitle}>Contractor Advanced </Text>
              </div>
              <div className={classes.header}>
                <Text className={classes.planTitle}>Contractor Supreme </Text>
              </div>
            </SimpleGrid>
          )}
          <SimpleGrid cols={mobile ? 1 : 3} className={classes.content}>
            {mobile && (
              <div className={classes.header}>
                <Text className={classes.planTitle}>Contractor Essentials </Text>
              </div>
            )}
            <Accordion variant="separated">
              <Accordion.Item value="website" ref={basicRefs.website}>
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

              <Accordion.Item value="mctb" ref={basicRefs.mctb}>
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

              <Accordion.Item value="hosting" ref={basicRefs.hosting}>
                <Accordion.Control bg={'var(--white)'}>Web Hosting & Security</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Don’t be an idiot… you don’t want your website to be slow, and definitely don’t
                    want it to get hacked.
                  </Text>
                  <List>
                    <List.Item>SSL certificate </List.Item>
                    <List.Item>Superhosting </List.Item>
                    <List.Item>Indexed for google SEO & Pagespeed </List.Item>
                    <List.Item>99.95% SLA </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="inbox" ref={basicRefs.inbox}>
                <Accordion.Control bg={'var(--white)'}>All In One Inbox</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    No offense mr contractor… most of you guys are notorious for not getting back to
                    people. Let’s not make it more difficult for you.
                  </Text>
                  <List>
                    <List.Item>
                      Use our 4 in 1 inbox to respond to all your messages in one place. (Instagram,
                      Facebook, Email & SMS)
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="repmanage" ref={basicRefs.repmanage}>
                <Accordion.Control bg={'var(--white)'}>Reputation Management</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Are you going to see what other contractors have to say about stone systems
                    before you decide to work with us?? - yes you are and you can bet that it’s the
                    same for your business
                  </Text>
                  <List>
                    <List.Item>97% of people read a review before they choose a business</List.Item>
                    <List.Item>72% of people use google reviews to find a business</List.Item>
                    <List.Item>We’ll show & update your best reviews on your website</List.Item>
                    <List.Item>We’ll keep negative reviews off your website </List.Item>
                    <List.Item>We’ll respond to all your google reviews for you</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="bphone" ref={basicRefs.bphone}>
                <Accordion.Control bg={'var(--white)'}>Business Phone</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    You're not actually going to buy a second phone are you? Just use our app on
                    your personal phone.
                  </Text>
                  <List>
                    <List.Item>Separate business phone number</List.Item>
                    <List.Item>Split business from personal </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="qrcode" ref={basicRefs.qrcode}>
                <Accordion.Control bg={'var(--white)'}>Review QR Codes</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Have people leave you a review by just scanning a simple QR code.
                  </Text>
                  <List>
                    <List.Item>QR codes for Goole reviews </List.Item>
                    <List.Item>Easy to scan and never expire </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="bcards" ref={basicRefs.bcards}>
                <Accordion.Control bg={'var(--white)'}>
                  500 Branded Business Cards
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Honestly, if you don't have any of these yet, I don't know what you're waiting
                    for...
                  </Text>
                  <List>
                    <List.Item>500 branded business cards with all business info on </List.Item>
                    <List.Item>Review QR code on the back of the business card </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
            {mobile && (
              <div className={classes.header}>
                <Text className={classes.planTitle}>Contractor Advanced </Text>
              </div>
            )}
            <Accordion variant="separated">
              <Accordion.Item value="everything1">
                <Accordion.Control className={classes.everythingControl}>
                  Everything From Contractor Essentials +
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Contractor Advanced also includes everything from Contractor Essentials
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="websiteseo" ref={advancedRefs.websiteseo}>
                <Accordion.Control bg={'var(--white)'}>
                  Full Website SEO Optimizations
                </Accordion.Control>
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

              <Accordion.Item value="reviews" ref={advancedRefs.reviews}>
                <Accordion.Control bg={'var(--white)'}>5-Star Magic Funnel</Accordion.Control>
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
                <Accordion.Control bg={'var(--white)'}>Marketing Campaigns</Accordion.Control>
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

              <Accordion.Item value="chat" ref={advancedRefs.chat}>
                <Accordion.Control bg={'var(--white)'}>Live Website Chat</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Don’t leave your leads hanging… Let them text you directly from your website and
                    get back them them instantly on autopilot
                  </Text>
                  <List>
                    <List.Item>Turn a website lead into a text conversation </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="blogs" ref={advancedRefs.blogs}>
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
                    Contractor Supreme also includes everything from Contractor Essentials and
                    Contractor Advanced
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              {/*               <Accordion.Item value="gmb" ref={supremeRefs.gmb}>
                <Accordion.Control onClick={() => toggleAccordion('supreme', 'gmb')}>
                  GMB Posts
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    You can never do too much marketing… We’ll keep your Google page active so
                    people don’t ignore you
                  </Text>
                  <List>
                    <List.Item>
                      We create meaningful GMB posts on your google page to give incentives to click
                      on your page
                    </List.Item>
                    <List.Item>
                      GMB posts are packed with keywords and fully SEO optimized to make you rank
                      higher on google
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item> */}

              <Accordion.Item value="onsite" ref={supremeRefs.onsite}>
                <Accordion.Control bg={'var(--white)'}>On-Site SEO</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    We'll be making your site less of an online ghost town
                  </Text>
                  <List>
                    <List.Item>Content Optimization Effectiveness Evaluation</List.Item>
                    <List.Item>Search Engine Visibility Evaluation</List.Item>
                    <List.Item>Keyword Volume Check</List.Item>
                    <List.Item>Google Search Algorithm Evaluation</List.Item>
                    <List.Item>Keyword Targeting Evaluation</List.Item>
                    <List.Item>Nurturing up-and-coming rankings</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="offsite" ref={supremeRefs.offsite}>
                <Accordion.Control bg={'var(--white)'}>Off-Site SEO</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    We're basically making your website the cool kid on the block everyone talks
                    about here
                  </Text>
                  <List>
                    <List.Item>Google My Business Live Listing</List.Item>
                    <List.Item>Review Inbound Link Volume</List.Item>
                    <List.Item>Geographic Targeting Review</List.Item>
                    <List.Item>Inbound Link Health Check</List.Item>
                    <List.Item>Search Engine Crawling</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="techseo" ref={supremeRefs.techseo}>
                <Accordion.Control bg={'var(--white)'}>Technical SEO</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    We're making sure your website is actually optimized to bring people to it and
                    keep them there
                  </Text>
                  <List>
                    <List.Item>Optimize website pagespeed, SSL, mobile & redirects</List.Item>
                    <List.Item>Create website sitemap and submit to google</List.Item>
                    <List.Item>Search Console GoobleBot Fetch Evaluation</List.Item>
                    <List.Item>Search Console Site Traffic & Ranking Evaluation</List.Item>
                    <List.Item>Add JSON-LD Schema to website</List.Item>
                  </List>
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
                  Monthly SEO Reports Sent To You
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Because who doesn't enjoy a fresh batch of SEO data to look at every month
                  </Text>
                  <List>
                    <List.Item>Get monthly SEO reports to track your progress</List.Item>
                    <List.Item>See exactly where your site ranks for what keywords</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="keyword" ref={supremeRefs.reports}>
                <Accordion.Control bg={'var(--white)'}>Keyword Optimization</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    So that people don't just find your website, but they find it for the right
                    reasons
                  </Text>
                  <List>
                    <List.Item>Off-Site Keyword Optimizations</List.Item>
                    <List.Item>On-Site Keyword Optimizations</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="voicesearch" ref={supremeRefs.reports}>
                <Accordion.Control bg={'var(--white)'}>Voice Search</Accordion.Control>
                <Accordion.Panel>
                  <Text className={classes.contentTitle}>
                    Literally the future of search... and we're making sure you're ready for it
                  </Text>
                  <List>
                    <List.Item>
                      Ask Siri or Alexa for a business near you and have your business come up
                    </List.Item>
                    <List.Item>Join the future of online search</List.Item>
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
