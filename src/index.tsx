import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import "index.css";
import reportWebVitals from "reportWebVitals";
import { makeServer } from "server";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "contexts/videoContext/videoContext";
import { AuthProvider } from "contexts/authContext/authContext";
import { WatchLaterProvider } from "contexts/watchLaterContext/watchLaterContext";
import { LikedVideosProvider } from "contexts/likedVideosContext/likedVideosContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<VideoProvider>
					<WatchLaterProvider>
						<LikedVideosProvider>
							<App />
						</LikedVideosProvider>
					</WatchLaterProvider>
				</VideoProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
