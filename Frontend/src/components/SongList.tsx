import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/slice';
import styled from '@emotion/styled';
import { Song } from '../types/song';
import SongForm from './SongForm';
import { GenreFilter } from './GenereFilter';
import { Button } from './Button';
import { Card } from './Card';
import { Container, Header, Footer } from './Layout';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const SongList = () => {
  const dispatch = useDispatch();
  const { songs, loading, filterGenre } = useSelector((state: { songs: { songs: Song[], loading: boolean, filterGenre: string } }) => state.songs);
  const [showForm, setShowForm] = useState(false);
  const [editSong, setEditSong] = useState<Song | null>(null);

  const handleEdit = (song: Song) => {
    setEditSong(song); 
    setShowForm(true); 
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      dispatch(actions.deleteSongRequest(id));
    }
  };

  if (loading) return <div>Loading...</div>;

  const ParentComponent = () => {
    const handleCancel = () => {
      setShowForm(false); 
      setEditSong(null); 
    };
  
    return (
      <Container>
        <Header>
        <h1>Music Library</h1>
        <Button onClick={() => setShowForm(true)}>Add New Song</Button><br></br>
        {showForm && (
        <Card>
          <SongForm initialData={editSong} onCancel={handleCancel} />
        </Card>
      )}
      </Header>
      </Container>
    );
  };

  return (
    <Container>
    <div>
      <GenreFilter />
      <ParentComponent />
      <Table className='song-list'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <TableRow key={song._id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>
              <Button onClick={() => handleEdit(song)}>Edit</Button>
              <Button onClick={() => handleDelete(song._id)}>Delete</Button>
              </td>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
    </Container>
  );
};

export default SongList;