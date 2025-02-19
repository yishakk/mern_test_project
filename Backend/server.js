const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

/* MongoDB Connection */
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/songs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

/* Song Schema and Model */
const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true },
  genre: { type: String, required: true }
});

const Song = mongoose.model('Song', songSchema);

/* Routes */
app.post('/songs', async (req, res) => {
  const { title, artist, album, genre } = req.body;
  if (!title || !artist || !album || !genre) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const song = new Song({ title, artist, album, genre });
    await song.save();
    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/* List All Songs */
app.get('/songs', async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* Get a single Song */
app.get('/songs/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) return res.status(404).json({ message: 'Song not found' });
    res.json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* Update */
app.put('/songs/:id', async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!song) return res.status(404).json({ message: 'Song not found' });
    res.json(song);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/* Delete */
app.delete('/songs/:id', async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) return res.status(404).json({ message: 'Song not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));