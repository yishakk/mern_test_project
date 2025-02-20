export interface Song {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
  }
  
  export interface Stats {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
    songsByGenre: Array<{ _id: string; count: number }>;
    songsAndAlbumsByArtist: Array<{
      artist: string;
      songs: number;
      albums: number;
    }>;
    songsByAlbum: Array<{ artist: string; album: string; count: number }>;
  }