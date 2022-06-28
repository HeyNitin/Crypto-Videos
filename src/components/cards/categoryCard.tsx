import { useNavigate } from "react-router-dom";
import { categoryCardTypes } from "components/cards/categoryCardTypes.type"

const CategoryCard = ({ id, img, title }: categoryCardTypes): JSX.Element => {
  const Navigate = useNavigate()
  return (
    <div key={id} onClick={() => Navigate('/explore')} className="shadow-card cursor-pointer w-72 h-40 grid">
      <img className="col-start-1 col-end-2 row-start-1 row-end-3"
        src={img}
        alt="thumbnail"
      ></img>
      <div className="bg-slate-600 dark:bg-slate-300 h-20 opacity-90 col-start-1 col-end-2 row-start-2 row-end-3">
      </div>
      <div className=" col-start-1 col-end-2 row-start-2 row-end-3 justify-self-center z-10 self-center text-lg text-white dark:text-black">{title}</div>
    </div>
  );
};

export { CategoryCard };
