// components/VideoCard.tsx
"use client";

import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

// Nettoyage et mise en forme des titres pour un look pro
const formatTitle = (title: string) => {
  return title
    .replace(/HANDPAN\sEDEROD\s\/\s?/gi, "") // On enlève les répétitions
    .replace(/HANPAN\sFRANCAIS\sEDEROD\s\/\s?/gi, "")
    .replace(/HANDPAN\sFRANCAIS\sEDEROD/gi, "")
    .replace(/\/\s/gi, "")
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase()); // Majuscule au début
};

export const VideoCard = ({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) => {
  return (
    <div className="group">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <LiteYouTubeEmbed
          id={videoId}
          title={title}
          poster="maxresdefault" // Utilise la meilleure qualité de miniature disponible
        />
      </div>
      <h3 className="text-lg font-medium text-gray-800 mt-4">
        {formatTitle(title)}
      </h3>
    </div>
  );
};