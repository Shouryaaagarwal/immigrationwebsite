// import mongoose from 'mongoose';

// const trackerSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   signup: {
//     type: Boolean,
//     default: false,
//     required: true
//   }, 
//   formFilling: {
//     type: Boolean,
//     default: false,
//     required: true
//   },
//   formSubmission: {
//     type: Boolean,
//     default: false,
//     required: true
//   },
//   submissionResult: {
//     type: Boolean,
//     default: false,
//     required: true
//   }  
  
// });

// const Tracker = mongoose.models.Tracker || mongoose.model('Tracker', trackerSchema);

// export default Tracker;  


import mongoose from 'mongoose';

const trackerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  applicationId: {
    type: String,
    required: true
  },
  signup: {
    type: Boolean,
    default: true,
    required: true
  }, 
  formFilling: {
    type: Boolean,
    default: false,
    required: true
  },
  formSubmission: {
    type: Boolean,
    default: false,
    required: true
  },
  submissionResult: {
    type: Boolean,
    default: false,
    required: true
  }
});

// Optional index for faster queries
trackerSchema.index({ userId: 1, applicationId: 1 }, { unique: true });

const Tracker = mongoose.models.Tracker || mongoose.model('Tracker', trackerSchema);

export default Tracker;
