import React from 'react';
import { motion } from 'framer-motion';
import Moment from 'react-moment';

export default function Tweets({tweetsData})
{

    return (<>
        <motion.div
            className='dashboard-wrapper'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='dashboard-header'>
            </div>
            <div className='dashboard-content'>
                <table>
                    <thead>
                        <tr>
                            <th>Original Tweet</th>
                            <th>Date</th>
                            <th>Likes</th>
                            <th>Prediction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tweetsData.map((tweet, index) =>
                        {
                            return (
                                <tr key={index}>
                                    <td>{tweet.tweet}</td>
                                    <td><Moment fromNow>{tweet['created_at']}</Moment></td>
                                    <td>{tweet['public_metrics']['like_count']}</td>
                                    <td
                                        className={`${tweet.prediction === 'postive' ? 'color-positive' : 'color-negative'}`}
                                    >{tweet.prediction}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </motion.div>
    </>);
}