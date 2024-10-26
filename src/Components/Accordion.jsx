import React, { useState } from "react";
import Acord from "./Acord";
import { motion } from "framer-motion";
import AcordSac from "./AcordSac";
import { Link } from "react-router-dom";


function Accordion() {
  const [open, setOpen] = useState(false);

  const toogle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const accordioni = [
    {
      question: "BAPTISM",
      answer:
        "Repentance and baptism of the Holy Spirit is the gateway to salvation, and into The Kingdom Of God. Through Baptism of the Holy Spirit, the gift of the holy spirit is bestowed unto you. Baptism is conducted at any time or day, whenever the person is ready to accept, it is for all ages. Matt 3:11 28:19, John 3:5, mark 16:16, Ephesian 4:4-5. Baptism is one of the sacraments in Brotherhood of The Cross and Star. It is a passage rite into Gods Kingdom now established on earth. All those seeking for the kingdom of God must observe the first step which is to be baptised by immersion notwithstanding whether or not one had been baptised elsewhere. Baptism can be conducted anywhere in the world, it is not restricted to any area or location. Once a new convert is ready for baptism, same should not be postponed. Members must be ready to administer at all times and at all places provided where there is water deep enough to cover the new convert when immersed. Children should be baptised too. The day of baptism into Brotherhood of the Cross and Star, the Kingdom of God on earth is a unique and most important day in the persons life; and the person should break a feast. It is a day of salvation, a day of joy. Baptism into Brotherhood of the Cross and Star is a must if one must have salvation (St johns 3:5; St mark 16:16) after baptism and anointing one becomes bound in unity with other brethren to fulfill the scriptures which says “one lord, one faith and one baptism”. Nobody is coerced, intimidated, threatened or begged to accept baptism in BCS. Prospective members must denounce and resign their membership all secret societies, do away with all charms and concoctions, rings and talisman, occult books, materials and practices before baptism; into Brotherhood, else such baptism is without benefit. Money is not charged for baptism; such practices are evil and attract terrible negative consequences to the perpetrator.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fbaptism.jpeg?alt=media&token=2bb26996-f7f8-474d-a40a-84fbecfc95d0", 
    },
    {
      question: "CHILD BLESSING",
      answer:
        "Child blessing is an acceptable sacrament in Brotherhood. The practice of child blessing has an ancient origin. It is a form of acknowledgement and acceptance by a family, couple and families of God’s gift and God’s love experienced in the form of a child. As our Lord Jesus Christ was presented in the temple on the eight day, it is mandatory that every child in Brotherhood of the Cross and Star be blessed. It is done either during morning or evening prayers, but with strong emphasis on the eight day. There is an order for the conduction of child blessing as set down by the Holy Spirit.",
      image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fchildblessing.jpeg?alt=media&token=b8e70997-5014-4969-9913-06fc9903e8c2",
    },
    {
      question: "MARRIAGE BLESSING",
      answer:
        "Marriage blessing is also one of the sacraments in Brotherhood. Marriage as holy institution is recommended for all brethren of the fold, if they so which but on one condition that a man be husband to one wife, and a woman be wife to one husband. Solemnization of marriage in Brotherhood is the highest anybody can desire to experience because it is done by the Holy Spirit. The Father therefore advises that all brethren have their marriage blessed, even if they were married in court or church prior to their baptism into the fold.  Any man or woman who does not practice strict monogamy should remain a celibate. Trial, contract marriages are not allowed in Brotherhood. Once a man’s marriage is blessed, such cannot marry again except on the grounds of adultery or demise of one of the partners. All married couples, indeed all brethren, are advised to go and read the publication entitled “key to successful marriage” -sermons by Leader Olumba Olumba Obu.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fmariageblessing.jpeg?alt=media&token=ff0817ed-feaa-4ebf-a9f5-89b0caabdc00",
    },
    {
      question: "LOVE FEAST",
      answer:
        "Love feast is sacrament introduced by the Holy Spirit in Brotherhood of the Cross and Star. It is to commemorate the Passover last supper, during which our God and savior changed bread to his living Body, and wine to his priceless Blood. We daily celebrate the Holy Communion or the Love Feast.  The love feast is very sacred and can accomplish anything. Feast is not food that you can eat to be filled. Thus a piece of bread, biscuit, banana, orange, paw-paw, pineapple and even a spoon full of rice is enough for one to eat as feast. Feast should be bought, prepared and eaten with utmost reverence and respect to the Holy Spirit. Nobody should struggle and fight for feast.   When feast is served, everyone should kneel down when he or she collects same. No special time has been set for feast conducting. No special fruits are recommended for feast. No conditions, modality or amount are stipulated for celebration of feast. Feast in Consist of fruits, vegetables, rice etc., and water. It is purely vegetarian and is blessed and served after service or fasting.  Feast could be of two types Fruit feast: prepared basically with various types of fruit. Full feast: consist of both fruits and food. There is also house feast, which could be fruits or full. BCS members do house feast or blessing before or shortly after they move into a new house and also at will, as the Holy Spirit reveals or directs. Acts 2:42-47. BCS members neither kill, eat nor offer meat or fish; nor do they eat any dairy product. In BCS, Vegetarian is practiced. Eating of fruits is very important and significant, hence BCS members usually have fruits at their homes; fruits are served to visitor or strangers in place of drinks. Genesis 1:29., BCS members do not drink or offer alcoholic drink, wine, soft or any artificially mixed drink except water. Smoking and snuffing is not the food of the Holy Spirit and it is not acceptable in BCS.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Flovefeast.jpeg?alt=media&token=410c7ec4-d345-4f32-a327-44359c7b380a",
    },
  ];

  return (
    <motion.nav
    className="md:pl-16 md:pr-16"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 2,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01]
    }}
    >
        <div className="w-[100%] text-center mt-5 md:p-5 flex justify-center">
            <img  src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/CategoryImg%2F1.png?alt=media&token=9b30d41f-02e3-417e-90fa-eaca52e3f30a" style={{ width: '85%', marginBottom: 0    }}/>
        </div>
        <div className="w-[100%] text-center mt-5 md:p-5 flex justify-center">
      <div className="md:w-[40%] p-3 m-5  bg-white shadow-lg md:my-10">
            <h6 style={{ color: "#333", padding: 30, }}  className="">
