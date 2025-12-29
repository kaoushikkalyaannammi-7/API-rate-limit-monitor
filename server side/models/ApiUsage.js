import mongoose, { Schema } from "mongoose";

const apiUsageSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    windowSize: {
      type: Number,
      required: true,
    },
    used: {
      type: Number,
      default: 0,
      required: true,
    },
    windowStart: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
export default mongoose.model("ApiUsage", apiUsageSchema);
