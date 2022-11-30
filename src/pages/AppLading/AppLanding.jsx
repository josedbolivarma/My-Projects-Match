
import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import '../../components/ProjectCard/ProjectCard.css';

import axios from 'axios';

const initialData = [
    {
        imgProject: 'https://res.cloudinary.com/duzncuogi/image/upload/v1667760452/my-portfolio/projects/amazon_gucx6t.jpg',
        name: 'Jose'
    },
    {
        imgProject: 'https://res.cloudinary.com/duzncuogi/image/upload/v1667760480/my-portfolio/projects/netflix_b8ukv8.png',
        name: 'Carolina'
    },
]

export const AppLanding = () => {
  const [people, setPeople] = useState(initialData);

  useEffect(() => {
    // async function fetchData() {
    // //   const req = await axios.get("/api/projects/cards");

    //   setPeople(req.data);
    // // }
    // fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };
  
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgProject})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}
