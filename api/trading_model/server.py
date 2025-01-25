from flask import Flask, request, jsonify
import os
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from data_preprocessing import preprocess_data  # Assuming this is the image preprocessing script
import tensorflow as tf

app = Flask(__name__)

# Load the trained model (Ensure the model is already trained and saved as 'model.h5')
MODEL_PATH = 'path_to_trained_model/model.h5'
model = load_model(MODEL_PATH)

def predict_chart(data):
    """
    Predict the pattern from the received data.
    """
    # Extract chart image URL or file from the received data
    image_path = data.get('image_path', None)
    if not image_path:
        return {"error": "No image path provided"}

    try:
        # Preprocess the image before feeding into the model
        img = image.load_img(image_path, target_size=(128, 128))  # Use same target size used for training
        img_array = image.img_to_array(img) / 255.0  # Rescale the image
        img_array = np.expand_dims(img_array, axis=0)  # Expand dimensions for batch processing
        
        # Predict using the trained model
        predictions = model.predict(img_array)
        
        # Assuming the model outputs probabilities for multiple classes (categorical)
        predicted_class_index = np.argmax(predictions)
        confidence = np.max(predictions)
        
        # Mapping predicted index to pattern name (this should match your class labels)
        patterns = ["Head and Shoulders", "Double Top", "Cup and Handle", "Flag", "Triangle"]  # Example pattern names
        predicted_pattern = patterns[predicted_class_index]
        
        return {
            "pattern": predicted_pattern,
            "confidence": float(confidence)
        }
    
    except Exception as e:
        return {"error": f"Error processing image: {str(e)}"}

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        print('Data received from client:', data)

        prediction = predict_chart(data)
        return jsonify(prediction)
    
    except Exception as e:
        print('Error processing request:', str(e))
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)