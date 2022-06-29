import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Link } from "react-router-dom";
import { CategoryCard } from "components/cards/categoryCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { categoryTypes } from "pages/homepage/categoryTypes.type";
import { useToast } from "components/toast";
import { Footer } from "components/footer/footerComponent";
import { useVideo } from "contexts/videoContext/videoContext";

const Homepage = (): JSX.Element => {
	const [categories, setCategories] = useState([]);
	const { showToast } = useToast();
	const { dispatch } = useVideo();

	useDocumentTitle("Homepage");

	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get("/api/categories");
				setCategories(res.data.categories);
			} catch (error) {
				showToast("error", "Something went wrong while loading the page");
			}
		})();
	}, [setCategories, showToast]);

	return (
		<div className="min-h-[calc(100vh-5rem)] flex flex-col">
			<div className="grid">
				<img
					className="w-screen h-100 lg:h-banner col-start-1 row-start-1 col-end-2 row-end-3"
					src="https://i.postimg.cc/mkCL9L14/crypto-videos-banner.jpg"
					alt="hero img"
				></img>
				<Link
					onClick={() => dispatch({ type: "All" })}
					className="c=>ol-start-1  col-end-2 row-start-2 row-end-3 text-white justify-self-center mb-2 lg:mb-4 bg-red-500 rounded-sm p-2 px-8 items-center"
					to={"/explore"}
				>
					Watch Now
				</Link>
			</div>
			<div className="p-4 pb-16">
				<div className="text-2xl p-4 underline">Categories</div>
				<div className="grid grid-cols-categories gap-8 p-4 justify-items-center ">
					{categories.map((item: categoryTypes) => (
						<CategoryCard
							key={item._id}
							id={item._id}
							img={item.img}
							title={item.categoryName}
							categoryName={item.categoryName}
						/>
					))}
				</div>
			</div>
			<div className="mt-auto">
				<Footer />
			</div>
		</div>
	);
};

export { Homepage };
