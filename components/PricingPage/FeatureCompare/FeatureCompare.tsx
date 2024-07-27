'use client'
import { Container, Grid, Image, Text } from '@mantine/core';
import styles from './FeatureCompare.module.css';

const pricingData = [
  {
    feature: "Off-page SEO",
    starter: true,
    core: true,
    pro: true,
  },
  {
    feature: "Optimized to rank well in search results",
    starter: true,
    core: true,
    pro: true,
  },
  {
    feature: "Done-for-you optimized Google Business Profile",
    starter: true,
    core: true,
    pro: true,
  },
  {
    feature: "Done-for-you blog posts automatically added to site",
    starter: "1/month",
    core: "4/month",
    pro: true,
  },
  {
    feature: "Done-for-you Facebook and Google Profile posts",
    starter: "1/wk",
    core: "3/wk",
    pro: true,
  },
  {
    feature: "Auto-generate blog posts",
    starter: false,
    core: true,
    pro: true,
  },
  {
    feature: "Auto-generate marketing designs",
    starter: false,
    core: true,
    pro: true,
  },
  {
    feature: "Share photos and posts on online profiles",
    starter: false,
    core: true,
    pro: true,
  },
];

export default function PricingTable() {
  return (
    <div className={styles.section}>
      <Container className={styles.container}>
        <Grid className={styles.headerRow}>
          <Grid.Col span={3}>
            <Text className={styles.headerTextException}>Features</Text>
          </Grid.Col>
          <Grid.Col span={3}>
            <Text className={styles.headerText}>Starter</Text>
          </Grid.Col>
          <Grid.Col span={3}>
            <Text className={styles.headerText}>Core</Text>
          </Grid.Col>
          <Grid.Col span={3}>
            <Text className={styles.headerText}>Pro</Text>
          </Grid.Col>
        </Grid>
        <Grid className={styles.featureRow}>
          <Grid.Col span={3} className={styles.featureHeader}>
            <Image width={30} height={30} src="/path-to-your-icon.png" alt="Icon"  />
            <Text className={styles.featureTitle}>BE DISCOVERED</Text>
          </Grid.Col>
        </Grid>
        {pricingData.map((item, index) => (
          <Grid key={index} className={styles.row}>
            <Grid.Col span={3} className={styles.featureName}>
              <Text>{item.feature}</Text>
            </Grid.Col>
            <Grid.Col span={3} className={styles.featureCol}>
              {typeof item.starter === "boolean" ? (
                <Image width={30} height={30} src={item.starter ? "https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61bbbfde5d06079ece7b86c2_Yes.png" : "https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61cf37d203a8ee012aadcd94_no_gray.png"} alt={item.starter ? "Yes" : "No"} />
              ) : (
                <Text>{item.starter}</Text>
              )}
            </Grid.Col>
            <Grid.Col span={3} className={styles.featureCol}>
              {typeof item.core === "boolean" ? (
                <Image width={30} height={30} src={item.core ? "https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61bbbfde5d06079ece7b86c2_Yes.png" : "https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61cf37d203a8ee012aadcd94_no_gray.png"} alt={item.core ? "Yes" : "No"} />
              ) : (
                <Text>{item.core}</Text>
              )}
            </Grid.Col>
            <Grid.Col span={3} className={styles.featureCol}>
              {typeof item.pro === "boolean" ? (
                <Image width={30} height={30} src={item.pro ? "https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61bbbfde5d06079ece7b86c2_Yes.png" : "https://cdn.prod.website-files.com/602d921508c6c26dc5cebf3f/61cf37d203a8ee012aadcd94_no_gray.png"} alt={item.pro ? "Yes" : "No"}  />
              ) : (
                <Text>{item.pro}</Text>
              )}
            </Grid.Col>
          </Grid>
        ))}
      </Container>
    </div>
  );
}
