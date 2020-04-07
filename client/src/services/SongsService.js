import Api from '@/services/Api.js'

export default {
  // all songs
  index (search) { //    /songs
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  // create songs
  post (song) { // song == /song url
    return Api().post('songs', song)
  },
  // show 1 song
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  // update song
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
