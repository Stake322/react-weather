import React from 'react';
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';
import Select from 'react-select'

import s from "./Header.module.scss"

interface Props {

}

const Header = (props: Props) => {


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

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id="header-logo" /></div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <div className={s.logo}><GlobalSvgSelector id="change-theme" /></div>
                </div>
                <Select styles={colourStyles} options={options}  defaultValue={options[2]} />

            </div>
        </header>
    );
}

export default Header;
