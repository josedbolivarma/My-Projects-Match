
import React, { useEffect, useMemo, useRef, useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(people.length - 1);
  const [lastDirection, setLastDirection] = useState();

  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(people.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  useEffect(() => {
    // async function fetchData() {
    // //   const req = await axios.get("/api/projects/cards");

    //   setPeople(req.data);
    // // }
    // fetchData();
  }, []);

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < people.length - 1

  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  // With Buttons
  const swipe = async (dir) => {
    if (canSwipe && currentIndex < people.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

   // increase current index and show card
   const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }
  
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person, index) => (
          <TinderCard
            className="swipe"
            ref={childRefs[index]}
            key={person.name}
            onSwipe={(dir) => swiped(dir, person.name, index)}
            onCardLeftScreen={() => outOfFrame(person.name, index)}
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
      <div className='buttons'>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
        <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>
      </div>
      <div>
        <button>Favorite</button>

      </div>
    </div>
  )
}
