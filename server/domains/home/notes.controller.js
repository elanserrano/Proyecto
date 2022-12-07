const notes = {};
notes.renderNoteForm = (req, res) => {
  res.render('./notes/new-note');
};

notes.createNewNote = (req, res) => {
  console.table(req.body);
  res.send('new note');
};
notes.renderNotes = (req, res) => {
  res.send('render notes');
};
notes.renderEditForm = (req, res) => {
  res.send('render notes');
};
notes.updateNote = (req, res) => {
  res.send('update note');
};
notes.deletenote = (req, res) => {
  res.send('delete note');
};
module.exports = notes;
