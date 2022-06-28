import { Routes as R, Route } from "react-router-dom";

import { Homepage } from "pages/homepage/homepage";
import { Explore } from "pages/explore";
import { Playlist } from "pages/playlists";
import { WatchLater } from "pages/watchLater";
import { LikedVideos } from "pages/likedVideos";
import { History } from "pages/history";
import { Login } from "pages/login";
import { Signup } from "pages/signup";
import { Error } from "pages/error";

const Routes = (): JSX.Element => {
  return (
    <div className=" mt-24 dark:bg-slate-600 dark:text-white">
      <R>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlists" element={<Playlist />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/liked-videos" element={<LikedVideos />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </R>
    </div>
  );
};

export { Routes };
