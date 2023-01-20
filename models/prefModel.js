import mongoose from "mongoose";

const prefSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
    },
    transporting: {
      type: String,
    },
    age: {
      type: String,
    },
    smoking: {
      type: String,
    },
    studyYear: {
      type: String,
    },
    drinks: {
      type: String,
    },
    living: {
      type: String,
    },
    hobbies: {
      type: String,
    },
    scholarship: {
      type: String,
    },
    cosmetics: {
      type: String,
    },
    jobs: {
      type: String,
    },
    sub: {
      type: String,
    },
  },
  { timestamps: true }
);

// const Pref = mongoose.model("Pref", prefSchema);
export default prefSchema;
