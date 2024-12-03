const artists = [
  {
    name: 'Michael Jackson',
    songs: ['Smooth Crimanal', 'Billie Jean', 'Beat It', 'Earth Song'],
  },
  { name: 'Billie Eilish', songs: ['BadGuy', 'Lovely', 'Lunch', 'Chihiro'] },
  { name: 'Kairat Nurtas', songs: ['Auyrmaydy Zhurek', 'Ol Sen Emes'] },
]

artists[2].songs[1] = 'Baika'
console.log(artists)

let songyAn = artists[0].songs[3]
console.log(`${artists[0].name}'s last song: ${songyAn}`)

console.log(artists[1].songs.filter(song => song.length <= 6))
