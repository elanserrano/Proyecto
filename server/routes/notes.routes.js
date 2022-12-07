const { Router } = require('express');

const router = Router();

const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deletenote,
} = require('../domains/home/notes.controller');

// Hacer la nota
router.get('/notes/add', renderNoteForm);

router.post('/notes/new-note', createNewNote);

// Obtener la notas
router.get('/notes', renderNotes);

// editar notas
router.get('/notes/edit/:id', renderEditForm);
router.put('/notes/edit/:id', updateNote);

// Eliminar notas
router.delete('/notes/delete/:id', deletenote);
module.exports = router;
