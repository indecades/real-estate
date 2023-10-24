# real-estate (CodeEstate)

## Real estate app using MERN and tailwind css.

A mern stack real estate web application with advanced authentication and search functionality.
The focus of this application is to use the lastest versions of React, MongoDB, Node.js and Express.

### About the project

The project contains the most recent version of react-router-dom to create routes and dinamic pages.

The applications contains email and password authentication through the use of 'jsonwebtoken' along
with google OAuth integration. 

For better state management the application makes use of redux-toolkit to make the management of global states
easier and more efficient.

To ensure a more secure user experience pages like the profile page is protected on both the client and back-end sides.
The profile page allows the user to be able to update their information including their username, email and password 
as well as modify their profile image.

Each user is able to do property listings and have the ability to edit their listings as well as delete listings. 
The user is able to upload 6 images per listing and each image cannot exceed 2mb as per a rule stated in firebase storage.
The user is able to delete images and reupload new images to their listing.

Each listing contains an image slider and convienent contacting options. 

### Important aspects of the project

The project contains advanced search functionality. This gives the user the ability to search by title and 
with limited search results and apply sorting options to the sidebar.

### Deployment

This project is deployed by using render.
