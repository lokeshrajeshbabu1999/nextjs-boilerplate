import ReplyIcon from "@mui/icons-material/Reply";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useUserGuides from "../../hooks/useUserGuides";
import useArticle from "../../hooks/useArticle";

const GuideView = () => {
  const router = useRouter();
  const { src, id } = router.query;
  const [userGuides, isLoading] = useUserGuides();
  const [userArticle] = useArticle(src);
  const [userGuide, setUserGuide] = useState(null);

  useEffect(() => {
    if (id && userGuides.length > 0) {
      const guideDetail = userGuides.find((guide) => guide.guide_id === id);
      setUserGuide(guideDetail)
    }
  }, [id, userGuides]);

  const navigateToGuideList = () => {
    router.push("/guide/list");
  };

  return (
    <Container>
      <Helmet>
        <title>{userGuide ? userGuide.title : "guideTitle"}</title>
      </Helmet>
      {isLoading ? (
        <Typography style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Typography>
      ) : (
        <>
          <Typography style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button color="inherit" onClick={navigateToGuideList}>
              <ReplyIcon sx={{ fontSize: 40 }}>BACK</ReplyIcon>
            </Button>
          </Typography>
          <Box>
            {/* <div>{userGuide ? JSON.stringify(userGuide.title) : "Guide not found"}</div> */}
            <div dangerouslySetInnerHTML={{ __html: userArticle }} />
          </Box>
        </>
      )}
    </Container>
  );
};

export default GuideView;
