<br>
    <p align="center">
        <img alt="watchmykid" src="./client/watchmykid-client/public/binoculars_128.png" style="width:100px;"/>
    </p>
<br>

[![HitCount](http://hits.dwyl.io/daleu/watchmykid.svg)](http://hits.dwyl.io/daleu/watchmykid)
[![GitHub stars](https://img.shields.io/github/stars/daleu/watchmykid.svg)](https://GitHub.com/daleu/watchmykid/stargazers/)
[![GitHub forks](https://img.shields.io/github/forks/daleu/watchmykid.svg)](https://GitHub.com/daleu/watchmykid/network/)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/daleu/watchmykid.svg)](https://github.com/daleu/watchmykid)
[![GitHub contributors](https://img.shields.io/github/contributors/daleu/watchmykid.svg)](https://GitHub.com/daleu/watchmykid/graphs/contributors/)
[![GitHub license](https://img.shields.io/github/license/daleu/watchmykid.svg)](https://github.com/daleu/watchmykid/blob/master/LICENSE)

🔑 Be aware of your kids internet navigation

## Inspiration
Every day, we have more access to more information, and it's awesome! But at the same time, kid get access to internet earlier, and along with that, kids can access to some inappropriate content.

## What it does
With our chrome extension, you can be notified every time someone gets into a page with inappropriate content.

Tu use it, you only need to fill the chrome extension form with your mobile number and activate it. After it, every time someone gets in a page with inappropriate content on chrome, you will receive an SMS on your mobile.

## How we built it

Frontend and backend are very different components connected by API requests.

At frontend, there's a Chrome extension made with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/).

In the backend, we have a [Python 3.6+](https://www.python.org/downloads/release/python-372/) application which runs with [Flask](http://flask.pocoo.org/) and uses [OpenAPI](https://swagger.io/docs/specification/about/) and [Connexion](https://connexion.readthedocs.io/en/latest/) library) to generate a bunch of endpoints and connect the frontend with the backend.
In addition, we are using [Cognitive Services](https://azure.microsoft.com/en-us/services/cognitive-services/) service from [Azure](https://azure.microsoft.com/en-us/).

In order to communicate with the users, we've used [Nexmo](https://www.nexmo.com)'s API, which allow us to work with SMS technology 

All this system is finally deployed in a [Google Cloud VM](https://cloud.google.com/compute/docs/instances/).

## Challenges we ran into
We have been working in some new technologies, like Azure Cognitive Services and Google Cloud.

We have used React to create the Chrome extension, that it was connected to Google Cloud. 

We also had some troubles to get a domain from domain.com, so we ended up hosting our static web page on Github Pages.

## Accomplishments that we're proud of

We have created a project that can help parents to keep their kids save from the internet content. They will be notified with the potential dangerous URL of the page that the kids are visiting.

## What we learned

We have learned to create a Chrome extension with react and use Azure Cognitive Services to classify images depending on their content.

## What's next for WatchMyKid

This app can be extended in many ways. One of them, can be to block the page access when it's content is potentially dangerous.

## Authors

- [David Aleu](https://github.com/daleu)
- [Víctor Pérez](https://github.com/victorpm5)

## License

MIT © WatchMyKid