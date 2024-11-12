let san = +prompt('San engiziniz:')

for (let i = 1; i <= san; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('3 ke  jane 5 ke bolinetin san:' + i)
    if (i % 3 == 0 && i % 5 == 0 && i % 2 == 0) {
      console.log(i + ' - Sany 3 ke  jane 5 ke bolinedi jane jup san. BREAK!!!')
      break;
    }
  }
}
