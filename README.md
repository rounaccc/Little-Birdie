# Little Birdy

 ## Introduction 
- Little Birdy is a web app where in the user can put in any person, object, movie, product name and the web app will provide them with all the detailed analysis about that specific thing based on the real-time tweets on Twitter.
- The analysis/overview includes, tweets, its sentiment, hashtags, word cloud for the respective sentiment, and a graph for the ratio of sentiments


## Demo
- You can try out our web app by clicking [Little Birdy](http://littlebirdy.ddns.net/)

### You can also checkout this quick demo

https://github.com/rounaccc/Little-Birdie/assets/85012501/09e3461b-d04c-4ef6-8f6f-7935550128a8

## Dataset and Pre-Processing

`Sentiment140 dataset with 1.6 million tweets` was used for developing the model which was customly preprocessed to a very highh standards.
- Click [here](https://www.kaggle.com/datasets/kazanova/sentiment140) to get the dataset.
### Pre-processing steps
- ~5k null values were removed
- We tried to remove even the fine grained spelling error, unexpected characters and more...
- Performed Lemmatization to convert the word into its root form
- For the stopwards part, we tried to remove majority of 1-2 letter alphabets. Then checked for top 500 high frequency words in the whole dataset and manually removed the words which was not needed or were biased
- Tokenized and padded the dataset
- Converted word into vectors using FastText word embedding(implemented Glove and BERT as well)
- Splitted into Train set and Test set in 95:5 ratio


## Model Building
- We tried working with three different word embeddings, namely, FastText, GloVe, and BERT
- BERT didn't work out due to limited resources
- Accuracy with the other two embeddings were similar so we to carry out experiment by judging on the output of the two model given a specific sentance
- We tried two models, LSTM and LSTM-CNN hybrid model out of which LSTM showed comparitively better results
- Achieved an accuracy of 83.98% on Train set and 83.51% on Test set
- Then we saved the model as well as the tokenizer

## Deployment
- Created a flask app and front-end using react and hosted locally
- Then we deployed the web app on Microsoft Azure using VM

## Data Visualization
- Accuracy graph

![052c2c09-958f-4d7f-9bd7-d1ff221f7daf](https://user-images.githubusercontent.com/85012501/189542354-24e2efdb-c8ee-40dc-b29c-d8ad679fccd3.jpeg)

- Loss graph

![1aa90ef4-1881-4d2f-8447-72cdb71ee0d7](https://user-images.githubusercontent.com/85012501/189542515-13e3d7a4-35e0-4797-aac5-21fa58a86800.jpeg)

- Confusion matrix

![11a970eb-ebd2-4e32-a327-f77241f6a54c](https://user-images.githubusercontent.com/85012501/189542555-322bef53-a96d-4774-9d57-3b3244149a84.jpeg)

- F1 score, Precision, and Recall

![0bab4f21-13e1-4851-aeb1-4999be082cf4](https://user-images.githubusercontent.com/85012501/189542621-aaa78832-d078-437c-950d-06fe9fbe73df.jpeg)

