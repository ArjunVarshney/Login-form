import mongoose from "mongoose";

const Connection = async (username, password) => {
  try {
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@blog-app.m6jplyw.mongodb.net/?retryWrites=true&w=majority`,
      { useNewUrlParser: true }
    );
    console.log("Connected to the database successfully");
  } catch (err) {
    console.log("Errror while connecting to the data base ", err);
  }
};

export default Connection;