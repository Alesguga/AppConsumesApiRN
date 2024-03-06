const URL_Juegos = "https://www.freetogame.com/api/games";
const URL_JuegosEspecifico = "https://www.freetogame.com/api/game";
//función que devuelve todos los Juegos de todas las plataformas de la API
export async function getAllJuegos() {
  let data = await fetch(URL_Juegos + "?platform=all");
  let juegos = await data.json();
  return juegos;
}
//Funcion que devuelve los juegos por fecha de salida
export async function getJuegosByRelease() {
  let data = await fetch(URL_Juegos + "?sort-by=release-date");
  let juegos = await data.json();
  return juegos;
}
//Sacar un juego especifico la url es distinta por eso la otra const
export async function getSpecificGame(id) {
  let data = await fetch(URL_JuegosEspecifico + "?id=" + id);
  let juegos = await data.json();
  return juegos;
}
