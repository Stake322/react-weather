import React from 'react';
import s from "./components/Home.module.scss"

interface Props {

}

const Home = (props: Props) => {
  console.log('123');
    return (
        <div className={s.home}>
          Home321
          312
          321
        </div>
    );
}

export default Home;
