import Api from '@/services/Api.js'

export default {
  index () { //    /songs
    return Api().get('songs')
  },
  post (song) { //    /songs
    return Api().post('songs', song)
  }
}
