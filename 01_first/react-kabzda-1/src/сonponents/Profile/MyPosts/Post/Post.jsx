import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://lastfm.freetls.fastly.net/i/u/ar0/8490d45bf8153fd8554e7e538d3ab7fb.png" alt=""/>
            { props.message }
            <div>
                Like - {props.likesCount}
            </div>
        </div>
    )
}

export default Post;