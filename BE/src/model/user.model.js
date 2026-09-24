const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    // Basic information
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    // Personal information
    dateOfBirth: Date,

    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },

    profileImage: String,

    // Address
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      pincode: String,
    },

    // Account information
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    // Social links
    socialLinks: {
      github: String,
      linkedin: String,
      twitter: String,
      website: String,
    },

    // Professional information
    profession: String,

    company: String,

    skills: [String],

    education: [
      {
        degree: String,
        institution: String,
        startYear: Number,
        endYear: Number,
      },
    ],

    experience: [
      {
        company: String,
        role: String,
        startDate: Date,
        endDate: Date,
        description: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model("User", userSchema);

