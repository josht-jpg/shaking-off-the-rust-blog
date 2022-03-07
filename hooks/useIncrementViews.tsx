import axios from "axios";
import { useEffect } from "react";

const useIncrementViews = (page: string) => {
  useEffect(() => {
    const incrementViewCount = async () =>
      await axios.post("/api/views", { page });

    incrementViewCount();
  }, []);
};

export default useIncrementViews;
