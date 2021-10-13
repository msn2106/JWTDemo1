# JWTDemo1
*Project to create JWT based access token with expiration time, refresh access token and deleting refresh tokens*

## How to use
1. install all the packages :- express, jsonwebtoken
2. run :- npm run devServer - this runs on port 3000
3. run :- npm run devAuthServer :- this runs on port 4000
4. user requests.rest file :- Last POST method to get the access token
5. use the first get method and paste the access token after the Bearer & space - you'll the response in json form
6. the access token will expire in 30s.
7. for regenerating access token run the 2nd last POST method in requests.rest with the refresh token you get in the first POST request (step 4)
8. paste the new access token for new GET request.
9. if you want to set the refresh token as invalid run the 2nd POST method from top in request.rest file. It will mark that as invalid refresh token (Now this refresh token can't be used to generate further access token)
10. if you again want to access the GET request, you need to again run the last POST method in request.rest to generate the access token and refresh token

## The two js files server.js and authServer.js file can be kept in two different API for access token creation and verification. This can be clubed with OAuth to implement JWT based validation for user rather than session based approach.

### For any suugestions or queries plz ping **Mayank Singh** msn2106@gmail.com
