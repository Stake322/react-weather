import React from 'react';
import Days from './components/Days/Days';
import s from "./components/Home.module.scss"
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';

interface Props {

}

const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days/>

    </div>
  );
}

export default Home;
