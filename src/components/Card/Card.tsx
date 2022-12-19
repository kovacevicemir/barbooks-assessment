import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";

interface ICardProps {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

const Card: React.FC<ICardProps> = ({ id, title, imageUrl, description }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/details/${id}`);
      }}
      className={styles.cardContainer}
    >
      <h3>{title}</h3>
      <div className={styles.subContainer}>
        {/* Not sure how to fetch image... cant access api */}
        <img
          src={imageUrl}
          alt={imageUrl}
          style={{
            border: "1px solid gray",
            width: "150px",
            height: "150px",
            marginRight: "5px",
          }}
        />
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Card;
