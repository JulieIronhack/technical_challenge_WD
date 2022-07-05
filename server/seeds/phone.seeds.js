require("dotenv").config();
const { connect } = require("mongoose");
const cloudinary = require("cloudinary").v2;
const Phone = require("../models/Phone.model");
const data = require("../../data/phones.json");

const connectDB = async () => {
    try {
        const connection = await connect(process.env.MONGODB_URI);
        console.log(`Connected to the database: ${connection.connections[0].name}`);
        return connection;
    } catch (error) {console.error("Error while connecting to the databse", error)};
};

const uploadImages = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    try {
        const phonesData = data.map(async phone => {
            const { url } = await cloudinary.uploader.upload(`../assets/images/${phone.imageFileName}`, {
                folder: "phone-cave",
                rosource_type: "image"
            });

            phone.image = url;
            return phone;
        });

        return phonesData;
    } catch (error) {console.error("Error while uploading images!", error)};
};

const insertPhones = async phonesData => {
    try {
        await Phone.deleteMany();
        console.log("Previous phones were deleted.");
        const phones = await Phone.insertMany(await Promise.all(phonesData));
        phones.forEach(phone => console.log(`${phone.name} was added to our database.`));
    } catch (error) {console.error("Error while inserting phones!", error)};
};

const run = async () => {
    const connection = await connectDB();
    const phonesData = await uploadImages();
    await insertPhones(phonesData);
    await connection.disconnect();
    console.log(`Disconnected from the ${connection.connections[0].name} database!`);
};

run();