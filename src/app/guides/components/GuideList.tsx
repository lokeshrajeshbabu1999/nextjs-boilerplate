/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import useFilteredGuides from "../../hooks/useFilteredGuides";
import GuideLevel from "./GuideLevel";

// Define the shape of the guide object
interface Guide {
  guide_id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";  // Adjust based on your data
  active: boolean;
  source: string;
}

// Define the shape of the props for the GuideList component
interface GuideListProps {
  guides: Guide[];   // Array of Guide objects
  isLoading: boolean; // Boolean to indicate loading state
}

const GuideList: React.FC<GuideListProps> = ({ guides, isLoading }) => {
  const [selectedLevel, setSelectedLevel] = useState("");
  const filteredGuides = useFilteredGuides(guides, selectedLevel);

  const displayResult = () => {
    return (
      <Grid container spacing={1} sx={{ marginTop: 1 }}>
        {filteredGuides.map((guide) => (
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
                <Box
                  component="div"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Link
                    href={{
                      pathname: "/guide/view",
                      query: { src: guide.source, id: guide.guide_id },
                    }}
                    style={{ textDecoration: "none" }}
                    color="tertiary"
                    component="div"
                    sx={{ flexGrow: 1, textAlign: "left" }}
                  >
                    <Typography component="span" sx={{ fontWeight: "bold", color: "guideLink.primary" }}>
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
