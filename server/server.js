var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// });

var newTodo2 = new Todo({
  text: 'Wash dishes',
  completed: true,
  completedAt: 88888
});

newTodo2.save().then((doc) => {
  console.log('Saved toto', doc);
}, (e) => {
  console.log('Unable to save todo');
});
