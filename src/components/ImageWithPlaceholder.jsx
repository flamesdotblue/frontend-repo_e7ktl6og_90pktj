import { useState } from 'react';

export default function ImageWithPlaceholder({ src, alt, className, onClick }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition duration-700 ${loaded ? 'blur-0 scale-100' : 'blur-md scale-[1.02]'} `}
        onClick={onClick}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 animate-pulse" aria-hidden="true" />)
      }
    </div>
  );
}
