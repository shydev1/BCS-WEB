import Serivces from './Components/Services';
import { Route, Routes } from 'react-router-dom';
import Gallery from "./Components/Gallery"
import STV from "./Components/STV";
import NKT from "./Components/NKT";
import ICT from "./Components/ICT";
import About from './Components/About';
import Blog from "./Components/Blog";
import Home from './Components/Home';
import Events from './Components/Events';
import BookShop from './Components/BookShop';
import Pool from './Components/Pool';
import Redeem from './Components/Redeem';
import Museum from './Components/Museum';
import EGC from './Components/EGC';
import Contact from './Components/Contact';
import Footer2 from './Components/Footer2';
import Apps from './Components/Apps';
import NavBar from './Components/Header/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import ScrollToTop from './Components/Scroll/ScrollToTop';
import Leader from './Components/Leader';
import His from './Components/His';
import Mega from './Components/Mega';
import YearlyEvents from './Components/YearlyEvents';
import Upcoming from './Components/UpcomingEvents';
import PastEvents from './Components/PastEvents';
import Accordion from './Components/Accordion';
import ADoctrine from './Components/ADoctrine';
import Radio from './Radio';
import ScrollBar from './Components/Header/ScrollBar';
import { getPosts } from './Components/DUM';
import BlogContent from './Components/Blogcontent';
import Profile from './Components/Header/Profile';
import Post from './Update/Post';


function App() {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await getPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, []);
  return (
      <div>
      {/* <TopHeader /> */}
      <ScrollBar blogs={posts}/>
      <NavBar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar}/>
      <Sidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />

        {/* <TopBar/> */}
        {/* <Navbar/>  */}
        {/* <LiveChat /> */}
        {/* <SocialLink /> */}
        <Routes>
            <Route path='/' index element={<Home />}/>
            {/* <Route path='/service' element={<Serivces />}/> */}
            <Route path='/EGC' element={<EGC />} />
            <Route path='/ICT' element={<ICT />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Gallery' element={<Gallery />} />
            <Route path='/Doctrine' element={<ADoctrine />}  />
            {/* <Route path='/Doctrine' element={<Doctrine />}  /> */}
            {/* <Route path='/Sacrament' element={<Sacrament />}  /> */}
            <Route path='/Leader' element={<Leader />}  />
            <Route path='/His' element={<His />}  />
            {/* <Route path='/Essentials' element={<Essentials />} />
            <Route path='/Tith' element={<Tith />} />
            <Route path='/FBank' element={<FBank />} />
            <Route path='/BrowlandHot' element={<BrowlandHot />} />
            <Route path='/BishopGHouse' element={<BoshopGHouse />} /> */}
            <Route path='/BookShop' element={<BookShop />} />
            <Route path='/STV' element={<STV />} />
            <Route path='/Apps' element={<Apps />} />
            <Route path='/NKT' element={<NKT />} />
            <Route path='/About' element={<About />} />
            <Route path='/Events' element={<Events />} />
            <Route path='/YearlyEvents' element={<YearlyEvents />} />
            <Route path='/UpcomingEvents' element={<Upcoming />} />
            <Route path='/PastEvents' element={<PastEvents />} />
            <Route path='/Blog' element={<Blog blogs={posts}/>} />
            <Route path='/Sacrament' element={<Accordion />} />
            <Route path='/Pool' element={<Pool />} />
        <Route path='/blog/:id' element={<BlogContent  blogs={posts}/>}></Route>

            <Route path='/Redeem' element={<Redeem />} />
            <Route path='/Museum' element={<Museum />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/post' element={<Post />} />

        </Routes>
              <ScrollToTop />
              <Radio />

        <Mega />
        <Footer2/>
        {/* <Footer/> */}
      </div>
  );
}

export default App;
