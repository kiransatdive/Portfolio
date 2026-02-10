import { Container } from "@/components/container";
import React from "react";
import { Projects } from "@/components/projects";
import { projects } from "@/constants/projects";
import { LandingBlogs } from "@/components/landingg-blogs";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";
import Testimonials from "@/components/testimonials";
import { Scales } from "@/components/scales";
function HomePage() {
  return (
    <div className="min-h-screen flex justify-start items-start">
      <Container className=" min-h-screen px-12 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Kiran Satdive!</Heading>
        <SubHeading>
          I am Software Engineer with a passion for building scalable and
          efficient systems.I am currently as a software Engineer as Freelancer.{" "}
        </SubHeading>
        <Projects projects={projects.slice(0, 3)} />
        <div className="my-4 -mx-4 border-x border-neutral-100 shadow-section-inset px-4">
          <LandingBlogs />
        </div>
        <div className="my-4 -mx-4 border-x border-neutral-100 shadow-section-inset px-4">
          <Testimonials />
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
