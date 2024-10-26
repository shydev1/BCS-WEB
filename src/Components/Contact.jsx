import React, { useState } from "react";
import { motion } from "framer-motion";
// import ClickAwayListener from "react-click-away-listener";
import Son6 from "../img/con.jpg";
import Son from "../img/555.jpg";
import Son1 from "../img/553.jpg";
import Son2 from "../img/554.jpg";
import Son3 from "../img/552.jpg";
import AcordSac from "./AcordSac";
import Email from "./Email";

const Contact = () => {
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");
  // const [name] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  // };
  const [popup, setPopup] = useState(false);
  const [popup2, setPopup2] = useState(false);
  const [popup3, setPopup3] = useState(false);

  const [open, setOpen] = useState(false);

  const toogle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const accordioni = [
    {
      question: "FEllOWSHIPS",
      emails: [
        {
          name: "Blessed Brothers And Sisters Family Fellowship",
          address: "bbsfellowship@ooobcs.org",
        },
        {
          name: "Christ Natural Choristers Fellowship",
          address: "cncf@ooobcs.org",
        },
        {
          name: "Christ Universal Children's Fellowship",
          address: "cucf@ooobcs.org",
        },
        {
          name: "Christ Universal General Fellowship",
          address: "cugf@ooobcs.org",
        },
        {
          name: "Christ Universal Mercy Fellowship",
          address: "cumf@ooobcs.org",
        },
        {
          name: "Christ Universal Spirited Children Fellowship",
          address: "spiritedfellowship@ooobcs.org",
        },
        {
          name: "Christ Universal Spiritual Council of Churches",
          address: "cuscc@ooobcs.org",
        },
        {
          name: "Christ Universal Youth Fellowship",
          address: "cuyf@ooobcs.org",
        },
        {
          name: "International ABAS Fellowship",
          address: "abas@ooobcs.org",
        },
        {
          name: "International All Ordained Ones Fellowship",
          address: "allordained@ooobcs.org",
        },
        {
          name: "International Education Fellowship",
          address: "education@ooobcs.org",
        },
        {
          name: "International Elders Fellowship",
          address: "elders@ooobcs.org",
        },
        {
          name: "International Health Workers Fellowship",
          address: "healthworkers@ooobcs.org",
        },
        {
          name: "International Labour Fellowship",
          address: "labour@ooobcs.org",
        },
        {
          name: "International Lawyers Fellowship",
          address: "lawyers@ooobcs.org",
        },
        {
          name: "International Leaders Representative Fellowship",
          address: "leadersrep@ooobcs.org",
        },
        {
          name: "International Missionary Crusade Fellowship",
          address: "missionarycrusade@ooobcs.org",
        },
        {
          name: "International Vegetarian Fellowship",
          address: "vegetarian@ooobcs.org",
        },
        {
          name: "International Welfare Fellowship",
          address: "welfarefellowship@ooobcs.org",
        },
        {
          name: "Traditional Rulers  Fellowship",
          address: "traditionalrulers@ooobcs.org",
        },
        {
          name: "Universal Men's Fellowship",
          address: "mensfellowship@ooobcs.org",
        },
        {
          name: "Universal Women Fellowship",
          address: "womenfellowship@ooobcs.org",
        },
        {
          name: "Universal New World Fellowship",
          address: "education@ooobcs.org",
        },
        {
          name: "Council of Bcs Communication Professionals",
          address: "cbcscprofessionals@ooobcs.org"
        }
      ],
    },
    {
      question: "PRIESTLY BODIES",
      emails: [
        {
          name: "UABCSP",
          address: "uabcsp@ooobcs.org",
        },
        {
          name: "144,000 Virgins Body",
          address: "144000virgins@ooobcs.org",
        },
        {
          name: "Collage of Bishops",
          address: "cob@ooobcs.org",
        },
        {
          name: "Massion of Blessedness",
          address: "mob@ooobcs.org",
        },
        {
          name: "Universal Assembly of Christ Ambassadors",
          address: "ucca@ooobcs.org",
        },
        {
          name: "Divine Vanguards",
          address: "dv@ooobcs.org",
        },
        {
          name: "True Chirist Witness",
          address: "tcw@ooobcs.org",
        },
        {
          name: "Senior Christ Witness",
          address: "scs@ooobcs.org",
        },
        {
          name: "Christ Pratical Students",
          address: "cps@ooobcs.org",
        },
        {
          name: "Christ Natural Preachers",
          address: "cnp@ooobcs.org",
        },
      ],
    },
    {
      question: "FIRST HEAVENLY ORDER",
      emails: [
        {
          name: "Christ Shepherds",
          address: "christshepherds@ooobcs.org",
        },
      ],
    },
    {
      question: "OFFICES",
      emails: [
        {
          name: "Leaders Office",
          address: "leadersoffice@ooobcs.org",
        },
        {
          name: "Bcs Peace Board",
          address: "bcspeaceboard@ooobcs.org",
        },
        
        {
          name: "Secetary General Affiars(SGA)",
          address: "sga@ooobcs.org",
        },
        {
          name: "Father's Personal Asistant",
          address: "pa@ooobcs.org",
        },
        {
          name: "Correspondence",
          address: "correspondence@ooobcs.org",
        },
        {
          name: "Bcs Information Officer",
          address: "informationofficer@ooobcs.org",
        },
        {
          name: "Bcs Spokesman Office",
          address: "spokesman@ooobcs.org",
        },
        {
          name: "Vestry Protocol",
          address: "vestryprotocol@ooobcs.org",
        },
      ],
    },

    {
      question: "STATES",
      emails: [
        {
          name: "Abia State",
          address: "abiaadmin@ooobcs.org",
        },
        {
          name: "Adamawa State",
          address: "adamawaadmin@ooobcs.org",
        },
        {
          name: "Akwa Ibom State",
          address: "akwaibomadmin@ooobcs.org",
        },
        {
          name: "Bauchi State",
          address: "bauchiadmin@ooobcs.org",
        },
        {
          name: "Bayelsa State",
          address: "bayelsaadmin@ooobcs.org",
        },
        {
          name: "Benue State",
          address: "benueadmin@ooobcs.org",
        },
        {
          name: "Borno State",
          address: "bornoadmin@ooobcs.org",
        },
        {
          name: "Cross River State",
          address: "crossriveradmin@ooobcs.org",
        },
        {
          name: "Delta State",
          address: "deltaadmin@ooobcs.org",
        },
        {
          name: "Ebonyi State",
          address: "ebonyiadmin@ooobcs.org",
        },
        {
          name: "Edo State",
          address: "edoadmin@ooobcs.org",
        },
        {
          name: "Ekiti State",
          address: "ekitiadmin@ooobcs.org",
        },
        {
          name: "Enugu State",
          address: "enuguadmin@ooobcs.org",
        },
        {
          name: "Gombe State",
          address: "gombeadmin@ooobcs.org",
        },
        {
          name: "Imo State",
          address: "imoadmin@ooobcs.org",
        },
        {
          name: "Jigawa State",
          address: "jigawaadmin@ooobcs.org",
        },
        {
          name: "Kaduna State",
          address: "kadunaadmin@ooobcs.org",
        },
        {
          name: "Kano State",
          address: "kanoadmin@ooobcs.org",
        },
        {
          name: "Kastina State",
          address: "kastinaadmin@ooobcs.org",
        },
        {
          name: "Kebbi State",
          address: "kebbiadmin@ooobcs.org",
        },
        {
          name: "Kogi State",
          address: "kogiadmin@ooobcs.org",
        },
        {
          name: "Kwara State",
          address: "kwaraadmin@ooobcs.org",
        },
        {
          name: "Lagos State",
          address: "lagosadmin@ooobcs.org",
        },
        {
          name: "Nasarawa State",
          address: "nasawaraadmin@ooobcs.org",
        },
        {
          name: "Niger State",
          address: "nigeradmin@ooobcs.org",
        },
        {
          name: "Ogun State",
          address: "ogunadmin@ooobcs.org",
        },
        {
          name: "Osun State",
          address: "osunadmin@ooobcs.org",
        },
        {
          name: "Oya State",
          address: "oyoadmin@ooobcs.org",
        },
        {
          name: "Plateau State",
          address: "plateauadmin@ooobcs.org",
        },
        {
          name: "Rivers State",
          address: "riversadmin@ooobcs.org",
        },
        {
          name: "Sokoto State",
          address: "sokotoadmin@ooobcs.org",
        },
        {
          name: "Taraba State",
          address: "tarabaadmin@ooobcs.org",
        },
        {
          name: "Zamfara State",
          address: "zamfaraadmin@ooobcs.org",
        },
        {
          name: "Yobe State",
          address: "yobeadmin@ooobcs.org",
        },
        {
          name: "FCT Abuja ",
          address: "abujaadmin@ooobcs.org",
        },
      ],
    },
    {
      question: "NATIONS & REGIONS",
      emails: [
        {
          name: "Australia",
          address: "australia-admin@ooobcs.org",
        },
        {
          name: "Austria",
          address: "austria-admin@ooobcs.org",
        },
        {
          name: "Barbados",
          address: "barbados-admin@ooobcs.org",
        },
        {
          name: "Belarus",
          address: "belarus-admin@ooobcs.org",
        },
        {
          name: "Benin Republic",
          address: "beninrepublicadmin@ooobcs.org",
        },
        {
          name: "Cameroon",
          address: "cameroon-admin@ooobcs.org",
        },
        {
          name: "Canada",
          address: "canada-admin@ooobcs.org",
        },
        {
          name: "Cape-Verde",
          address: "capeverde-admin@ooobcs.org",
        },
        {
          name: "Central African Republic",
          address: "car@ooobcs.org",
        },
        {
          name: "Chad Republic",
          address: "chad@ooobcs.org",
        },
        {
          name: "China",
          address: "china-admin@ooobcs.org",
        },
        {
          name: "Costa Rica",
          address: "costarica-admin@ooobcs.org",
        },
        {
          name: "Croatia",
          address: "croatia-admin@ooobcs.org",
        },
        {
          name: "Cuba",
          address: "cuba-admin@ooobcs.org",
        },
        {
          name: "Czech Republic (Europe)",
          address: "czech-admin@ooobcs.org",
        },
        {
          name: "Denmark",
          address: "denmark-admin@ooobcs.org",
        },
        {
          name: "Dominican Republic",
          address: "dominican-admin@ooobcs.org",
        },
        {
          name: "United Kingdom (England)",
          address: "uk-admin@ooobcs.org",
        },
        {
          name: "Equatorial Guinea",
          address: "equatorialguinea-admin@ooobcs.org",
        },
        {
          name: "Finland",
          address: "finland-admin@ooobcs.org",
        },
        {
          name: "France",
          address: "france-admin@ooobcs.org",
        },
        {
          name: "Gabon",
          address: "gabon-admin@ooobcs.org",
        },
        {
          name: "Gambia",
          address: "gambia-admin@ooobcs.org",
        },
        {
          name: "Germany",
          address: "germany-admin@ooobcs.org",
        },
        {
          name: "Ghana",
          address: "ghana-admin@ooobcs.org",
        },
        {
          name: "Greece",
          address: "greece-admin@ooobcs.org",
        },
        {
          name: "Grenada",
          address: "grenada-admin@ooobcs.org",
        },
        {
          name: "Guatemala(NA)",
          address: "guatamela-admin@ooobcs.org",
        },
        {
          name: "Guinea",
          address: "guinea-admin@ooobcs.org",
        },
        {
          name: "Guinea Bissau",
          address: "guineabissau-admin@ooobcs.org",
        },
        {
          name: "Guyana",
          address: "guyana-admin@ooobcs.org",
        },
        {
          name: "Honduras",
          address: "honduras-admin@ooobcs.org",
        },
        {
          name: "Hungary",
          address: "hungari-admin@ooobcs.org",
        },
        {
          name: "India",
          address: "india-admin@ooobcs.org",
        },
        {
          name: "Ireland Republic",
          address: "australia-admin@ooobcs.org",
        },
        {
          name: "Italy",
          address: "italy-admin@ooobcs.org",
        },
        {
          name: "Ivory Coast",
          address: "ivorycoast-admin@ooobcs.org",
        },
        {
          name: "Jamaica",
          address: "jamaica-admin@ooobcs.org",
        },
        {
          name: "Kenya",
          address: "kenya-admin@ooobcs.org",
        },
        {
          name: "Liberia",
          address: "liberia-admin@ooobcs.org",
        },
        {
          name: "Lithuania",
          address: "lithuania-admin@ooobcs.org",
        },
        {
          name: "Malawi",
          address: "malawi-admin@ooobcs.org",
        },
        {
          name: "Malaysia",
          address: "malaysia-admin@ooobcs.org",
        },
        {
          name: "Malta",
          address: "malta-admin@ooobcs.org",
        },
        {
          name: "Mexico",
          address: "mexico-admin@ooobcs.org",
        },
        {
          name: "Moldova",
          address: "moldova-admin@ooobcs.org",
        },
        {
          name: "Mozambique",
          address: "mozambique-admin@ooobcs.org",
        },
        {
          name: "Namibia",
          address: "namibia-admin@ooobcs.org",
        },
        {
          name: "Niger Republic",
          address: "nigerrepublic-admin@ooobcs.org",
        },
        {
          name: "Norway",
          address: "norway-admin@ooobcs.org",
        },
        {
          name: "Panama",
          address: "panama-admin@ooobcs.org",
        },
        {
          name: "Poland",
          address: "poland-admin@ooobcs.org",
        },
        {
          name: "Romania",
          address: "romania-admin@ooobcs.org",
        },
        {
          name: "Rwanda",
          address: "rwanda-admin@ooobcs.org",
        },
        {
          name: "Scotland",
          address: "scotland-admin@ooobcs.org",
        },
        {
          name: "Sierra Leone",
          address: "sierraleone-admin@ooobcs.org",
        },
        {
          name: "Solvenia",
          address: "solvenia-admin@ooobcs.org",
        },
        {
          name: "South Africa",
          address: "sa-admin@ooobcs.org",
        },
        {
          name: "Spain",
          address: "spain-admin@ooobcs.org",
        },
        {
          name: "Switzerland",
          address: "switzerland-admin@ooobcs.org",
        },
        {
          name: "Tanzania",
          address: "tanzania-admin@ooobcs.org",
        },
        {
          name: "Togo",
          address: "togo-admin@ooobcs.org",
        },
        {
          name: "Trinidad & Tobago",
          address: "tt-admin@ooobcs.org",
        },
        {
          name: "Uganda",
          address: "uganda-admin@ooobcs.org",
        },
        {
          name: "Uruguay",
          address: "uruguay-admin@ooobcs.org",
        },
        {
          name: "USA",
          address: "usa-admin@ooobcs.org",
        },
        {
          name: "Venezuela",
          address: "venezuela-admin@ooobcs.org",
        },
        {
          name: "Wales",
          address: "wales-admin@ooobcs.org",
        },
        {
          name: "Democratic Republic of Congo (Zaire)",
          address: "dre-admin@ooobcs.org",
        },
        {
          name: "Zambia",
          address: "zambia-admin@ooobcs.org",
        },
        {
          name: "Zimbabwe",
          address: "zimbabwe-admin@ooobcs.org",
        },
      ],
    },

    {
      question: "DEPARTMENTS & ESTABLISHMENTS",
      emails: [
        {
          name: "BCS Teasury",
          address: "bcstreasury@ooobcs.org",
        },
        {
          name: "BCS ICT",
          address: "bcsict@ooobcs.org",
        },
        {
          name: "Bookshop/Library",
          address: "bookshop@ooobcs.org",
        },
        {
          name: "Brotherhood International Nursery School",
          address: "bins@ooobcs.org",
        },
        {
          name: "Brotherhood Model Collage",
          address: "bromco@ooobcs.org",
        },
        {
          name: "Browland Hotel",
          address: "browland@ooobcs.org",
        },
        {
          name: "Browland Supermarket",
          address: "browlandsupermarket@ooobcs.org",
        },
        {
          name: "Audit Unit",
          address: "audit@ooobcs.org",
        },
        {
          name: "Dominion Guest House",
          address: "dominionguesthouse@ooobcs.org",
        },
        {
          name: "Essential Supermarket",
          address: "essentialsupermarket@ooobcs.org",
        },
        {
          name: "Everlasting Gospel Center",
          address: "egc@ooobcs.org",
        },
        {
          name: "Legal Unit",
          address: "legalunit@ooobcs.org",
        },
        {
          name: "Morther Elizabeth  Kitchen",
          address: "mek@ooobcs.org",
        },
        {
          name: "Mother Elizabeth Medical Center",
          address: "memc@ooobcs.org",
        },
        {
          name: "Mother Elizabeth Redeemed Home",
          address: "redeemedhome@ooobcs.org",
        },
        {
          name: "Mother Elizabeth Sewing Institute",
          address: "mesi@ooobcs.org",
        },
        {
          name: "New Kingdom Trumpet ",
          address: "nkt@ooobcs.org",
        },
        {
          name: "Pool Of Life",
          address: "pooloflife@ooobcs.org",
        },
        {
          name: "Registration Office",
          address: "registrationoffice@ooobcs.org",
        },
        {
          name: "Royal Guest House",
          address: "royalguesthouse@ooobcs.org",
        },
        {
          name: "Security Department",
          address: "securitydepartment@ooobcs.org",
        },
        {
          name: "Starcross Television",
          address: "sctv@ooobcs.org",
        },
        {
          name: "Transort Department",
          address: "transport@ooobcs.org",
        },
        {
          name: "Triple Star Printing Press",
          address: "tspp@ooobcs.org",
        },
        {
          name: "Royal Museum",
          address: "royalmuseum@ooobcs.org",
        },
        {
          name: "Sanitation Department",
          address: "sanitation@ooobcs.org",
        },
        {
          name: "Photography Unit",
          address: "photographyunit@ooobcs.org",
        },
      ],
    },

    {
      question: "EXECUTIVE DIRECTORS",
      emails: [
        {
          name: "Onughen Olumba Obu",
          address: "	onughenolumba@ooobcs.org",
        },
        {
          name: "Ajah Olumba Obu",
          address: "ajaholumba@ooobcs.org",
        },
        {
          name: "Emmanuel Olumba Obu",
          address: "emmanuel@ooobcs.org",
        },
        {
          name: "Fred Olumba Obu",
          address: "fredolumba@ooobcs.org",
        },
        {
          name: "Mary Olumba Obu",
          address: "maryolumba@ooobcs.org",
        },
        {
          name: "Ugonma Olumba Obu",
          address: "ugonmaolumba@ooobcs.org",
        },
      ],
    },
  ];

  return (
    <motion.nav
      className="w-screen md:pl-10 md:pr-10 pb-20"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <img src={Son6} style={{ width: "95%", padding: 0, marginTop: 0 }} />

      <div
        style={{ width: "100%" }}
        className="md:flex md:grid-cols-2 md:p-20 gap-0 items-center"
      >
        <div className="md:w-[49%] w-[100%] items-center justify-center mt-5">
          <a
            target={"_blank"}
            href="https://us02web.zoom.us/j/6821976521?pwd=NUMrVTBTWEVMdVYza2hmSVpQZU9DQT09"
          >
            <img src={Son1} className="md:w-96 md:h-24 w-[100%]" />
          </a>
          <div className="p-5">
            Zoom Link:{" "}
            <a
              target={"_blank"}
              href="https://us02web.zoom.us/j/6821976521?pwd=NUMrVTBTWEVMdVYza2hmSVpQZU9DQT09"
              className=" text-blue-500"
            >
              https://us02web.zoom.us/j/6821976521?pwd=NUMrVTBTWEVMdVYza2hmSVpQZU9DQT09
            </a>
            <br />
            Meeting ID: 682 197 6521
            <br />
            Password: 010177
          </div>
          <a
            target={"_blank"}
            href="https://www.youtube.com/@bcsstarcrosstvinternationa8244"
          >
            <img src={Son3} className="w-96 h-24" />
          </a>
          <a target={"_blank"} href="https://www.facebook.com/WAHQBCS">
            <img src={Son2} className="w-96 h-24" />
          </a>
          <a target={"_blank"} href="https://twitter.com/ooo_bcsonline">
            <img src={Son} className="w-96 h-24" />
          </a>
        </div>

        {/* <div className="md:w-[49%] w-[100%] items-center justify-center m-10">
          <h3
            style={{ fontSize: 20, fontWeight: "bold", paddingTop: 10 }}
            className=" text-blue-400"
          >
            Email Contacts:{" "}
          </h3>
          <div>
            <p
              style={{ fontSize: 20, fontWeight: "bold", paddingTop: 10 }}
              className="text-red-500"
            >
              Departments
            </p>

            <p className="font-bold">
              Vestry Protocol:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                vestryprotocol@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              Secetary General Affairs (SGA):
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                sga@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              Fathers Personnal Assistant (PA):
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                pa@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              Correspondence :
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                correspondence@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              Bcs Information Officer :
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                informationofficer@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              Bcs Spokesman Office :
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                spokesman@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              Leaders Office:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                leaderoffice@ooobcs.org
              </a>
            </p>
            <p className="font-bold">
              Bcs ICT:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                bcsict@ooobcs.org
              </a>
            </p>
            <p className="font-bold">
              Bcs Treasury:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                bcstreasury@ooobcs.org
              </a>
            </p>
          </div>

          <div>
            <p
              style={{ fontSize: 20, fontWeight: "bold", paddingTop: 10 }}
              className="text-green-500"
            >
              Fellowships
            </p>

            <p className="font-bold">
              Christ Universal Spirited Fellowship:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                spiritedfellowship@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              Blessed Brothers and Sisters Fellowship:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                bbsfellowship@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              Chirst Natural Choirsters Fellowship:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                cncf@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              Christ Universal Children Fellowship :
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                cucf@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              Chirst Universal General Fellowship :
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                cugf@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              Chirst Universal Mercy Fellowship :
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                cumf@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              Chirst Universal Youth fellowsip:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                cuyf@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              International ABAS Fellowship:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                abas@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              Christ Universal Spiritual Council of Churches :
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                cuscc@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              International All Ordained Ones Fellowship:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                allordained@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              International Education Fellowship:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                education@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              International Elders Fellowship:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                elders@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              International Health Workers Fellowship:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                healthworkers@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              International Labour Fellowship:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                labour@ooobcs.org
              </a>
            </p>
            <p className="font-bold">
              International Lawyers Fellowship:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                lawyers@ooobcs.org
              </a>
            </p>
            <p className="font-bold">
              International Leaders Representative Fellowship:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                leadersrep@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              International Vegetarian Fellowship:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                vegetarian@ooobcs.org
              </a>
            </p>

            <p className="font-bold">
              Missionary Crusade Fellowship:
              <a
                href="mailto:vestryprotocol@ooo-bcsonline.org"
                className=" text-blue-500 ml-8  font-normal"
              >
                missionarycrusade@ooobcs.org
              </a>
            </p>
          </div>
        </div> */}
        <motion.nav
          className="md:pl-16 md:pr-16"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h3
            style={{ fontSize: 20, fontWeight: "bold", paddingTop: 10 }}
            className=" text-blue-400 ml-10 text-2xl"
          >
            Email Contacts:{" "}
          </h3>
          <section className="bg-[#fcfcfc] pb-20 flex place-items-center max-[900px]:grid">
            <div className="px-[40px] max-w-[900px] max-[700px]:w-[380px] max-[700px]:px-[0px] max-[700px]:max-h-[100%]">
              {accordioni.map((data, index) => {
                return (
                  <Email
                    key={index}
                    open={index === open}
                    question={data.question}
                    answer={data.answer}
                    emails={data.emails}
                    image={data.image}
                    toogle={() => toogle(index)}
                  />
                );
              })}
            </div>
          </section>
        </motion.nav>
      </div>

      <div className="items-center flex justify-center mt-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.6089690487156!2d8.311194214733476!3d4.937071796415696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1067861c8f717763%3A0xce99b1d4421e5a41!2s34%20Ambo%20St%2C%20Efut%20Abua%20540281%2C%20Calabar%2C%20Cross%20River!5e1!3m2!1sen!2sng!4v1674125165578!5m2!1sen!2sng"
          width="1500"
          height="500"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="rounded-lg cursor-pointer hover:shadow-lg ease-in-out hover:bg-white duration-100 ease-in-out transition-all animate-pulse hover:animate-none"
        ></iframe>
      </div>
    </motion.nav>
  );
};

export default Contact;
