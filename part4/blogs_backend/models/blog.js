const mongoose = require('mongoose');
const dns = require('node:dns/promises');
const config = require('../utils/config');
const logger = require('../utils/logger');
const { type } = require('node:os');

dns.setServers(['1.1.1.1', '1.0.0.1']);

mongoose.set('strictQuery', false);

const url = config.MONGODB_URI;

logger.info('connecting to', url);

mongoose
  .connect(url)

  .then((result) => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

const Blog = mongoose.model('Blog', blogSchema);

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Blog', blogSchema);
