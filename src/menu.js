const items = "ENTREES\nLa Charcuterie €15\nLes Escargots 6 for €8\nLa Soupe à l’Oignon €9\n\nPLATS\nLe Cassoulet €25\nLe Boeuf Bourguignon €23\nLa Truite Hollandaise €23\n\nDESSERTS\nLa Crème Brulée €8\nLa Mousse au Chocolat €8\nLe Nougat Glacé €8"

const menu = () => {
  const content = document.createElement('div')
  content.classList.add('content')
  content.innerText = items
  return content
}

export default menu