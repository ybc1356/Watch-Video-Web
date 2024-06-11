import { useState } from 'react';

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('cancel-button').addEventListener('click', cancelComment());
    document.getElementById('submit-button').addEventListener('click', submitComment());
    document.getElementById('like-button').addEventListener('click', likeVideo());
    document.getElementById('like-comment').addEventListener('click', likeComment())
});

function cancelComment() {
    document.getElementById('comment-input').value = '';
}

function submitComment() {
    var commentInput = document.getElementById('comment-input');
    var commentText = commentInput.value.trim();

    if (commentText !== '') {
        // Add the comment to the comments list
        addComment(commentText);

        // Clear the input field after submitting the comment
        commentInput.value = '';

        // Update the comment counter
        var commentCounter = document.getElementById('comment-counter');
        commentCounter.textContent = parseInt(commentCounter.textContent) + 1;
    }
}

function addComment(commentText) {
    // Create a new comment element
    var newComment = document.createElement('div');
    newComment.textContent = commentText;
    newComment.classList.add('comment');
    newComment.innerHTML = `
            <div class="comment-text">${commentText}</div>
            <div class="comment-actions">
                <button type="button" class="btn btn-like" onclick="likeComment()" id="like-comment">
                    <span class="like-icon">👍 </span>
                    <span id="like-comment-count"> 0 </span>
                </button>
            </div>
    `
    // Append the new comment to the comments list
    var commentsList = document.getElementById('comments-list');
    commentsList.appendChild(newComment);
}

function likeVideo() {
    var likeCount = document.getElementById('like-count');
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
}
function likeComment() {
    var likeCommentCount = document.getElementById('like-comment-count');
    likeCommentCount.textContent = parseInt(likeCommentCount.textContent) + 1;
}