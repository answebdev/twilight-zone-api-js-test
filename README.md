# Twilight Zone API JS Test

## Description

This is a test site created in order to test my custom-built [The Twilight Zone API](https://github.com/answebdev/twilight-zone-api "The Twilight Zone API"). I created a separate live site for the API documentation using React, which can be found [here](https://thetwilightzoneapi.netlify.app/ "The Twilight Zone API"). The API I created has a total of six endpoints: one endpoint for each of the five seasons, and one endpoint for all of the episodes. On this test website, you can choose to go to the page displaying the data for all episodes, as well as going to pages by season. This test site was written in HTML, CSS, and JavaScript.

![tz_test_site](https://user-images.githubusercontent.com/36783010/166586942-75479252-a18f-461a-bb07-a99a5cfb67e1.jpg)

## Live Link

Please check out the live link for The Twilight Zone API Test Site: [The Twilight Zone API Test Site](https://answebdev.github.io/twilight-zone-api-js-test/episodes.html "The Twilight Zone API Test Site")

## Development

After creating my endpoints, I created this test site in order to test the endpoints. This is done by clicking on the navbar to navigate to the particular season. In the following code sample, the data is fetched from the "season 1" endpoint. Next, I mapped through the data and named each one `item`. After mapping through the data, I created the HTML that is to be rendered on the page. This HTML with the data will then be rendered in a `div` with a class name of "episode".

```
        fetch('https://the-twilight-zone-api.herokuapp.com/season1')
            .then((res) => res.json())
            .then(function (data) {
                let episodes = data.results;
                console.log(data);

                return data.map(function (item) {
                    episodeResults.innerHTML += `
                        <div class='episode'>
                            <h3 id='title'>${item.title}</h3>
                            <div class='details'>
                                <p>
                                    <strong>Season: </strong>${item.season}<br />
                                    <strong>Episode: </strong>${item.episode}<br />
                                    <strong>Directed by: </strong>${item.directed_by}<br />
                                    <strong>Written by: </strong>${item.written_by}<br />
                                    <strong>Original Air Date: </strong>${item.air_date}<br />
                                </p>
                            </div>
                            <img id='image' src=${item.img} alt='${item.title}' title='${item.title}' />
                            <br />
                            <a href=${item.wikipedia} class='link' rel="noopener noreferrer" target="_blank">Wikipedia</a>
                            <a href=${item.imdb} class='link' rel="noopener noreferrer" target="_blank">IMDb</a>
                            <p></p>
                            <div class='narration cast'><strong>Cast: </strong>${item.cast.join(', ')}</div>
                    `
                })
            })
            .catch(function (error) {
                console.log(error);
            })
```


Once the data is fetched, the HTML is rendered with the data on the page. As you can see below, the `div` with the class name of "episodes" is where the HTML is rendered. To see the complete code, see [here](https://github.com/answebdev/twilight-zone-api-js-test/blob/master/season1.html "Season 1 Page Code").
```
    <a name="top"></a>

    <div class="container">
        <div>

            <h1 id='main-title'>Season 1</h1>

            <div class="episodes"></div>

            <!-- Loader Div -->
            <div class="parent">
                <div class="box loader"></div>
            </div>

            <div class="top"> <a href="#top">Back to Top</a></div>
        </div>
    </div>
```
