const Question = require('../../../Models/question');

const addQuestion = async (req, res) => {
	const { name } = req.body;
	const { choises } = req.body;
	const { answer } = req.body;

	const q1 = new Question({
		name,
		choises,
		answer,
	});

	await q1.save();

	res.status(201).json({
		message: 'Successfully added',
		data: q1,
	});
};
const deleteQuetion = async (req, res) => {
	const { id } = req.params;
	const q1 = await Question.findById(id);
	if (!q1) {
		return res.status(500).json({
			message: "user doesn't exist",
			data: {},
		});
	}
	const deletedQuestion = await Question.findByIdAndDelete(id);
	if (!deletedQuestion) {
		return res.status(500).json({
			message: 'user failed to delete',
			data: {},
		});
	}
	res.status(200).json({
		message: 'Successfully deleted',
		data: deletedQuestion,
	});
};

const getQuestionByID = async (req, res) => {
	try {
		const { id } = req.params;
		const question = await Question.findById(id);
		if (!question) {
			return res.status(500).json({
				message: "Question doesn't exist",
				data: {},
			});
		}
		res.status(200).json({
			message: 'Fetched one successfully',
			data: question,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: 'Server Error',
			data: {},
		});
	}
};

const getQuestion = async (req, res) => {
	const questions = await Question.find();
	if (!questions) {
		return res.status(500).json({
			message: "questions doesn't exist",
			data: {},
		});
	}
	res.status(200).json({
		message: 'Fetched successfully',
		data: questions,
	});
};
module.exports = {
	addQuestion,
	deleteQuetion,
	getQuestion,
	getQuestionByID,
};
