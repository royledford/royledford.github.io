# GP-eats

GP Eats is a web app for the General Provision co-working space in Fort Lauderdale. They were originally using a google spreadsheet with a list of nearby places to eat for the co-working members. I built a small app to store all the places in a google firebase database and a way to display them on google maps.

It provides a simple way for GP members and guests to locate recommended restaurants and markets near the co-working space. The app includes a list of locations and google routes from the co-working space to a selected eateries.

A private location in the app allows the GP admins to modify the current list of eateries as new locations open. Google oAuth is used to provide authentication and authorization for the admins.

The app uses React and React Router for the front end. Google Firebase is used as a BaaS to host the apps data. Google Maps, Places and DirectionRender are used for mapping.

Design was based on a mobile-first approach so it would usable while members walked to the destination.

Unfortunately the co-working space and most of the nearby places have since closed. :( It was a great space and I met many wonderful people there.

### Mobile view
![GP Eats app on an iphone X](/images/gp-eats/iphone-x-sm.png)

### Tablet / Desktop view
![GP Eats app on a table / desktop](/images/gp-eats/lrg-directions-sm.jpg)





[Github - https://github.com/royledford/gp-eats](https://github.com/royledford/gp-eats)
