export default function Contact() {
  const result: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hi contact page can be rendered");
    }, 2000);
  });

  return (
    <div>
      <h1>Contact Page</h1>
      <p>{result}</p>
    </div>
  );
}
