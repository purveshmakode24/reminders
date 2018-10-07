if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: ''} //your mlab Database URI
} else {
  module.exports = {mongoURI: 'mongodb://localhost/reminders'}
}