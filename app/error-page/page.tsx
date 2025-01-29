export default function ErrorPage() {
  throw new Error("oh no... I do not know what is causing this!");

  return <div>something will go wrong in this page</div>;
}
