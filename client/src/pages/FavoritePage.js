import InfoBox from "../components/InfoBox";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import useFavorites from "../hooks/useFavorites";
import { getProductById } from "../utils/api";
import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";

export const FavoritePage = () => {
  const { toggleFavorite, favorites } = useFavorites("favorites", []);
  const [favoriteData, setFavoriteData] = useState();

  useEffect(() => {
    const getData = async () => {
      const promiseData = favorites.map(async (id) => getProductById(id));
      const newData = await Promise.all(promiseData);
      setFavoriteData(newData);
      return newData;
    };
    getData();
  }, [favorites]);

  return (
    <PageWrapper>
      <Header title={"Favorites"} />
      <h2>My favorite Products</h2>
      {favoriteData &&
        favoriteData.map((product) => {
          return (
            <InfoBox
              key={product.id}
              id={product.id}
              size={"small"}
              {...product}
              onClick={() => toggleFavorite(product.id)}
              isFavorite={favorites.includes(product.id)}
            />
          );
        })}
      <NavBar />
    </PageWrapper>
  );
};
