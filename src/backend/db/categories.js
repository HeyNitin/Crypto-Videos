import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Cryptocurrencies",
    img: "https://i.postimg.cc/zBB7Pp3X/thumbnail-01.jpg",
    ytLink:
      "https://www.youtube.com/watch?v=iFAc91miTMY&ab_channel=Him-eeshMadaan",
  },
  {
    _id: uuid(),
    categoryName: "Web 3.0",
    img: "https://i.postimg.cc/131wHf7J/thumbnail-02.jpg",
    ytLink: "https://www.youtube.com/watch?v=wHTcrmhskto&ab_channel=Fireship",
  },
  {
    _id: uuid(),
    categoryName: "NFTs",
    img: "https://i.postimg.cc/NFv0Rrpc/thumbnail-03.jpg",
    ytLink: "https://www.youtube.com/watch?v=as7acW3B2jA&ab_channel=warikoo",
  },
  {
    _id: uuid(),
    categoryName: "Blockchain",
    img: "https://i.postimg.cc/7PShwmZY/thumbnail-04.jpg",
    ytLink:
      "https://www.youtube.com/watch?v=SSo_EIwHSd4&ab_channel=SimplyExplained",
  },
];
