'use client';

import { Container, Title } from '@mantine/core';
import classes from './IntroSection.module.css';
import LazyLoadVideo from '@/components/LazyLoadVideo/LazyLoadVideo';

export function IntroSection() {
  return (
    <div className={classes.outer}>
      <Container className={classes.card} size="xl">
        <Title className={classes.mainTitle} order={1}>
          How Frank Added $20,000 of Profit To His Business While Paying Us $197/month
        </Title>
        <script src="https://fast.wistia.com/embed/medias/p2owb2d47y.jsonpp" async></script>
        <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
        <div className="wistia_responsive_padding" style={{padding:'64.79% 0 0 0',position:'relative'}}>
          <div
            className="wistia_responsive_wrapper"
            style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}
          >
            <div
              className="wistia_embed wistia_async_pi68bszxff seo=true videoFoam=true"
              style={{height:'100%',position:'relative',width:'100%'}}
            >
              <div
                className="wistia_swatch"
                style={{height:'100%',left:0,opacity:0,overflow:'hidden',position:'absolute',top:0,transition:'opacity 200ms',width:'100%'}}
              >
                <img
                  src="https://fast.wistia.com/embed/medias/p2owb2d47y/swatch"
                  style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }}                  
                  alt=""
                  aria-hidden="true"
                  onLoad={(e) => {
                    const parent = (e.target as HTMLImageElement).parentNode as HTMLElement;
                    parent.style.opacity = '1';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
