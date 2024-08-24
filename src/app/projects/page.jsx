import {
  Button,
  Card,
  Flex,
  Heading,
  Text,
  Box,
  Container,
  Strong,
  Separator,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Heading size={"7"} className="p-2 pb-4 underline underline-offset-8">
        <Strong>Previous Projects</Strong>
      </Heading>

      <Flex className="flex flex-col gap-6 lg:flex lg:flex-row md:flex-row">
        <Card className="bg-gray-300 max-w-fit ">
          <Link href={"https://video-media-app.vercel.app/"} target="_blank">
            <Image
              src="/eggscape-movies.png"
              alt=""
              width={350}
              height={300}
              className="rounded"
            />
          </Link>
          <Link href={"https://github.com/Reevestb/Eggscape"} target="_blank">
            <h1 className="flex justify-center text-2xl text-orange-600 items-center mt-2 hover:underline hover:text-blue-500">
              <FaGithub /> &nbsp;Eggscape Final Project
            </h1>
          </Link>
        </Card>
        {/* //? project change */}
        <Card className="bg-gray-300 max-w-fit">
          <Link
            href={"https://social-network-topaz-seven.vercel.app/"}
            target="_blank"
          >
            <Image
              src="/social-network-posts.png"
              alt=""
              width={350}
              height={300}
              className="rounded"
            />
          </Link>
          <Link
            href={"https://github.com/Reevestb/week9-Assignment"}
            target="_blank"
          >
            <h1 className="flex flex-row justify-center text-2xl text-orange-600 items-center mt-2 hover:underline hover:text-blue-500">
              <FaGithub /> &nbsp;Social Network Project
            </h1>
          </Link>
        </Card>
        <Card className="bg-gray-300 max-w-fit ">
          <Link
            href={"https://week-7-assignment.onrender.com/"}
            target="_blank"
          >
            <Image
              src="/f1-fan-page.png"
              alt=""
              width={350}
              height={300}
              className="rounded"
            />
          </Link>
          <Link
            href={"https://github.com/Reevestb/week-7-assignment"}
            target="_blank"
          >
            <h1 className="flex justify-center text-2xl text-orange-600 items-center mt-2 hover:underline hover:text-blue-500">
              <FaGithub /> &nbsp;F1 Fan Page
            </h1>
          </Link>
        </Card>
      </Flex>
      <br></br>
    </main>
  );
}
