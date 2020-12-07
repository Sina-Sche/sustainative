import styled, { css } from "styled-components/macro";
import { ReactComponent as Bamboo } from "../assets/icons/bamboo.svg";
import { ReactComponent as Travel } from "../assets/icons/travel.svg";
import { ReactComponent as Reuse } from "../assets/icons/reuse.svg";
import { ReactComponent as Tree } from "../assets/icons/tree.svg";
import Image from "../components/Image";
import PropTypes from "prop-types";
import ProductText from "./ProductText";

const DetailsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  align-items: center;
  div {
    margin-top: 0;
    padding-top: 0;
    min-width: 350px;
  }
  h3 {
    margin-top: 0;
    padding-top: 0;
    text-align: left;
    color: var(--primary-color);
  }
  h5 {
    color: var(--primary-color);
    text-align: left;
  }
  p {
    color: var(--primary-color);
    height: auto;
    display: flex;
    overflow: visible;
  }
  img {
    border: 1px solid var(--icon-active-color);
  }
  h6 {
    color: var(--primary-color);
    text-align: left;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 0;
  }
  a {
    align-self: flex-end;
    width: 40%;
  }
`;

const ProductDetailsContainer = styled.div`
  background-image: var(--gradient);
  display: flex;
  flex-direction: column;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  max-width: 800px;
`;

const Button = styled.button`
  background-color: var(--primary-color);
  border-radius: 50px;
  color: var(--secondary-color);
  font-weight: bold;
  padding: 8px;
  margin: 15px;
  letter-spacing: 1;
  font-size: 0.9rem;
`;

const categoryStyle = css`
  margin: 15px;
  width: 50px;
  height: 50px;
  fill: white;
`;

const BambooIcon = styled(Bamboo)`
  ${categoryStyle}
`;
const TravelIcon = styled(Travel)`
  ${categoryStyle}
`;
const ReuseIcon = styled(Reuse)`
  ${categoryStyle}
`;
const TreeIcon = styled(Tree)`
  ${categoryStyle}
`;
const ProductDetails = ({ data, onClick, isFavorite }) => {
  return (
    <DetailsContainer>
      <Image
        src={data?.image}
        alt={data?.title}
        onClick={onClick}
        isFavorite={isFavorite}
      />
      <ProductDetailsContainer>
        <h6>{data?.company_name}</h6>
        <ProductText
          title={data?.display_title}
          price={data?.price}
          description={data?.description}
        />
        <div>
          <BambooIcon />
          <TravelIcon />
          <ReuseIcon />
          <TreeIcon />
        </div>
        <a href={data?.url}>
          <Button>Visit Website</Button>
        </a>
      </ProductDetailsContainer>
    </DetailsContainer>
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.object,
  isFavorite: PropTypes.bool,
};
