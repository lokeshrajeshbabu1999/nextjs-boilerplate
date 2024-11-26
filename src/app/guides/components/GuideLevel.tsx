import GradeIcon from '@mui/icons-material/Grade';
import { Box, Tooltip, Typography } from "@mui/material";

// Define a type for the 'guide' prop
interface Guide {
  level: "beginner" | "intermediate" | "advanced";  // Specify the possible levels
}

const GuideLevel = ({ guide }: { guide: Guide }) => {
    if (guide.level === "beginner") {
        return (
            <Box mx={1}>
                <Tooltip title={<p style={{ fontSize: "15px", margin: "0", padding: "0" }}>Beginner</p>}>
                    <Typography>
                        <GradeIcon sx={{ color: "gold" }} titleAccess="Beginner Level" />
                    </Typography>
                </Tooltip>
            </Box>
        );
    } else if (guide.level === "intermediate") {
        return (
            <Box mx={1}>
                <Tooltip title={<p style={{ fontSize: "15px", margin: "0", padding: "0" }}>Intermediate</p>}>
                    <Typography>
                        <GradeIcon sx={{ color: "gold" }} titleAccess="Intermediate Level" />
                        <GradeIcon sx={{ color: "gold" }} titleAccess="Intermediate Level" />
                    </Typography>
                </Tooltip>
            </Box>
        );
    } else if (guide.level === "advanced") {
        return (
            <Box mx={1}>
                <Tooltip title={<p style={{ fontSize: "15px", margin: "0", padding: "0" }}>Advanced</p>}>
                    <Typography>
                        <GradeIcon sx={{ color: "gold" }} titleAccess="Advanced Level" />
                        <GradeIcon sx={{ color: "gold" }} titleAccess="Advanced Level" />
                        <GradeIcon sx={{ color: "gold" }} titleAccess="Advanced Level" />
                    </Typography>
                </Tooltip>
            </Box>
        );
    } else {
        return null;
    }
};

export default GuideLevel;
