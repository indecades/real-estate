import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
	const { username, email, password } = req.body;
	const hashedPassword = bcryptjs.hashSync(password, 10);
	const newUser = new User({ username, email, password: hashedPassword });
	try {
		await newUser.save();
		res.status(201).json("User created successfully!");
	} catch (error) {
		next(error);
	}
};

export const signin = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const validUser = await User.findOne({ email: email });
		if (!validUser) return next(errorHandler(404, "User not found!"));
		const validPassword = bcryptjs.compareSync(password, validUser.password);
		if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
		// more secure using id instead of users information id randomized
		// similar to salt in creating hashed password
		// saved in enviromental var
		const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        //do not return password only other information to user
        const { password: pass, ...rest } = validUser._doc // separate password from userinfo
		// httpOnly: no third party application has access to cookie
		// expires cookie: , expires: new Date (Date.now() + 24 * 60 * 60 * 1000)
		// to not limit cookie do not use expires
		res
			.cookie("access_token", token, { httpOnly: true })
			.status(200)
			.json(rest);
	} catch (error) {
		next(error); // use middleware to handle errors
	}
};
