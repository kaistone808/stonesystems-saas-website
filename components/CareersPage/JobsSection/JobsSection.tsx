'use client';

import { Container, Title, Accordion, SimpleGrid, Text } from '@mantine/core';
import classes from './JobsSection.module.css';
import { IconArrowRightToArc } from '@tabler/icons-react';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export function JobsSection() {
  return (
    <Container size="lg" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Open Positions
      </Title>

      <Accordion chevronSize={50} variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control className={classes.itemTitle}>Sales Associate</Accordion.Control>
          <Accordion.Panel className={classes.itemDescription}>
            <SimpleGrid cols={2}>
              <div className={classes.column}>
                <Text className={classes.jobText}>
                  We are seeking a sales associate with an interest in construction. Our ideal
                  candidate is a closing machine and possesses these qualities:
                </Text>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>Great communicator</Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Track record of success in selling digital services
                  </Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Professional understanding of web design and online marketing services
                  </Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Ability to manage multiple clients at various stages of the sales funnel
                  </Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Driven by customer satisfaction and rapport
                  </Text>
                </div>
              </div>
              <div className={classes.column}>
                <Text className={classes.sectionTitle}>Responsibilities</Text>
                <Text className={classes.jobText}>
                  The sales associate main responsibility is to produce new sales. You will handle
                  initial sales pitches from inbound leads all the way to close. You will be
                  customer service oriented and maintain our outstanding reputation. You will
                  educate and guide clients on best practices and strategies. You will be
                  responsible for hitting your monthly sales goals.
                </Text>
                <Text className={classes.jobText}>
                  Sales background in construction is a major plus.
                </Text>
                <Text className={classes.bold}>Job Type: Full-time</Text>
                <Text className={classes.bold}>Location: Remote</Text>
                <Text className={classes.bold}>
                  Pay: Hourly + Commission – To be determined based on experience
                </Text>
                <Text className={classes.bold}>
                  Please submit your resume and cover letter to careers@contractorgorilla.com
                </Text>
              </div>
            </SimpleGrid>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control className={classes.itemTitle}>Senior SEO Specialist</Accordion.Control>
          <Accordion.Panel className={classes.itemDescription}>
            <SimpleGrid cols={2}>
              <div className={classes.column}>
                <Text className={classes.jobText}>
                  We are seeking a senior SEO specialist with an interest in construction. Our ideal
                  candidate has extensive experience in search engine optimization and possesses
                  these qualities:
                </Text>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>Great communicator</Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Track record of success in search engine optimization and interest in continuing
                    education
                  </Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Professional writing and/or editorial experience
                  </Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Deep understanding of onsite and offsite seo
                  </Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Ability to manage multiple client accounts
                  </Text>
                </div>
              </div>
              <div className={classes.column}>
                <Text className={classes.sectionTitle}>Responsibilities</Text>
                <Text className={classes.jobText}>
                  You will oversee the seo for multiple clients and internal seo strategies. You’ll
                  collaborate with a variety of clients, each with a different construction trade
                  and geographic location. Coordinate regularly with our website development, SEM,
                  design, and business development teams, as well as external providers, to ensure
                  that clients are attaining positive outcomes. You will oversee, mentor and educate
                  junior seo team members.
                </Text>
                <Text className={classes.jobText}>
                  SEO background in construction is a major plus.
                </Text>
                <Text className={classes.bold}>Job Type: Full-time</Text>
                <Text className={classes.bold}>Location: Remote</Text>
                <Text className={classes.bold}>Pay: $75,000.00 – $120,000.00 per year</Text>
                <Text className={classes.bold}>
                  Please submit your resume and cover letter to careers@contractorgorilla.com
                </Text>
              </div>
            </SimpleGrid>
          </Accordion.Panel>{' '}
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control className={classes.itemTitle}>Website Designer</Accordion.Control>
          <Accordion.Panel className={classes.itemDescription}>
            <SimpleGrid cols={2}>
              <div className={classes.column}>
                <Text className={classes.jobText}>
                  We are seeking an experienced front-end website designer with an interest in
                  construction. Our ideal candidate has extensive experience in web design and
                  possesses these qualities:
                </Text>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>Great communicator</Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Track record of success in web design and interest in continuing education
                  </Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Professional writing and/or editorial experience
                  </Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Understanding of UI/UX and funnel conversion
                  </Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Ability to manage multiple client accounts
                  </Text>
                </div>
              </div>
              <div className={classes.column}>
                <Text className={classes.sectionTitle}>Responsibilities</Text>
                <Text className={classes.jobText}>
                  The website designer will work with the design team in the development and
                  execution of collateral and graphics for websites and marketing ads. You will work
                  directly with clients to executive website projects. You will educate and guide
                  clients on best practices and website design strategies. You will work with the
                  development team to convert your designs into functioning websites.
                </Text>
                <Text className={classes.jobText}>
                  Web design background in construction is a major plus.
                </Text>
                <Text className={classes.bold}>Job Type: Full-time</Text>
                <Text className={classes.bold}>Location: Remote</Text>
                <Text className={classes.bold}>Pay: $75,000.00 – $90,000.00 per year</Text>
                <Text className={classes.bold}>
                  Please submit your resume and cover letter to careers@contractorgorilla.com
                </Text>
              </div>
            </SimpleGrid>
          </Accordion.Panel>{' '}
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control className={classes.itemTitle}>
            Senior Software Engineer
          </Accordion.Control>
          <Accordion.Panel className={classes.itemDescription}>
            <SimpleGrid cols={2}>
              <div className={classes.column}>
                <Text className={classes.jobText}>
                  We are seeking a software engineer with an interest in construction. Our ideal
                  candidate is a true software geek and possesses these qualities:
                </Text>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>Great communicator</Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Track record of success in creating software products and systems
                  </Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Professional understanding of web design and online marketing services
                  </Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Ability to build out complex software systems and products
                  </Text>
                </div>
                <div className={classes.listItemDiv}>
                  <IconArrowRightToArc width={24} height={24} />
                  <Text className={classes.listItem}>
                    Driven by customer satisfaction and rapport
                  </Text>
                </div>
              </div>
              <div className={classes.column}>
                <Text className={classes.sectionTitle}>Responsibilities</Text>
                <Text className={classes.jobText}>
                  The software engineer's main responsibility is to create and update our software &
                  services. You will handle the codebase for our systems and processes. You will be
                  systems oriented and maintain our outstanding reputation. You will actively think
                  about how we can best serve our clients and build the software accordingly. You
                  will be responsible for hitting your monthly deadlines.
                </Text>
                <Text className={classes.jobText}>
                  Software Engineering background in construction is a major plus.
                </Text>
                <Text className={classes.bold}>Job Type: Full-time</Text>
                <Text className={classes.bold}>Location: Remote</Text>
                <Text className={classes.bold}>Pay: $75,000.00 – $120,000.00 per year</Text>
                <Text className={classes.bold}>
                  Please submit your resume and cover letter to careers@contractorgorilla.com
                </Text>
              </div>
            </SimpleGrid>
          </Accordion.Panel>{' '}
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
