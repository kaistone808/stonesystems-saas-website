'use client';

import { Container, Title, Accordion, Image } from '@mantine/core';
import classes from './Faq.module.css';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export function Faq() {
  return (
    <div className={classes.outer}>
      <Container size="lg" className={classes.wrapper}>
        <Title ta="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion chevronSize={50} variant="separated">
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control className={classes.itemTitle}>
              How can I reset my password?
            </Accordion.Control>
            <Accordion.Panel className={classes.itemDescription}>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control className={classes.itemTitle}>
              Can I create more that one account?
            </Accordion.Control>
            <Accordion.Panel className={classes.itemDescription}>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control className={classes.itemTitle}>
              How can I subscribe to monthly newsletter?
            </Accordion.Control>
            <Accordion.Panel className={classes.itemDescription}>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control className={classes.itemTitle}>
              Do you store credit card information securely?
            </Accordion.Control>
            <Accordion.Panel className={classes.itemDescription}>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control className={classes.itemTitle}>
              What payment systems to you work with?
            </Accordion.Control>
            <Accordion.Panel className={classes.itemDescription}>{placeholder}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
