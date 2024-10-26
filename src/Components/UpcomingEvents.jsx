import { Link } from "react-router-dom";
import "../index.css";
import { motion } from "framer-motion";

const Upcoming = () => {
  return (
    <motion.nav
      className="text w-[100%]  md:pl-10 md:pr-10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Link to="/UpcomingEvents" className="w-[100%] text-center mt-5 md:p-5 flex justify-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/CategoryImg%2F5.png?alt=media&token=f9b6d1b5-4207-4b6a-8b4d-2fd88d917d53"
          style={{ width: "95%", padding: 0, marginTop: 0 }}
        />
      </Link>

      {/* <h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 20, paddingLeft: 10, paddingRight: 10 }}  className=" text-center pt-28"> */}
      {/* <h1 style={{}} className="text-6xl pt-28 p-5  text-center font-bold bg-gradient-to-r from-pink-400 to-purple-300 hover:from-pink-500 text-transparent bg-clip-text"> */}
    <div className="grid">

      <div className=" w-[50%] p-5 flex flex-col justify-self-center shadow-lg mt-28">
          <h6 style={{ color: "#333", padding: 10 }} className="text-xl">
            The Holy Father in His infinite mercy has again, taken the initiative to
            grace His children with a mega event. This is one of a kind as it just
            precedes the outpouring of the Holy Spirit, which will be sufficient to
            His numbered elects. The event, to be attended by all and sundry,
            features several activities; all of which have dire spiritual
            significance and work towards preparing His elects to receive the Holy
            Spirit anew from the Holy Spirit personified.
          </h6>
          {/* <img  src={Sonn} style={{ width: '95%', padding: 0,  marginTop: 0    }}/> */}
          {/* <Link to="/UpcomingEvents" className="cursor-pointer">
            <img
              className="animate-pulse"
              src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Feventcoronation.jpg?alt=media&token=7902328f-59ff-44ba-a0d0-ba0a9ec82d67"
              style={{ width: "100%", padding: 0, marginTop: 0 }}
            />
          </Link> */}
          <h6 style={{ color: "#333", padding: 10 }} className="text-xl">
            Theological discussions have been ongoing for centuries regarding the
            concept of numbering the elects of God. Some argue that it limits God's
            grace, while others believe it is necessary to uphold God's sovereignty
            in salvation. This article sheds some light on the meaning of numbering
            God’s elects and the biblical concept of being chosen.
          </h6>
          <h6 style={{ color: "#333", padding: 10 }} className="text-xl">
            To start with, numbering the elects of God refers to the belief that God
            has predetermined a fixed number of individuals for salvation. This
            belief upholds the idea that salvation is by God's grace and not earned
            by human effort. It also provides assurance to believers that they are
            part of a select group chosen by God for salvation.
          </h6>
      </div>

      <div className=" w-[50%] p-5 flex flex-col justify-self-center shadow-lg mt-28">
          <h6 style={{ color: "#333", padding: 10 }} className="text-xl">
            However, numbering the elects should not overlook the role of human
            responsibility in salvation. While the Bible teaches God's sovereignty
            in election, it also emphasizes human responsibility in responding to
            the gospel message.
          </h6>
          <h6 style={{ color: "#333", padding: 10 }} className="text-xl">
            The phrase, ‘Many are called, but few, chosen’ suggests that God invites
            everyone to come to Him, as in the case of this event, but only those
            who respond with faith and commitment will be chosen for eternal life.
            Again, being chosen is not based on merit or ability but is a gift of
            God's grace given freely to those who put their trust in Him, regardless
            of their background or past mistakes.
          </h6>
          <h6 style={{ color: "#333", padding: 10 }} className="text-xl">
            It is important to note that God's selection is not arbitrary or random
            but based on His Sovereign Will. The concept of being chosen by God is
            not new and has been demonstrated throughout history, such as God's
            choice of Israel as His people and the selection of individuals like
            Abraham, Noah, Moses, and David for His purposes. It is important to
            keep in mind that God chooses whomever He wills to confirm the scripture
            in Romans 8:30, ‘Moreover whom he did predestinate, them he also called:
            and whom he called, them he also justified: and whom he justified, them
            he also glorified’. See also Ephesians 1:5.
          </h6>
        </div>
      </div>
    </motion.nav>
  );
};

export default Upcoming;
