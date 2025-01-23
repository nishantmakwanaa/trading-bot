def draw_suggestions(image, patterns):
    for pattern in patterns:
        x, y, w, h = pattern['bbox']
        cv2.rectangle(image, (x, y), (x+w, y+h), (0, 255, 0), 2)
        cv2.putText(image, pattern['name'], (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
    return image