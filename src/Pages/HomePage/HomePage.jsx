
import Banner from '../../Component/Banner/Banner';
import ContactUs from '../../Component/ContactUs/ContactUs';
import MeetOursTeams from '../../Component/MeetOursTeams/MeetOursTeams';
import Post from '../../Component/Post/Post';

const HomePage = () => {
    return (
        <>
         <Banner/>   
         <Post/>
         <MeetOursTeams/>
         <ContactUs/>
        </>
    );
};

export default HomePage;