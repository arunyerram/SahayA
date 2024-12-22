-- import numpy as np
-- from tensorflow.keras.models import Sequential
-- from tensorflow.keras.layers import Dense
-- from sklearn.model_selection import train_test_split
-- from sklearn.preprocessing import StandardScaler
-- from sklearn.datasets import make_classification


-- X, y = make_classification(n_samples=1000, n_features=20, n_informative=15, 
--                            n_redundant=5, random_state=42)


-- X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


-- scaler = StandardScaler()
-- X_train = scaler.fit_transform(X_train)
-- X_test = scaler.transform(X_test)


-- model = Sequential([
--     Dense(64, activation='relu', input_shape=(X_train.shape[1],)),  # Hidden layer 1
--     Dense(32, activation='relu'),                                   # Hidden layer 2
--     Dense(1, activation='sigmoid')                                 # Output layer
-- ])

-- model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])


-- model.fit(X_train, y_train, epochs=20, batch_size=32, validation_split=0.2)


-- loss, accuracy = model.evaluate(X_test, y_test)
-- print(f"Test Loss: {loss:.4f}")
-- print(f"Test Accuracy: {accuracy:.4f}")


-- predictions = model.predict(X_test)
-- predictions = (predictions > 0.5).astype(int)  # Convert probabilities to binary outputs
-- print(f"Sample Predictions: {predictions[:10].flatten()}")
