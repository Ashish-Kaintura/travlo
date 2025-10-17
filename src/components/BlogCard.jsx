import { motion } from "framer-motion";
import React from "react";

const posts = [
    {
        id: 1,
        tag: "Technology",
        title: "How a developer duo at Deutsche Bank keep remote alive.",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:
            "https://htmldesigntemplates.com/html/travelin/images/trending/trending10.jpg",
        author: "Jane Doe",
        date: "Oct 12, 2025",
        href: "#",
    },
    {
        id: 2,
        tag: "Product",
        title: "Design choices that improve conversion and retention.",
        excerpt:
            "Small UX tweaks often yield big wins. Learn which patterns to prioritize for sustained growth.",
        image:
            "https://htmldesigntemplates.com/html/travelin/images/trending/trending10.jpg",
        author: "John Smith",
        date: "Sep 28, 2025",
        href: "#",
    },
    {
        id: 3,
        tag: "Engineering",
        title: "Ship faster with better feedback loops in your team.",
        excerpt:
            "Practical tips to shorten feedback cycles and preserve code quality while moving quickly.",
        image:
            "https://htmldesigntemplates.com/html/travelin/images/trending/trending10.jpg",
        author: "Alex Lee",
        date: "Aug 09, 2025",
        href: "#",
    },
];

function Card({ post }) {
    return (
        <motion.a
            href={post.href}
            whileHover={{ scale: 1.03, translateY: -4 }}
            transition={{ duration: 0.28 }}
            className="group block bg-white rounded-xl shadow-md overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-labelledby={`post-title-${post.id}`}
            role="article"
        >
            <div className="relative">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 inline-block bg-white/90 text-xs text-gray-700 font-medium px-3 py-1 rounded-full">
                    {post.tag}
                </span>
            </div>

            <div className="p-5">
                <h3
                    id={`post-title-${post.id}`}
                    className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors"
                    style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {post.title}
                </h3>

                <p
                    className="text-sm text-gray-600 mt-2"
                    style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                        <div>{post.author}</div>
                        <div>{post.date}</div>
                    </div>
                    <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                        Read More →
                    </span>
                </div>
            </div>
        </motion.a>
    );
}

export default function BlogCard() {
    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-6xl mx-auto py-16">
                    <div className="relative text-center my-16 max-w-3xl mx-auto font-serif space-y-4">
                        <h3 className="text-Lightcolor text-2xl font-semibold">Our Blogs Offers</h3>
                        <h2 className="text-5xl font-semibold text-primary">
                            <span className="text-gray-800">Recent</span> Articles & Posts
                        </h2>
                        <p className="text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((p) => (
                            <Card key={p.id} post={p} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
