import React from "react";
import s from './Avatar.module.css';
import UserImages from '../../../src/assets/images/Users/user.jpg';

type AvatarPropstype = {
    avatar?: string
}

const Avatar = (props: AvatarPropstype) => {
    const avatarImg = props.avatar ? props.avatar : UserImages;

    return (

       <div className={s.imgInner}>
            <div className={s.imgWrap}>
                <img className={s.userImg} src={avatarImg} alt="user images" />
            </div>
       </div>
    )
}

export default Avatar;