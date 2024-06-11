import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import ReplyForm from './ReplyForm';
import users from './users.json';

const Comment = ({ comment, editComment, deleteComment, addReply, likeComment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(comment.text);
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    editComment(comment.id, editValue);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditValue(comment.text);
    setIsEditing(false);
  };

  return (
    <Card className="mb-3">
      <Card.Body>
      <div className="d-flex align-items-center mb-3">
          <img src={comment.userPhoto} alt="John Doe" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
          <strong> John Doe</strong>
        </div>
        {isEditing ? (
          <>
            <Form.Control
              as="textarea"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              rows={3}
            />
            <Button className="mt-2 me-2" variant="primary" onClick={handleSaveEdit}>
              Save
            </Button>
            <Button className="mt-2" variant="secondary" onClick={handleCancelEdit}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Card.Text>{comment.text}</Card.Text>
            <Button className="me-2" variant="outline-success" onClick={handleEdit}>
              Edit
            </Button>
            <Button className="me-2" variant="outline-danger" onClick={() => deleteComment(comment.id)}>
              Delete
            </Button>
            <Button variant="outline-info" onClick={() => setShowReplyForm(!showReplyForm)}>
              Reply
            </Button>
            <Button className="me-2" variant="outline-primary" onClick={() => likeComment(comment.id)}>
              👍 {comment.likes}
            </Button>
            <Button className="me-2" variant="outline-secondary">
              👎
            </Button>
          </>
        )}
        {showReplyForm && <ReplyForm onSubmit={(replyText) => addReply(comment.id, replyText)} />}
        <div className="ms-4 mt-3">
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              editComment={editComment}
              deleteComment={deleteComment}
              addReply={addReply}
              likeComment={likeComment}
            />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Comment;
