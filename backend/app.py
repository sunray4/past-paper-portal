from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello from Flask! MY EDIT"

# message = "Hello from Flask API!!!!"
# @app.route('/api/data', methods=['GET', 'POST'])
# def handle_data():
#     if request.method == 'POST':
#         data = request.json
#         print(f"Received data: {data}")
#         response = {"status": "success", "received": data}
#         message = data
#         return jsonify(response)
#     else:
#         data = {"message": message}
#         return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
