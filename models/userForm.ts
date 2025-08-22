// const mongoose = require('mongoose');

// const applicantSchema = new mongoose.Schema({
//     userId : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     applicationType: {
//         expressEntry: { type: Boolean, default: false },
//         pnp: { type: Boolean, default: false },
//         studyPermit: { type: Boolean, default: false },
//         workPermit: { type: Boolean, default: false },
//         visitorVisa: { type: Boolean, default: false },
//     },

//     previousVisaApplication: {
//         appliedBefore: { type: Boolean, default: false },
//         details: { type: String },
//     },

//     uciNumber: { type: String },

  
//     personalDetails: {
//         firstName: { type: String,  },
//         lastName: { type: String,  },
//         dateOfBirth: { type: String,  },
//         placeOfBirth: { type: String,},
//         colorOfEyes: { type: String },
//         height: {
//             inches: { type: Number },
//             cm: { type: Number },
//         },
//         gender: { type: String },
//         telephone: { type: String },
//         email: { type: String },
//         statusInCanada: { type: String },
//         currentAddress: { type: String },
//         homeCountryAddress: { type: String },
//     },


//     passportDetails: {
//         passportNumber: { type: String },
//         issueDate: { type: String },
//         expiryDate: { type: String },
//         countryOfIssue: { type: String },
//     },

//     // **Marital Status**
//     maritalStatus: { type: String },

//     // **Spouse/Common-Law Partner Information**
//     spouseDetails: {
//         dateOfMarriage: { type: String },
//         firstName: { type: String },
//         lastName: { type: String },
//         dateOfBirth: { type: String },
//         placeOfBirth: { type: String },
//         occupation: { type: String },
//         address: { type: String },
//     },

//     // **Father's Details**
//     fatherDetails: {
//         firstName: { type: String },
//         lastName: { type: String },
//         dateOfBirth: { type: String },
//         placeOfBirth: { type: String },
//         occupation: { type: String },
//         currentAddress: { type: String },
//         deceased: { type: Boolean, default: false },
//         dateOfDeath: { type: String },
//     },

//     // **Mother's Details**
//     motherDetails: {
//         firstName: { type: String },
//         lastName: { type: String },
//         dateOfBirth: { type: String },
//         placeOfBirth: { type: String },
//         occupation: { type: String },
//         currentAddress: { type: String },
//         deceased: { type: Boolean, default: false },
//         dateOfDeath: { type: String },
//     },

//     // **Education History**
//     educationHistory: [
//         {
//             from: { type: String },
//             to: { type: String },
//             institute: { type: String },
//             city: { type: String },
//             course: { type: String },
//         },
//     ],

   
//     workHistory: [
//         {
//             from: { type: String },
//             to: { type: String },
//             designation: { type: String },
//             jobDuties: { type: String },
//             city: { type: String },
//             country: { type: String },
//             companyName: { type: String },
//         },
//     ],


//     childrenDetails: [
//         {
//             firstName: { type: String },
//             lastName: { type: String },
//             relation: { type: String },
//             dateOfBirth: { type: String },
//             placeOfBirth: { type: String },
//             maritalStatus: { type: String },
//             occupation: { type: String },
//             currentAddress: { type: String },
//             eyeColor: { type: String },
//             height: {
//                 feet: { type: Number },
//                 inches: { type: Number },
//             },
//         },
//     ],

    
//     siblingDetails: [
//         {
//             firstName: { type: String },
//             lastName: { type: String },
//             relation: { type: String },
//             dateOfBirth: { type: String },
//             placeOfBirth: { type: String },
//             maritalStatus: { type: String },
//             occupation: { type: String },
//             currentAddress: { type: String },
//         },
//     ],

   
//     addressHistory: [
//         {
//             from: { type: String },
//             to: { type: String },
//             address: { type: String },
//             cityState: { type: String },
//             country: { type: String },
//             activity: { type: String },
//         },
//     ],

    
//     travelHistory: [
//         {
//             from: { type: String },
//             to: { type: String },
//             place: { type: String },
//             purpose: { type: String },
//         },
//     ],

 
//     relativesInCanada: [
//         {
//             firstName: { type: String },
//             lastName: { type: String },
//             address: { type: String },
//             relation: { type: String },
//             statusInCanada: { type: String },
//             yearsInCanada: { type: Number },
//         },
//     ],

   
//     ieltsScores: {
//         listening: { type: Number },
//         reading: { type: Number },
//         writing: { type: Number },
//         speaking: { type: Number },
//         overall: { type: Number },
//     },

    
//     additionalQuestions: {
//         criminalRecord: { type: Boolean, default: false },
//         previousVisaRefusal: { type: Boolean, default: false },
//         medicalIssues: { type: Boolean, default: false },
//         notes: { type: String },
//     },

   
//     declaration: {
//         signedDate: { type: String },
//         signature: { type: String },
//     },
// });

// const userForm = mongoose.models.UserForm || mongoose.model('UserForm', applicantSchema);

