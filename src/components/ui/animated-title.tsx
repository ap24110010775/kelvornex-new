/* src/components/ui/animated-title.tsx */
'use client';

interface AnimatedTitleProps {
  text: string;
}

export function AnimatedTitle({ text }: AnimatedTitleProps) {
  return (
    <h1 className="inline-flex justify-center md:justify-start gap-1 cursor-pointer select-none whitespace-nowrap">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block text-[3rem] leading-[1.05] sm:text-6xl md:text-9xl lg:text-10xl font-extrabold tracking-tight md:leading-none break-words bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 hover:from-lagoon-500 hover:to-lagoon-300 transition-colors duration-300"
        >
          {char}
        </span>
      ))}
    </h1>
  );
}
