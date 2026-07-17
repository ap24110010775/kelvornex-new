import React from 'react';
import { cn } from '@/lib/utils';

interface Logo {
  src: string;
  alt: string;
}

interface MarqueeLogoScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  logos: Logo[];
  speed?: 'normal' | 'slow' | 'fast';
}

const MarqueeLogoScroller = React.forwardRef<HTMLDivElement, MarqueeLogoScrollerProps>(
  ({ title, description, logos, speed = 'normal', className, ...props }, ref) => {
    const durationMap: Record<string, string> = {
      normal: '40s',
      slow: '80s',
      fast: '5s',
    };
    const animationDuration = durationMap[speed] || durationMap.normal;

    return (
      <>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>

        <section
          ref={ref}
          aria-label={title}
          className={cn('w-full bg-background text-foreground rounded-lg border overflow-hidden', className)}
          {...props}
        >
          {(title || description) && (
            <div className="p-6 md:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-8 pb-6 md:pb-8 border-b">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-balance">{title}</h2>
                <p className="text-muted-foreground self-start lg:justify-self-end text-balance">{description}</p>
              </div>
            </div>
          )}

          <div
            className="w-full overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <div
              className="flex w-max items-center gap-4 py-4 pr-4 hover:[animation-play-state:paused] transition-all duration-300 ease-in-out"
              style={{ animation: `marquee ${animationDuration} linear infinite` }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="relative h-24 w-40 shrink-0 flex items-center justify-center rounded-xl bg-white/95 shadow-sm border border-slate-200 overflow-hidden"
                >
                  <img src={logo.src} alt={logo.alt} className="h-16 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
);

MarqueeLogoScroller.displayName = 'MarqueeLogoScroller';

export { MarqueeLogoScroller };
