import { useEffect } from "react";

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `Crypto Videos || ${title}`;
  }, [title]);
};

export { useDocumentTitle };
