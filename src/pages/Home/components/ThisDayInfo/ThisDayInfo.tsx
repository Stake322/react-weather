import React from 'react';
import Select from 'react-select'

import s from "./ThisDayInfo.module.scss"
import cloud from "../../../../assets/images/image 1.png"
import { ThisDayItem } from './ThisDayItem';
interface Props {

}

export interface Item {
    icon_id: string,
    name: string,
    value: string,
}
const ThisDayInfo = (props: Props) => {


    const options = [
        { value: 'city-1', label: 'Санкт-Петербург' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Саратов' }
    ]


    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 5,
        })
    }

    const items = [{
        icon_id: 'temp',
        name: 'Температура',
        value: '20° - ощущается как 17°',
    },
    {
        icon_id: 'pressure',
        name: 'Давление',
        value: '765 мм ртутного столба - нормальное',
    },
    {
        icon_id: 'precipitation',
        name: 'Осадки',
        value: 'Без осадков',
    },
    {
        icon_id: 'wind',
        name: 'Ветер',
        value: '3 м/с юго-запад - легкий ветер',
    },]

    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {items.map((item: Item)=>(
                    <ThisDayItem item={item} key={item.icon_id}/>
                ))}
            </div>
            <img src={cloud} alt='Облако' className={s.cloud__img} />
        </div>
    );
}

export default ThisDayInfo;
