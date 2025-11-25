Our project is developed for Recess Hacks 4.0 according to its theme education-technology. We developed a full stack web application that facilitates sharing past papers across the web to help students prepare for tests and exams.

Run the following terminal commands to run the project:

On Mac
```bash
cd frontend
npm ci
cd ../backend
python -m venv venv
source venv/bin/activate
pip install flask Flask-SQLAlchemy flask-cors
flask shell

from config import app, db
with app.app_context():
...[\tab] db.drop_all()
...[\tab] db.create_all()
exit()

cd ../frontend
npm run start
```

On Windows
```bash
cd frontend
npm ci
cd ../backend
python -m venv venv
venv\Scripts\activate
pip install flask Flask-SQLAlchemy flask-cors
flask shell

from config import app, db
with app.app_context():
...[\tab] db.drop_all()
...[\tab] db.create_all()
exit()

cd ../frontend
npm run start
```
