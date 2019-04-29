import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <span className="avatar">
                <img alt="Avatar" src={props.avatar} />
            </span>
            <div className="content">
                <span className="author">{props.author}</span>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">
                    {props.comment}
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;