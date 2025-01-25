import os
import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from urllib.parse import urljoin
import requests

# Setup ChromeDriver using webdriver-manager
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# URL of the page you want to scrape images from
url = 'https://www.tradingview.com/chart/'

# Open the URL with Selenium WebDriver
driver.get(url)

# Allow time for images to load
time.sleep(5)

# Create a directory to save images
os.makedirs('chart_images', exist_ok=True)

# Find all image tags on the page
images = driver.find_elements(By.TAG_NAME, 'img')

# Limit to 50 images (or less if fewer are found)
downloaded_images = 0

for img in images[:50]:
    img_url = img.get_attribute('src')
    
    if img_url:
        img_url = urljoin(url, img_url)
        
        if img_url.endswith(('png', 'jpg', 'jpeg')):  # Check if the image URL is valid
            try:
                img_data = requests.get(img_url).content
                img_name = os.path.join('chart_images', img_url.split('/')[-1])

                with open(img_name, 'wb') as f:
                    f.write(img_data)
                print(f"Downloaded {img_name}")
                downloaded_images += 1
            except Exception as e:
                print(f"Failed To Download {img_url}. Error: {e}")

# Close the Selenium WebDriver
driver.quit()

# Print total images downloaded
print(f"Downloaded {downloaded_images} images.")
