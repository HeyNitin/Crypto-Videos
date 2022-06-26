import { useDocumentTitle } from "hooks/useDocumentTitle";

const History = (): JSX.Element => {
  useDocumentTitle("History");
  return <div>This is History page</div>;
};

export { History };
