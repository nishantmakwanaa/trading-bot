from flask import Flask, jsonify, request
import subprocess
import os

app = Flask(__name__)

# Define the absolute path to main.py inside stock_ml_dashboard/
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MAIN_SCRIPT_PATH = os.path.join(BASE_DIR, "stock_ml_dashboard", "main.py")

@app.before_request
def force_http():
    """Ensure only HTTP is used and block HTTPS connections."""
    if request.url.startswith("https://"):
        return jsonify({"error": "HTTPS requests are not supported. Use HTTP instead."}), 400

@app.route("/")
def hello_world():
    return "Hello, World! Welcome to the Stock ML Dashboard 🚀"

@app.route("/run-ml", methods=["GET"])
def run_ml_pipeline():
    """API endpoint to execute `main.py` from the stock_ml_dashboard folder."""
    try:
        # Run `main.py` using subprocess
        result = subprocess.run(["python", MAIN_SCRIPT_PATH], capture_output=True, text=True, check=True)

        return jsonify({"message": "ML pipeline executed successfully!", "output": result.stdout})

    except subprocess.CalledProcessError as e:
        return jsonify({"error": "ML script execution failed", "details": e.stderr}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
