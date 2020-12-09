import styled from "styled-components/macro";
import PropTypes from "prop-types";
import TextContainer from "./TextContainer";
import Image from "../components/Image";
import useFavorites from "../hooks/useFavorites";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  background-image: var(--gradient);

  > :last-child {
    margin-bottom: 15px;
  }
  img {
    height: auto;
    width: 100%;
    background: var(--primary-color);
  }
  h2 {
    color: var(--primary-color);
  }
`;

const ProductPreview = ({ title, src, alt, size, id, onClick, isFavorite }) => {
  return (
    <Container>
      <h2>Our Current Favorite</h2>
      <Image
        src={src}
        alt={alt}
        size={size}
        onClick={onClick}
        isFavorite={isFavorite}
        id={id}
      />
      <TextContainer title={title} />
    </Container>
  );
};

export default ProductPreview;

ProductPreview.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.number,
  size: PropTypes.oneOf(["small", "large"]),
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
