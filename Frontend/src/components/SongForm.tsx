import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/slice';
import styled from '@emotion/styled';
import { Song } from '@/types/song';

const FormContainer = styled.div`
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
`;

const SongForm = ({ initialData, onCancel }: { initialData?: Song; onCancel: () => void }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialData || {
    title: '',
    artist: '',
    album: '',
    genre: ''
  });

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
        {/* Add other fields similarly */}
        <button type="submit">{initialData ? 'Update' : 'Create'}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </FormContainer>
  );
};