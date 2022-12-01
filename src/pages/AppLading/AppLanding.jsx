
import React, { useEffect, useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import styles from './AppLanding.module.css';

import { FaHandHoldingHeart } from 'react-icons/fa';
import { TfiReload } from 'react-icons/tfi';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

import axios from 'axios';

import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

const initialData = [
    {
        id: 1,
        imgProject: 'https://res.cloudinary.com/duzncuogi/image/upload/v1667760452/my-portfolio/projects/amazon_gucx6t.jpg',
        name: 'Amazon Clone',
        avatar: 'https://media-exp1.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc',
        username: 'Jose David',
        description: 'Amazon Clone Completed Eccommerce',
        host: 'https://dota-app-ts.vercel.app/',
        repository: 'https://github.com/josedbolivarma/Dota-App-TS',
        overview: 'Amazon Ecommerce Clone, has its list of products, a login and user registration, in addition to being able to see the details of each product, these can be added to the stock and to the shopping cart. It has a geolocation system through a global map.',
        jobAspiration: 'Product Manager',
        linkeding: 'https://www.linkedin.com/in/jose-david-bolivar-mayora-developer/',
        cv: 'https://www.linkedin.com/in/jose-david-bolivar-mayora-developer/',
        github: 'https://github.com/josedbolivarma',
        technologies: [
          {
            name: 'React',
            icon: ''
          },
          {
            name: 'Redux',
            icon: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png'
          },
          {
            name: 'TypeScript',
            icon: ''
          },
          {
            name: 'Firebase',
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/firebase-1-logo-png-transparent.png'
          }
        ]
    },
    {
        id: 2,
        imgProject: 'https://res.cloudinary.com/duzncuogi/image/upload/v1667760454/my-portfolio/projects/dota_sqpldu.jpg',
        name: 'Dota 2 App',
        username: 'Carolina',
        description: 'Clone app inspired in Dota 2 App',
        host: 'https://dota-app-ts.vercel.app/',
        repository: 'https://github.com/josedbolivarma/Dota-App-TS',
        overview: 'Personal application based on the Dota 2 MOBA video game. Clone of the main page of https://www.dota2.com/heroes. The user can choose a hero, apply a series of filters or search for it directly. Once the hero and its detail page have been selected, the abilities, points and description of said hero will be displayed, as well as the possibility of choosing the next or previous hero, depending on whether they exist.',
        jobAspiration: 'Frontend Developer',
        avatar: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8&w=1000&q=80',
        linkeding: 'https://www.linkedin.com/in/jose-david-bolivar-mayora-developer/',
        cv: 'https://www.linkedin.com/in/jose-david-bolivar-mayora-developer/',
        github: 'https://github.com/josedbolivarma',
        technologies: [
          {
            name: 'React',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
          },
          {
            name: 'TypeScript',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
          },
          {
            name: 'NodeJS',
            icon: ''
          },
          {
            name: 'Heroku',
            icon: ''
          },
          {
            name: 'Sass',
            icon: ''
          },
        ]
    },
    {
      id: 3,
      imgProject: 'https://res.cloudinary.com/duzncuogi/image/upload/v1667760480/my-portfolio/projects/netflix_b8ukv8.png',
      name: 'Netflix Clone',
      username: 'Christian',
      avatar: 'https://www.hindustanbazzar.com/adminpanel/upload/cms/1653958782031.jpg',
      description: 'Clone app inspired in Dota 2 App',
      host: 'https://app-netnet.vercel.app/',
      repository: 'https://github.com/josedbolivarma/app-netnet',
      overview: 'Netflix clone made with Vanilla JavaScript ,Rest API with NodeJS and deploy to Heroku. Use of LocalStorage and Fetch API.',
      jobAspiration: 'Sr. User Interface Designer',
      linkeding: 'https://www.linkedin.com/in/jose-david-bolivar-mayora-developer/',
      cv: 'https://www.linkedin.com/in/jose-david-bolivar-mayora-developer/',
      github: 'https://github.com/josedbolivarma',
      technologies: [
        {
          name: 'JavaScript',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
        },
        {
          name: 'Rest API',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
        },
        {
          name: 'Heroku',
          icon: ''
        },
      ]
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
    <div className={ styles.appLading }>
    <div className={ styles.tinderCards }>
      <div className={ styles.tinderCards__cardContainer }>
        {people.map((person, index) => (
          <TinderCard
            className={ styles.swipe }
            ref={childRefs[index]}
            key={person.name}
            onSwipe={(dir) => swiped(dir, person.name, index)}
            onCardLeftScreen={() => outOfFrame(person.name, index)}
          >
            <ProjectCard person={ person } 
            canGoBack={ canGoBack }
            canSwipe={ canSwipe }
            goBack={ goBack }
            swipe={ swipe }
            />
          </TinderCard>
        ))}
      </div>
      
    </div>

    {/* <div className={ styles.buttons }>
        <GrLinkPrevious size={ 40 } color={ !canSwipe && '#c3c4d3' } onClick={() => swipe('left')} />
        <TfiReload size={ 40 } color={ !canGoBack && '#c3c4d3' } onClick={() => goBack()} />
        <GrLinkNext size={ 40 } color={ !canSwipe && '#c3c4d3' } onClick={() => swipe('right')} />
        <FaHandHoldingHeart size={ 40 }/>
      </div> */}

    </div>

  )
}


// const TINDER = () => {
//   return (
    // <div className="tinderCards">
    //   <div className="tinderCards__cardContainer">
    //     {people.map((person, index) => (
    //       <TinderCard
    //         className="swipe"
    //         ref={childRefs[index]}
    //         key={person.name}
    //         onSwipe={(dir) => swiped(dir, person.name, index)}
    //         onCardLeftScreen={() => outOfFrame(person.name, index)}
    //       >
    //         <div
    //           style={{ backgroundImage: `url(${person.imgProject})` }}
    //           className="card"
    //         >
    //           <h3>{person.name}</h3>
    //         </div>
    //       </TinderCard>
    //     ))}
    //   </div>
    //   <div className='buttons'>
    //     <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
    //     <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
    //     <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>
    //   </div>
    //   <div>
    //     <button>Favorite</button>

    //   </div>
    // </div>
//   )
// }