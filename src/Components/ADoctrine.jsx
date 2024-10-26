import React, { useState } from "react";
import Acord from "./Acord";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function ADoctrine() {
  const [open, setOpen] = useState(false);

  const toogle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const accordioni = [
    {
      question: "BCS UNIFORM",
      answer:
      `The official uniform of the Brotherhood of the Cross and Star is white garment with cape known officially as the “soutane” in conformity with what is recorded in revelation of John the Divine “…And one of the elders answered, saying unto me, What are these which are arrayed in white robes and whence came they? And I said unto him, sir, thou knowest. And he said to me, these are they which came out of great tribulation, and have washed their robes, and made them white in the blood of the lamb. Therefore, are they before the throne of God, and serve him day and night in his temple; and he that sitteth on the throne shall dwell among them” (Rev. 7:13-15) “And to her was granted that she should be arrayed in fine linen, clean and white; for the fine linen is the righteousness of saints.; (Rev. 19:8)  Brothers and sisters should use the same uniform, the sisters use white head ties in addition.
      Ecclesiastes 9:8, Matthew 17:2, Luke 9:29, Mark 16:5, Acts 1:10, Revelation 3:4, Revelation 3:5, Revelation 3:18, Revelation 4:4, Revelation 6:11, Revelation 7:9, Revelation 7:13 and Revelation 19:14.
      `,
      a: ``,
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fdoctrine1.jpeg?alt=media&token=f4f0e8f2-06e4-46c5-991b-7e5f2780440b",  
    },

    {
      question: "KNOCKING OF HEAD",
      answer:
      `BCS members knock (bow) their head three times in reverence to the Holy Trinity God, before and after prayers or that any time, place or occasion whenever the spirit directs. Knocking of head is a very vital and effective part of communication with God; It is akin to a dialing tone or knocking on the door before going in. 
      Revelation 4:10-11, Revelation 19:4, 1 Corinthians 14:25, Rev 7:11
      `,
      a: ``,

            image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fdoctrine2.jpeg?alt=media&token=a7d86fda-a57d-4e59-8bcb-918499300c9b",
    },
    {
      question: "WEARING OF SHOES",
      answer:
      `It is the doctrine of the Brotherhood of the Cross and Star not to wear shoes into the Bethels or the house of worship, In recognition and reverence of the holiness and presence of God.
      “then said the lord to him, put off thy shoes from thy feet; for the place where thou standest is Holy ground”.  “God is holy and all worshippers of God must worship Him in spirit and in truth”. 
      Acts 7:33, Exodus 3:5, Romans 10:15, Luke 22-35, Luke 10:4, Luke 9:3
       `,
       a: ``,

              image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fdoctrine3.jpeg?alt=media&token=de9b8694-0ddf-4142-bced-9e6e667ba560",
    },
    {
      question: "GREETINGS",
      answer:
      `“Peace of the Father”,” Perfect Peace” or “Peace be unto you;” is the general opening greetings of BCS members irrespective of time or occasion. Peace is a heavenly language. Our Lord Jesus Christ is the Prince of Peace. He used the same greetings of “peace” and his disciples followed suit in their evangelism, and after His ascension.
       Luke 10:5, John 20:19 and 26, Matt 10:12-13, Isaiah 9:6, Luke 24:36, John 14:27, 1st Corinthians 1-3, Gal. 1:3, Eph. 2:14, Eph. 6:23, Phil. 4:7-9.
      `,
      a: ``,

              image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fdoctrine4.jpeg?alt=media&token=b82c08ab-ac06-4705-9bf6-8ab82a25665e",
    },
    {
      question: "KNEELING IN REVERENCE",
      answer:
      `1Kings 8:54, 2Chronicle 6:13, Daniel 6:10, Acts 9:40, Acts 20:36, Acts 21:5, Psalm 95:6, Philippians 2:9-11, Mark 10:17, Luke 5:8, Luke 22:41 and Acts 7:60
      `,
      a: ``,

              image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fdoctrinekelling.jpeg?alt=media&token=8fdc07a4-9be4-40bd-84e7-e775da2befe6",
    },
    {
      question: "TITHE PAYMENT",
      answer:
      `Everybody must pay one tenth of his/her earning as the tithe of God. Bethels, Associations, and fellowships must pay tithe from proceeds realized from functions. The tithe payment is a secret between you and your God. Malachi 3:7-12 
      “Everybody from the days of your fathers ye are gone away from mine ordinances, and have not kept them. Return unto me, and I will return unto you saith the LORD of host. “But ye said, wherein shall we return? Will a man rob God? Yet you have robbed me! But you say, Wherein have we robbed thee?” in the tithe and offerings. Ye are cursed with a curse, for ye have robbed me; even this whole nation. Bring ye all the tithe into the storehouse, that there may be meat in my house, and prove me now herewith, saith the LORD of host, “If I will not open you the windows of heaven and pour you out a blessing that there shall not be room enough to receive it. And I will rebuke the devourer for your sakes, and he shall not destroy the fruits of your ground, neither shall your vine cast her fruit before the time in the field, saith the LORD of hosts. And all nations call you blessed: for ye shall be delightsome land, saith the LORD of hosts.” Malachi 3:6-12
      If you have been joking with the tithe belonging to God by way of not paying regularly or using same for personal or group purposes, stop forthwith otherwise your condition will get worst. You attract great blessings when you pay your tithe regularly.  
      Malachi 3:7-12, Luke 18:12-14, Leviticus 27:30
      `,
      a: ``,

              image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fdoctrinetith.jpeg?alt=media&token=ce9059c7-f7cd-441e-9fe0-fff30d22a161",
    },
    {
      question: "EVANGELISM",
      answer:
      `Evangelism is sharing the news of something, in order to convince someone to join or otherwise accept it. Furthermore, it is zealous advocacy or support of a particular cause. 
      The following mode of evangelism is accepted in Brotherhood of the Cross and Star.
      Open-air Evangelism: Evangelism is done in an open space such as markets and village squares where people would gather and a full worship session is observed., and the gospel of truth, peace, love divine, forgiveness, and purity is shared with adherents.

      
      `,
      a: ` Door-to-Door Evangelism: This is a method of evangelism whereby brethren move from house to house administering the gospel to the people. This is often done in localized areas where open-air evangelism is impossible.`,

      b: `Media Evangelism: This evangelism is done remotely with mobile phones or other handy alternatives. This allows the gospel to be spread seamlessly around the world. This is especially crucial as it impacts even those that are inaccessible physically. Brotherhood of the Cross and Star’s private television station “StarCross TV, Official Website, as well as Newspaper Outlet “The New Kingdom Trumpet” are prime examples.`,

      c: `Magazine and paper Evangelism: The gospel is typed, printed on paper, and distributed. These texts range from pieces as small as pamphlets to those as large as proper textbooks, like the Everlasting Gospel. This is also very important as compiled texts serve as libraries for reference purposes.`,

      d: `Lifestyle Evangelism: The gospel of the Father is propagated through lifestyle. This method of evangelism is paramount in Brotherhood of the Cross and Star. This strategy seeks to combine the Great Commission and the exhortations to Christ-like living all throughout the Scriptures. It takes the command to “Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.” (Matt. 5:14–16.)`,
      
      e: `The requirements for carrying out an ideal evangelical mission in Brotherhood of the Cross and Star.`,

      g: `Soutane: This is the official regalia of the Brotherhood of the Cross and Star. It is important to put this on for identification purposes. The soutane also confers a great deal of discipline on its wearer, given the fact that it is white and above all a divine robe. `,

      h: `The Everlasting Gospel: This is a compilation of the teachings of Leader Olumba Olumba Obu, the Sole Spiritual Head of the Universe. It contains divine and very unique knowledge and throws plenty of light on biblical teachings. There are also lots of illustrations and stories to help the reader relate the teachings therein to real life scenarios.`,

      i: `Holy Bible: This requires no introduction and its importance cannot be overemphasized as it is the most important book to a Christian. It is the compilation of the teachings of our Lord Jesus Christ, his disciples and the prophets of old. It is worth noting that more emphases are placed on the New Testament than the Old Testament.`,

      j: `Fasting and Prayer: In Brotherhood doctrine, fasting is a necessary spiritual exercise that must be carried out during an evangelical mission. This exercise mortifies the flesh and helps keep us devoid of canal thoughts. This in turn fine-tunes us to be on the same wavelength as the Holy Spirit of God, allowing for easy communication and empowerment. Fasting is of course accompanied by prayers.`,

      k: `Fixed Location: Just like targeted ads, being certain of the target location will guide brethren on the kind of audience to expect and thus go a long way to determine the length and nature of the gospel, and the approach taken to disseminate it. This generally aids preparedness.`,

      l: `Believe in the Father: This again is a requirement that cannot be overemphasized. The priest embarking on evangelism cannot afford to have doubts or a shaky faith. He must know and have absolute faith and trust in the Father. Any sign of fear or uncertainty will leave a notable detrimental mark on the audience and will equally cause doubts and uncertainty in their minds; no matter how good a speaker the priest is. This is an error that should never be allowed to happen because a first impression cannot be made twice or undone.`,

      m: `Thorough Research: This is very important as the priest must be well-seasoned; having in-depth knowledge and understanding of the Bible and the Everlasting Gospel of Brotherhood of the Cross and Star. He must also be well-versed in various religions outside Christianity, as well as their doctrines, practices, and philosophy, which must be thoroughly ingested and digested to be able to breach the gap of religious diversity. This will give the confidence to deliver the gospel of truth, love divine, peace, forgiveness, and purity in the language the audience understands.`,

      n: `Evangelism is prioritized in Brotherhood of the Cross and Star. It is a show of love and selflessness. It strives for peace and togetherness and paves way for the return of the lost sheep. Evangelism is a divine mandate, and a commission, because making the whole world one is a task that must be done.`,
      
      o: `2nd Timothy 4:5, Acts 2:38, Mark 16:15-17, Matthew 28:19-20, Matthew 9:37-38, Matthew 10:7-14.`,
              image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fdoctrineevangelism.jpeg?alt=media&token=e1900958-fd9f-4a8b-8afe-d65d51a73bf8",
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
            <img  src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fbcs-Doctrinebanner.jpg?alt=media&token=169eb4c1-a30d-4af6-b977-1878ab27c7c4" style={{ width: '85%', marginBottom: 0    }}/>
      </div>

      <div className="w-[100%] text-center mt-5 md:p-5 flex justify-center">
      <div className="md:w-[40%] p-3 m-5  bg-white shadow-lg md:my-10">
            <h6 style={{ color: "#333", padding: 30, }}  className="text-xl">
              Brotherhood Of The Cross And Star (BCS) Derives all her doctrines 
              from the Supernatural Teachings and Doctrines Of Our Lord and Saviour, Our 
              Lord Jesus Christ (Isa. 2:2-4; John 16:12-15; 1Cor. 13:10-12)
            </h6>
        </div>

      </div>


    <section className="bg-[#fcfcfc] pb-20 md:flex justify-center max-[900px]:grid">
      <div className="px-[40px] max-w-[900px] max-[700px]:w-[380px] max-[700px]:px-[0px] max-[700px]:max-h-[100%]">
        {accordioni.map((data, index) => {
          return (
            <Acord
              key={index}
              open={index === open}
              question={data.question}
              answer={data.answer}
              a={data.a}
              b={data.b}
              c={data.c}
              d={data.d}
              f={data.f}
              g={data.g}
              h={data.h}
              i={data.i}
              j={data.j}
              k={data.k}
              l={data.l}
              m={data.m}
              n={data.n}
              o={data.o}
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
              <Link to="/Sacrament">
                SACRAMENT
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

export default ADoctrine;