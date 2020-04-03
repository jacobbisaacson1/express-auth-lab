# Lab

## Create a User Authentication Flow

Here is a reasonable order of steps in which you might build an authentication flow in an express app.

1. Initialize npm project and git repo. Commit.
1. Build an express app that starts. Commit.
1. Hook up your database.  Commit.
1. Set up header and footer partials. Create a dummy "home page" in server.js -- just some template that will represent some page in your app. Commit.
1. Create an auth controller.  Make sure it works (add a temporary dummy route), then commit. 
1. Create a registration page. (You could maybe think of this as a User "new" page).  When it renders, commit.
1. Create user model, include it in your auth controller.  Commit.
1. Create user "create" route.  This route will actually perform the "registration." Commit.
1. Add User to session on a successful registration, and redirect to the dummy "home page".  Users can now register for your site.  Cool.  If you want a bonus, try to display a message Commit.
1. If the user attempts to register a duplicate username, they should be redirected back to the registration page and shown a message like "Username already taken.  Please try another."
1. Create and render a login page.  Commit.
1. Create a login route.  Commit.  It will be similar to, but different from, the registration route.  It should compare the passwords, and not work if the passwords don't match. When it works, commit.
1. If the user enters a bad password or bad username on the login page, they should be redirected back to the login page and shown a message "Invalid username or password."
1. Create log out link on the dummy "home" page. Commit.
1. Create "log out" route for that logout link to hit. It should destroy the session. This will log the user out.  What else might make sense for it to do? Redirect somewhere? Commit. 


### Hungry for more?

1. Create and link to a "Special" page that is for logged in users only.
1. Disallow users not logged in from accessing, "Special" page.
1. When users try to access the "Special page" they should be redirected to the login page and see a message that says "You must be logged in to do that."

### Hungry for even more?

1. Are there other messages it might be cool to use sessions to show the user?  Try using a custom middleware route with `res.locals` (look in the express docs) to make a more robust message system that can be used to message the user anytime about anything.  This is fairly complex.
