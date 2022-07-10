import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import DashboardMain from './DashboardMain';


export default function Dashboard()
{

    const { query } = useParams();
    const tweetsData = [
        {
            "tweet": "most of you are guessing it right yes it is s that is buzzing high going to take earth shattering opening for sure ",
            "prediction": "postive",
            "hashtags": [
                "#RanbirKapoor",
                "#Brahmastra"
            ]
        },
        {
            "tweet": "every friday will be fantastic when your love for brahm stra gets featured on our page use the hashtag to upload your creation and tag to grab our attention keep the love and light coming ",
            "prediction": "postive",
            "hashtags": [
                "#Brahmastra"
            ]
        },
        {
            "tweet": "films that i am excited to watch this year from here on and your list ",
            "prediction": "postive",
            "hashtags": [
                "#Brahmastra",
                "#LaalSinghChaddha",
                "#VikramVedha",
                "#Drishyam2",
                "#KEKD",
                "#RamSetu"
            ]
        },
        {
            "tweet": "indian cinema audiences these days going to rocketry for srk making theories on srk in brahmastra and curious with his character everyone in the indian film fraternity is trying to attach its name with srk now can you imagine the destruction will do in ",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": "best thing that has done for brahmastra marketing roping in ",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": "this is soo funny i love content and this time they made it on my most awaited film ",
            "prediction": "postive",
            "hashtags": [
                "#Brahmastra",
                "#RanbirKapoor"
            ]
        },
        {
            "tweet": "liked on youtube ",
            "prediction": "postive",
            "hashtags": [
                "#RanbirKapoorInVizag",
                "#Brahmastra"
            ]
        },
        {
            "tweet": "liked on youtube team brahm stra in vizag today ",
            "prediction": "postive",
            "hashtags": [
                "#abrKapoor",
                "#Brhmastra"
            ]
        },
        {
            "tweet": "ranbir kapoor and shraddha kapoor jet off to mauritius for luv ranjan s untitled film reports ",
            "prediction": "postive",
            "hashtags": [
                "#AliaBhatt",
                "#Bollywood",
                "#Brahmastra",
                "#LuvRanjan",
                "#RanbirKapoor",
                "#shamshera",
                "#ShraddhaKapoor"
            ]
        },
        {
            "tweet": "blockbuster written all over it ",
            "prediction": "postive",
            "hashtags": [
                "#Brahmastra"
            ]
        },
        {
            "tweet": "ranbir and alia are excited for our hostel life s new epi soo de epi soo de today at pm ",
            "prediction": "postive",
            "hashtags": [
                "#HostelLife",
                "#ranbirkapoor",
                "#aliabhatt",
                "#ranbiralia",
                "#ranbirandalia",
                "#ranbiralia",
                "#ranbirkapoor",
                "#aliabhatt",
                "#ranbir",
                "#deepikapadukone",
                "#bollywood",
                "#ranbirkapoorlove",
                "#ranbirkapoorfan",
                "#brahmastra"
            ]
        },
        {
            "tweet": "in the same pace ranbir should do one magazine photoshoot maybe for brahmastra ",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": "brahmastra actress alia bhatt smartly hides her baby bump in this new picture with karan johar flaunts her no make up look ",
            "prediction": "negative",
            "hashtags": []
        },
        {
            "tweet": "brahmastra actress alia bhatt smartly hides her baby bump in this new picture with karan johar flaunts her no make up look ",
            "prediction": "negative",
            "hashtags": []
        },
        {
            "tweet": "brahmastra actress alia bhatt smartly hides her baby bump in this new picture with karan johar flaunts her no make up look ",
            "prediction": "negative",
            "hashtags": []
        },
        {
            "tweet": "brahmastra actress alia bhatt smartly hides her baby bump in this new picture with karan johar flaunts her no make up look ",
            "prediction": "negative",
            "hashtags": []
        },
        {
            "tweet": "brahmastra actress alia bhatt smartly hides her baby bump in this new picture with karan johar flaunts her no make up look soo oefyslq",
            "prediction": "negative",
            "hashtags": []
        },
        {
            "tweet": "brahmastra actress alia bhatt smartly hides her baby bump in this new picture with karan johar flaunts her no make up look ",
            "prediction": "negative",
            "hashtags": []
        },
        {
            "tweet": "akshay kumar s leaked audition tape for new video out now link in bio ",
            "prediction": "postive",
            "hashtags": [
                "#Brahmastra",
                "#TVF",
                "#TheViralFever"
            ]
        },
        {
            "tweet": "the trailer on the big screen is soo mething else ",
            "prediction": "postive",
            "hashtags": [
                "#Brahmastra"
            ]
        },
        {
            "tweet": "july august september cameos every month sab theatre me dekhenge ",
            "prediction": "postive",
            "hashtags": [
                "#RocketryTheNambiEffect",
                "#LaalSinghChaddha",
                "#Brahmastra",
                "#ShahRukhKhan"
            ]
        },
        {
            "tweet": "the viral fever brahmastra leaked audition tape ft amitabh salman aamir amp sanju baba tvf ",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": "brahmastra actress alia bhatt smartly hides her baby bump in this new picture with karan johar flaunts her no make up look ",
            "prediction": "negative",
            "hashtags": []
        },
        {
            "tweet": "ranbir the actor ranbir the dancer ranbir the orator ",
            "prediction": "postive",
            "hashtags": [
                "#Brahmastra",
                "#ShamsheraTrailer",
                "#RanbirKapoor"
            ]
        },
        {
            "tweet": "first months in bollywood only movies hit crores earned only crores further crores at stake crores of them brahmastra ",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": "brahmastra actress alia bhatt smartly hides her baby bump in this new picture with karan johar flaunts her no make up look ",
            "prediction": "negative",
            "hashtags": []
        },
        {
            "tweet": "brahmastra actress alia bhatt smartly hides her baby bump in this new picture with karan johar flaunts her no make up look ",
            "prediction": "negative",
            "hashtags": []
        },
        {
            "tweet": "al soo cannot believe we are gonna see amitabh bachchan shah rukh khan and ranbir kapoor in a movie together brahm stra for the win bitch es",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": "days of soo ft power are over defence is the new diplomacy tool for india around the world ",
            "prediction": "postive",
            "hashtags": [
                "#Brahmastra"
            ]
        },
        {
            "tweet": " do not worry with online auditions will come to every city ",
            "prediction": "postive",
            "hashtags": [
                "#firstcut",
                "#firstcutworld",
                "#onlineauditions",
                "#acting",
                "#modeling",
                "#casting",
                "#Auditions",
                "#actingaudition",
                "#modelingaudition",
                "#actors",
                "#actresses",
                "#models",
                "#meme",
                "#brahmastra",
                "#aliabhatt",
                "#ranbirkapoor"
            ]
        },
        {
            "tweet": "comparing antim opening with rocketry just salman fan things lagta hai antim opening ka compare brahmastra se bhi karenge chalo sahi hi hai ",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": "days of soo ft power are over defence is the new diplomacy tool for india around the world snehesh alex philip writes ",
            "prediction": "postive",
            "hashtags": [
                "#ThePrintOpinion"
            ]
        },
        {
            "tweet": " reliable institute kota presents the most powerful astra of physics for jee main and jee advanced brahmastra by reliable s physics department visit our youtube channel ",
            "prediction": "postive",
            "hashtags": [
                "#ReliableInstitute",
                "#KotaCoaching",
                "#Brahmastra",
                "#Physics"
            ]
        },
        {
            "tweet": "yeah s he is right most of them are actually mediocre just like brahmastra part female lead ",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": "the who what why amp how of digital marketing contact us on email officialmediafourth mobile number visit w mediafourth com soo lution soo cialmedia ",
            "prediction": "postive",
            "hashtags": [
                "#onestoptoallsolution",
                "#TopicalSpot",
                "#topicalspot",
                "#trendingmeme",
                "#MomentMarketing",
                "#brahmastra",
                "#meme",
                "#socialmedia"
            ]
        },
        {
            "tweet": "brahmastra recognition on the tl let us go ",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": "i have two brahmastra theories i wanna discuss but i am legit gonna hold till july end ",
            "prediction": "negative",
            "hashtags": []
        },
        {
            "tweet": "ok you choose to ignore and we choose to boycott and let us see who wins can we spread the words please ",
            "prediction": "postive",
            "hashtags": [
                "#Bollywood",
                "#Udaipur",
                "#LalSinghChadda",
                "#Brahmastra",
                "#DevendraFadnavis",
                "#BoycottBrahmastra",
                "#BoycottBollywood",
                "#KanhaiyaLal"
            ]
        },
        {
            "tweet": "brahm stra trailer gives me vibes of an anime with bad dub ",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": "brahmastra looks terrible",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": " soo just done from work get together and i decided to proudly talk about brahm stra i sent it to my coworkers lets go",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": "indestructible blade that even the rakshasa king succum bullshit over take form take this brahmastra ",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": " though r brahmastra black adam black panther and shazam are my most anticipated movies for the remainder of the year honorable mention puss in boots ",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": " aww and soo on we will see much more in as well ",
            "prediction": "postive",
            "hashtags": [
                "#Brahmastra"
            ]
        },
        {
            "tweet": " coming soo on title brahmastra part one shiva director none release date september length none genre none metacrictic rating none ",
            "prediction": "negative",
            "hashtags": [
                "#BrahmastraPartOneShiva"
            ]
        },
        {
            "tweet": " most overrated films student of the year etc etc i dnt even remember ny films she did shes that good dnt throw ths over shit in our lives ",
            "prediction": "negative",
            "hashtags": [
                "#Aliabhatt",
                "#GangubaiKathiawadi",
                "#RanbirKapoor",
                "#Brahmastra"
            ]
        },
        {
            "tweet": "time to use our brahmastra evil eyes off tejran ",
            "prediction": "postive",
            "hashtags": [
                "#TejRan"
            ]
        },
        {
            "tweet": " soo ng release when i am eagerly waiting for this soo ng after all it is arij it is soo ng ",
            "prediction": "postive",
            "hashtags": [
                "#Kesariya",
                "#Brahmastra"
            ]
        },
        {
            "tweet": "vaani kapoor says i hope the audience like my chemistry with ranbir kapoor ",
            "prediction": "postive",
            "hashtags": [
                "#vaanikapoor",
                "#RanbirKapoor",
                "#Shamshera",
                "#SanjayDutt",
                "#karanmalhotra",
                "#Brahmastra",
                "#aliabhatt",
                "#Ranalia"
            ]
        },
        {
            "tweet": "alia bhatt s pregnancy a reddit user was banned for posting the news months ago ",
            "prediction": "negative",
            "hashtags": [
                "#aliabhatt",
                "#ranbirkapoor",
                "#reddit",
                "#brahmastra",
                "#darlings",
                "#rockyaurranikipremkahani"
            ]
        },
        {
            "tweet": "brahmastra admin on ig is soo lame there i said it ",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": "ranbir kapoor considers himself lucky to romance aishwarya rai bachchan on screen in ae dil hai mushkil ",
            "prediction": "postive",
            "hashtags": [
                "#RanbirKapoor",
                "#AishwaryaRaiBachchan",
                "#AeDilHaiMushkil",
                "#Shamshera",
                "#vaanikapoor",
                "#Brahmastra"
            ]
        },
        {
            "tweet": "july mein ek cameo august mein ek cameo september mein ek cameo monthly cameo kar rahe ho khan sahab ",
            "prediction": "postive",
            "hashtags": [
                "#Rocketry",
                "#LaalSinghChaddha",
                "#Brahmastra"
            ]
        },
        {
            "tweet": " soo me performances are soo natural amp real in reel life too as amit aced his acting as a head photographer in quite unfortunate that he did not get any other opportunities to showcase his talent ",
            "prediction": "negative",
            "hashtags": [
                "#MunirKabani",
                "#WakeUpSid",
                "#WakeUpSid",
                "#RanbirKapoor",
                "#Shamshera",
                "#Brahmastra"
            ]
        },
        {
            "tweet": "brahmastra s budget makes it the nd most expensive hindi film ever saaho is at the top ",
            "prediction": "negative",
            "hashtags": [
                "#Brahmastra",
                "#RanbirKapoor",
                "#AliaBhatt",
                "#Prabhas",
                "#Chiubaba"
            ]
        },
        {
            "tweet": "likes on recently released bollywood trailers m k k k ",
            "prediction": "postive",
            "hashtags": [
                "#LaalSinghChaddha",
                "#Shamshera",
                "#Brahmastra",
                "#RakshaBandhan"
            ]
        },
        {
            "tweet": "the movie brahmastra part one shiva is the first movie in a new cinematic universe named what ",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": "only amp last rlses are movie lekin iss saal amp rlse ke baad ye bhi change ho jyga ",
            "prediction": "postive",
            "hashtags": [
                "#HR",
                "#RK",
                "#HIT",
                "#VikramVedha",
                "#Shamshera",
                "#Brahmastra"
            ]
        },
        {
            "tweet": " fuck i got a reply ",
            "prediction": "postive",
            "hashtags": [
                "#Brahmastra"
            ]
        },
        {
            "tweet": " meeting brahmastra series starcast ignore tingu they must have called waiter aamir to serve food to megastar srk ",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": "is it going to be a girl or boy ",
            "prediction": "postive",
            "hashtags": [
                "#RanbirAlia",
                "#Bollywood",
                "#ranbir",
                "#Brahmastra",
                "#Shamshera彡"
            ]
        },
        {
            "tweet": " friday july ",
            "prediction": "postive",
            "hashtags": [
                "#TMSRUpdates",
                "#TVScheduleUpdates",
                "#FRIDAY",
                "#MOVIES_SCHEDULE",
                "#HariHaraVeeraMallu",
                "#Salaar",
                "#RRRMovie",
                "#PushpaTheRule",
                "#Brahmastra",
                "#Dhamaka",
                "#Adipurush",
                "#RamaRaoOnDuty",
                "#KGFChapter2",
                "#NTR30",
                "#NTR31",
                "#Vikram",
                "#NBK107",
                "#RC15",
                "#Vaarasudu",
                "#SSMB28",
                "#Mega154",
                "#RC16",
                "#Mega153",
                "#SSMB29"
            ]
        },
        {
            "tweet": " friday july bullshit aombo",
            "prediction": "postive",
            "hashtags": [
                "#TMSRUpdates",
                "#TVScheduleUpdates",
                "#HDTVSchedule",
                "#FRIDAY",
                "#MOVIES_SCHEDULE",
                "#HariHaraVeeraMallu",
                "#Salaar",
                "#RRRMovie",
                "#PushpaTheRule",
                "#Brahmastra",
                "#Dhamaka",
                "#Adipurush",
                "#Dasara",
                "#RamaRaoOnDuty",
                "#KGFChapter2",
                "#NTR30",
                "#NTR31",
                "#NBK107",
                "#Vaarasudu",
                "#SSMB28",
                "#RC15",
                "#Mega154",
                "#RC15"
            ]
        },
        {
            "tweet": "earlier prediction ans are going to be flop all hopes on ",
            "prediction": "postive",
            "hashtags": [
                "#EkVillainReturns",
                "#Shamshera",
                "#Brahmastra"
            ]
        },
        {
            "tweet": "these kinda dialogues scenes will elevate the movie and make it look more massive this is where the mass audience gets attracted for me these two are the best parts of the trailer glad ranbir is doing these two movies ",
            "prediction": "postive",
            "hashtags": [
                "#Shamshera",
                "#Brahmastra"
            ]
        },
        {
            "tweet": " it is a brahmastra by bjp mota bhai the chanakya of indian politics badhai ho new cm of maharashtra amp what a move by a new maharashtra ",
            "prediction": "postive",
            "hashtags": [
                "#AmitShah",
                "#EknathShinde",
                "#DevendraFadnavis"
            ]
        },
        {
            "tweet": "i hope i can like brahmastra as much i watched yjhd with not just immature but biased lenses lol",
            "prediction": "postive",
            "hashtags": []
        },
        {
            "tweet": "caption this we ll go first gt gt pov shiva is calling you to watch the trailer of brahm stra ",
            "prediction": "postive",
            "hashtags": [
                "#Brahmastra",
                "#RanbirKapoor",
                "#AliaBhatt",
                "#AyanMukerji",
                "#CaptionThis"
            ]
        },
        {
            "tweet": "caption this we ll go first gt gt pov shiva is calling you to watch the trailer of brahm stra ",
            "prediction": "postive",
            "hashtags": [
                "#Brahmastra",
                "#RanbirKapoor",
                "#AliaBhatt",
                "#AyanMukerji",
                "#CaptionThis"
            ]
        }
    ]

    return (<>
        <Navbar />
        <div className='main'>
            {window.location.pathname === `/${encodeURI(query)}` ? <DashboardMain tweetsData={tweetsData} /> : null}
            <Outlet context={tweetsData} />
        </div>
    </>
    )
}