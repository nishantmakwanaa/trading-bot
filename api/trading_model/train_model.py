from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications import VGG16
from tensorflow.keras import layers, models
from tensorflow.keras.optimizers import Adam

base_model = VGG16(weights='imagenet', include_top=False, input_shape=(128, 128, 3))

base_model.trainable = False

model = models.Sequential([
    base_model,
    layers.Flatten(),
    layers.Dense(128, activation='relu'),
    layers.Dense(5, activation='softmax')
])

model.compile(optimizer=Adam(learning_rate=0.0001), loss='categorical_crossentropy', metrics=['accuracy'])

train_datagen = ImageDataGenerator(rescale=1./255, horizontal_flip=True, rotation_range=30, zoom_range=0.2)

train_generator = train_datagen.flow_from_directory(
    'chart_images/',
    target_size=(128, 128),
    batch_size=32,
    class_mode='categorical'
)

model.fit(train_generator, epochs=10, steps_per_epoch=50)

model.save('chart_pattern_model.h5')
print("Model Saved As chart_pattern_model.h5")