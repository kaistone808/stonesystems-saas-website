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
            A2P 10DLC messaging services provided by Stonesystems LLC. Your use of this service
            constitutes acceptance of these terms.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            SMS Disclosure
          </Title>
          <Text className={classes.text}>
            By opting in to our SMS services, you agree to receive text messages related to
            **notifications, marketing offers, account authentication (2FA), and other
            service-related communications**. Message frequency may vary.
          </Text>
          <Text className={classes.text}>
            Standard **message & data rates apply** according to your mobile carrier's terms.
          </Text>
          <Text className={classes.text}>
            To opt out of SMS communications at any time, reply **STOP** to any message you receive.
            If you need assistance, you can text **HELP** for support.
          </Text>
          <Text className={classes.text}>
            For more details on how we collect and protect your data, please refer to our
            <a href="/privacy-policy"> Privacy Policy</a>.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Messaging Consent
          </Title>
          <Text className={classes.text}>
            As a user, you must explicitly consent to receive messages from Stonesystems LLC. Consent can
            be given through various channels including, but not limited to, our website sign-up
            forms, paper forms, or verbally through customer service interactions.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Message Types and Frequency
          </Title>
          <Text className={classes.text}>
            Messages sent by Stonesystems LLC may include alerts, reminders, promotional offers, updates,
            and other relevant communications. **Message frequency may vary** depending on your
            interaction with our services and your preferences.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Data Rates and Charges
          </Title>
          <Text className={classes.text}>
            Standard **message & data rates apply** to any messages you send or receive as part of
            our service. This could affect your bill and depends on the terms set by your mobile
            carrier.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Opt-Out Instructions
          </Title>
          <Text className={classes.text}>
            To discontinue receiving messages from Stonesystems LLC, you can reply **STOP** to any of our
            messages at any time. This will unsubscribe you from our SMS communications.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Privacy Policy
          </Title>
          <Text className={classes.text}>
            Our Privacy Policy outlines how we collect, use, and protect your data. It can be found
            <a href="/privacy-policy">here</a>.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Message Delivery
          </Title>
          <Text className={classes.text}>
            Stonesystems LLC does not guarantee that messages will be delivered without delays or
            failures. Such issues can occur due to factors outside our control, such as network
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
            Subscription Plans and Billing
          </Title>
          <Text className={classes.text}>
            Stonesystems LLC offers two primary subscription plans: <br />
            <br />
            $297/month: Includes a fully built website, access to the Stonesystems platform (web and
            mobile app), a business phone number for texting and calling, CRM access, automations,
            remarketing, and customer review tools. <br />
            <br />
            $750/month: Includes all features from the $297 plan plus full management and
            optimization of Google Local Service Ads. <br />
            <br />
            Subscriptions are available on a month-to-month basis or a prepaid 3-month commitment,
            the latter including a complimentary Google My Business optimization (valued at $400).
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Advance Payment & Auto-Renewal
          </Title>
          <Text className={classes.text}>
            All subscription fees are billed in advance of the service period and are automatically
            renewed until canceled. Payment is collected via credit/debit card through our secure
            Stripe processor.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Usage-Based Charges (Rebillable Costs)
          </Title>
          <Text className={classes.text}>
            Clients will incur additional charges based on phone number usage, SMS/MMS messaging,
            voice calls, and number intelligence services. Rates include:
            <br />
            <br />
            Phone Numbers: Local: $1.15/month | Toll-Free: $2.15/month
            <br />
            SMS (US/Canada): $0.0079/segment (inbound/outbound)
            <br />
            MMS (US/Canada): $0.02 outbound | $0.01–$0.02 inbound
            <br />
            Voice Calls: $0.0180/min outbound | $0.0085–$0.0220/min inbound
            <br />
            Number Intelligence: $0.005–$0.01 per function
            <br />
            <br />A detailed breakdown can be found within our documentation and this TOS.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Usage-Based Charges (Rebillable Costs)
          </Title>
          <Text className={classes.text}>
            Clients maintain a digital wallet balance for rebillable usage charges. When wallet
            funds run low, clients are automatically billed based on their selected auto-top-up
            preference.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            No Refund Policy
          </Title>
          <Text className={classes.text}>
            All payments made to Stonesystems LLC are final and non-refundable, including subscription
            fees and usage charges. By signing up for our service, you acknowledge that our products
            are custom-built, immediately initiated, and non-reversible once delivery begins.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Chargebacks Are Not Permitted
          </Title>
          <Text className={classes.text}>
            You agree not to initiate a chargeback or dispute for services rendered. Doing so
            constitutes a violation of this agreement. We reserve the right to submit evidence of
            contract acceptance, platform usage, and delivery documentation in response to all
            disputes.
            <br />
            If a chargeback is filed fraudulently, Stonesystems LLC may pursue recovery for the amount
            owed plus any associated legal or collection fees.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Cancellation Terms
          </Title>
          <Text className={classes.text}>
            You may cancel your subscription at any time. Cancellation becomes effective on the next
            billing cycle, and no future charges will be made beyond that point. Early cancellation
            does not result in a refund for the unused portion of a prepaid term.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Delivery of Services
          </Title>
          <Text className={classes.text}>
            Services are considered rendered and fulfilled once:
            <br />
            <br />
            The client’s website has been completed and delivered
            <br />
            Platform and automation setup is finalized
            <br />
            <br />
            Login assistance and onboarding support may be provided but are not a prerequisite for
            fulfillment.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Free Trials and Promotions
          </Title>
          <Text className={classes.text}>
            From time to time, Stonesystems LLC may offer free trials or discounts. During a trial,
            limited setup may occur for information gathering purposes. Full services are only
            rendered once billing begins. Any discounts do not modify the terms of this agreement.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Payment Failures and Service Suspension
          </Title>
          <Text className={classes.text}>
            If a payment fails, we will attempt to process the payment 4 times over 3 weeks. If
            unpaid within 48 hours of the first failed attempt, your account and platform access
            will be suspended until the balance is paid.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Consent and Agreement
          </Title>
          <Text className={classes.text}>
            By purchasing any services from Stonesystems LLC or checking the agreement box at checkout,
            you confirm that:
            <br />
            <br />
            You have read, understood, and agree to these Terms of Service
            <br />
            You accept our No Refund policy
            <br />
            You waive the right to initiate chargebacks for services rendered
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Changes to Terms and Conditions
          </Title>
          <Text className={classes.text}>
            Stonesystems LLC reserves the right to change these Terms and Conditions at any time. Changes
            will be communicated through our website or direct communications where feasible.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            Contact Information
          </Title>
          <Text className={classes.text}>
            For any queries or concerns regarding these Terms and Conditions, please contact Stonesystems
            LLC at support@Stonesystems.io
          </Text>
        </div>
      </Container>
    </div>
  );
}
