import { useState } from "react";

function Card({ image, id, info, price, name, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {readMore ? info : info.substring(0, 200)}
          {info.length > 200 && (
            <span className="readmore" onClick={readMoreHandler}>
              {readMore ? "show less" : "read more"}
            </span>
          )}
          {info.length > 200 && "..."} {/* Add ellipsis if content is trimmed */}
        </div>
      </div>
      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
