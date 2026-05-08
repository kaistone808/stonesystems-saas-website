import { Title, Container, Text } from '@mantine/core';
import classes from '@/components/PrivacyPage/PrivacyPage.module.css';
import { SUBPROCESSORS } from '@/lib/subprocessors';

const LAST_UPDATED = 'May 8, 2026';

export function SubprocessorsPage() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle} order={1}>
          Sub-processors
        </Title>
        <div>
          <Text className={classes.text} fw={700} size="lg">
            Last Updated: {LAST_UPDATED}
          </Text>

          <Text className={classes.text}>
            We will provide at least 30 days&apos; advance notice of new sub-processors. Subscribe
            to updates by emailing <strong>privacy@stonesystems.io</strong> with subject{' '}
            <strong>Subprocessor Updates</strong>.
          </Text>

          <div className={classes.tableWrap}>
            <table className={classes.dataTable}>
              <thead>
                <tr>
                  <th>Sub-Processor</th>
                  <th>Service Provided</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {SUBPROCESSORS.map((row) => (
                  <tr key={row.name}>
                    <td>
                      <strong>{row.name}</strong>
                    </td>
                    <td>{row.serviceProvided}</td>
                    <td>{row.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Text className={classes.text}>
            This list corresponds to the sub-processors described in our{' '}
            <a href="/dpa">Data Processing Addendum</a>, Section 5.1.
          </Text>
        </div>
      </Container>
    </div>
  );
}
