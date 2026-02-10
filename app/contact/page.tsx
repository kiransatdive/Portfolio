import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";
function Contact() {
    return (
        <div className="min-h-screen flex justify-start items-start">
            <Container className=" min-h-screen px-12 md:pt-20 md:pb-10">
                <div className="absolute top-0 right-0 h-full w-8 border-x border-x-[var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
                <div className="absolute top-0 left-0 h-full w-8 border-x border-x-[var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
                <Heading>Contact Me</Heading>
                <SubHeading>
                    I am open to freelance opportunities.Reach out to me inquire more about my work.{" "}
                </SubHeading>

                <div className="my-4 -mx-4 border-x border-neutral-100 shadow-section-inset px-4">
                    <ContactForm />
                </div>

            </Container>
        </div>
    );
}

export default Contact;
