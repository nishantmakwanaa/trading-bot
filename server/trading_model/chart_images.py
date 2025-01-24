import requests
from bs4 import BeautifulSoup
import os

url = 'https://www.example.com/your-chart-images'

response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

os.makedirs('chart_images', exist_ok=True)

for img_tag in soup.find_all('img'):
    img_url = img_tag.get('src')
    if img_url:
        if img_url.endswith(('png', 'jpg', 'jpeg')):
            img_data = requests.get(img_url).content
            img_name = os.path.join('chart_images', img_url.split('/')[-1])

            with open(img_name, 'wb') as f:
                f.write(img_data)
            print(f"Downloaded {img_name}")