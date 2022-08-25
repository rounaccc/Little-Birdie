import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import DashboardMain from './DashboardMain';
import Tweets from './Tweets';
import CircularProgress from '@mui/material/CircularProgress';


export default function Dashboard()
{
    async function fetchData(query)
    {
        const response = await fetch(`/predict/100/${query}`);
        const data = await response.json();
        setData(data);
    }

    const [tweetsOrDashboard, setTweetsOrDashboard] = useState();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { query } = useParams();
    useEffect(() =>
    {
        fetchData(query);
    }, []);


    useEffect(() =>
    {
        if (data.length > 0)
        {
            setIsLoading(false);
        }
    }, [data]);

    const body = (<>
        <Navbar setTweetsOrDashboard={setTweetsOrDashboard} />
        <div className='main'>
            {tweetsOrDashboard === 'Tweets' ? <Tweets tweetsData={data} /> : <DashboardMain tweetsData={data} />}
        </div>
    </>)

    const loading = (
        <div className='loading-page'>
            <div className='loading-wrapper'>
                <CircularProgress
                    size={100}
                    sx={{
                        color: 'white'
                    }}
                />
                <h1>Fetching Tweets......</h1>
                <h2>Please Wait</h2>
            </div>
        </div>
    )

    return (<>
        {isLoading ? loading : body}
    </>
    )
}