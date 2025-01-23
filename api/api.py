from fastapi import FastAPI, File, UploadFile
from pattern_detection import detect_patterns

app = FastAPI()

@app.post("/patterns")
async def get_patterns(file: UploadFile = File(...)):
    image = await file.read()
    patterns = detect_patterns(image)
    return {"patterns": patterns}