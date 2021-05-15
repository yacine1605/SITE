const Question = require('../../../Models/question');
const Quiz = require('../../../Models/quiz');

const getQuizByID = async (req, res) => {
	try {
		const { id } = req.params;
		const quiz = await Quiz.findById(id).populate('questions');
		if (!quiz) {
			return res.status(500).json({
				message: "Quiz doesn't exist",
				data: {},
			});
		}
		res.status(200).json({
			message: 'Fetched one successfully',
			data: quiz,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: 'Server Error',
			data: {},
		});
	}
};

const addQuiz = async (req, res) => {
	const { subject } = req.body;
	const { questions } = req.body;

	const quiz1 = new Quiz({
		subject,
		questions,
	});

	await quiz1.save();

	res.status(201).json({
		message: 'Successfully added',
		data: quiz1,
	});
};
const getQuiz = async (req, res) => {
	const quiz1 = await Quiz.find().populate('questions');
	if (!quiz1) {
		return res.status(500).json({
			message: "quiz doesn't exist",
			data: {},
		});
	}
	res.status(200).json({
		message: 'Fetched successfully',
		data: quiz1,
	});
};
const deleteQuiz = async (req, res) => {};

module.exports = {
	addQuiz,
	deleteQuiz,
	getQuizByID,
	getQuiz,
};
