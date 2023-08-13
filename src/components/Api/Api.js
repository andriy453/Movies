// import axios from 'axios';

// export  const PopularMovies = () =>{
//     const  url =  `https://api.themoviedb.org/3/trending/movie/day?api_key=9472ead59ab5d905fc1e97a44f85f6b1`;
//     const api_key = '9472ead59ab5d905fc1e97a44f85f6b1';
//     fetch(url).then((res =>  {
//         if (!res.ok) {
//         if (res.status === 404) {
//           return [];
//         }
//         throw new Error(res.status);
//       }
//     return  res.json
// })).then((res => console.log(res)))
// .catch(error => {
//             console.error(error);
//           });
// }

// export  const PopularMovies = () =>{
// const options = {
//   method: 'GET',
//   url: `https://api.themoviedb.org/3/trending/movie/day?api_key=9472ead59ab5d905fc1e97a44f85f6b1`,
//   params: {language: 'en-US'},
//   headers: {
//     accept: 'application/json',
//   }
// };

// axios
//   .request(options)
//   .then(function (response) {
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// }

// export const  search = ()=>{
//     const options = {
//         method: 'GET',
//         url: 'https://api.themoviedb.org/3/search/movie?api_key=9472ead59ab5d905fc1e97a44f85f6b1',
//         params: {query: 'bar', include_adult: 'false', language: 'en-US', page: '1'},
//         headers: {
//           accept: 'application/json',
//         }
//       };

//       axios
//         .request(options)
//         .then(function (response) {
//         })
//         .catch(function (error) {
//           console.error(error);
//         });
// }

// export async function fetchImages(inputData, page) {
//   const searchParams = new URLSearchParams({
//     key:'37930046-394bc7b158c4cfc51204a831a',
//     q: inputData,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     per_page: 12,
//     page,
//   });
//   const images = await axios.get(`https://pixabay.com/api/?${searchParams}`);

//   return images.data;
// }
