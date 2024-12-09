export async function findBlogPost() {
  "use cache";

  return {
    title: "Hello World",
    description: "This is a test blog post",
    date: "2024-01-01",
  };
}
