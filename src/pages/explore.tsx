import { useDocumentTitle } from "hooks/useDocumentTitle";

const Explore = (): JSX.Element => {
  useDocumentTitle("Explore");
  return <div>This is Explore page</div>;
};

export { Explore };
