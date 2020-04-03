import Api from '@/services/Api.js'

export default {
  index (search) { //    /songs
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  post (song) { // songs == /songs url
    return Api().post('songs', song)
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
