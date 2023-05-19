# food-truck-mapper

A service that maps nearby food trucks at a specified location (currently by US postal zip code).

Data used can be found on DataSF: https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat

This application uses the Google Maps Embed API. The API potentially can provide the following on a Google Map embedded on the web page:

-   Add a map to a web page via a simple HTTP request consisting of just a URL and parameters. Useful in blogs and other places where you can't add `<script>` tags (needed).
-   Add interactive Street View panoramas to your application, set the location of the panorama, manipulate the Street View camera (point of view), and more (nice to have).
-   Display search results for the visible region on a map, including nearby businesses and other places (nice to have).
-   Draw a route between two or more specified points on the map showing the distance and travel time, using various forms of transport: walking, driving, cycling, public transit, and flying (not needed).


### Installing packages

```
npm install
```

### Development setup

This allows the benefits of compiling and hot-reloading during development.

```
npm run dev
```

### Production setup

This will compile and minify the build for production.

```
npm run build
```

### Requirements
If you'd like to spin up the application, you'll will need your own [Google Maps API key](https://console.cloud.google.com/google/maps-apis/overview) and [Open Cage API key](https://opencagedata.com).
