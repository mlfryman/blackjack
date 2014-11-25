'use strict';

var mongoose   = require('mongoose'),
    bcrypt     = require('bcrypt'),
    //- User       = require('../user/user'),
    RoomSchema = null,
    Room       = null;

RoomSchema = new mongoose.Schema({
  name:      {type: String, required: true, validate: [nameV, 'name length'], unique: true},
  password:  {type: String, required: true, validate: [passwordV, 'password length']},
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  createdAt: {type: Date, required: true, default: Date.now}
});

RoomSchema.statics.join = function(obj, cb){
  Room.findOne({name: obj.name}, function(err, room){
    if(!room){
     return cb();
    }

    var isGood = bcrypt.compareSync(obj.password, room.password);

    if(!isGood){
      return cb();
    }

    cb(room);
  });
};

RoomSchema.statics.allRooms = function(cb){
  this.find({}, function(err, rooms){
    cb(err, rooms);
  });
};

function nameV(v){
  return v.length >= 3 && v.length <= 12;
}

function passwordV(v){
  return v.length === 60;
}

Room = mongoose.model('Room', RoomSchema);
module.exports = Room;
