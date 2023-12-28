import Route from "@ioc:Adonis/Core/Route";

// Posts Routes
Route.group(() => {
  Route.get("/", async () => {
    return "A list of posts";
  });
  Route.get("/:id", async () => {
    return "A single post"
  });
  Route.delete("/1", async () => {
    return "Delete a single post";
  });
  Route.patch("/", async () => {});
}).prefix('/posts')
