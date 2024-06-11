import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const ReplyForm = ({ onSubmit }) => {
  const [replyText, setReplyText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      onSubmit(replyText);
      setReplyText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Control
        as="textarea"
        rows={2}
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        placeholder="Write a reply..."
      />
      <Button type="submit" className="mt-2" variant="primary">
        Reply
      </Button>
    </Form>
  );
};

export default ReplyForm;
