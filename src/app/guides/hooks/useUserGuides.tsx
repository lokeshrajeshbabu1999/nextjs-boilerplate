import { useEffect, useState } from "react";
import axiosGuide from "../../api/axiosGuide";

const useUserGuides = () => {
  const [userGuide, setUserGuide] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadUserGuides = () => {
    setIsLoading(true);
    axiosGuide
      .get("/guide/list", {})
      .then((response) => {
        setUserGuide(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadUserGuides();
  }, []);

  return [userGuide, isLoading];
};

export default useUserGuides;
