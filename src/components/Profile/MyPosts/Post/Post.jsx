import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg" alt="" />
            { props.message }
            <div className={s.like}>
                <img src="https://pngimg.com/uploads/like/like_PNG90.png" alt="" />
                { props.likesCount }
                <img src="https://www.pinclipart.com/picdir/middle/76-767623_facebook-like-thumb-dislike-png-clipart.png" alt="" />
            </div>
        </div>
    )
}

export default Post