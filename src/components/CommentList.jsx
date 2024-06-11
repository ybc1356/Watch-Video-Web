import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments, updateComment }) => {
  return (
    <div>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} updateComment={updateComment} />
      ))}
    </div>
  );
};

export default CommentList;
