import { useDocumentTitle } from "hooks/useDocumentTitle";
import { useEffect } from "react";

const Error = (): JSX.Element => {
  useDocumentTitle("Error");
  return <div>This Page doesn't exist</div>;
};

export { Error };
