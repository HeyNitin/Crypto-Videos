import { useDocumentTitle } from "hooks/useDocumentTitle";

const Playlist = (): JSX.Element => {
  useDocumentTitle("Playlist");
  return <div>This is Playlist page</div>;
};

export { Playlist };
