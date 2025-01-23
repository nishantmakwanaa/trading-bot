from ultralytics import YOLO

model = YOLO('yolov8n.yaml')

model.train(data='chart_dataset.yaml', epochs=100, imgsz=640)

results = model('screenshot.jpg')
results.show()