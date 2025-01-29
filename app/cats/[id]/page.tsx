import { CatType } from "../page";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; breed: string }>;
};

const getCat = async (id: string): Promise<CatType> => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);

  if (!response.ok) {
    throw new Error("something gone wrong while getting cat image");
  }

  return response.json();
};

export const generateStaticParams = async () => {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );

  if (!response.ok) {
    throw new Error("something gone wrong while getting cats image");
  }

  const cats: CatType[] = await response.json();

  return cats.map((cat) => ({ id: cat.id }));
};

export default async function Cat({ params, searchParams }: Props) {
  const { id } = await params;
  const { color, breed } = await searchParams;

  console.log(id, color, breed);

  const cat = await getCat(id);

  console.log(cat);

  return (
    <div>
      <img src={cat.url} alt="" />
    </div>
  );
}
