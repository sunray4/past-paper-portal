# Past Paper Portal
![image of home page](/assets/home.jpeg)

## Inspiration

In the education-themed hackathon Recess Hacks 4.0, we got inspiration from analyzing problems in our everyday school lives: Every time a test/exam comes up, we wish we could practice with test papers from previous years to feel more prepared. Gaining insight from forum social networks like Reddit, we created a past paper sharing platform where students can share their test papers and search from a pool of past assessments shared by other members of the community. 

## Features

This web app, developed with React.js and Flask, facilitates sharing past papers across the web to help students prepare for tests and exams. Through the use of the HTML Canvas element, users can draw on uploaded images to select the questions and figures on the test paper. Using that information, the platform can create a PDF that contains the questions of the test paper only, while the original test paper with the answers are saved in a separate PDF. This feature improves user experience because users can do the test without accidentally looking at the answers. 

## Installation

Run the following terminal commands to run the project:
1. % cd frontend
2. % npm install
3. % cd ../backend
4. % pip install flask Flask-SQLAlchemy flask-cors
5. % flask shell
6. from config import app, db
7. with app.app_context():
8.   db.drop_all()
9.   db.create_all()
10. exit()
11. % cd ../frontend
12. % npm run
