import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/slice';
import styled from '@emotion/styled';
import { GenreFilter } from './GenereFilter';
import { Song } from '../types/song';

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

  useEffect(() => {
    dispatch(actions.fetchSongsRequest(filterGenre));
  }, [dispatch, filterGenre]);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this song?')) {
        dispatch(actions.deleteSongRequest(id));
      }
  };

  if (loading) return <div>Loading...</div>;

    function handleEdit(song: Song): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div>
      <GenreFilter />
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
                <button onClick={() => handleEdit(song)}>Edit</button>
                <button onClick={() => handleDelete(song._id)}>Delete</button>
              </td>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SongList;