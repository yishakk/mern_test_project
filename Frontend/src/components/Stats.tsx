import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/slice';
import styled from '@emotion/styled';

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const StatBox = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Stats = () => {
  const dispatch = useDispatch();
  const { stats } = useSelector((state: { songs: { stats: any } }) => state.songs);

  useEffect(() => {
    dispatch(actions.fetchSongsRequest(null));
  }, [dispatch]);

  return (
    <StatsContainer>
      <StatBox>
        <h3>Total Songs: {stats?.totalSongs}</h3>
        <h3>Total Artists: {stats?.totalArtists}</h3>
        <h3>Total Albums: {stats?.totalAlbums}</h3>
        <h3>Total Genres: {stats?.totalGenres}</h3>
      </StatBox>
      
      <StatBox>
        <h3>Songs by Genre:</h3>
        {stats?.songsByGenre.map((genre: { _id: string; count: number }) => (
          <div key={genre._id}>
            {genre._id}: {genre.count}
          </div>
        ))}
      </StatBox>
    </StatsContainer>
  );
};

export default Stats;