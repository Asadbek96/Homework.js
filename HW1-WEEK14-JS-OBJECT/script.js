let name = {
  name: 'Lionel',
  surname: 'Messi',
  goal_sany: 850,
  jasy: 37,
  club: ['Barcelona', 'Paris-Saint-Germain', 'Inter-Miami'],

  info_list: function () {
    return `Birnshi aty: ${this.name}
        Ekinshi aty: ${this.surname}
        Negizgi gol sany: ${this.goal_sany}
        Jasy: ${this.jasy}
        Club: ${this.club}`
  },
  goal: function () {
    return `Goal salganan keiyn sany: ${this.goal_sany + 2}`
  },
  second_info_list: function () {
    return `${this.name} ${this.surname} \n Current Club: ${this.club[2]}`
  },
}

alert(name.info_list())
alert(name.goal())
console.log(name.second_info_list())
