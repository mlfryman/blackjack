'use strict';

var mongoose   = require('mongoose'),
    bcrypt     = require('bcrypt'),
    RoomSchema = null,
    Room       = null;

RoomSchema = new mongoose.Schema({
  name:      {type: String, required: true, validate: [nameV, 'name length'], unique: true},
  password:  {type: String, required: true, validate: [passwordV, 'password length']},
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  createdAt: {type: Date, required: true, default: Date.now}
});

RoomSchema.methods.encrypt = function(){
  this.password = bcrypt.hashSync(this.password, 10);
};

RoomSchema.statics.decrypt = function(obj, cb){
  Room.findOne({name: obj.name}, function(err, foundRoom){
    if(!foundRoom){
     return cb();
    }

    var isGood = bcrypt.compareSync(obj.password, foundRoom.password);

    if(!isGood){
      return cb();
    }

    cb(foundRoom._id);
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
