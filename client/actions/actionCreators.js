//increment
function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

//add comment
function addComment(postID, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postID,
    author,
    comment
  }
}

//remove comment

function removeComment(postID, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postID
  }
}
