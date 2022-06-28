import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Sidebar } from "components/sidebar";

const LikedVideos = (): JSX.Element => {
  useDocumentTitle("Liked-videos");
  return <div>    <Sidebar /></div>;
};

export { LikedVideos };
