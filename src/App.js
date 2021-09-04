import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "라면",
    image:
      "https://image.shutterstock.com/image-photo/steam-smoke-instant-noodles-bowl-600w-1939669045.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "치킨",
    image:
      "https://cdn.pixabay.com/photo/2015/03/11/00/31/chicken-667935_1280.jpg",
    rating: 3,
  },
  {
    id: 3,
    name: "피자",
    image:
      "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg",
    rating: 4,
  },
];
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
