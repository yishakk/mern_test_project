import styled from '@emotion/styled';
import SongList from './SongList';
import Stats from './Stats';

const LayoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PublicLayout = () => {
  return (
    <LayoutContainer>
      <header>
        <h1>Music Library</h1>
      </header>
      <main>
        <Stats />
        <SongList />
      </main>
      <footer>
        <p>© 2025 Music Collection</p>
      </footer>
    </LayoutContainer>
  );
};

export default PublicLayout;