In Brotherhood Of The Cross And Star Certain rites are performed according
to the directives of The Holy Spirit. These include Baptism, Child Blessing, 
Love Feast and Marriage Blessing...
</h6>
</div>
</div>

    <section className="bg-[#fcfcfc] pb-20 md:flex place-items-center max-[900px]:grid">
      <div className="px-[40px] max-w-[900px] max-[700px]:w-[380px] max-[700px]:px-[0px] max-[700px]:max-h-[100%]">
        {accordioni.map((data, index) => {
          return (
            <AcordSac
              key={index}
              open={index === open}
              question={data.question}
              answer={data.answer}
              image={data.image}
              toogle={() => toogle(index)}
            />
          );
        })}
      </div>
      {/* <div className="max-[900px]:w-[350px] p-5 pr-5 max-[900px]:h-[200px] w-[500px] h-[350px] rounded-lg">
        <div className="cursor-pointer">
          <ul className="p-2 border-4 rounded-lg border-blue-300 ">
            <li className="hover:bg-blue-500 hover:text-white rounded-sm border-b-2 border-gray-200">
              
              <Link to="/Doctrine">
              BCS DOCTRINES
                              </Link>
            </li>
            <li className="hover:bg-blue-500  hover:text-white rounded-sm border-b-2 border-gray-200">
            <Link to="/About">
              HISTORY OF BCS
              </Link>
            </li>
            <li className="hover:bg-blue-500  hover:text-white rounded-sm border-b-2 border-gray-200">
            <Link to="/About">
              ABOUT BCS
              </Link>
            </li>
            <li className="hover:bg-blue-500  hover:text-white rounded-sm border-b-2 border-gray-200">
            <Link to="/EGC">
              SERMON
              </Link>
            </li>
            <li className="hover:bg-blue-500  hover:text-white rounded-sm border-b-2 border-gray-200">
            <Link to="/Leader">
              LEADER OLUMBA OLUMBA OBU
              </Link>
            </li>
            <li className="hover:bg-blue-500  hover:text-white rounded-sm border-b-2 border-gray-200">
            <Link to="/His">
              HIS HOLINESS OLUMBA OLUMBA OBU
              </Link>
            </li>
            <li className="hover:bg-blue-500  hover:text-white rounded-sm border-b-2 border-gray-200">
            <Link to="/Gallery">
              MEDIA
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </section>
    </motion.nav>
  );
}

export default Accordion;