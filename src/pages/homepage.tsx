import { useDocumentTitle } from "hooks/useDocumentTitle";
import { Link } from "react-router-dom";
import { CategoryCard } from "components/cards/categoryCard";
import { useEffect, useState } from "react";
import axios from "axios";


type category = {
  _id: number,
  categoryName: string,
  img: string
}

const Homepage = (): JSX.Element => {
  useDocumentTitle("Homepage");
  const [categories, setCategories] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/categories')
        setCategories(res.data.categories)
      }
      catch (error) {
        console.error(error)
      }
    })()
  }, []
  )

  return (
    <div>
      <div className="grid">
        <img
          className="w-screen h-banner col-start-1 row-start-1 col-end-2 row-end-3"
          src="https://i.postimg.cc/mkCL9L14/crypto-videos-banner.jpg"
          alt="hero img"
        ></img>
        <Link
          className="col-start-1  col-end-2 row-start-2 row-end-3 text-white justify-self-center mb-2 bg-red-500 p-1 rounded-sm pr-4 pl-4"
          to={"/explore"}
        >
          Watch Now
        </Link>
      </div>
      <div className="p-4">
        <div className="text-2xl">Categories</div>
        <div className="grid grid-cols-categories gap-4 p-4 justify-items-center">
          {categories.map((item: category) =>
            <CategoryCard key={item._id} id={item._id} img={item.img} title={item.categoryName} />
          )}
        </div>
      </div>
    </div>
  );
};

export { Homepage };
