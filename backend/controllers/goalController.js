// get all goals
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// set new goal
const setGoal = (req, res) => {
  res.status(200).json({ message: "Set goals" });
};

// update goal
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// delete goal
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
