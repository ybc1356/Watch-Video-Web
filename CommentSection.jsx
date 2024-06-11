import React, { useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (newCommentText) => {
    const newComment = {
      id: Date.now(),
      text: newCommentText,
      likes: 0,
      replies: [],
    };
    setComments([...comments, newComment]);
  };

  const handleEditComment = (id, updatedText) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, text: updatedText } : comment
    );
    setComments(updatedComments);
  };

  const handleDeleteComment = (id) => {
    const deleteRecursively = (commentsList, idToDelete) => {
      return commentsList.filter((comment) => {
        if (comment.id === idToDelete) return false;
        comment.replies = deleteRecursively(comment.replies, idToDelete);
        return true;
      });
    };

    setComments(deleteRecursively(comments, id));
  };

  const handleAddReply = (id, replyText) => {
    const addReplyRecursively = (commentsList, idToAdd, reply) => {
      return commentsList.map((comment) => {
        if (comment.id === idToAdd) {
          comment.replies = [...comment.replies, reply];
        } else {
          comment.replies = addReplyRecursively(comment.replies, idToAdd, reply);
        }
        return comment;
      });
    };

    const newReply = {
      id: Date.now(),
      text: replyText,
      likes: 0,
      replies: [],
    };

    setComments(addReplyRecursively(comments, id, newReply));
  };

  const handleLikeClick = () => {
    if (isAuthenticated()) {
      handleLikeComment(comments.id);
    } else {
      alert("You must be logged in to like a comment.");
    }
  };

  const handleLikeComment = (id) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
    );
    setComments(updatedComments);
  };


  return (
    <div className="container mt-4">
      <h2>Comments</h2>
      <CommentForm onSubmit={handleAddComment} />
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          editComment={handleEditComment}
          deleteComment={handleDeleteComment}
          addReply={handleAddReply}
          likeComment={handleLikeComment}
        />
      ))}
    </div>
  );
};

export default CommentSection;
