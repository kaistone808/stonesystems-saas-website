import { Title, Container, Text } from '@mantine/core';
import classes from './PrivacyPage.module.css';

export function PrivacyPage() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle} order={1}>
          Privacy Policy
        </Title>
        <div>
          <Text className={classes.text}>
            This Privacy Policy describes Our policies and procedures on the collection, use, and
            disclosure of Your information when You respond to our advertisements and tells You
            about Your privacy rights and how the law protects You. We use Your Personal Data to
            contact and support you, as well as to provide and improve the Service. By using the
            Service, You agree to the collection and use of information in accordance with this
            Privacy Policy.
          </Text>
          
          <Title order={2} className={classes.secondaryTitle}>Mobile Communication Policy</Title>
          <Text className={classes.text}>
            We value your privacy and are committed to protecting your personal information.
            When you provide your mobile number, you consent to receive SMS messages related to our
            services. Your mobile opt-in will **not** be shared with third parties for marketing purposes.
          </Text>
          <Text className={classes.text}>
            **Opt-Out Instructions:** You can opt out of receiving SMS messages at any time by
            replying **STOP** to any message you receive from us.
          </Text>
          <Text className={classes.text}>
            **Support:** If you need assistance with our SMS communications, you can text **HELP**
            for more information.
          </Text>
          
          <Title order={2} className={classes.secondaryTitle}>Interpretation and Definitions</Title>
          <Title order={3} className={classes.tercaryTitle}>Interpretation</Title>
          <Text className={classes.text}>
            The words of which the initial letter is capitalized have meanings defined under the
            following conditions. The following definitions shall have the same meaning regardless
            of whether they appear in singular or in plural.
          </Text>
          
          <Title order={3} className={classes.tercaryTitle}>Definitions</Title>
          <Text className={classes.text}>For the purposes of this Privacy Policy:</Text>
          <Text className={classes.text}>
            Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement)
            refers to Stonesystems LLC.
          </Text>
          <Text className={classes.text}>
            Device means any device that can access the Service such as a computer, a cellphone, or a
            digital tablet.
          </Text>
          <Text className={classes.text}>
            Personal Data is any information that relates to an identified or identifiable individual.
          </Text>
          <Text className={classes.text}>
            Service refers to the advertisement, website, or application.
          </Text>
          
          <Title order={2} className={classes.secondaryTitle}>Collecting and Using Your Personal Data</Title>
          <Title order={3} className={classes.tercaryTitle}>Types of Data Collected</Title>
          <Text className={classes.text}>
            While using Our Service, We may ask You to provide Us with certain personally
            identifiable information that can be used to contact or identify You. Personally
            identifiable information may include, but is not limited to:
          </Text>
          <Text className={classes.text}>First and last name</Text>
          <Text className={classes.text}>Email address</Text>
          <Text className={classes.text}>Phone number</Text>
          <Text className={classes.text}>Location details such as your address, city, or country</Text>
          <Text className={classes.text}>Any other data such as personal preferences, requirements, or comments</Text>
          
          <Title order={3} className={classes.tercaryTitle}>Use of Your Personal Data</Title>
          <Text className={classes.text}>
            The Company may use Personal Data for the following purposes:
          </Text>
          <Text className={classes.text}>
            - To provide and maintain our Service, including monitoring usage.
          </Text>
          <Text className={classes.text}>
            - To contact You via email, phone, or SMS about updates, features, or support.
          </Text>
          <Text className={classes.text}>
            - To manage Your requests and respond to inquiries.
          </Text>
          <Text className={classes.text}>
            - For legal compliance and security purposes.
          </Text>
          
          <Title order={2} className={classes.secondaryTitle}>Security of Your Personal Data</Title>
          <Text className={classes.text}>
            The security of Your Personal Data is important to Us, but no method of
            transmission over the Internet, or method of electronic storage, is 100% secure.
            While We strive to use commercially acceptable means to protect Your Personal Data,
            We cannot guarantee its absolute security.
          </Text>
          
          <Title order={2} className={classes.secondaryTitle}>Changes to This Privacy Policy</Title>
          <Text className={classes.text}>
            We may update Our Privacy Policy from time to time. We will notify You of any changes by
            posting the new Privacy Policy on this page.
          </Text>
          <Text className={classes.text}>
            You are advised to review this Privacy Policy periodically for any changes. Changes to
            this Privacy Policy are effective when they are posted on this page.
          </Text>
          <Text className={classes.text}>This Privacy Policy was last updated on 2024/04/03 13:02:11</Text>
          
          <Title order={2} className={classes.secondaryTitle}>Contact Us</Title>
          <Text className={classes.text}>
            If you have any questions about this Privacy Policy, You can contact us via email at
            ben@stonesystems.io
          </Text>
        </div>
      </Container>
    </div>
  );
}