// export default userForm;





    // import mongoose from 'mongoose';

    // const applicantSchema = new mongoose.Schema({
    //     // ✅ New field to uniquely identify each application
    //     applicationId: {
    //         type: String,
    //         required: true,
    //         unique: true
    //     },

    //     userId: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'User',
    //         required: true
    //     },

    //     applicationType: {
    //         expressEntry: { type: Boolean, default: false },
    //         pnp: { type: Boolean, default: false },
    //         studyPermit: { type: Boolean, default: false },
    //         workPermit: { type: Boolean, default: false },
    //         visitorVisa: { type: Boolean, default: false },
    //     },

    //     previousVisaApplication: {
    //         appliedBefore: { type: Boolean, default: false },
    //         details: { type: String },
    //     },

    //     uciNumber: { type: String },

    //     personalDetails: {
    //         firstName: { type: String },
    //         lastName: { type: String },
    //         dateOfBirth: { type: String },
    //         placeOfBirth: { type: String },
    //         colorOfEyes: { type: String },
    //         height: {
    //             inches: { type: Number },
    //             cm: { type: Number },
    //         },
    //         gender: { type: String },
    //         telephone: { type: String },
    //         email: { type: String },
    //         statusInCanada: { type: String },
    //         currentAddress: { type: String },
    //         homeCountryAddress: { type: String },
    //     },

    //     passportDetails: {
    //         passportNumber: { type: String },
    //         issueDate: { type: String },
    //         expiryDate: { type: String },
    //         countryOfIssue: { type: String },
    //     },

    //     maritalStatus: { type: String },

    //     spouseDetails: {
    //         dateOfMarriage: { type: String },
    //         firstName: { type: String },
    //         lastName: { type: String },
    //         dateOfBirth: { type: String },
    //         placeOfBirth: { type: String },
    //         occupation: { type: String },
    //         address: { type: String },
    //     },

    //     fatherDetails: {
    //         firstName: { type: String },
    //         lastName: { type: String },
    //         dateOfBirth: { type: String },
    //         placeOfBirth: { type: String },
    //         occupation: { type: String },
    //         currentAddress: { type: String },
    //         deceased: { type: Boolean, default: false },
    //         dateOfDeath: { type: String },
    //     },

    //     motherDetails: {
    //         firstName: { type: String },
    //         lastName: { type: String },
    //         dateOfBirth: { type: String },
    //         placeOfBirth: { type: String },
    //         occupation: { type: String },
    //         currentAddress: { type: String },
    //         deceased: { type: Boolean, default: false },
    //         dateOfDeath: { type: String },
    //     },

    //     educationHistory: [
    //         {
    //             from: { type: String },
    //             to: { type: String },
    //             institute: { type: String },
    //             city: { type: String },
    //             course: { type: String },
    //         },
    //     ],

    //     workHistory: [
    //         {
    //             from: { type: String },
    //             to: { type: String },
    //             designation: { type: String },
    //             jobDuties: { type: String },
    //             city: { type: String },
    //             country: { type: String },
    //             companyName: { type: String },
    //         },
    //     ],

    //     childrenDetails: [
    //         {
    //             firstName: { type: String },
    //             lastName: { type: String },
    //             relation: { type: String },
    //             dateOfBirth: { type: String },
    //             placeOfBirth: { type: String },
    //             maritalStatus: { type: String },
    //             occupation: { type: String },
    //             currentAddress: { type: String },
    //             eyeColor: { type: String },
    //             height: {
    //                 feet: { type: Number },
    //                 inches: { type: Number },
    //             },
    //         },
    //     ],

    //     siblingDetails: [
    //         {
    //             firstName: { type: String },
    //             lastName: { type: String },
    //             relation: { type: String },
    //             dateOfBirth: { type: String },
    //             placeOfBirth: { type: String },
    //             maritalStatus: { type: String },
    //             occupation: { type: String },
    //             currentAddress: { type: String },
    //         },
    //     ],

    //     addressHistory: [
    //         {
    //             from: { type: String },
    //             to: { type: String },
    //             address: { type: String },
    //             cityState: { type: String },
    //             country: { type: String },
    //             activity: { type: String },
    //         },
    //     ],

    //     travelHistory: [
    //         {
    //             from: { type: String },
    //             to: { type: String },
    //             place: { type: String },
    //             purpose: { type: String },
    //         },
    //     ],

    //     relativesInCanada: [
    //         {
    //             firstName: { type: String },
    //             lastName: { type: String },
    //             address: { type: String },
    //             relation: { type: String },
    //             statusInCanada: { type: String },
    //             yearsInCanada: { type: Number },
    //         },
    //     ],

    //     ieltsScores: {
    //         listening: { type: Number },
    //         reading: { type: Number },
    //         writing: { type: Number },
    //         speaking: { type: Number },
    //         overall: { type: Number },
    //     },

    //     additionalQuestions: {
    //         criminalRecord: { type: Boolean, default: false },
    //         previousVisaRefusal: { type: Boolean, default: false },
    //         medicalIssues: { type: Boolean, default: false },
    //         notes: { type: String },
    //     },

    //     declaration: {
    //         signedDate: { type: String },
    //         signature: { type: String },
    //     },

    // }, {
    //     timestamps: true // optional: tracks createdAt & updatedAt
    // });

    // const userForm = mongoose.models.UserForm || mongoose.model('UserForm', applicantSchema);

    // export default userForm;   





    import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema(
  {
    applicationId: {
      type: String,
      required: true
      // ❌ Removed `unique: true`
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    applicationType: {
      expressEntry: { type: Boolean, default: false },
      pnp: { type: Boolean, default: false },
      studyPermit: { type: Boolean, default: false },
      workPermit: { type: Boolean, default: false },
      visitorVisa: { type: Boolean, default: false }
    },

    previousVisaApplication: {
      appliedBefore: { type: Boolean, default: false },
      details: { type: String }
    },

    uciNumber: { type: String },

    personalDetails: {
      firstName: { type: String },
      lastName: { type: String },
      dateOfBirth: { type: String },
      placeOfBirth: { type: String },
      colorOfEyes: { type: String },
      height: {
        inches: { type: Number },
        cm: { type: Number }
      },
      gender: { type: String },
      telephone: { type: String },
      email: { type: String },
      statusInCanada: { type: String },
      currentAddress: { type: String },
      homeCountryAddress: { type: String }
    },

    passportDetails: {
      passportNumber: { type: String },
      issueDate: { type: String },
      expiryDate: { type: String },
      countryOfIssue: { type: String }
    },

    maritalStatus: { type: String },

    spouseDetails: {
      dateOfMarriage: { type: String },
      firstName: { type: String },
      lastName: { type: String },
      dateOfBirth: { type: String },
      placeOfBirth: { type: String },
      occupation: { type: String },
      address: { type: String }
    },

    fatherDetails: {
      firstName: { type: String },
      lastName: { type: String },
      dateOfBirth: { type: String },
      placeOfBirth: { type: String },
      occupation: { type: String },
      currentAddress: { type: String },
      deceased: { type: Boolean, default: false },
      dateOfDeath: { type: String }
    },

    motherDetails: {
      firstName: { type: String },
      lastName: { type: String },
      dateOfBirth: { type: String },
      placeOfBirth: { type: String },
      occupation: { type: String },
      currentAddress: { type: String },
      deceased: { type: Boolean, default: false },
      dateOfDeath: { type: String }
    },

    educationHistory: [
      {
        from: { type: String },
        to: { type: String },
        institute: { type: String },
        city: { type: String },
        course: { type: String }
      }
    ],

    workHistory: [
      {
        from: { type: String },
        to: { type: String },
        designation: { type: String },
        jobDuties: { type: String },
        city: { type: String },
        country: { type: String },
        companyName: { type: String }
      }
    ],

    childrenDetails: [
      {
        firstName: { type: String },
        lastName: { type: String },
        relation: { type: String },
        dateOfBirth: { type: String },
        placeOfBirth: { type: String },
        maritalStatus: { type: String },
        occupation: { type: String },
        currentAddress: { type: String },
        eyeColor: { type: String },
        height: {
          feet: { type: Number },
          inches: { type: Number }
        }
      }
    ],

    siblingDetails: [
      {
        firstName: { type: String },
        lastName: { type: String },
        relation: { type: String },
        dateOfBirth: { type: String },
        placeOfBirth: { type: String },
        maritalStatus: { type: String },
        occupation: { type: String },
        currentAddress: { type: String }
      }
    ],

    addressHistory: [
      {
        from: { type: String },
        to: { type: String },
        address: { type: String },
        cityState: { type: String },
        country: { type: String },
        activity: { type: String }
      }
    ],

    travelHistory: [
      {
        from: { type: String },
        to: { type: String },
        place: { type: String },
        purpose: { type: String }
      }
    ],

    relativesInCanada: [
      {
        firstName: { type: String },
        lastName: { type: String },
        address: { type: String },
        relation: { type: String },
        statusInCanada: { type: String },
        yearsInCanada: { type: Number }
      }
    ],

    ieltsScores: {
      listening: { type: Number },
      reading: { type: Number },
      writing: { type: Number },
      speaking: { type: Number },
      overall: { type: Number }
    },

    additionalQuestions: {
      criminalRecord: { type: Boolean, default: false },
      previousVisaRefusal: { type: Boolean, default: false },
      medicalIssues: { type: Boolean, default: false },
      notes: { type: String }
    },

    declaration: {
      signedDate: { type: String },
      signature: { type: String }
    }
  },
  {
    timestamps: true
  }
);

// ✅ Compound index for uniqueness of applicationId *per* user
applicantSchema.index({ userId: 1, applicationId: 1 }, { unique: true });

const userForm =
  mongoose.models.UserForm || mongoose.model("UserForm", applicantSchema);

export default userForm;

