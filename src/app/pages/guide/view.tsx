"use client";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TailSpin } from "react-loader-spinner";

export default function ViewGuidePage() {
  const [content, setContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGuideContent = async () => {
      try {
        // Directly fetch the markdown content from the static URL
        const response = await fetch("https://skillhunt-knowledge-base.s3.ap-south-1.amazonaws.com/spring_boot_gradle.md");
        if (response.ok) {
          const data = await response.text();
          setContent(data);
        } else {
          throw new Error("Failed to fetch content");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGuideContent();
  }, []); // Only run once on component mount

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <TailSpin />
      </Box>
    );
  }

  if (!content) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error">
          Unable to load the content.
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Guide Content
      </Typography>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </Box>
  );
}
