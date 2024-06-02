class PlaylistManage{
  constructor() {
    this.localStorageKey = 'playlists';
    this.playlists = this.loadPlaylists();
  }

  loadPlaylists() {
    const savedPlaylists = localStorage.getItem(this.localStorageKey);
    return savedPlaylists ? JSON.parse(savedPlaylists) : {
      
    };
  }
}