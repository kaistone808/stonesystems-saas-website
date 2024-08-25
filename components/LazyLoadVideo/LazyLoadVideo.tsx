import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyLoadVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  type: string;
}

const LazyLoadVideo: React.FC<LazyLoadVideoProps> = ({ src, poster, type, ...props }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // Load the video only once
    threshold: 0.5, // 50% of the video needs to be visible to load
  });

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.src = src; // Set the video source when it comes into view
      videoRef.current.load(); // Start loading the video
    }
  }, [inView, src]);

  return (
    <div ref={ref} style={{ minHeight: '200px' }}>
      <video
        ref={videoRef}
        poster={poster || ''} // Load the poster (thumbnail)
        controls
        {...props}
      >
        <source type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LazyLoadVideo;
