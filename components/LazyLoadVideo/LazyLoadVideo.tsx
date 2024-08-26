import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyLoadVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  thumbnail: string;  // Server-generated thumbnail
  type: string;
}

const LazyLoadVideo: React.FC<LazyLoadVideoProps> = ({ src, thumbnail, type, ...props }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // Load the video only once
    threshold: 0.5, // 50% of the video needs to be visible to load
  });

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.preload = 'auto'; // Preload video when it comes into view
      videoRef.current.src = src; // Set the video source
      videoRef.current.load(); // Start loading the video
    }
  }, [inView, src]);

  return (
    <div ref={ref} style={{ minHeight: '200px' }}>
      <video
        ref={videoRef}
        poster={thumbnail} // Use server-generated thumbnail
        preload="metadata" // Initially load only metadata
        controls
        {...props}
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LazyLoadVideo;
