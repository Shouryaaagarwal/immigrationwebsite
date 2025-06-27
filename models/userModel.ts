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
    nationality: {
      type: String,
      required: [true, "Please select nationality"],
      enum: ["US", "IN", "CA", "GB", "AU", "FR", "DE", "JP", "BR", "ZA"],
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
    tracker: {
      signUp: {
        type: Boolean,
        default: false,
        required: true
      },
      submitForm: {
        type: Boolean,
        default: false,
        required: true
      },
      fillingAndSubmission: {
        type: Boolean,
        default: false,
        required: true
      },
      result: {
        type: Boolean,
        default: false,
        required: true
      },
     
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;