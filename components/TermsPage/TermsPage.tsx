'use client';

import { Title, Container, Text } from '@mantine/core';
import classes from './TermsPage.module.css';

export function TermsPage() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle}>Terms & Conditions</Title>
        <div>
          <Text className={classes.text}>
            These Terms and Conditions apply to all SMS messages sent and received as part of the
            A2P 10DLC messaging services provided by Barragan Landscaping. Your use of this service
            constitutes acceptance of these terms.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Messaging Consent
          </Title>
          <Text className={classes.text}>
            As a user, you must explicitly consent to receive messages from Barragan Landscaping.
            Consent can be given through various channels including, but not limited to, our website
            sign-up forms, paper forms, or verbally through customer service interactions.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Message Types and Frequency
          </Title>
          <Text className={classes.text}>
            Messages sent by Barragan Landscaping may include alerts, reminders, promotional offers,
            updates, and other relevant communications. The frequency of these messages will depend
            on your interaction with our services and your preferences.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Data Rates and Charges
          </Title>
          <Text className={classes.text}>
            Standard message and data rates may apply to any messages you send or receive as part of
            our service. This could affect your bill and depends on the terms set by your mobile
            carrier.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Opt-Out Instructions
          </Title>
          <Text className={classes.text}>
            To discontinue receiving messages from Barragan Landscaping, you can reply "STOP" to any
            of our messages at any time. This will unsubscribe you from our SMS communications.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Privacy Policy
          </Title>
          <Text className={classes.text}>
            Our Privacy Policy outlines how we collect, use, and protect your data in relation to
            our A2P 10DLC messaging service. It can be found on our website.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Message Delivery
          </Title>
          <Text className={classes.text}>
            Barragan Landscaping does not guarantee that messages will be delivered without delays
            or failures. Such issues can occur due to factors outside our control, such as network
            problems or device compatibility.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            User Obligations
          </Title>
          <Text className={classes.text}>
            When using our messaging service, you agree to abide by all applicable laws and
            regulations. You must not use this service to send messages that are offensive, illegal,
            or intended to harass or harm others.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Compliance with Laws
          </Title>
          <Text className={classes.text}>
            You acknowledge that the messaging service must be used in compliance with all relevant
            laws, including those relating to privacy, telecommunications, and commercial
            communications.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Changes to Terms and Conditions
          </Title>
          <Text className={classes.text}>
            Barragan Landscaping reserves the right to change these Terms and Conditions at any
            time. Changes will be communicated through our website or direct communications where
            feasible.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Contact Information
          </Title>
          <Text className={classes.text}>
            For any queries or concerns regarding these Terms and Conditions, please contact
            Barragan Landscaping at Barraganland@gmail.com
          </Text>
        </div>
      </Container>
    </div>
  );
}
