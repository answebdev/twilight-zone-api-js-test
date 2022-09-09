# Twilight Zone API JS Test

## Description

This is a test site created in order to test my custom-built [The Twilight Zone API](https://github.com/answebdev/twilight-zone-api "The Twilight Zone API"). I created a separate live site for the API documentation using React, which can be found [here](https://thetwilightzoneapi.netlify.app/ "The Twilight Zone API"). The API I created has a total of six endpoints: one endpoint for each of the five seasons, and one endpoint for all of the episodes. On this test website, you can choose to go to the page displaying the data for all episodes, as well as going to pages by season. This test site was written in HTML, CSS, and JavaScript.

![tz_test_site](https://user-images.githubusercontent.com/36783010/166586942-75479252-a18f-461a-bb07-a99a5cfb67e1.jpg)

## Live Link

Please check out the live link for The Twilight Zone API Test Site: [The Twilight Zone API Test Site](https://answebdev.github.io/twilight-zone-api-js-test/index.html "The Twilight Zone API Test Site")

## Development

After creating my endpoints, I created this test site in order to test the endpoints. This is done by clicking on the navbar to navigate to the particular season's page. The following JavaScript code is from the `app.js` file and is for fetching and rendering the data and the HTML for all of the episodes. To start, I use `querySelector` to select the `div` with the class of "episodes". This is where the HTML and the data will be rendered on the page. Then, I start by fetching the data from my custom-built endpoint for all of the episodes: `https://the-twilight-zone-api.vercel.app/episodes`. Next, I map through the data and name each item that is to be rendered `item`, then create the HTML that will be rendered with the data. The fetched data is then added to this block of code so that it can be rendered on the page, for example:

`<h3 id='title'>${item.title}</h3>`

The following JavaScript code can be viewed [here](https://github.com/answebdev/twilight-zone-api-js-test/blob/master/app.js "Episodes Page JavaScript Code").

```
const episodeResults = document.querySelector('.episodes');

let loader = `<div class="boxLoading"></div>`;
document.querySelector('.boxLoading').innerHTML = loader;

fetch('https://the-twilight-zone-api.vercel.app/episodes')
  .then((res) => res.json())
  .then(function (data) {
    let episodes = data.results;
    console.log(data);

    // Stop loading spinner after data loads
    document.querySelector('.loader').style.display = 'none';

    return data.map(function (item) {
      episodeResults.innerHTML += `
                <div class='episode'>
                    <h3 id='title'>${item.title}</h3>
                    <div class='details'>
                        <p>
                            <strong>Season: </strong>${item.season}<br />
                            <strong>Episode: </strong>${item.episode}<br />
                            <strong>Year: </strong>${item.air_year}
                        </p>
                    </div>
                    <img id='image' src=${item.img} alt='${item.title}' title='${item.title}' />
                    <br />
                    <p class='narration'><strong>Opening Narration: </strong>${item.opening_narration}</p>
                    <p class='narration'><strong>Closing Narration: </strong>${item.closing_narration}</p>
                </div>
            `;
    });
  })
  .catch(function (error) {
    console.log(error);
  });
```


Once the data is fetched, the HTML is rendered with the data on the page. This can be found in the `episodes.html` file. As you can see below, the `div` with the class name of "episodes" is where the HTML is rendered with the fetched data. You can view the complete code [here](https://github.com/answebdev/twilight-zone-api-js-test/blob/master/episodes.html "Episodes Page Code").
```
    <a name="top"></a>

    <div class="container">
        <div>

            <h1 id='main-title'>All 156 Episodes</h1>

            <div class="episodes"></div>

            <!-- Loader Div -->
            <div class="parent">
                <div class="boxLoading loader"></div>
            </div>

            <div class="top"> <a href="#top">Back to Top</a></div>
        </div>
    </div>
```
