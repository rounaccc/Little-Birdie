import tweepy

Client = tweepy.Client(bearer_token='AAAAAAAAAAAAAAAAAAAAADmhdQEAAAAAjkcq90Q%2FOSHprYHufNQRlRixXaw%3D2jZvCloFaU1Vy3UlOE0Ed5y4CmZTJ9IylFxagyNsR1NRkD7So7')

def get_tweets():
	tweets = Client.search_recent_tweets(query='narendra modi', max_results=17)
	print(tweets)
	count = 1
	for tweet in tweets:
		print(count,tweet.full_text)
		count += 1
get_tweets()