import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Sidebar } from "components/sidebar";

const Explore = (): JSX.Element => {
  useDocumentTitle("Explore");
  return <div>
    <Sidebar />
  </div>;
};

export { Explore };





















