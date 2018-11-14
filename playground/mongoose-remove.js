const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5bec1d47da3ba33aed208985'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5bec1d47da3ba33aed208985').then((todo) => {
  console.log(todo);
});
