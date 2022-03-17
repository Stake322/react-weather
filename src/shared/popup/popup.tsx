import React from 'react';
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';
import Select from 'react-select'

import s from "./popup.module.scss"
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';

interface Props {
    items: Item[]
}



const popup = () => {

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
        <>
            <div className={s.blur}></div>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.day__temp}>12°</div>
                    <div className={s.day__name}>Среда</div>
                    <div className={s.img}><GlobalSvgSelector id='sun' /></div>
                    <div className={s.day__time}>
                        Время: <span>21:02</span>
                    </div>
                    <div className={s.day__city}>
                        Саратов
                    </div>
                </div>
                <div className={s.this__day_info}>
                    <div className={s.this__day_info_items}>
                        {items.map((item: Item) => (
                            <ThisDayItem item={item} key={item.icon_id} />
                        ))}
                    </div>
                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id='close' />
                </div>
            </div>
        </>
    );
}

export default popup;
