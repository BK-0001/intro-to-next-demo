import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export type CatType = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const getCats = async (): Promise<CatType[]> => {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );

  if (!response.ok) {
    throw new Error("something gone wrong while getting cats image");
  }

  return response.json();
};

export default async function CatsPage() {
  const cats = await getCats();

  return (
    <>
      <h1>Cats Images</h1>
      <ul>
        {cats.map(({ id, url }) => (
          <li key={id}>
            <Link href={`/cats/${id}`} prefetch={true}>
              <Image
                className="w-[1000px] h-auto"
                src={url}
                alt=""
                width={400}
                height={400}
              />
            </Link>
          </li>
        ))}
      </ul>
      <Script
        src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
        integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
        crossOrigin="anonymous"
      />
    </>
  );
}
