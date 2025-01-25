from tensorflow.keras.preprocessing.image import ImageDataGenerator

def preprocess_data(image_directory, target_size=(128, 128), batch_size=32):

    datagen = ImageDataGenerator(rescale=1./255, horizontal_flip=True, rotation_range=30, zoom_range=0.2)

    data_generator = datagen.flow_from_directory(
        image_directory,
        target_size=target_size,
        batch_size=batch_size,
        class_mode='categorical'
    )
    return data_generator