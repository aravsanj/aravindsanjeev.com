"use client";
import {
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  LinkedinIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";
export default function SocialShareButtons({ size, post }) {
  const baseUrl = "https://aravindsanjeev.com";
  const link = `${baseUrl}/blog/${post.slug}`;

  return (
    <>
      <TwitterShareButton
        title={post.metadata.title}
        hashtags={JSON.parse(post.metadata.tags)}
        url={link}
        related={["aravsanj"]}
      >
        <TwitterIcon size={size} round />
      </TwitterShareButton>
      <LinkedinShareButton
        title={post.metadata.title}
        summary={post.metadata.summary}
        url={link}
        source="Aravind Sanjeev"
      >
        <LinkedinIcon size={size} round />
      </LinkedinShareButton>
      <WhatsappShareButton
        title={post.metadata.title}
        separator=" | "
        url={link}
      >
        <WhatsappIcon size={size} round />
      </WhatsappShareButton>
    </>
  );
}
