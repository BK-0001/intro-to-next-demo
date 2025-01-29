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
            <img src={url} alt="" />
            <p>{id}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
