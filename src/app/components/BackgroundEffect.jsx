// src/app/components/BackgroundEffect.jsx
"use client";

export default function BackgroundEffect() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10 opacity-20"
      style={{
        backgroundImage: "url('/gifs/code-background.gif')",
      }}
    />
  );
}
