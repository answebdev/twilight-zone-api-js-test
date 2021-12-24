// // Fetch request modelled after JSON Placeholder: https://jsonplaceholder.typicode.com/

// // fetch('https://the-twilight-zone-api.herokuapp.com/episodes')
// //     .then((response) => response.json())
// //     .then((json) => console.log(json));

// // This will print only one episode, the one with id of 1 (note URL: 'episodes/1')
// // This can be used as an example request, as in JSON Placeholder example:
// // fetch('https://the-twilight-zone-api.herokuapp.com/episodes/1')
// //     .then((response) => response.json())
// //     .then((json) => console.log(json));

// const episodeResults = document.querySelector('.episodes');

// fetch('https://the-twilight-zone-api.herokuapp.com/episodes')
//   .then((res) => res.json())
//   .then(function (data) {
//     let episodes = data.results;
//     console.log(data);

//     return data.map(function (item) {
//       episodeResults.innerHTML += `
//                         <div class='episode'>
//                             <h3 id='title'>${item.title}</h3>
//                             <div class='details'>
//                                 <p>
//                                     <strong>Season: </strong>${item.season}<br />
//                                     <strong>Episode: </strong>${item.episode}<br />
//                                     <strong>Year: </strong>${item.air_year}
//                                 </p>
//                             </div>
//                             <img id='image' src=${item.img} alt='${item.title}' title='${item.title}' />
//                             <br />
//                             <a href=${item.imdb} rel="noopener noreferrer" target="_blank">IMDb</a>
//                             <p class='narration'><strong>Opening Narration: </strong>${item.opening_narration}</p>
//                             <p class='narration'><strong>Closing Narration: </strong>${item.closing_narration}</p>
//                         </div>
//                     `;
//     });
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
