import { Post } from "@/lib/types";
import { BioCardProps } from "@/components/Hero/BioCard";

export async function getPosts() {
  const response = await fetch("http://localhost:3001/posts");
  const body = await response.json();
  assertIsPost(body);
  return body;
}

export async function getBios() {
  const response = await fetch("http://localhost:3001/bios");
  const body = await response.json();
  assertIsBio(body);
  return body;
}

export function assertIsPost(postData: unknown): asserts postData is Post[] {
  if (!Array.isArray(postData)) {
    throw new Error("Posts isn't a array");
  }
  if (postData.length === 0) {
    return;
  }

  postData.forEach((post) => {
    if (typeof post.id !== "string") {
      throw new Error("Post id isn't a string");
    }
    if (typeof post.title !== "string") {
      throw new Error("Post title isn't a string");
    }
  });
}

export function assertIsBio(
  bioData: unknown
): asserts bioData is BioCardProps[] {
  if (!Array.isArray(bioData)) {
    throw new Error("Posts isn't a array");
  }
  if (bioData.length === 0) {
    return;
  }

  bioData.forEach((bio) => {
    if (typeof bio.name !== "string") {
      throw new Error("bio name isn't a string");
    }
    if (typeof bio.bio !== "string") {
      throw new Error("bio isn't a string");
    }
  });
}
