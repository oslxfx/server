const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email, password });
		res.status(200).json({ user });
	} catch (error) {
		console.log("🚀 ~ file: app.js ~ line 9 ~ app.post ~ error", error);
	}
});

app.listen(PORT, () => {
	console.log("🚀 ~ file: app.js ~ line 6 ~ app.listen ~ PORT", PORT);
});
