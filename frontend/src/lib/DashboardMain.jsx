import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import ProgressBar from "@ramonak/react-progress-bar";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import ReactWordcloud from 'react-wordcloud';
import TagCloud from './TagCloud';

export default function DashboardMain({tweetsData})
{
    const [positivePercentage, setPositivePercentage] = useState(0);
    const [negativePercentage, setNegativePercentage] = useState(0);
    const [positiveWordCloud, setPositiveWordCloud] = useState([]);
    const [negativeWordCloud, setNegativeWordCloud] = useState([]);
    const [hashtagWordCloud, setHashtagWordcloud] = useState([]);

    useEffect(() =>
    {
        var positive = 0;
        var negative = 0;
        var positiveWords = [];
        var negativeWords = [];
        var hashtagArray = [];
        tweetsData.forEach(function (tweet)
        {
            if (tweet.prediction === "postive")
            {
                positive++;
                tweet.tweet.split(" ").forEach(function (word)
                {
                    if (word.length > 1)
                    {
                        //check if word is already in array of objects
                        if (positiveWords.find(x => x.text === word) === undefined)
                        {
                            positiveWords.push({
                                text: word,
                                value: 1
                            });
                        }
                        else
                        {
                            positiveWords.forEach(function (wordObject)
                            {
                                if (wordObject.text === word)
                                {
                                    wordObject.value++;
                                }
                            });
                        }
                    }
                });
            }
            else
            {
                tweet.tweet.split(" ").forEach(function (word)
                {
                    if (word.length > 1)
                    {
                        //check if word is already in array of objects
                        if (negativeWords.find(x => x.text === word) === undefined)
                        {
                            negativeWords.push({
                                text: word,
                                value: 1
                            });
                        }
                        else
                        {
                            negativeWords.forEach(function (wordObject)
                            {
                                if (wordObject.text === word)
                                {
                                    wordObject.value++;
                                }
                            });
                        }
                    }
                });
            }
            tweet.hashtags.forEach(function (hashtag)
            {
                if (hashtagArray.find(x => x.text === hashtag) === undefined)
                {
                    hashtagArray.push({
                        text: hashtag,
                        value: 1
                    });
                }
                else
                {
                    hashtagArray.forEach(function (hashtagObject)
                    {
                        if (hashtagObject.text === hashtag)
                        {
                            hashtagObject.value++;
                        }
                    });
                }
            });
        });
        setHashtagWordcloud(hashtagArray);
        setPositiveWordCloud(positiveWords);
        setNegativeWordCloud(negativeWords);
        positive = parseInt(positive / tweetsData.length * 100);
        negative = 100 - positive;
        setPositivePercentage(positive)
        setNegativePercentage(negative)
        
    }, []);


    return (
        <motion.div
            className='dashboard-wrapper'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className='dashboard-left'>
                <div className='dashboard-hashtags'>
                    <TagCloud hashtags={hashtagWordCloud} />
                </div>
                <div className='dashboard-tweets'>
                    <div className='dashboard-tweets-positive'>
                        <Swiper
                            className='dashboard-tweets-swiper'
                            spaceBetween={0}
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                        >
                            {tweetsData.map((item, index) =>
                            {
                                if (item.prediction === 'postive')
                                {
                                    return (
                                        <SwiperSlide
                                            className='dashboard-tweets-swiper-slide'
                                            key={index}>
                                            <div className='dashboard-tweets-tweet'>
                                                <div className='dashboard-tweets-tweet-text'>
                                                    <p>{item.tweet}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                                else
                                {
                                    return null
                                }
                            })}
                        </Swiper>
                    </div>
                    <div className='dashboard-tweets-negative'>
                        <Swiper
                            className='dashboard-tweets-swiper'
                            spaceBetween={0}
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                        >
                            {tweetsData.map((item, index) =>
                            {
                                if (item.prediction === 'negative')
                                {
                                    return (
                                        <SwiperSlide
                                            className='dashboard-tweets-swiper-slide'
                                            key={index}>
                                            <div className='dashboard-tweets-tweet'>
                                                <div className='dashboard-tweets-tweet-text'>
                                                    <p>{item.tweet}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                                else
                                {
                                    return null
                                }
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='dashboard-right'>
                <div className='dashboard-tweets-wordcloud'>
                    <div className='dashboard-tweets-wordcloud-positive'>
                        <ReactWordcloud options={{
                            fontSize: [100,120],
                            padding: 0
                        }} words={positiveWordCloud} />
                    </div>
                    <div className='dashboard-tweets-wordcloud-negative'>
                        <ReactWordcloud options={{
                            fontSize: [100,120],
                            padding: 0
                        }} words={negativeWordCloud} />
                    </div>
                </div>
                <div className='dashboard-tweets-percentage'>
                    <div className='dashboard-tweets-percentage-positive'>
                        <ProgressBar barContainerClassName="bar-wrapper-positive" variant="success" completed={positivePercentage} label={`${positivePercentage}%`} />
                    </div>
                    <div className='dashboard-tweets-percentage-negative'>
                        <ProgressBar barContainerClassName="bar-wrapper-negative" variant="danger" completed={negativePercentage} label={`${negativePercentage}%`} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}