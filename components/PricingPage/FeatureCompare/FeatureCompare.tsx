'use client';
import { Accordion, Container, List, SimpleGrid, Text } from '@mantine/core';
import styles from './FeatureCompare.module.css';

export default function PricingTable() {
  return (
    <Container className={styles.container} size={'lg'}>
      <SimpleGrid cols={3} className={styles.header}>
        <Text className={styles.planTitle}>Contractor Basic </Text>
        <Text className={styles.planTitle}>Contractor Advanced </Text>
        <Text className={styles.planTitle}>Contractor Supreme </Text>
      </SimpleGrid>
      <SimpleGrid cols={3} className={styles.content}>
        <Accordion variant="separated">
          <Accordion.Item value="website">
            <Accordion.Control>Functional Website</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                No customer wants to go back and forth over email… Get a website that turns leads
                into text conversations
              </Text>
              <List>
                <List.Item>
                  Website chat that creates text conversations and instant sms confirmations sent to
                  your leads on autopilot
                </List.Item>
                <List.Item>
                  Quote forms with automated text confirmations to your phone and your customers
                  phone creating a SMS conversation with your lead
                </List.Item>
                <List.Item>Hyperlinked phone numbers </List.Item>
                <List.Item>
                  Website fully optimized to create text conversations. Everything gets sent to you
                  over text, never email.
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="mctb">
            <Accordion.Control>Missed Call Text Back</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                It’s not rocket science… getting back to customers right away is going to make you
                more money.
              </Text>
              <List>
                <List.Item>
                  Responding within an hour makes you 7 times more likely to qualify a lead
                </List.Item>
                <List.Item>
                  67% of customers will go to a competitor if they don’t receive a quick response to
                  their missed call
                </List.Item>
                <List.Item>
                  67% of customers will go to a competitor if they don’t receive a quick response to
                  their missed call
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="hosting">
            <Accordion.Control>Web Hosting & Security</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                Don’t be an idiot… you don’t want your website to be slow, and definitely don’t want
                it to get hacked.
              </Text>
              <List>
                <List.Item>SSL certificate </List.Item>
                <List.Item>Superhosting </List.Item>
                <List.Item>Indexed for google SEO & Pagespeed </List.Item>
                <List.Item>99.95% SLA </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="inbox">
            <Accordion.Control>All In One Inbox</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
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

          <Accordion.Item value="repmanage">
            <Accordion.Control>Reputation Management</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                Are you going to see what other contractors have to say about stone systems before
                you decide to work with us?? - yes you are and you can bet that it’s the same for
                your business
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

          <Accordion.Item value="updates">
            <Accordion.Control>Automatic Website Updates</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                You don’t wanna be doing your own website maintenance… For the love of god just send
                us the pictures and let us take care of it.
              </Text>
              <List>
                <List.Item>Unlimited content updates </List.Item>
                <List.Item>Monthly website maintenance </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <Accordion variant="separated">
          <Accordion.Item value="everything1">
            <Accordion.Control>Everything From Contractor Basic</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                Contractor Advanced also includes everything from Contractor Basic
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="websiteseo">
            <Accordion.Control>Full Website SEO Optimizations</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
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

          <Accordion.Item value="leadconf">
            <Accordion.Control>Automated SMS Lead Follow Up</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                Once again, it’s not rocket science… it’s going to make you more money and make you
                look more professiona
              </Text>
              <List>
                <List.Item>Instant SMS confirmations sent to all website leads.</List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="reviews">
            <Accordion.Control>5-Star Magic Funnel</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                Okay… It’s not magic but it comes pretty close, and it’s automated
              </Text>
              <List>
                <List.Item>
                  We’ll prevent any bad reviews from being published on any of your public pages
                </List.Item>
                <List.Item>
                  Automatically follow up with customers until they leave you a review (we promise
                  not to harass them with more than 4 reminders)
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="marketing">
            <Accordion.Control>Marketing Campaigns</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                You know it, and we know it… The best customers are referrals and return customers.
                Let’s get you both
              </Text>
              <List>
                <List.Item>
                  “sounds complicated...” We set it all up and all you have to do is click a button.
                  If you can’t do that we might have a problem
                </List.Item>
                <List.Item>
                  We'll design marketing campaigns to automatically send discount offers to your
                  past customers and request referrals at the same time
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="chat">
            <Accordion.Control>Live Website Chat</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                Don’t leave your leads hanging… Let them text you directly from your website and get
                back them them instantly on autopilot
              </Text>
              <List>
                <List.Item>Turn a website lead into a text conversation </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="camera">
            <Accordion.Control>Blog Posts</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                Let’s be honest, nobody reads these… They’re good for SEO though and make you rank
                higher on google
              </Text>
              <List>
                <List.Item>
                  We create meaningful blog posts on your website to give visitors something to read
                </List.Item>
                <List.Item>
                  Blog posts are packed with keywords and fully SEO optimized to make you rank
                  higher on google
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <Accordion variant="separated">
          <Accordion.Item value="everything2">
            <Accordion.Control>Everything From Contractor Advanced</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                Contractor Supreme also includes everything from Contractor Basic and Contractor Advanced
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="gmb">
            <Accordion.Control>GMB Posts</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                You can never do too much marketing… We’ll keep your Google page active so people
                don’t ignore you
              </Text>
              <List>
                <List.Item>
                  We create meaningful GMB posts on your google page to give incentives to click on
                  your page
                </List.Item>
                <List.Item>
                  GMB posts are packed with keywords and fully SEO optimized to make you rank higher
                  on google
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="shotgun">
            <Accordion.Control>Shotgun SEO</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                No customer wants to go back and forth over email… Get a website that turns leads
                into text conversations
              </Text>
              <List>
                <List.Item>
                  Website chat that creates text conversations and instant sms confirmations sent to
                  your leads on autopilot
                </List.Item>
                <List.Item>
                  Quote forms with automated text confirmations to your phone and your customers
                  phone creating a SMS conversation with your lead
                </List.Item>
                <List.Item>Hyperlinked phone numbers </List.Item>
                <List.Item>
                  Website fully optimized to create text conversations. Everything gets sent to you
                  over text, never email.
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="voicesearch">
            <Accordion.Control>Voicesearch (Siri + Alexa)</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                No customer wants to go back and forth over email… Get a website that turns leads
                into text conversations
              </Text>
              <List>
                <List.Item>
                  Website chat that creates text conversations and instant sms confirmations sent to
                  your leads on autopilot
                </List.Item>
                <List.Item>
                  Quote forms with automated text confirmations to your phone and your customers
                  phone creating a SMS conversation with your lead
                </List.Item>
                <List.Item>Hyperlinked phone numbers </List.Item>
                <List.Item>
                  Website fully optimized to create text conversations. Everything gets sent to you
                  over text, never email.
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="info">
            <Accordion.Control>Business Info Synchronization</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                No customer wants to go back and forth over email… Get a website that turns leads
                into text conversations
              </Text>
              <List>
                <List.Item>
                  Website chat that creates text conversations and instant sms confirmations sent to
                  your leads on autopilot
                </List.Item>
                <List.Item>
                  Quote forms with automated text confirmations to your phone and your customers
                  phone creating a SMS conversation with your lead
                </List.Item>
                <List.Item>Hyperlinked phone numbers </List.Item>
                <List.Item>
                  Website fully optimized to create text conversations. Everything gets sent to you
                  over text, never email.
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="qr">
            <Accordion.Control>Custom QR Codes</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles.contentTitle}>
                No customer wants to go back and forth over email… Get a website that turns leads
                into text conversations
              </Text>
              <List>
                <List.Item>
                  Website chat that creates text conversations and instant sms confirmations sent to
                  your leads on autopilot
                </List.Item>
                <List.Item>
                  Quote forms with automated text confirmations to your phone and your customers
                  phone creating a SMS conversation with your lead
                </List.Item>
                <List.Item>Hyperlinked phone numbers </List.Item>
                <List.Item>
                  Website fully optimized to create text conversations. Everything gets sent to you
                  over text, never email.
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </SimpleGrid>
    </Container>
  );
}
