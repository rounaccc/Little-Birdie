import tweepy

Client = tweepy.Client(bearer_token='AAAAAAAAAAAAAAAAAAAAADmhdQEAAAAAjkcq90Q%2FOSHprYHufNQRlRixXaw%3D2jZvCloFaU1Vy3UlOE0Ed5y4CmZTJ9IylFxagyNsR1NRkD7So7')

def get_tweets():
	tweets = Client.search_recent_tweets(query='narendra modi lang:en', max_results=10, tweet_fields=['public_metrics','created_at'])
	for tweet in tweets.data:
		print(tweet['text'])
		print(tweet['created_at'])
		print(tweet['public_metrics'])
		print('\n')
get_tweets()