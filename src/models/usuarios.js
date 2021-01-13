const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    uppercase: true,
    minlength: 3,
    maxlength: 100
  },
  matricula: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 9999,
    unique: true
  },
  ativo: {
    type: Boolean,
    default: true,
    required: true
  },
  endereco: {
    cidade: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100
    },
    estado: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 2
    }
  },
  registro: {
    type: Date,
    default: Date.now
  }
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('Usuario', UserSchema);

