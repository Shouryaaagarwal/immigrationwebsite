import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  timeSlot: { type: String},
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
