import Form from "next/form";

const create = async (formData: FormData) => {
  "use server";

  const query = formData.get("query");
  console.log(query);
};

export default function NewTodo() {
  return (
    <Form action={create}>
      <input type="text" name="query" />
      <button>search</button>
    </Form>
  );
}
