'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const LogSchema = new Schema({
    type: { type: String },
    env: { type: String },
    data: Schema.Types.Mixed,
    date: { type: Date, default: Date.now },
  });
  return mongoose.model('Log', LogSchema);
};
