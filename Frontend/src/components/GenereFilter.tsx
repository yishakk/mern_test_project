import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/slice';
import styled from '@emotion/styled';

const FilterContainer = styled.div`
  margin: 1rem 0;
`;

const GenreFilter = () => {
  const dispatch = useDispatch();
  const { stats } = useSelector((state: { songs: { stats: { songsByGenre: { _id: string }[] } } }) => state.songs);

  const handleFilter = (genre: string) => {
    dispatch(actions.fetchSongsRequest(genre || null));
  };

  return (
    <FilterContainer>
      <select onChange={(e) => handleFilter(e.target.value)}>
        <option value="">All Genres</option>
        {stats?.songsByGenre.map((genre) => (
          <option key={genre._id} value={genre._id}>
            {genre._id}
          </option>
        ))}
      </select>
    </FilterContainer>
  );
};

export { GenreFilter };