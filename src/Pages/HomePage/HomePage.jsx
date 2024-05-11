
import { Helmet } from 'react-helmet-async';
import Banner from '../../Component/Banner/Banner';
import ContactUs from '../../Component/ContactUs/ContactUs';
import MeetOursTeams from '../../Component/MeetOursTeams/MeetOursTeams';
import Post from '../../Component/Post/Post';
import HeroSection from '../../Component/HeroSection/HeroSection';

const HomePage = () => {
    return (
        <>
        <Helmet>
                <title>
                    Home
                </title>
            </Helmet>
         <div className='relative'>
         <Banner/>   
         <div className='absolute top-8 left-12'>
         <HeroSection/>
         </div>
         </div>
         <Post/>
         <MeetOursTeams/>
         <ContactUs/>
        </>
    );
};

export default HomePage;