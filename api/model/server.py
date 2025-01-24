from flask import Flask, request, jsonify

app = Flask(__name__)

def predict_chart(data):

    prices = data.get('prices', [])
    if not prices:
        return {"error": "No prices provided"}

    return {
        "pattern": "Head and Shoulders",
        "confidence": 0.85
    }

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        print('Data received from Express server:', data)

        prediction = predict_chart(data)
        return jsonify(prediction)
    except Exception as e:
        print('Error processing request:', str(e))
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
