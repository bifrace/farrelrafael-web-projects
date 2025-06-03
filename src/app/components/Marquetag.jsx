"use client";

import Link from "next/link";

export default function Marquetag() {
  return (
    <div className="relative w-64 h-8 bg-black overflow-hidden rounded-md border border-green-400">
      <div className="absolute h-full flex items-center whitespace-nowrap text-green-400 text-xs animate-marquee px-4">
        <Link
          href="https://open.spotify.com/track/1WbhIxkn5ECsOwUm795iX1?si=6134eb41a60d449f"
          target="_blank"
          rel="noopener noreferrer"
        >
          &lt;code&gt; Now Playing: HTML Beats &lt;/code&gt; &lt;a href="spotify"&gt;Listen on Spotify&lt;/a&gt;
        </Link>
      </div>
    </div>
  );
}
