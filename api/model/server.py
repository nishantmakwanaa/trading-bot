from flask import Flask, request, jsonify

app = Flask(__name__)

# Mock function to predict patterns (replace with your ML logic)
def predict_chart(data):
    # Example: Process input data and return a fixed response
    prices = data.get('prices', [])
    if not prices:
        return {"error": "No prices provided"}
    
    # Example output (replace this with your actual ML model prediction)
    return {
        "pattern": "Head and Shoulders",
        "confidence": 0.85
    }

# Endpoint to handle predictions
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Receive JSON data from the request
        data = request.json
        print('Data received from Express server:', data)

        # Run the prediction function
        prediction = predict_chart(data)

        # Send prediction response
        return jsonify(prediction)
    except Exception as e:
        print('Error processing request:', str(e))
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
