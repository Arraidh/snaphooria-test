import Image from "next/image";
import localFont from "next/font/local";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    "https://api.nytimes.com/svc/books/v3/lists.json?api-key=dp6bdSR9zSeGmDBVAGKodTnzyu7wPK9U&list=hardcover-fiction"
  );
  const repo = await res.json();
  // Pass data to the page via props
  return { props: { repo } };
}

export default function Home({ repo }) {
  const router = useRouter();
  console.log(repo);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16  font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start p-4">
        <Heading size={"2xl"}>Books</Heading>
        <Stack spacing="4">
          {repo?.results.map((item) => (
            <Card
              key={item.isbns[0].isbn10}
              size={"sm"}
              className="shadow-lg cursor-pointer"
              onClick={() => window.open(item.amazon_product_url, "_blank")}
            >
              <CardHeader>
                <Heading size="md"> {item.book_details[0]?.title}</Heading>
                <Stack gap={1}>
                  <Text>
                    <b>Author:</b> {item.book_details[0]?.author}
                  </Text>
                  <Text>
                    <b>Published Year:</b>{" "}
                    {new Date(item.published_date).getFullYear()}
                  </Text>
                </Stack>
              </CardHeader>
              <CardBody>
                <Text className="line-clamp-3">
                  {item.book_details[0]?.description}
                </Text>
              </CardBody>
            </Card>
          ))}
        </Stack>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        @2024 Ari Dharmika
      </footer>
    </div>
  );
}
