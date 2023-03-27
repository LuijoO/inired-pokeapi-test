import axios from "axios";

const getUser = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/1`;
  const respuesta = await axios.get(url);
  console.log([respuesta.data]);
  // try {
  //   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`);
  //   console.log(response);
  // } catch (error) {
  //   console.error(error);
  // }
}

getUser();

export default getUser