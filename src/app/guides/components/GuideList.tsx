/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import useFilteredGuides from "../../hooks/useFilteredGuides";
import GuideLevel from "./GuideLevel";

// Define the shape of the guide object
interface Guide {
  guide_id: number;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  active: boolean;
  source: string;
}

// Define the shape of the props for the GuideList component
interface GuideListProps {
  guides: Guide[];  // Expecting the full list of guides as a prop
  isLoading: boolean; // Expecting a loading state as a prop
}

const GuideList: React.FC<GuideListProps> = ({ guides, isLoading }) => {
  const [selectedLevel, setSelectedLevel] = useState<string>("");

  // Use the custom hook to filter guides based on selectedLevel
  const filteredGuides = useFilteredGuides(guides, selectedLevel);

  const displayResult = () => {
    return (
      <Grid container spacing={1} sx={{ marginTop: 1 }}>
        {filteredGuides.map((guide: Guide) => (
          <Grid item md={4} key={guide.guide_id}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  component="span"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginLeft: "auto",
                  }}
                >
                  <GuideLevel guide={guide} />
                </Typography>
                <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
                  <Link
                    href={{
                      pathname: "/guide/view",
                      query: { src: guide.source, id: guide.guide_id },
                    }}
                    passHref // Ensures that the anchor tag is wrapped correctly
                  >
                    {/* Wrap the Link component with an anchor tag */}
                    <Typography
                      component="a" // Use 'a' for the anchor tag
                      sx={{
                        fontWeight: "bold",
                        color: "guideLink.primary",
                        textDecoration: "none", // Remove underline if you want
                      }}
                    >
                      {guide.title}
                    </Typography>
                  </Link>
                </Box>
                <Typography variant="body2" color="text.secondary" component="span">
                  {guide.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  const loadSpinner = () => {
    return <TailSpin />;
  };

  return (
    <Typography component="span">
      {isLoading ? loadSpinner() : displayResult()}
    </Typography>
  );
};

export default GuideList;
