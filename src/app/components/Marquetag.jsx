"use client";

import Link from "next/link";

export default function Marquetag() {
  return (
    // Hanya tampil di sm (≥640px) ke atas
    <div className="hidden sm:flex w-full justify-center py-2">
      <div className="relative w-64 sm:w-72 md:w-80 h-8 bg-black overflow-hidden rounded-md border border-green-400">
        <div className="absolute h-full flex items-center whitespace-nowrap text-green-400 text-[10px] sm:text-xs md:text-sm animate-marquee px-4 font-mono">
          <Link
            href="https://open.spotify.com/track/1WbhIxkn5ECsOwUm795iX1?si=6134eb41a60d449f"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            &lt;code&gt; Now Playing: HTML Beats &lt;/code&gt; &lt;a href="spotify"&gt;Listen on Spotify&lt;/a&gt;
          </Link>
        </div>
      </div>
    </div>
  );
}
