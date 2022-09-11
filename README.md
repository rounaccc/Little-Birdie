# Little Birdy
 - A web-app wherein, the user can put in a name and we'll provide them with a detailed real-time tweet analysis including sentiments, word cloud, hashtags and graph.
 - End-to-end DL project with a dataset of 1.6M Tweets.
 - Data was customely pre-processed to a very high standards.
 - Achieved an accuracy of 83.98% on Train set and 83.51% on Test set.
 - Deployed on Microsoft Azure
 
 
 ## Introduction 
- Little Birdy is a web app where in the user can put in any person, object, movie, product name and the web app will provide them with all the detailed analysis about that specific thing based on the real-time tweets on Twitter.
- The analysis/overview includes, tweets, its sentiment, hashtags, word cloud for the respective sentiment, and a graph for the ratio of sentiments


## Demo
- You can try out our web app by clicking [Little Birdy](http://littlebirdy.ddns.net/)

### You can also checkout this quick demo

https://user-images.githubusercontent.com/85012501/189414980-60c7db3b-12a1-4d06-b4a6-c726816e2726.mp4

## Dataset and Pre-Processing

`Sentiment140 dataset with 1.6 million tweets` was used for developing the model which was customly preprocessed to a very highh standards.
- Click [here](https://www.kaggle.com/datasets/kazanova/sentiment1400) to get the dataset.
### Pre-processing steps
- ~5k null values were removed
- We tried to remove even the fine grained spelling error, unexpected characters and more...
- Performed Lemmatization to convert the word into its root form
- For the stopwards part, we tried to remove majority of 1-2 letter alphabets. Then checked for top 500 high frequency words in the whole dataset and manually removed the words which was not needed or were biased
- Tokenized and padded the dataset
- Converted word into vectors using FastText word embedding(implemented Glove and BERT as well)
- Splitted into Train set and Test set in 95:5 ratio

## Methodology


## Model Building

## Deployment

## Data Visualization

## Key challenges
