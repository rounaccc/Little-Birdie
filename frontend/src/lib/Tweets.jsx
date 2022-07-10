import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Tweets()
{
    const tweetsData = useOutletContext();

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
                            <th>Prediction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tweetsData.map((tweet, index) =>
                        {
                            return (
                                <tr key={index}>
                                    <td>{tweet.tweet}</td>
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