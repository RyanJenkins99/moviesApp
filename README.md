# Assignment 1 - ReactJS app.

Name: Ryan Jenkins

## Overview.


For this assignment I just added a few tmdb endpoints and views. I feel that this really adds to the movie app and provied the user with more interesting information.

### Features.
 
+ Trending Movies page
+ Trending People page
+ Popular Movies page
+ Latest Movies page
+ Similar Movies page

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.
+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list
+ Movie trending = /

## App Design.

### Component catalogue.


![](/images/Screenshot_1.png)

>Trending People - this contains all the actors that are popular in todays movie industry
### UI Design.




![image](/images/Screenshot_2.png)

>Trending movies - this contains all the movies that are doing well that have been released recently

![ ](/images/Screenshot_3.png)

>Popular movies - this contains all the movies that are doing well that are succeeding as of today


![ ](/images/Screenshot_4.png)

>Latest movies - These are the movies that have come out most recently



### Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /blogs - displays all published blogs.
+ /blogs/:id - displays a particular blog.
+ /blogs/:id/comments - detail view of a particular blog and its comments.
+ etc.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

[ Itemize the technologies/techniques you researched independently and adopted in your project, i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these (we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).



+ "/people/trending" - this contains all of the people/actors that are popular nowadays
+ "/movies/trending" - This shows the movies that are popular at the moment and it also shows specific movie details
+ "/movies/popular" - this shows movies that have done well and are constantly being watched over and over 
+ "/movies/latest" - this shows the latest movie that has been released
+ "/movies/similar" - this should show a similar movie to the movie that is being selected
