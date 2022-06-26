import { useDocumentTitle } from "hooks/useDocumentTitle";

const WatchLater = (): JSX.Element => {
  useDocumentTitle("Watch-later");
  return <div>This is Watch later page</div>;
};

export { WatchLater };
