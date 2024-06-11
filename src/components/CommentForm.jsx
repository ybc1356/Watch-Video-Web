import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import users from '../../users.json';

const CommentForm = ({ onSubmit }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAuthenticated()) {
      if (commentText.trim()) {
        onSubmit(commentText);
        setCommentText('');
      }
    } else {
      alert('Please log in to comment');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={3}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
        />
      </Form.Group>
      <Button type="submit" className="mt-2" variant="primary">
        Comment
      </Button>
    </Form>
  );
};

export default CommentForm;
