import { Container } from "@/components/container";
import { SubHeading } from "@/components/subheading";
import { Heading } from "@/components/heading";
import { projects } from "@/constants/projects";
import { Projects } from "@/components/projects";
function ProjectsPage() {
  return (
    <div className="min-h-screen flex justify-start items-start">
      <Container className=" min-h-screen px-12 md:pt-20 md:pb-10">
             <div className="absolute top-0 right-0 h-full w-8 border-x border-x-[var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
             <div className="absolute top-0 left-0 h-full w-8 border-x border-x-[var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <Heading>
          Projects
        </Heading>
        <SubHeading>
          I am a Software Engineer with a passion for building scalable and
          efficient systems. Currently, I am working as a freelance software
          engineer, focusing on delivering high-quality solutions and robust
          architectures for my clients.
        </SubHeading>
        <Projects projects={projects} />
      </Container>
    </div>
  );
}

export default ProjectsPage;
 