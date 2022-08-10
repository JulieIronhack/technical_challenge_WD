    const { Schema, model } = require("mongoose");

    const userSchema = new Schema(
    {
        username: {
        type: String,
        },
        password: String,
    },
    {
        timestamps: true,
    }
    );

    const User = model("User", userSchema);

    module.exports = User;