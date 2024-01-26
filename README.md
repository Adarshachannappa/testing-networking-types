# Client - Server Connection using Express.js


## Steps
    -   Installed VS Code
    -   Installed Node.js (I tried to run npm init but it didn't work before installing node.js)
        - This will help us to run Javascript outside the browser
        - all npm commands can run using node.js
        - node -v : to verify the version

    - Created two folders
        - Client:
            - which will have webpage to consume the data from servver
        - Server
            - Which will server the data to client based the routes
             - Added package.js - using npm init command
             - which is used for npm configuration 
             - Added express.js into the app
             - Installed nodemon also to keep the server up and runs with new changes.  
    - Installed Git (I tried to run git init command before installing git into my computer but it didn't work)
        - Created a github repository
        - Don't fortget add .gitignore file which will be used to remove the files from commit to github (those files can be re-generated)
        - While commit, it didnt work as user was not configured
***setup-user***
PS C:\Users\User\Downloads\javascript> git commit -m "created client & server - express js"
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"       

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'User@DESKTOP-5NGLC1U.(none)')

    - resolved: 
        git config --global user.email "adarsha4467@gmail.com"
        git config --global user.name "AdarshaChannappa"  
    - Again tried to commit: git commit -m "created client & server - express js"   (uff it worked!!)
    - then added remote repo 
        https://github.com/Adarshachannappa/testing-networking-types.git
    - finally pushed the code to git repo - testing-networking-types   
***Standard git commands to push the code to git repository***
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Adarshachannappa/testing-networking-types.git
git push -u origin main

    -   next time when you push the code
       git add .  (it moves all the changed/update files to staged area from working directory(vs code))
       git status (it gives information about which files are staged) 
       git commit -m "readme updates"   (it commits all the staged files into local git repo)
       git push origin main  (it pushses all the file chanes to github repo)
