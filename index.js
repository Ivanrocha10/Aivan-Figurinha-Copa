var isIgnite = false

function changeCard(event) {
  var card = event.currentTarget
  var bg = isIgnite ? "explorer" : "ignite"
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./svg/bg-${bg}.svg)`
}