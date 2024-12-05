//Task1
let group = [
  {
    name: 'Asan',
    age: 15,
    grades: {
      math: 85,
      english: 90,
      science: 80,
    },
    addres: {
      city: 'Almaty',
      street: 'Abaya',
      country: 'Qazaqstan',
    },
    info_list1: function () {
      return `Natije
      Esemi: ${this.name}
      Agylshyn bagasy: ${this.grades.english}
      Qalasy: ${this.addres.city}
      Memleketi: ${this.addres.country}
      `
    },
  },
  {
    name: 'Usen',
    age: 17,
    grades: {
      biology: 85,
      russian: 90,
      history: 80,
    },
    addres: {
      city: 'Astana',
      street: 'Dostyk',
      country: 'Qazaqstan',
    },
    info_list2: function () {
      return `Natije
      Esemi: ${this.name}
      Tarukhtan bagasy: ${this.grades.history}
      Qalasy: ${this.addres.city}
      Memleketi: ${this.addres.country}`
    },
  },
]

let [asan, usen] = group
console.log(asan.info_list1());
console.log(usen.info_list2());



//Task2
let classA = ['Amina','Adil','Alina']
let classB = ['Berik','Bakhyt','Baian']

classB.push('Mugalim')
classA.unshift('Direktor')

let classC = [...classA, ...classB]

console.log(classC);