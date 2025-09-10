import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password"],
    },
 
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
      default: null,
    },
    otpExpires: {
      type: Date,
      default: null,
    },
    resetPasswordOTP: {
      type: String,
      default: null,
    },
    resetPasswordOTPExpires: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      enum: ["pending", "done"],
      default: "pending",
    },
    // Tracking fields for each step
    // tracker: {
    //   signUp: {
    //     type: Boolean,
    //     default: false,
    //     required: true
    //   },
    //   submitForm: {
    //     type: Boolean,
    //     default: false,
    //     required: true
    //   },
    //   fillingAndSubmission: {
    //     type: Boolean,
    //     default: false,
    //     required: true
    //   },
    //   result: {
    //     type: Boolean,
    //     default: false,
    //     required: true
    //   },
     
    // }, 
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;



// import mongoose from 'mongoose';
// import validator from 'validator';

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Please provide a name"],
//       trim: true,
//       minlength: [3, "Name must be at least 3 characters"],
//       maxlength: [30, "Name cannot exceed 30 characters"],
//     },
//     email: {
//       type: String,
//       required: [true, "Please provide an email"],
//       unique: true,
//       lowercase: true,
//       trim: true,
//       validate: [validator.isEmail, "Please provide a valid email"],
//       index: true,
//     },
//     password: {
//       type: String,
//       required: function (this: any) {
//         return !this.isOAuth;
//       },
//       minlength: [8, "Password must be at least 8 characters"],
//       select: false,
//     },
//     passwordConfirm: {
//       type: String,
//       required: function (this: any) {
//         return !this.isOAuth;
//       },
//       validate: {
//         validator: function(this: any, el: string) {
//           return el === this.password;
//         },
//         message: "Passwords do not match",
//       },
//     },
//     isOAuth: {
//       type: Boolean,
//       default: false,
//     },
//     oauthProvider: {
//       type: String,
//       enum: {
//         values: ["google"],
//         message: "Provider is either: google",
//       },
//     },
    
//     lastLogin: {
//       type: Date,
//       default: Date.now,
//     },
//     isVerified: {
//       type: Boolean,
//       default: function(this: any) {
//         return this.isOAuth; // OAuth users are verified by default
//       },
//     },
//     otp: {
//       type: String,
//       select: false,
//     },
//     otpExpires: {
//       type: Date,
//       select: false,
//     },
//     resetPasswordOTP: {
//       type: String,
//       select: false,
//     },
//     resetPasswordOTPExpires: {
//       type: Date,
//       select: false,
//     },
//     status: {
//       type: String,
//       enum: {
//         values: ["pending", "done"],
//         message: "Status is either: pending or done",
//       },
//       default: "pending",
//     },
//     tracker: {
//       signUp: {
//         type: Boolean,
//         default: true, // Set to true on creation
//       },
//       submitForm: {
//         type: Boolean,
//         default: false,
//       },
//       fillingAndSubmission: {
//         type: Boolean,
//         default: false,
//       },
//       result: {
//         type: Boolean,
//         default: false,
//       },
//     },
//   },
//   {
//     timestamps: true,
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true },
//   }
// );

// // Indexes for better query performance
// userSchema.index({ email: 1 });
// userSchema.index({ isVerified: 1 });
// userSchema.index({ status: 1 });

// // Middleware to handle password confirmation
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password') || this.isOAuth) return next();
  
//   if (this.password !== this.passwordConfirm) {
//     throw new Error("Passwords do not match");
//   }
//   next();
// });

// const User = mongoose.models.User || mongoose.model("User", userSchema);

// export default User;