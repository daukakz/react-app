const legion = [{name: "Ancient Appariton"}, {name: "Muerta"}, {name: "Primal Beast"}, {name: "Quenn of Pain"}, {name: "Lina"}, {name: "Windranger"}, {name: "Mars"}, {}, {}, {}, {}, {}];

const duel = (hero1, hero2) => { 
  if(Math.random()*10 < 5) { 
    return hero1.name
  } else {
    return hero2.name
  }
}

duel(legion[0], legion[1])