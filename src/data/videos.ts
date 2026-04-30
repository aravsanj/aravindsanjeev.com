export interface VideoItem {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  duration?: string;
}

// Add your YouTube video IDs here. The thumbnail will be fetched automatically.
// Get video IDs from YouTube URLs: https://youtube.com/watch?v=VIDEO_ID_HERE
export const videos: VideoItem[] = [
  {
    id: "jee-d0GgSJQ",
    title: "AI vs Human",
    description: "",
    publishedAt: "2026-02-27",
  },
];
