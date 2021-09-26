import React, {MouseEvent} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom';
import s from './Header.module.css';
import GlobalTitle from '../../common/globalTitle/GlobalTitle';
import PacksList from '../../../src/assets/images/packsListInactive.png';
import User from '../../../src/assets/images/userActive.png';
import { PATH } from '../../components/routing/Routing';
import { useDispatch } from 'react-redux';
import { logOutTC } from '../../store/authReducer';

const Header = () => {
    
    const dispatch = useDispatch()
    
    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        dispatch(logOutTC())
    }

    return (
        <>
            <header className={s.header}>
                <div className={s.headerInner}>
                    <div className={s.globalTitleInner}>
                        <GlobalTitle />
                    </div>
                    <div className={s.headerLinks}>
                        <NavLink className={s.headerLink} activeClassName={s.active} to={PATH.CARDS_PACKS}>
                            <img className={s.headerLinkImg} src={PacksList} alt="Card img" />
                            Packs list
                        </NavLink>
                        <NavLink className={s.headerLink} activeClassName={s.active} to={PATH.PROFILE}>
                            <img className={s.headerLinkImg} src={User} alt="User img" />
                            Profile
                        </NavLink>
                        <button onClick={onClickHandler}>Log Out</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;