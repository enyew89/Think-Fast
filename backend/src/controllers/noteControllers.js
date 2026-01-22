export const getNotes = (req, res) => {
  res.send("You have got a list of notes");
};
export const getNoteById = (req, res) => {
  res.send(`You have got the note with id ${req.params.id}`);
};
export const createNote = (req, res) => {
  res.send("Note added successfully");
};
export const updateNote = (req, res) => {
  res.send("Note updated successfully");
};
export const deleteNote = (req, res) => {
  res.send("Note deleted successfully");
};  

