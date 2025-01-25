from tensorflow.keras.models import load_model

def save_trained_model(model, model_path):
    model.save(model_path)
    print(f"Model Saved At {model_path}")

def load_trained_model(model_path):
    return load_model(model_path)