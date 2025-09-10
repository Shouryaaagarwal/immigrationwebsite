// // models/userDocuments.ts
// import mongoose from 'mongoose';

// const DocumentSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   passport: { 
//     url: { type: String, required: true } 
//   },
//   marksheets: [
//     {
//       url: { type: String, required: true },
//       description: { type: String, required: true }
//     }
//   ],
//   countryVisa: {
//     url: { type: String },
//     description: { type: String }
//   },
//   nationalId: { type: String, required: true },
//   previousWork: [
//     {
//       url: { type: String, required: true },
//       description: { type: String }
//     }
//   ],
//   birthCertificate: {
//     url: { type: String, required: true },
//     description: { type: String, required: true }
//   },
//   previousRefusals: [
//     { url: { type: String } }
//   ]
// }, { timestamps: true });

// // Check if model already exists before defining it
// const DocumentModel = mongoose.models.Document || mongoose.model('Document', DocumentSchema);

// export default DocumentModel;  
 





// models/userDocuments.ts
import mongoose from 'mongoose';

const DocumentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  
  applicationId: {
    type: String,
    required: true
  },
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

// Check if model already exists before defining it
const DocumentModel = mongoose.models.Document || mongoose.model('Document', DocumentSchema);

export default DocumentModel;