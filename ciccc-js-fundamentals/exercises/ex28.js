/*
Create an object called facebookProfile. The object should have 3 properties:
your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:
postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
  name: 'Koki Sakai',
  numFriends: 400,
  posts: ['ohayo', 'morning', 'bon dia'],
  addMessage: function postMessage(newMessage) {
    this.posts.push(newMessage);
  },
  deleteMessage: function deleteMessage(index) {
    this.posts.splice(index, 1);
  },
  addFriend: function addFriend() {
    this.numFriends++;
  },
  removeFriend: function removeFriend() {
    this.numFriends--;
  },
};

console.log(facebookProfile.posts);
// facebookProfile.addMessage('night');
// console.log(facebookProfile.posts);
// facebookProfile.deleteMessage(0);
// console.log(facebookProfile.posts);
