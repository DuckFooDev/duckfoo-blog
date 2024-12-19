import { BlogPost } from "@/types/blog";
import { vectorDatabasesPost } from "./vector-databases";

export const posts: { [key: string]: BlogPost } = {
  "vector-databases": vectorDatabasesPost,
};
