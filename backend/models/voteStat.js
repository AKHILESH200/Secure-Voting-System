const mongoose = require('mongoose')

const voteStatSchema = new mongoose.Schema({
      votestatus: {
        type: Boolean,
        default:false
      },
  });
  

module.exports = mongoose.model('voteStats',voteStatSchema)