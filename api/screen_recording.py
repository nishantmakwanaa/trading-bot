import cv2
import numpy as np
import pyautogui

def record_screen():
    screen_size = pyautogui.size()
    fourcc = cv2.VideoWriter_fourcc(*"XVID")
    out = cv2.VideoWriter("screen_recording.avi", fourcc, 20.0, (screen_size.width, screen_size.height))

    while True:
        img = pyautogui.screenshot()
        frame = np.array(img)
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        out.write(frame)

        cv2.imshow("Screen Recording", frame)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

    out.release()
    cv2.destroyAllWindows()