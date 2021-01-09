import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Image from "../components/Image";
import ProductText from "./ProductText";
import icons from "./CategoryIcons";
import useFavorites from "../hooks/useFavorites";
import { ReactComponent as Visit } from "../assets/icons/go.svg";

const DetailsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  align-items: center;
  color: var(--primary-color);
  div {
    margin-top: 10px;
    min-width: 350px;
  }
  h3,
  h5,
  h6 {
    color: var(--primary-color);
    margin-top: 0;
    padding-top: 0;
    text-align: left;
  }
  p {
    color: var(--primary-color);
    -webkit-line-clamp: 8;
    margin: 0 5px 0;
  }
  img {
    border: 1px solid var(--secondary-color);
  }
  a {
    align-self: flex-end;
    width: 40%;
  }
  li {
    text-align: center;
  }
`;

const ProductDetailsContainer = styled.div`
  background-image: var(--gradient);
  display: flex;
  flex-direction: column;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  max-width: 800px;
  margin: 10px;
`;

const Button = styled.button`
  background-color: var(--primary-color);
  border-radius: 50px;
  color: var(--secondary-color);
  font-weight: bold;
  margin: 15px;
  padding: 8px;
  letter-spacing: 1;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  width: 80%;
  svg {
    fill: var(--secondary-color);
    height: 20px;
    justify-self: flex-start;
    margin: 0 10px 0;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px;
  svg {
    fill: var(--primary-color);
  }
  p {
    font-size: 0.8rem;
    text-align: center;
  }
`;

const ProductDetails = (data) => {
  const { favorites, toggleFavorite } = useFavorites("favorites", []);
  const productCategories = data.categories.map((category) => icons[category]);
  const productCategoryIcons = Object.entries(productCategories).map(
    ([categoryName, { icon: Icon, label }]) => (
      <li key={categoryName}>
        <Icon />
        <p>{label}</p>
      </li>
    )
  );
  return (
    <DetailsContainer>
      <Image
        {...data}
        onClick={() => {
          toggleFavorite(data.id);
        }}
        isFavorite={favorites.includes(data.id)}
      />
      <ProductDetailsContainer>
        <ProductText {...data} />
        <IconContainer>{productCategoryIcons}</IconContainer>
        <a href={data.url}>
          <Button>
            <Visit />
            Website
          </Button>
        </a>
      </ProductDetailsContainer>
    </DetailsContainer>
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
