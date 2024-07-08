import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">
        Hello there! I&apos;m Wishmika Dasanayaka
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a <Highlight>Data Scientist</Highlight> passionate about leveraging <Highlight>data</Highlight>{" "}
        to build <Highlight>products</Highlight> and <Highlight>web applications</Highlight> that can impact
        millions of lives.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
      With <Highlight>one year of experience</Highlight>, I have developed expertise in creating <Highlight>data-driven solutions</Highlight> that are both effective and insightful. My focus is on ensuring that these solutions are <Highlight>scalable, performance-optimized</Highlight>, and <Highlight>visually compelling</Highlight>, consistently meeting both <Highlight>user</Highlight> and <Highlight>business needs</Highlight>.


      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
