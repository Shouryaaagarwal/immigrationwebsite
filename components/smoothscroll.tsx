// 'use client';

// import { ReactLenis } from 'lenis/react';
// import { PropsWithChildren } from 'react';

// export default function LenisWrapper({ children }: PropsWithChildren) {
//   return (
//     <ReactLenis root>
//       {children}
//     </ReactLenis>
//   );
// }




'use client';

import { useEffect, useRef, ReactNode } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface Props {
  children: ReactNode;
}

export default function SmoothScroll({ children }: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    } as any); // ✅ Quick fix for TS error

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div id="smooth-scroll" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}
