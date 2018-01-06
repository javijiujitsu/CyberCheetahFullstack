const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema(
	{
		username:{ type: String,required: [true, "Username required."] },
		password:{ type: String,required: [true, "Password required."] },
		email:{ type: String, required: [true, "Email required."], unique: true },
		idcareer:[{ type: Schema.Types.ObjectId, required: true },
		{ date: Date,  default: new Date(), required: true }],
    userid:[{ type: Schema.Types.ObjectId, }],
    idtask:[{ type: Schema.Types.ObjectId, }],
	},{
		timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
}
);

userSchema.plugin(mongooseUniqueValidator);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
