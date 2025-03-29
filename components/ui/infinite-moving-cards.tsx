"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { IoMdAirplane } from "react-icons/io";
import { RiVisaLine } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
    raised?: boolean;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      style={{ backgroundColor: "white" }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className={cn(
              "w-[250px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[300px]",
              item.raised && "transform -translate-y-5 hover:-translate-y-7"
            )}
            style={{
              background: "white",
              boxShadow: item.raised ? "0px 6px 15px rgba(0, 0, 0, 0.1)" : "none",
              border: `1px solid ${idx % 2 === 0 ? "#155da9" : "#c30e16"}`,
              marginBottom: "16px", // Added to prevent bottom cut-off
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div 
                className="h-[60px] w-[60px] rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: idx % 2 === 0 ? "#155da9" : "#c30e16" 
                }}
              >
                {item.icon}
              </div>
              <h1 className="text-xl text-center text-gray-500 mt-5">
                {item.title}
              </h1>
              <h1 className="text-sm text-gray-400 text-center">
                {item.description}
              </h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};