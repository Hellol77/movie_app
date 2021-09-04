import React from "react";

const foodILike = [
  {id:1,
    name: "라면",
    image:
      "https://image.shutterstock.com/image-photo/steam-smoke-instant-noodles-bowl-600w-1939669045.jpg",
  },
  {id:2,
    name: "치킨",
    image:
      "https://cdn.pixabay.com/photo/2015/03/11/00/31/chicken-667935_1280.jpg",
  },
  {id:3,
    name: "피자",
    image:
      "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg",
  },
];
function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name}/>
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
