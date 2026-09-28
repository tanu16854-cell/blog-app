"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Blog Post",
      description: "This is my first blog post.",
    },
    {
      id: 2,
      title: "Learning React",
      description: "I am learning React step by step.",
    },
    {
      id: 3,
      title: "Learning Next.js",
      description: "I am building my blog using Next.js.",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");

    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f5f3] text-gray-900">

      {/* NAVBAR */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            My<span className="text-gray-400">Blog.</span>
          </h1>

          <span className="text-sm text-gray-500">
            Personal Journal
          </span>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
            Welcome to my blog
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Thoughts, ideas &
            <br />
            <span className="text-gray-400">things I learn.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-500 max-w-xl leading-8">
            A personal space where I share my journey of learning
            React, Next.js and web development.
          </p>
        </div>
      </section>

      {/* CREATE POST */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-10 shadow-sm">

          <div className="mb-8">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              {editId !== null ? "Editing" : "Create"}
            </p>

            <h3 className="text-3xl font-bold mt-2">
              {editId !== null
                ? "Update your post"
                : "Write something new"}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm font-medium mb-2">
                Blog Title
              </label>

              <input
                type="text"
                placeholder="Give your post a title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:bg-white focus:border-gray-900 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>

              <textarea
                placeholder="Write a short description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={1}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:bg-white focus:border-gray-900 transition resize-none"
              />
            </div>

          </div>

          <div className="flex justify-end mt-6 gap-3">

            {editId !== null && (
              <button
                onClick={() => {
                  setTitle("");
                  setDescription("");
                  setEditId(null);
                }}
                className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            )}

            <button
              onClick={() => {
                if (title === "" || description === "") {
                  return;
                }

                if (editId !== null) {
                  const updatedPosts = posts.map((post) => {
                    if (post.id === editId) {
                      return {
                        ...post,
                        title: title,
                        description: description,
                      };
                    }

                    return post;
                  });

                  setPosts(updatedPosts);
                  setEditId(null);
                } else {
                  const newPost = {
                    id: Date.now(),
                    title: title,
                    description: description,
                  };

                  setPosts([...posts, newPost]);
                }

                setTitle("");
                setDescription("");
              }}
              className="px-7 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-700 transition"
            >
              {editId !== null ? "Update Post" : "Publish Post"}
            </button>

          </div>
        </div>
      </section>

      {/* POSTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400 font-medium">
              Explore
            </p>

            <h3 className="text-3xl font-bold mt-2">
              Latest Posts
            </h3>
          </div>

          <span className="text-sm text-gray-500">
            {posts.length} posts
          </span>
        </div>

        {posts.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-3xl p-16 text-center">
            <h4 className="text-xl font-semibold">
              No posts yet
            </h4>

            <p className="text-gray-500 mt-2">
              Create your first blog post above.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-white border border-gray-200 rounded-3xl p-7 hover:-translate-y-1 hover:shadow-lg transition duration-300"
              >

                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Article
                  </span>

                  <span className="text-xs text-gray-400">
                    #{post.id}
                  </span>
                </div>

                <h4 className="text-2xl font-bold leading-snug group-hover:text-gray-500 transition">
                  {post.title}
                </h4>

                <p className="mt-4 text-gray-500 leading-7">
                  {post.description}
                </p>

                <div className="flex gap-3 mt-8 pt-6 border-t border-gray-100">

                  <button
                    onClick={() => {
                      setTitle(post.title);
                      setDescription(post.description);
                      setEditId(post.id);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      setPosts(
                        posts.filter(
                          (item) => item.id !== post.id
                        )
                      );
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition"
                  >
                    Delete
                  </button>

                </div>
              </article>
            ))}

          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-400">
        Built with React & Next.js
      </footer>

    </main>
  );
}