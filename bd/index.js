var bd = JSON.parse(localStorage.getItem('banco')) || []
console.log(bd)
localStorage.setItem('char-data', JSON.stringify([
      { month: "Muscular", qtd: 0, value: "mus" },
      { month: "Torção", qtd: 0, value: "tor" },
      { month: "Ligamento", qtd: 0, value: "lig" },
    ]))

export {bd}