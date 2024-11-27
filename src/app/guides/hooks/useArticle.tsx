import { marked } from "marked";
import { useEffect, useState } from "react";
import axiosGuide from "../../api/axiosGuide";

// Define the return type of the hook as a tuple: [string, boolean]
const useArticle = (key: string | unknown) => {
  // Update the state to hold a string for the article content
  const [userArticle, setUserArticle] = useState<string>(''); // Use string instead of array
  const [isLoading, setIsLoading] = useState(true);

  const loadGuide = (key: string | unknown) => {
    axiosGuide
      .get("/article", {
        params: { key },
      })
      .then((response) => {
        // `marked` returns a string, so `userArticle` should be a string
        setUserArticle(marked(response.data));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (key) {
      loadGuide(key);
    }
  }, [key]);
  return [userArticle, isLoading];
};
export default useArticle;
