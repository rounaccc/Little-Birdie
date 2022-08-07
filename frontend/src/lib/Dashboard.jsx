import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import DashboardMain from './DashboardMain';
import tweetsData from "../data.json";


export default function Dashboard()
{
    async function fetchData(query)
    {
        const response = await fetch(`/predict/100/${query}`);
        const data = await response.json();
        setData(data);
    }
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);
    const { query } = useParams();
    useEffect(() =>
    {
        // setCount(count + 1);
        // fetchData(query);
        console.log(tweetsData)
    }, []);

    useEffect(() =>
    {
        console.log(`Dashboard rendered ${count} times`);
    }, [count]);

    useEffect(() =>
    {
        if(data.length > 0)
        {
            setIsLoading(false);
        }
    },[data]);

    // const tweetsData = [
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 16:53:44+00:00",
    //         "tweet": "Seriously? This frm you @jammypants4 \n\nQuoting Shamshera better than #VR both in terms of Quality and Storyline is shit!\ud83d\ude02 \n\nYes, it is loved when it is better. \ud83d\ude01\n\nAnd stop impressing RK fans. \nIf things are good, we will like it. As we root fr Brahmastra. https://t.co/PbiIZoiRk4",
    //         "processed_tweet": "seriously this frm you quoting shamshera better than both in terms of quality and storyline is shit yes it is loved when it is better and stop impressing rk fans if things are good we will like it as we root fr brahmastra ",
    //         "prediction": "negative",
    //         "hashtags": [
    //             "#VR"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 2,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 16:46:08+00:00",
    //         "tweet": "Arey iski toh baja a padega\u2026begging for a role in brahmastra bhool gayi..\nHe literally gave a 100cr when chutku bhatt wasn\u2019t in the industry \ud83d\ude02\ud83d\ude02\n\nConfidence dekho iss nibbi ki\ud83e\udd26\ud83c\udffb https://t.co/TWykjrWQmx",
    //         "processed_tweet": "arey iski toh baja a padega begging for a role in brahmastra bhool gay i he literally gave a cr when chutku bhatt wasn t in the industry confidence dekho iss nibbi ki ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 1,
    //             "like_count": 2,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 16:31:01+00:00",
    //         "tweet": "Will sponsor 5 tickets of #Brahmastra and #Pathaan to those who can\u2019t afford to watch it in theatres.",
    //         "processed_tweet": "will spon soo r tickets of and to though se who can t afford to watch it in theatres ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra",
    //             "#Pathaan"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 16:26:30+00:00",
    //         "tweet": "Abhishek Bachchan after watching this-\n@SrBachchan @juniorbachchan @InMemeTemplates @indianmemestaan @indianmemer47 @RanveerOfficial #BoycottbollywoodForever #Shamshera #Brahmastra #MEMES https://t.co/o429sEPzxv",
    //         "processed_tweet": "abhishek bachchan after watching this ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#BoycottbollywoodForever",
    //             "#Shamshera",
    //             "#Brahmastra",
    //             "#MEMES"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 1,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 16:05:19+00:00",
    //         "tweet": "Bimbisara trailer visuals are far better than brahmastra visuals #Bimbisara #Brahamastra",
    //         "processed_tweet": "bimbisara trailer visuals are far better than brahmastra visuals ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Bimbisara",
    //             "#Brahamastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 16:03:15+00:00",
    //         "tweet": "Before shamsheera release everyone were predicting record opening for brahmastra but after its release it came down to 30-40cr lol.",
    //         "processed_tweet": "before shamsheera release everyone were predicting record opening for brahmastra but after its release it came down to cr lol ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 4,
    //             "reply_count": 0,
    //             "like_count": 21,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 15:35:18+00:00",
    //         "tweet": "Brahmastra will be a bigger flop than Shamshera.\nThat's it that's the tweet",
    //         "processed_tweet": "brahmastra will be a bigger flop than shamshera that is it that is the tweet",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 25,
    //             "reply_count": 8,
    //             "like_count": 144,
    //             "quote_count": 1
    //         },
    //         "created_at": "2022-07-28 15:24:45+00:00",
    //         "tweet": "Not only the Devatas BUT even the great Asuras are in awe of Pawanputra Hanumanta. \nLet it not be forgotten!\nMahaRudra Avatara! \nEven Indrajeet who used the mighty Brahmastra could bind him only a Muhurta! https://t.co/PiDh0r4UJK",
    //         "processed_tweet": "not only the devatas but even the great asuras are in awe of pawanputra hanumanta let it not be forgotten maharudra avatara even indrajeet who used the mighty brahmastra could bind him only a muhurta ",
    //         "prediction": "negative",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 4,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 15:13:17+00:00",
    //         "tweet": "Y'all are really talking about boycott bollywood when brahmastra release is around the corner!?!\ud83e\udd74I mean it looks like a promising movie..I'm hoping it's recieved well by audience\ud83d\ude2c",
    //         "processed_tweet": "y all are really talking about boycott bollywood when brahmastra release is around the corner i mean it looks like a promising movie i am hoping it is recieved well by audience ",
    //         "prediction": "negative",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 3,
    //             "like_count": 4,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 15:11:50+00:00",
    //         "tweet": "need new brahmastra content \ud83d\udc7d",
    //         "processed_tweet": "need new brahmastra content ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 14:38:58+00:00",
    //         "tweet": "Brahma hi bachaye ab Brahmastra 1 ko. This kind of overconfidence and overexposure somewhere hits negatively on the destiny of movies. They will have to be embarassed if 1 doesn't become a hit. https://t.co/htNV5hi2HV",
    //         "processed_tweet": "brahma hi bachaye ab brahmastra ko this kind of overconfidence and overexposure soo mewhere hits negatively on the destiny of movies they will have to be embarassed if does not become a hit ",
    //         "prediction": "negative",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 14:38:14+00:00",
    //         "tweet": "Ranbir Kapoor facing the paps after Shamshera disaster while Brahmastra is just around the corner: https://t.co/nYIv7zE4Aq",
    //         "processed_tweet": "ranbir kapoor facing the paps after shamshera disaster while brahmastra is just around the corner ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 2,
    //             "like_count": 2,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 14:35:52+00:00",
    //         "tweet": "Wanted to see hr in lord shiva\u2019s role but not in brahmastra tho https://t.co/echytxkRxY",
    //         "processed_tweet": "wanted to see hr in lord shiva s role but not in brahmastra though ",
    //         "prediction": "negative",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 1,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 14:28:52+00:00",
    //         "tweet": "Big question- brahmastra will be hit or flop? \n\nhttps://t.co/e3udajP4bL \n@PixstoryApp  @alisharashid23 https://t.co/ImrVNWp5HK",
    //         "processed_tweet": "big question brahmastra will be hit or flop ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 14:17:57+00:00",
    //         "tweet": "Brahm\u0101stra Part One: Shiva\nOk on my watch list just based on the title. Super Heroes with astral forms (the Astras), with dance &amp; music, and the power of LOVE!\nhttps://t.co/6IbYGZWupx",
    //         "processed_tweet": "brahm stra part one shiva ok on my watch list just based on the title super heroes with astral forms the astras with dance amp music and the power of love ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 1,
    //             "like_count": 3,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 14:03:19+00:00",
    //         "tweet": "#Brahmastra will be a flop movie. A little bit of popularity it might gain because of Karan\u2019s child Alia. But that\u2019s it.",
    //         "processed_tweet": " will be a flop movie a little bit of popularity it might gain be because of karan s child alia but that s it ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 13:50:02+00:00",
    //         "tweet": "Who will be in #Brahmastra2 ?\n\nClick to read \n\n#tellychakkar #Brahmastra2 #AyanMukerji \n\nhttps://t.co/JFBcDiHU9o",
    //         "processed_tweet": "who will be in click to read ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra2",
    //             "#tellychakkar",
    //             "#Brahmastra2",
    //             "#AyanMukerji"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 13:47:57+00:00",
    //         "tweet": "When is Shiva song from #brahm\u0101stra releasing? \nEagerly awaiting! \ud83d\ude03",
    //         "processed_tweet": "when is shiva soo ng from releasing eagerly awaiting ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#brahm\u0101stra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 13:39:00+00:00",
    //         "tweet": "Why is every big films casting Amitabh B? First Brahmastra, now Project K. https://t.co/KcV7uFGi41",
    //         "processed_tweet": "why is every big films casting amitabh b first brahmastra now project k ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 13:27:39+00:00",
    //         "tweet": "Why do I get the feeling they're going to stick Kesariya in the end credits \ud83d\ude44 #Brahmastra",
    //         "processed_tweet": "why do i get the feeling they are going to stick kesariya in the end credits ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 3,
    //             "like_count": 3,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 13:04:07+00:00",
    //         "tweet": "Without confidence koi apne movie ki OTT release 6 months bad nahi rakhega, WOM acchi hogi tooh Brahmastra release tak movie will run freely #LaalSinghChaddha \nhttps://t.co/Ob7uWQsmpr",
    //         "processed_tweet": "wi though ut confidence koi apne movie ki ott release months bad nahi rakhega wom acchi hogi tooh brahmastra release tak movie will run freely ",
    //         "prediction": "negative",
    //         "hashtags": [
    //             "#LaalSinghChaddha"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 13:01:27+00:00",
    //         "tweet": "Brahmastra Part One Shiva full movie\nLink:https://t.co/7DvKd9CQIS https://t.co/yzgPqegxbB",
    //         "processed_tweet": "brahmastra part one shiva full movie link ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 26,
    //             "reply_count": 4,
    //             "like_count": 94,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 12:57:10+00:00",
    //         "tweet": "Every day I am getting more and more assured that the VFX of Brahmastra are So good !! Especially since Indian cinema is not used to such kind of films ! https://t.co/aJ5Gjx1yuw",
    //         "processed_tweet": "every day i am getting more and more assured that the vfx of brahmastra are soo good especially since indian cinema is not used to such kind of films ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 52,
    //             "reply_count": 20,
    //             "like_count": 451,
    //             "quote_count": 4
    //         },
    //         "created_at": "2022-07-28 12:56:42+00:00",
    //         "tweet": "#HrithikRoshan has been approached to be a part of next in BRAHMASTRA triology where #DeepikaPadukone has already given her nod . \n\nEverything depend on how first part gonna receive among the audiences. \n\n#RanbirKapoor  , #AliaBhatt",
    //         "processed_tweet": " has been approached to be a part of next in brahmastra triology where has already given her nod everything depend on how first part gonna receive among the audiences ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#HrithikRoshan",
    //             "#DeepikaPadukone",
    //             "#RanbirKapoor",
    //             "#AliaBhatt"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 16,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 12:50:10+00:00",
    //         "tweet": "Which film will score higher at the Box Office?\n\n\u2764 for #Brahmastra\n\ud83d\udd01 for #LaalSinghChaddha https://t.co/TKfwb9zrnL",
    //         "processed_tweet": "which film will score higher at the box office for for ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra",
    //             "#LaalSinghChaddha"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 12:42:19+00:00",
    //         "tweet": "Andy Vermaut shares:SCOOP: Hrithik Roshan and Deepika Padukone offered a key role by Ayan Mukerji in Brahmastra 2 - Will they accept?: Ranbir Kapoor and Alia Bhatt's Brahmastra is\u2026 https://t.co/2NMuB6TkVd Thank you. #AndyVermautLovesBollywoodEntertainment #ThankYouForBollywood https://t.co/VQfcH8LYrO",
    //         "processed_tweet": "andy vermaut shares scoop hrithik roshan and deepika padukone offered a key role by ayan mukerji in brahmastra will they accept ranbir kapoor and alia bhatt s brahmastra is thank you ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#AndyVermautLovesBollywoodEntertainment",
    //             "#ThankYouForBollywood"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 2,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 12:37:36+00:00",
    //         "tweet": "Ds 1\nThe idea \ud83d\udd25 \ud83d\udd25 \ud83d\udd25\n#Kesariya #Brahmastra #RanbirKapoor https://t.co/QOgRTm1eoC",
    //         "processed_tweet": "ds the idea ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Kesariya",
    //             "#Brahmastra",
    //             "#RanbirKapoor"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 2,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 12:31:04+00:00",
    //         "tweet": "You can\u2019t unhear the lyrics but you still can apply for the September intake\ud83d\ude09\n\nHead to the link in the bio and start preparing\u2196\ufe0f\n\n#studyabroadmemes  #internationalstudents #overseaseducationeducation #kesariya #ranbirkapoor #aliabhatt #kesariyamemes #brahmastra #trending #memes https://t.co/fndi7O58vC",
    //         "processed_tweet": "you can t unhear the lyrics but you still can apply for the september intake head to the link in the bio and start preparing ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#studyabroadmemes",
    //             "#internationalstudents",
    //             "#overseaseducationeducation",
    //             "#kesariya",
    //             "#ranbirkapoor",
    //             "#aliabhatt",
    //             "#kesariyamemes",
    //             "#brahmastra",
    //             "#trending",
    //             "#memes"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 5,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 12:26:45+00:00",
    //         "tweet": "Don't know why people troll this beautiful song. \nSuch a beautiful works by @ipritamofficial da, #AmitabhBhattacharya sir and how beautifully @Atmojoarjalojo da sings this song. ufff mja hi aa gya. \n'Chanda bhi deewana hain Tera'\n#Kesariya #KesariyaSong #ArijitSingh #Brahmastra https://t.co/ZciQYSF90o",
    //         "processed_tweet": " do not know why people troll this beautiful soo ng such a beautiful works by da sir and how beautifully da sings this soo ng uf mja hi aa gya chanda bhi deewana hain tera soo ng ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#AmitabhBhattacharya",
    //             "#Kesariya",
    //             "#KesariyaSong",
    //             "#ArijitSingh",
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 12:13:03+00:00",
    //         "tweet": "Indestructible blade that even the Rakshasa King succumbs over, take form! Take this! Brahmastra!",
    //         "processed_tweet": "indestructible blade that even the rakshasa king succum bullshit over take form take this brahmastra ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 4,
    //             "reply_count": 4,
    //             "like_count": 49,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 12:10:22+00:00",
    //         "tweet": "The first problem with Shamshera was the casting. Ranbir Kapoor as an action hero is a joke, really. If Brahmastra also flops, it would be more or less the same reason. \n\n#ShamsheraIsOurs",
    //         "processed_tweet": "the first problem with shamshera was the casting ranbir kapoor as an action hero is a joke really if brahmastra al soo flops it would be more or less the same rea soo n soo urs",
    //         "prediction": "negative",
    //         "hashtags": [
    //             "#ShamsheraIsOurs"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 2,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 12:08:55+00:00",
    //         "tweet": "Ye #ShamsheraIsOurs and audiences blaming ke chakkar me..\n#RanbirKapoor ki  #Brahmastra ke na laga de ye log.. \ud83d\ude02",
    //         "processed_tweet": "ye soo urs and audiences blaming ke chakkar me ki ke na laga de ye log ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#ShamsheraIsOurs",
    //             "#RanbirKapoor",
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 12:08:53+00:00",
    //         "tweet": "#Brahmastra \nWalt Disney release schedule.\nBrahmastra included \ud83d\ude2f\ud83d\udd25 https://t.co/6xzt5DODio",
    //         "processed_tweet": " walt disney release schedule brahmastra included ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 2,
    //             "reply_count": 3,
    //             "like_count": 7,
    //             "quote_count": 1
    //         },
    //         "created_at": "2022-07-28 11:55:51+00:00",
    //         "tweet": "Want Hrithik in #Brahmastra Part 2 @BrahmastraFilm @karanjohar",
    //         "processed_tweet": "want hrithik in part ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 2,
    //             "reply_count": 1,
    //             "like_count": 21,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 11:47:06+00:00",
    //         "tweet": "I loved the brahmastra concept.Only #HrithikRoshan could do justice to the characters of Shiva/Brahmastra.But thought this is impossible.but hearing the rumour i am the happiest man on earth right now.please make it happen @iHrithik \n#Brahmastra #VikramVedha https://t.co/UUZNMeKOMP",
    //         "processed_tweet": "i loved the brahmastra concept only could do justice to the characters of shiva brahmastra but though ught this is impossible but hearing the rumour i am the happiest man on earth right now please make it happen ",
    //         "prediction": "negative",
    //         "hashtags": [
    //             "#HrithikRoshan",
    //             "#Brahmastra",
    //             "#VikramVedha"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 11:37:35+00:00",
    //         "tweet": "Watch ShamShera (2022) Online \ud83c\udf7f\ud83c\udf7f\ud83c\udf7f\n.\n#shamshera #ranbirkapoor #bollywood #brahmastra #vaanikapoor #ranbir #aliabhatt #ranbiralia #ranbirkapoorlove #sanju #vaanikapoorfc #vaanikapoorfans #bollywoodstar #befikre #vanikapoor #actress #bollywoodactresses https://t.co/cLs1a2DtBp",
    //         "processed_tweet": "watch shamshera online ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#shamshera",
    //             "#ranbirkapoor",
    //             "#bollywood",
    //             "#brahmastra",
    //             "#vaanikapoor",
    //             "#ranbir",
    //             "#aliabhatt",
    //             "#ranbiralia",
    //             "#ranbirkapoorlove",
    //             "#sanju",
    //             "#vaanikapoorfc",
    //             "#vaanikapoorfans",
    //             "#bollywoodstar",
    //             "#befikre",
    //             "#vanikapoor",
    //             "#actress",
    //             "#bollywoodactresses"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 65,
    //             "reply_count": 3,
    //             "like_count": 185,
    //             "quote_count": 2
    //         },
    //         "created_at": "2022-07-28 11:19:16+00:00",
    //         "tweet": "Open this if you love \"Shiva\"\n#Brahmastra https://t.co/dYRmIbVmiv",
    //         "processed_tweet": "open this if you love shiva ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 11:09:34+00:00",
    //         "tweet": "#RanbirKapoor &amp; #AliaBhatt's #Brahmastra is finally gearing up for a release on September 9, 2022. The movie is the journey of Shiva and Isha, and hence part 1 is titled the Shiva Story. https://t.co/33k1nN7RcS",
    //         "processed_tweet": " amp s is finally gearing up for a release on september the movie is the journey of shiva and isha and hence part is titled the shiva story ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#RanbirKapoor",
    //             "#AliaBhatt",
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 1,
    //             "like_count": 4,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 11:06:35+00:00",
    //         "tweet": "Let Brahmastra one work at BO... Then he can think of part two https://t.co/oit0qARwFM",
    //         "processed_tweet": "let brahmastra one work at bo then he can think of part two ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 4,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 11:03:22+00:00",
    //         "tweet": "I\u2019m brahmastra weapon in this film then I turn into jal devi quickly :) I\u2019m main lead in part 2 and 3 Ayan is my best friend so he offered me that he was nice enough to only keep me in part 2 and 3 no one else is there ;)\n\nhttps://t.co/zxR9ud3sKd https://t.co/XZpkh5ZE40",
    //         "processed_tweet": "i m brahmastra weapon in this film then i turn into jal devi quickly i m main lead in part and ayan is my best friend soo he offered me that he was nice enough to only keep me in part and no one else is there ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 3,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 11:02:54+00:00",
    //         "tweet": "Eagerly waiting for the cast of #Brahmastra to draft something similar to this. Funny how these guys refuse to accept criticism thrown their way by the very people they claim to make their movies for.\n#Shamshera who? https://t.co/Da8Ofs7z7R",
    //         "processed_tweet": "eagerly waiting for the cast of to draft soo mething similar to this funny how these guys refuse to accept criticism thrown their way by the very people they claim to make their movies for who ",
    //         "prediction": "negative",
    //         "hashtags": [
    //             "#Brahmastra",
    //             "#Shamshera"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 11:01:55+00:00",
    //         "tweet": ".@aliaa08 \ud83e\udd0d\ud83d\udc99 stealing our hearts in these latest stylish pics\ud83d\ude0d\ud83d\ude0d\n\n#AliaBhatt #Brahmastra #Tollywood #MangoTeluguCinema https://t.co/GcREDmpow5",
    //         "processed_tweet": " stealing our hearts in these latest stylish pics ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#AliaBhatt",
    //             "#Brahmastra",
    //             "#Tollywood",
    //             "#MangoTeluguCinema"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 10:57:10+00:00",
    //         "tweet": "Most successful Films of 2022 Till now Top 5 \n1. #KGFChapter2 \n2. #Vikram\n3. #RRR\n4. #TheKashmirFiles \n5. #BhoolBhulaiyaa2 \n\nWhere  will #LaalSinghChaddha , #KabhiEidKabhiDiwali and #Brahmastra land ?",
    //         "processed_tweet": "most successful films of till now top where will and land ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#KGFChapter2",
    //             "#Vikram",
    //             "#RRR",
    //             "#TheKashmirFiles",
    //             "#BhoolBhulaiyaa2",
    //             "#LaalSinghChaddha",
    //             "#KabhiEidKabhiDiwali",
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 3,
    //             "reply_count": 0,
    //             "like_count": 11,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 10:52:50+00:00",
    //         "tweet": "#Kesariya is blockbuster on Instagram. There is more than 600k+ reeels already\nIf WOM of #Brahmastra is good the movie will be ATTB. Gonna watch the movie 2 times on 1st day itself. Can't wait\n#Aliabhatt #Ranbirkapoor",
    //         "processed_tweet": " is blockbuster on instagram there is more than k rels already if wom of is good the movie will be attb gonna watch the movie times on st day itself cannot wait ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Kesariya",
    //             "#Brahmastra",
    //             "#Aliabhatt",
    //             "#Ranbirkapoor"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 10:51:48+00:00",
    //         "tweet": "The ever radiant #AliaBhatt serving up some glam this fine day! \ud83e\udd0d\n\n@aliaa08 #Brahmastra https://t.co/4stJ9eXj5F",
    //         "processed_tweet": "the ever radiant serving up soo me glam this fine day ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#AliaBhatt",
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 10:50:10+00:00",
    //         "tweet": "#AliaBhatt Makes us Awe Stuck with her Beauty!\ud83e\udd0d\n\n@aliaabhatt #AliaBhatt #Alia #RRR #RRRMovie #ActressAliaBhatt #GangubaiKathiawadi #Brahmastra #Klapboard https://t.co/VRLyWjuYfc",
    //         "processed_tweet": " makes us awe stuck with her beauty ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#AliaBhatt",
    //             "#AliaBhatt",
    //             "#Alia",
    //             "#RRR",
    //             "#RRRMovie",
    //             "#ActressAliaBhatt",
    //             "#GangubaiKathiawadi",
    //             "#Brahmastra",
    //             "#Klapboard"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 5,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 10:45:09+00:00",
    //         "tweet": "First we must wait to see how Brahmastra Part 1 performs at BO https://t.co/p2tvuwu94N",
    //         "processed_tweet": "first we must wait to see how brahmastra part performs at bo ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 10:43:25+00:00",
    //         "tweet": "For a couple that is actually together, #RanbirKapoor and #AliaBhatt, have absolutely no chemistry, despite every attempt to force themselves down everyone's throats. Its sad that a song like #Kesariya was wasted on these dry, chemistry-less leads. Yes I said it \ud83d\ude08..#Brahmastra https://t.co/HV8DrMs4Wf",
    //         "processed_tweet": "for a couple that is actually together and have a bullshit olutely no chemistry despite every attempt to force themselves down everyone s throats its sad that a soo ng like was wasted on these dry chemistry less leads yes i said it ",
    //         "prediction": "negative",
    //         "hashtags": [
    //             "#RanbirKapoor",
    //             "#AliaBhatt",
    //             "#Kesariya",
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 32,
    //             "reply_count": 9,
    //             "like_count": 252,
    //             "quote_count": 33
    //         },
    //         "created_at": "2022-07-28 10:38:39+00:00",
    //         "tweet": "SCOOP: @iHrithik and @deepikapadukone offered a key role by #AyanMukerji in #Brahmastra2 - Will they accept?\nhttps://t.co/Jntn0CqeS2",
    //         "processed_tweet": "scoop and offered a key role by in will they accept ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#AyanMukerji",
    //             "#Brahmastra2"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 10:36:00+00:00",
    //         "tweet": "Listen to the playlist on JioSaavn https://t.co/VODwnsJYpw",
    //         "processed_tweet": "listen to the playlist on jiosaavn ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 2,
    //             "reply_count": 0,
    //             "like_count": 5,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 10:34:57+00:00",
    //         "tweet": "The actor said she's glad 'Kesariya' has received attention, even if it's for the words \"love storiyan\".\n\nMore on Images - https://t.co/xeELLtu6l5\n\n#AliaBhatt #Kesariya #Brahmastra #lovestoriyan #Darlings #Pasoori #CokeStudio https://t.co/gGODdJitwu",
    //         "processed_tweet": "the actor said s he is glad kesariya has received attention even if it is for the words love storiyan more on images soo ori ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#AliaBhatt",
    //             "#Kesariya",
    //             "#Brahmastra",
    //             "#lovestoriyan",
    //             "#Darlings",
    //             "#Pasoori",
    //             "#CokeStudio"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 4,
    //             "reply_count": 4,
    //             "like_count": 5,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 10:32:55+00:00",
    //         "tweet": "#Brahmastra in cinemas on 9th September 2022\n@SrBachchan Boss \ud83d\ude4f\ud83d\ude4f as the guiding Guru\ud83d\udc95\u2764\ufe0f\n@BrahmastraFilm @karanjohar #Chiranjeevi @aliaa08 #RanbirKapoor https://t.co/krxcNeS5GN",
    //         "processed_tweet": " in cinemas on th september boss as the guiding guru ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra",
    //             "#Chiranjeevi",
    //             "#RanbirKapoor"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 48,
    //             "reply_count": 1,
    //             "like_count": 152,
    //             "quote_count": 3
    //         },
    //         "created_at": "2022-07-28 09:45:43+00:00",
    //         "tweet": "This #Kesariya love story is just meant to be! \ud83e\udde1\ud83d\ude0d\n\nhttps://t.co/nSo3TtHYFq\n\n#Brahmastra https://t.co/HJJ9w5kO8C",
    //         "processed_tweet": "this love story is just meant to be soo tthyfq ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Kesariya",
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 6,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 09:37:38+00:00",
    //         "tweet": "#Brahmastra and #Shamshera batch....try as much as u want to spread negative reviews...(especially in youtube comment sections)... But it can never win over a good movie \n#VikrantRona #VikrantRonaReview #VikrantRonaFDFS",
    //         "processed_tweet": " and batch try as much as u want to spread negative reviews especially in youtube comment sections but it can never win over a good movie ",
    //         "prediction": "negative",
    //         "hashtags": [
    //             "#Brahmastra",
    //             "#Shamshera",
    //             "#VikrantRona",
    //             "#VikrantRonaReview",
    //             "#VikrantRonaFDFS"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 09:32:48+00:00",
    //         "tweet": "AK police.....\ud83d\udea8 \n\nKesariya-Brahmastra | Singer arijit singh | pritam | Marathi version | Akpolice #KESARIYA\n\nhttps://t.co/rFnuu0eQvS\n\nI hope you would like it and don't forget to like and comment share subscribe \n\nhttps://t.co/rFnuu0eQvS\n\n\ud83d\udea8\ud83d\udea8\ud83d\udea8\ud83d\udea8 \ud83c\udfa4\ud83c\udfa7\ud83c\udfbc\u0905\u092a\u0932\u093e\u0932\u093e \u0928\u093e\u0915\u0940\u091a \u0906\u0935\u0921\u0947\u0932. \ud83d\ude07",
    //         "processed_tweet": "ak police kesariya brahmastra singer arijit singh pritam marathi version akpolice i hope you would like it and do not forget to like and comment share su bullshit cribe               ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#KESARIYA"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 09:11:56+00:00",
    //         "tweet": "Is Alia Bhatt\u2019s Brahmastra co-star Mouni Roy expecting her first child? SEE\u00a0PICS https://t.co/zGzWBPQjMw",
    //         "processed_tweet": "is alia bhatt s brahmastra co star mouni roy expecting her first child see pics ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 1,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 09:10:33+00:00",
    //         "tweet": "What's your #Brahmastra to fix your palate after biting on pesky elaichis? Tell us in the comments below!\nCall to order on 02192686868 or Shop online now at https://t.co/iZ5xHXutW2 or visit your nearest Spencer's store.\n#kesariya #lovestoriyan #spencersonline  #elaichiinbiryani https://t.co/m8t5UpEDFA",
    //         "processed_tweet": " what is your to fix your palate after biting on pesky elaichis tell us in the comments below call to order on or shop online now at or visit your nearest spencer s store soo nline ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra",
    //             "#kesariya",
    //             "#lovestoriyan",
    //             "#spencersonline",
    //             "#elaichiinbiryani"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 10:50:10+00:00",
    //         "tweet": "#AliaBhatt Makes us Awe Stuck with her Beauty!\ud83e\udd0d\n\n@aliaabhatt #AliaBhatt #Alia #RRR #RRRMovie #ActressAliaBhatt #GangubaiKathiawadi #Brahmastra #Klapboard https://t.co/VRLyWjuYfc",
    //         "processed_tweet": " makes us awe stuck with her beauty ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#AliaBhatt",
    //             "#AliaBhatt",
    //             "#Alia",
    //             "#RRR",
    //             "#RRRMovie",
    //             "#ActressAliaBhatt",
    //             "#GangubaiKathiawadi",
    //             "#Brahmastra",
    //             "#Klapboard"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 1,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 09:03:08+00:00",
    //         "tweet": "Mouni Roy takes over internet by her latest photos.. | @IndiaNewsEnter1 \n.\n.\n#mouniroy #mounir #mouniroyfans #mouniroyfc #photography #photooftheday #photo #photoshoot #aesthetics #aesthetician #actresses #Brahmastra #Naagin6 #married #couplegoals #marriedlife #bollywoodfashion https://t.co/YY9abPXduX",
    //         "processed_tweet": "mouni roy takes over internet by her latest photos ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#mouniroy",
    //             "#mounir",
    //             "#mouniroyfans",
    //             "#mouniroyfc",
    //             "#photography",
    //             "#photooftheday",
    //             "#photo",
    //             "#photoshoot",
    //             "#aesthetics",
    //             "#aesthetician",
    //             "#actresses",
    //             "#Brahmastra",
    //             "#Naagin6",
    //             "#married",
    //             "#couplegoals",
    //             "#marriedlife",
    //             "#bollywoodfashion"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 5,
    //             "reply_count": 0,
    //             "like_count": 27,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 09:02:09+00:00",
    //         "tweet": "\ud83d\udd25 guys show to the french \ud83c\udde8\ud83c\uddf5 the power of brahmastra go comments massively \u2b07\ufe0f #brahmastra #ranbirkapoor #aliabhatt https://t.co/mql3XFTUiE",
    //         "processed_tweet": " guys show to the french the power of brahmastra go comments massively ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#brahmastra",
    //             "#ranbirkapoor",
    //             "#aliabhatt"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 1,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 08:42:21+00:00",
    //         "tweet": "#Brahmastra #brahmastrarealizdate\n#twitterhthttps://youtu.be/F7kjHQ5z93Y\n#imstragam #Facebook #YouTuber @YouTube @YouTubeCreators \n\nFor more information what's this video completely https://t.co/cT5RBetNHe\n\nhttps://t.co/XnZBXp18s6 https://t.co/X4MkdCUZsR",
    //         "processed_tweet": " youtu be fkjhqzy for more information what is this video completely ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra",
    //             "#brahmastrarealizdate",
    //             "#twitterhthttps",
    //             "#imstragam",
    //             "#Facebook",
    //             "#YouTuber"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 08:42:19+00:00",
    //         "tweet": "These characters literally said, \u2018hey\u2019(with all the right intentions!).\u2600\ufe0f\ud83e\udd70\n\n_____\n\n#Brahmastra #Shershaah #BadrinathKiDulhania #WakeUpSid #KalHoNaaHo #Dhadak  https://t.co/O5OtyOSmAi",
    //         "processed_tweet": "these characters literally said hey with all the right intentions _ ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra",
    //             "#Shershaah",
    //             "#BadrinathKiDulhania",
    //             "#WakeUpSid",
    //             "#KalHoNaaHo",
    //             "#Dhadak"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 3,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 08:38:51+00:00",
    //         "tweet": "Towards positive review,a Hollywood level movie \ud83d\udd25\ud83d\udd25\ud83d\udd25 #VikranthRona #KichchaSudeep #SalmanKhan\ud80c\udcf5 #Bollywood #LaalSinghChaddhaOnAUG11th #RakshaBandhan11August #Brahmastra #Liger https://t.co/ZX0UU6hEnU",
    //         "processed_tweet": "towards positive review a hollywood level movie ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#VikranthRona",
    //             "#KichchaSudeep",
    //             "#SalmanKhan\ud80c\udcf5",
    //             "#Bollywood",
    //             "#LaalSinghChaddhaOnAUG11th",
    //             "#RakshaBandhan11August",
    //             "#Brahmastra",
    //             "#Liger"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 08:42:19+00:00",
    //         "tweet": "These characters literally said, \u2018hey\u2019(with all the right intentions!).\u2600\ufe0f\ud83e\udd70\n\n_____\n\n#Brahmastra #Shershaah #BadrinathKiDulhania #WakeUpSid #KalHoNaaHo #Dhadak  https://t.co/O5OtyOSmAi",
    //         "processed_tweet": "these characters literally said hey with all the right intentions _ ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra",
    //             "#Shershaah",
    //             "#BadrinathKiDulhania",
    //             "#WakeUpSid",
    //             "#KalHoNaaHo",
    //             "#Dhadak"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 1,
    //             "reply_count": 1,
    //             "like_count": 6,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 08:32:19+00:00",
    //         "tweet": "Hindi #BoxOffice collections are expected to decline 15% in Q2 of FY23 to Rs 875 crore from Q2 levels in FY20, despite the release of big-budget films such as #Brahmastra &amp; #LaalSinghChaddha.\n\nHere's what experts said  \ud83d\udc47\nhttps://t.co/Gy2kKUMc3I\n\n@farooqui_maryam  \u270d\ufe0f | #Bollywood",
    //         "processed_tweet": "hindi collections are expected to decline in q of fy to rs crore from q levels in fy despite the release of big budget films such as amp here s what experts said ",
    //         "prediction": "negative",
    //         "hashtags": [
    //             "#BoxOffice",
    //             "#Brahmastra",
    //             "#LaalSinghChaddha",
    //             "#Bollywood"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 28,
    //             "reply_count": 4,
    //             "like_count": 128,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 08:27:20+00:00",
    //         "tweet": "#Kesariya mix of all versions\n\n#Brahmastra\nhttps://t.co/vS8DHCCPVF",
    //         "processed_tweet": " mix of all versions ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Kesariya",
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 5,
    //             "reply_count": 0,
    //             "like_count": 30,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 08:26:50+00:00",
    //         "tweet": "43 DAYS BEFORE BRAHMASTRA \u270a\ud83d\udd25\n\n#brahmastra #ranbirkapoor #aliabhatt https://t.co/cM8ktIwYO2",
    //         "processed_tweet": " days before brahmastra ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#brahmastra",
    //             "#ranbirkapoor",
    //             "#aliabhatt"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 08:26:03+00:00",
    //         "tweet": "Fahmaan Khan\u2019s seductive voice in romantic scene with Sumbul Touqeer on Brahmastra\u2019s Kesariya leaves fans blushing [View\u00a0Tweets] https://t.co/FeXjTtF7lc",
    //         "processed_tweet": "fahmaan khan s seductive voice in romantic scene with sumbul touqeer on brahmastra s kesariya leaves fans blushing view tweets ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 2,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 08:24:55+00:00",
    //         "tweet": "Alia Bhatt Movies List: Hits and Flops Box Office Collection Analysis List\n#AliaBhatt #Bollywood #RRRMovie #Brahmastra #Celebs #boxofficereport #news\nhttps://t.co/ic2IXLb62M",
    //         "processed_tweet": "alia bhatt movies list hits and flops box office collection analysis list bullshit ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#AliaBhatt",
    //             "#Bollywood",
    //             "#RRRMovie",
    //             "#Brahmastra",
    //             "#Celebs",
    //             "#boxofficereport",
    //             "#news"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 08:26:03+00:00",
    //         "tweet": "Fahmaan Khan\u2019s seductive voice in romantic scene with Sumbul Touqeer on Brahmastra\u2019s Kesariya leaves fans blushing [View\u00a0Tweets] https://t.co/FeXjTtF7lc",
    //         "processed_tweet": "fahmaan khan s seductive voice in romantic scene with sumbul touqeer on brahmastra s kesariya leaves fans blushing view tweets ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 40,
    //             "reply_count": 6,
    //             "like_count": 131,
    //             "quote_count": 9
    //         },
    //         "created_at": "2022-07-28 08:06:02+00:00",
    //         "tweet": "Imlie: Fahmaan Khan's seductive voice in romantic scene with Sumbul Touqeer on Brahmastra's Kesariya leaves fans blushing [View Tweets] \n #AmaalMallik #ArjunBijlani #EntertainmentNews #FahmaanKhan #Imlie \n https://t.co/kT4O761r53",
    //         "processed_tweet": "imlie fahmaan khan s seductive voice in romantic scene with sumbul touqeer on brahmastra s kesariya leaves fans blushing view tweets ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#AmaalMallik",
    //             "#ArjunBijlani",
    //             "#EntertainmentNews",
    //             "#FahmaanKhan",
    //             "#Imlie"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 2,
    //             "reply_count": 2,
    //             "like_count": 33,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 08:03:47+00:00",
    //         "tweet": "I just realised one thing that we think acting in brahmastra ,luv ranjan is very normal for rk becaus he has already proved in those kind of roles but we are hyped for animal performance of his because it will be first time for him in that kind of role",
    //         "processed_tweet": "i just realised one thing that we think acting in brahmastra luv ranjan is very normal for rk becaus he has already proved in though se kind of roles but we are hyped for animal performance of his be because it will be first time for him in that kind of role",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 1,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 07:53:32+00:00",
    //         "tweet": "Best song of the year so far\n#EkVillainReturns #JohnAbraham\n#Brahmastra #RanbirKapoor\n#BhoolBhulaiyaa2 #KarthikAryan",
    //         "processed_tweet": "best soo ng of the year soo far ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#EkVillainReturns",
    //             "#JohnAbraham",
    //             "#Brahmastra",
    //             "#RanbirKapoor",
    //             "#BhoolBhulaiyaa2",
    //             "#KarthikAryan"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 1,
    //             "reply_count": 0,
    //             "like_count": 8,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 07:44:54+00:00",
    //         "tweet": "Hand drawn colour pencil drawing of @aliaa08 &amp; @Ranbir_Kapoor from @BrahmastraFilm \n\ud83e\udde1\ud83e\udde1\ud83e\udde1\n#Kesariya #brahm\u0101stra #Brahmastra #RanbirKapoor #AliaBhatt #ranbiralia #FanFocusedFriday \nHope you like it! \ud83e\udd17 https://t.co/HjQLgjRDLM",
    //         "processed_tweet": "hand drawn colour pencil drawing of amp from hope you like it ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Kesariya",
    //             "#brahm\u0101stra",
    //             "#Brahmastra",
    //             "#RanbirKapoor",
    //             "#AliaBhatt",
    //             "#ranbiralia",
    //             "#FanFocusedFriday"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 4,
    //             "reply_count": 0,
    //             "like_count": 7,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 07:39:42+00:00",
    //         "tweet": "One look at you and I know that I\u2019m home.\n\n#Brahmastra #BrahmastraTrailer #AliaBhatt #RanbirKapoor #RanbirAlia @aliaa08 @BrahmastraFilm @DharmaMovies https://t.co/tJnql43rUt",
    //         "processed_tweet": "one look at you and i know that i m home ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra",
    //             "#BrahmastraTrailer",
    //             "#AliaBhatt",
    //             "#RanbirKapoor",
    //             "#RanbirAlia"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 4,
    //             "reply_count": 3,
    //             "like_count": 14,
    //             "quote_count": 1
    //         },
    //         "created_at": "2022-07-28 07:38:58+00:00",
    //         "tweet": "just the way they look at eachother \ud83d\ude2e\u200d\ud83d\udca8\ud83e\udd0c\ud83c\udffb\ud83e\udd0d\n\n{#RanbirKapoor. #AliaBhatt. #Brahmastra}\nhttps://t.co/G688QKg93U",
    //         "processed_tweet": "just the way they look at eachother ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#RanbirKapoor",
    //             "#AliaBhatt",
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 2,
    //             "reply_count": 0,
    //             "like_count": 12,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 07:37:20+00:00",
    //         "tweet": "Me + You = Perfection.\n\n#Brahmastra #BrahmastraTrailer #AliaBhatt #RanbirKapoor #RanbirAlia @aliaa08 https://t.co/69TzJmMvWI",
    //         "processed_tweet": "me you perfection ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra",
    //             "#BrahmastraTrailer",
    //             "#AliaBhatt",
    //             "#RanbirKapoor",
    //             "#RanbirAlia"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 3,
    //             "reply_count": 0,
    //             "like_count": 3,
    //             "quote_count": 1
    //         },
    //         "created_at": "2022-07-28 06:53:57+00:00",
    //         "tweet": "Boycott Bollywood: Boycott 'LAAL SINGH CHADDA','RASHTRA KAVACH OM','RAKSHA BANDHAN', 'SHAMSHERA','BRAHMASTRA', 'GOOD LUCK JERRY','JAWAN','PATHAN','ADIPURUSH',all SOUTH MOVIES which give CAMEO ROLES to BULLYWOODY,no shake with BWOOD,NEPOKIDS,KARAN JAHAR;@PMOIndia,@withoutthemind https://t.co/CoedR8WPBk",
    //         "processed_tweet": "boycott bollywood boycott laal singh chadda rashtra kavach om raksha bandhan shamshera brahmastra good luck jerry jawan pathan adipurush all soo uth movies which give cameo roles to bullywoody no shake with bwood nepokids karan jahar though utthemind ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 1,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 06:53:38+00:00",
    //         "tweet": "Is Ranbir Kapoor's \"Brahmastra\" a flop movie?\ud83d\udc4e\ud83c\udffb\ud83e\udd14\ud83e\udd14 https://t.co/jTkL7ARAz4",
    //         "processed_tweet": "is ranbir kapoor s brahmastra a flop movie ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 2,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 06:37:09+00:00",
    //         "tweet": "Okay kesariya is definitely my fav song of the year.. and yes love storiyan seems so cute nowwww.. listening to it 15 times a day noww.. and I dont listen to songs too frequently #Kesariya #Brahmastra #Ranbir",
    //         "processed_tweet": "okay kesariya is definitely my fav soo ng of the year and yes love storiyan seems soo cute now listening to it times a day noww and i dont listen to soo ngs too frequently ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Kesariya",
    //             "#Brahmastra",
    //             "#Ranbir"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 06:28:33+00:00",
    //         "tweet": "I thought it's #Brahmastra poster. https://t.co/N3ZChAuuVr",
    //         "processed_tweet": "i though ught it is poster ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 06:14:17+00:00",
    //         "tweet": "#supportbrahmastra\nGuys Support brahmastra movie...Ayan Mukherjee the director of the movie has already clarified on the temple shoe scene issue...and this movie is abt our hindu ancient past...also thrs reference to our beloved god shiva in the movie.....let's support this movie",
    //         "processed_tweet": " guys support brahmastra movie ayan mukherjee the director of the movie has already clarified on the temple shoe scene issue and this movie is abt our hindu ancient past al soo thrs reference to our beloved god shiva in the movie let us support this movie",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#supportbrahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 06:11:57+00:00",
    //         "tweet": "#BoycottShamshera\n\nSupport brahmastra movie...Ayan Mukherjee the director of the movie has already clarified on the temple shoe scene issue...and this movie is abt our hindu ancient past...also thrs reference to our beloved god shiva in the movie.....let's support this movie",
    //         "processed_tweet": " support brahmastra movie ayan mukherjee the director of the movie has already clarified on the temple shoe scene issue and this movie is abt our hindu ancient past al soo thrs reference to our beloved god shiva in the movie let us support this movie",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#BoycottShamshera"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 10:51:48+00:00",
    //         "tweet": "The ever radiant #AliaBhatt serving up some glam this fine day! \ud83e\udd0d\n\n@aliaa08 #Brahmastra https://t.co/4stJ9eXj5F",
    //         "processed_tweet": "the ever radiant serving up soo me glam this fine day ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#AliaBhatt",
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 05:44:32+00:00",
    //         "tweet": "Song : Kesariya\nSinger : Arijit Singh\nLyricist : Amitabh Bhattacharya\nMusic : Pritam\nFilm : Brahmastra\nActor : Ranbir Kapoor &amp; Alia Bhatt\n\nYouTube \u2935\ufe0f Watch Now\nLink https://t.co/g2Ms8egZki\n\nYouTube \u2935\ufe0f\nLink https://t.co/qhDevrRlfk\n\n#Kesariya #SohodevOfficial \n#IndiaMusicStudio https://t.co/aJqGrbbEGo",
    //         "processed_tweet": " soo ng kesariya singer arijit singh lyricist amitabh bhattacharya music pritam film brahmastra actor ranbir kapoor amp alia bhatt youtube watch now link youtube link soo hodevofficial ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Kesariya",
    //             "#SohodevOfficial",
    //             "#IndiaMusicStudio"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 05:44:32+00:00",
    //         "tweet": "Song : Kesariya\nSinger : Arijit Singh\nLyricist : Amitabh Bhattacharya\nMusic : Pritam\nFilm : Brahmastra\nActor : Ranbir Kapoor &amp; Alia Bhatt\n\nYouTube \u2935\ufe0f Watch Now\nLink https://t.co/g2Ms8egZki\n\nYouTube \u2935\ufe0f\nLink https://t.co/qhDevrRlfk\n\n#Kesariya #SohodevOfficial \n#IndiaMusicStudio https://t.co/aJqGrbbEGo",
    //         "processed_tweet": " soo ng kesariya singer arijit singh lyricist amitabh bhattacharya music pritam film brahmastra actor ranbir kapoor amp alia bhatt youtube watch now link youtube link soo hodevofficial ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Kesariya",
    //             "#SohodevOfficial",
    //             "#IndiaMusicStudio"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 05:38:27+00:00",
    //         "tweet": "Shamshera's result affects Brahmastra #HindiFilmIndustry #BollywoodFilm #RanbirKapoor #Shamshera #YashRajFilms https://t.co/yFdtAfpvf1",
    //         "processed_tweet": "shamshera s result affects brahmastra ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#HindiFilmIndustry",
    //             "#BollywoodFilm",
    //             "#RanbirKapoor",
    //             "#Shamshera",
    //             "#YashRajFilms"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 1,
    //             "like_count": 8,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 05:36:09+00:00",
    //         "tweet": "Brahmastra team should have started a challenge after Kesariya release \"Who thinks of a better rhyme than love storiyan.\" Would have been blockbuster tbh.",
    //         "processed_tweet": "brahmastra team should have started a challenge after kesariya release who thinks of a better rhyme than love storiyan would have been blockbuster tbh ",
    //         "prediction": "postive",
    //         "hashtags": []
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 15,
    //             "reply_count": 2,
    //             "like_count": 62,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 05:09:47+00:00",
    //         "tweet": "43 Days to Go \u26a1\ud83d\udd31\n#Brahmastra https://t.co/SvwujCFDwi",
    //         "processed_tweet": " days to go ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 1,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 04:59:12+00:00",
    //         "tweet": "Listen to \"Lovestoriya\" in Kesariya is a Cringe\ud83d\ude02\ud83d\udd25 #kesariya #lovestoriya #LoveStoriyan #arijit #pritam #tseries #brahmastra #RanbirKapoor #AliaBhatt #nevermindofficial320 #ViralVideo #Viral #MEMES https://t.co/OkZMen7G9w",
    //         "processed_tweet": "listen to lovestoriya in kesariya is a cringe ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#kesariya",
    //             "#lovestoriya",
    //             "#LoveStoriyan",
    //             "#arijit",
    //             "#pritam",
    //             "#tseries",
    //             "#brahmastra",
    //             "#RanbirKapoor",
    //             "#AliaBhatt",
    //             "#nevermindofficial320",
    //             "#ViralVideo",
    //             "#Viral",
    //             "#MEMES"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 8,
    //             "quote_count": 1
    //         },
    //         "created_at": "2022-07-28 04:45:59+00:00",
    //         "tweet": "Buzz of upcoming Bollywood movies\n1. #Brahmastra\n2. #LaalSinghChaddha \n3. #VikramVedha \n4. #RamSetu\n5. #RakshaBandhan \n6. #ThankGod",
    //         "processed_tweet": "buzz of upcoming bollywood movies ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra",
    //             "#LaalSinghChaddha",
    //             "#VikramVedha",
    //             "#RamSetu",
    //             "#RakshaBandhan",
    //             "#ThankGod"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 1,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 04:40:54+00:00",
    //         "tweet": "Which next movie from this year has the capability to save Bollywood??\n#EkVillainReturns\n#Brahmastra\n#JohnAbraham #RanbirKapoor\n#AliaBhatt #DishaPatani",
    //         "processed_tweet": "which next movie from this year has the capability to save bollywood ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#EkVillainReturns",
    //             "#Brahmastra",
    //             "#JohnAbraham",
    //             "#RanbirKapoor",
    //             "#AliaBhatt",
    //             "#DishaPatani"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 2,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 04:30:00+00:00",
    //         "tweet": "Papa se bachne ka Jugaad? Drama naam ka Brahmastra hai humare pass.\n\nWatch Shuddh Drama, 'Loafer', tonight @ 9 PM, only on Zee Bollywood.\n\n101% Shuddh Bollywood\n\nEndless Entertainment only on Zee5. Download now\nhttps://t.co/9Ws0z6jc2c\n\n#BollywoodMemes #anilkapoorfans #AnilKapoor https://t.co/nNPtAvuJ69",
    //         "processed_tweet": "papa se bachne ka jugaad drama naam ka brahmastra hai humare pass watch shuddh drama loafer tonight pm only on zee bollywood shuddh bollywood endless entertainment only on zee download now ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#BollywoodMemes",
    //             "#anilkapoorfans",
    //             "#AnilKapoor"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 04:09:19+00:00",
    //         "tweet": "Common Purslane grows heavily and blooms heavenly.. DM for price\n#urrbanbagiya #urrbanbagiyaseasonals #urrbanbagiyaoutdoorplants #reelsinstagram #Brahmastra #ranbiralia #trendingreels #trendings #Flowers\nhttps://t.co/LOHhkac8PM\n@upvansangh @VanVibhag @dgpup @BJP4UP",
    //         "processed_tweet": "common purslane grows heavily and blooms heavenly dm for price soo nals ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#urrbanbagiya",
    //             "#urrbanbagiyaseasonals",
    //             "#urrbanbagiyaoutdoorplants",
    //             "#reelsinstagram",
    //             "#Brahmastra",
    //             "#ranbiralia",
    //             "#trendingreels",
    //             "#trendings",
    //             "#Flowers"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 50,
    //             "reply_count": 0,
    //             "like_count": 189,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 04:07:30+00:00",
    //         "tweet": "\ud83d\udd25\ud83d\udd25\ud83d\udd25 open this if you cannot wait for Brahmastra \ud83d\udd25\ud83d\udd25\ud83d\udd25 #RanbirKapoor #AliaBhatt #MouniRoy #Nagarjuna #AmitabhBachchan https://t.co/ZAO1EIIPuk",
    //         "processed_tweet": " open this if you cannot wait for brahmastra ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#RanbirKapoor",
    //             "#AliaBhatt",
    //             "#MouniRoy",
    //             "#Nagarjuna",
    //             "#AmitabhBachchan"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 0,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 03:59:20+00:00",
    //         "tweet": "Why Not ??? \n\nEvery Day , Every Month , Every Year \u2026\u2026 \ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\n\nJALWA\u2764\ufe0f\n\nBACHCHAN BACHCHAN BACHCHAN \nBAADDUUMMBAAA \ud83d\udd7a\n\n#KBC14 7th August\n#Brahmastra 9th Sept\n#GoodBye 7th Oct\n#Uunchai 11th Nov\n\n@SrBachchan Best wishes Sir \ud83c\udf37\ud83d\ude4c\nMore Power to you ..\ud83d\ude18 https://t.co/pvUajVjvtP",
    //         "processed_tweet": "why not every day every month every year jalwa bachchan bachchan bachchan baadduummba th august th sept th oct th nov best wishes sir more power to you ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#KBC14",
    //             "#Brahmastra",
    //             "#GoodBye",
    //             "#Uunchai"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 1,
    //             "reply_count": 0,
    //             "like_count": 6,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 03:45:00+00:00",
    //         "tweet": "Bollywood gearing up for mythological films... \n\nWill it achieve success? \n\n#Brahmastra #Adipurush \n\nhttps://t.co/QD9um5AyjF",
    //         "processed_tweet": "bollywood gearing up for my though logical films will it achieve success ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra",
    //             "#Adipurush"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 2,
    //             "reply_count": 2,
    //             "like_count": 12,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 03:43:35+00:00",
    //         "tweet": "I found a Ranbir Kapoor....\n #Brahmastra #brahm\u0101stra https://t.co/aahHqIsPIM",
    //         "processed_tweet": "i found a ranbir kapoor ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra",
    //             "#brahm\u0101stra"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 0,
    //             "reply_count": 0,
    //             "like_count": 2,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 03:19:29+00:00",
    //         "tweet": "Any update of Brahmastra's 2nd song? #brahmastra #Kesariya #KesariyaDanceVersion",
    //         "processed_tweet": "any update of brahmastra s nd soo ng ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#brahmastra",
    //             "#Kesariya",
    //             "#KesariyaDanceVersion"
    //         ]
    //     },
    //     {
    //         "public_metrics": {
    //             "retweet_count": 3,
    //             "reply_count": 2,
    //             "like_count": 4,
    //             "quote_count": 0
    //         },
    //         "created_at": "2022-07-28 02:52:12+00:00",
    //         "tweet": "Kannada version is so good \u2764\ufe0f\n#Brahmastra https://t.co/duMxHZpC7U",
    //         "processed_tweet": "kannada version is soo good ",
    //         "prediction": "postive",
    //         "hashtags": [
    //             "#Brahmastra"
    //         ]
    //     }
    // ]

    return (<>
        <Navbar />
        <div className='main'>
            {window.location.pathname === `/${encodeURI(query)}` ? <DashboardMain tweetsData={tweetsData} /> : null}
            <Outlet context={tweetsData} />
        </div>
    </>
    )
}