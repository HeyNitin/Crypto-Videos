import { useDocumentTitle } from "hooks/useDocumentTitle";

const Homepage = (): JSX.Element => {
  useDocumentTitle("Homepage");
  return <div>This is Homepage</div>;
};

export { Homepage };
