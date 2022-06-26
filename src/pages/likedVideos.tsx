import { useDocumentTitle } from "hooks/useDocumentTitle";

const LikedVideos = (): JSX.Element => {
  useDocumentTitle("Liked-videos");
  return <div>This is Liked Videos page</div>;
};

export { LikedVideos };
