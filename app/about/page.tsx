import { Collage } from "@/components/collage";
import { Container } from "@/components/container";
import { SubHeading } from "@/components/subheading";
import Timeline from "@/components/timeline";
import { Heading } from "@/components/heading";
import React from "react";
function AboutPage() {
  return (
    <div className="min-h-screen flex justify-start items-start">
      <Container className=" min-h-screen px-12 md:pt-20 md:pb-10">
        <div className="absolute top-0 right-0 h-full w-8 border-x border-x-[var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <div className="absolute top-0 left-0 h-full w-8 border-x border-x-[var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px]- bg-fixed"></div>
        <Heading>
          About Me
        </Heading>
        <SubHeading>
          I am a Software Engineer with a passion for building scalable and
          efficient systems. Currently, I am working as a freelance software
          engineer, focusing on delivering high-quality solutions and robust
          architectures for my clients.
        </SubHeading>
        <p className="text-secondary max-w-lg text-sm pt-4 md:text-sm">
          I'm also a coffee enthusiast, a fan
          of tactical board games, and I love discovering new cuisines while
          traveling.
        </p>
        <div className="my-4 -mx-4 border-x border-neutral-100 shadow-section-inset px-4">
          <Collage />
        </div>
        <p className="text-secondary max-w-lg text-sm pt-4 md:text-sm">
          Here's a timeline of my life achivements.
        </p>
        <div className="my-4 -mx-4 border-x border-neutral-100 shadow-section-inset px-4">
          <Timeline />
        </div>
      </Container>
    </div>
  );
}

export default AboutPage;
