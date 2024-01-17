"use client";
import { useEffect, useState } from "react";
import { Post } from "@/lib/types";
import { getPosts } from "@/app/api/getPost/post";

export default function EmojiPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    let cancel = false;
    getPosts().then((data) => {
      if (!cancel) {
        setPosts(data);
        setIsLoading(false);
      }
    });
    return () => {
      cancel = true;
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-96 max-auto p-6">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id}: {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
