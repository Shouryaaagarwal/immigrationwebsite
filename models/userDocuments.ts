import mongoose from 'mongoose';

const DocumentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  passport: { 
    url: { type: String, required: true } 
  },

  marksheets: [
    {
      url: { type: String, required: true },
      description: { type: String, required: true }
    }
  ],

  countryVisa: {
    url: { type: String },
    description: { type: String }
  },

  nationalId: { type: String, required: true },

  previousWork: [
    {
      url: { type: String, required: true },
      description: { type: String }
    }
  ],

  birthCertificate: {
    url: { type: String, required: true },
    description: { type: String, required: true }
  },

  previousRefusals: [
    { url: { type: String } }
  ]
}, { timestamps: true });

export default mongoose.model('Document', DocumentSchema);
