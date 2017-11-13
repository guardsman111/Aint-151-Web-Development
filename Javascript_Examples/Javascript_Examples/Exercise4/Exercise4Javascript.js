function CreatePlayer()
{
  name = document.getElementById("playername").value
  console.log(name)
  colour = document.getElementById("playercolour").value
  console.log(colour)
  health = document.getElementById("playerhealth").value
  console.log(health)
  weapon = document.getElementById("playerweapon").value
  console.log(weapon)

  document.getElementById("name").innerText = name
  document.getElementById("colour").style.backgroundColor = colour
  document.getElementById("health").innerText = health

  if (weapon == 1){
    document.getElementById("weapon").innerText = 'Crossbow of much hurting'
  } else if (weapon == 2){
      document.getElementById("weapon").innerText = 'Broadsword of so slicing'
  } else if (weapon == 3){
      document.getElementById("weapon").innerText = 'Wand of amaze magics'
  } else {
      document.getElementById("weapon").innerText = "You dont get a weapon for breaking the system."
  }
}
