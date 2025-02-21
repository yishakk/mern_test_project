import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/slice';
import styled from '@emotion/styled';
import { Song } from '@/types/song';

const FormContainer = styled.div`
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
`;

interface SongFormProps {
  initialData?: Song | null;
  onCancel: () => void; 
}

const SongForm = ({ initialData, onCancel }: SongFormProps) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Omit<Song, '_id'>>(
    initialData || {
      title: '',
      artist: '',
      album: '',
      genre: '',
    }
  );

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (initialData) {
      dispatch(actions.updateSongRequest({ ...formData, _id: initialData._id }));
    } else {
      dispatch(actions.createSongRequest(formData));
    }
    onCancel(); 
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Artist"
          value={formData.artist}
          onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Album"
          value={formData.album}
          onChange={(e) => setFormData({ ...formData, album: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Genre"
          value={formData.genre}
          onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
          required
        /><br />
        <br />
        <button type="submit">{initialData ? 'Update' : 'Create'}</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </FormContainer>
  );
};

export default SongForm;