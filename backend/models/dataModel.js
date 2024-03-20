import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  id: {
    type : Number,
    required : true,
    unique : true,
  },
  data: {
    type : String,
    required: true,
  },
});

export default mongoose.model('Data', dataSchema);
