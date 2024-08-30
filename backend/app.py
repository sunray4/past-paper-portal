from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello from Flask!"

@app.route('/api/data')
def get_data():
    data = {"message": "Hello from Flask API!"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
