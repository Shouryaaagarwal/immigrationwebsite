// "use client";

// import React, { useEffect, useState } from "react";
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// export function InfiniteMovingCardsDemo() {
//   return (
//     <div className="h-[20rem]  rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
//       <InfiniteMovingCards
//         items={testimonials}
//         direction="right"
//         speed="slow"
//       />
//     </div>
//   );
// }

// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];


"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import {  IoMdAirplane } from "react-icons/io";
import { RiVisaLine } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";

export function InfiniteMovingCardsDemo() {
  const items = [
    {
      icon: <IoMdAirplane className="text-4xl text-white" />,
      title: "Easy Application",
      description: "Seamless immigration made simple.",
    },
    {
      icon: <RiVisaLine className="text-4xl text-white" />,
      title: "Visa Assistance",
      description: "Expert guidance for your visa success.",
    },
    {
      icon: <FaUniversity className="text-4xl text-white" />,
      title: "College Admissions and Counselling",
      description: "Guiding you to your dream college.",
      raised: true, // This box will be raised
    },
    {
      icon: <IoMdAirplane className="text-4xl text-white" />,
      title: "Immigration Support",
      description: "Comprehensive support for your journey abroad.",
    },
  ];

  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={items}
        direction="right"
        speed="slow"
      />
    </div>
  );
}