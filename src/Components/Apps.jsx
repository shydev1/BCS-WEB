import { motion } from "framer-motion";

const Apps = () => {
  return (
    <motion.nav
      className="pt-2 md:pl-20 md:pr-20"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="w-[100%] text-center mt-5 md:p-5 flex justify-center">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fmobileappbanner.jpg?alt=media&token=11e9ba9b-9dcf-4ffc-94b7-d71a5fd1a3d7"
        style={{ width: "80%", marginTop: 0 }}
      />
      </div>
      <h1
        style={{
          fontSize: 40,
          color: "#b30000",
          fontWeight: "bold",
          paddingTop: 30,
        }}
        className=" text-center"
      >
        Mobile Apps
      </h1>
      <div className="flex justify-center items-center py-3 pt-2">
        <div
          style={{ paddingBottom: 80 }}
          className="flex justify-center items-center py-3">
          <div class="bg-white-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
            <a
              target={"_blank"}
              href="https://play.google.com/store/apps/details?id=com.adixsoft.egc&hl=en&gl=US"
              class="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
            >
              <img class="h-40 w-80 object-cover rounded-xl" src={"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2Fp3.png?alt=media&token=a8683f5e-bb89-4106-b8c0-fa0839ea2ea8"} />
              <div class="p-2">
                <h2 class="font-bold text-lg mb-2 text-center ">
                  The Everlasting Gospel App
                </h2>
                <p class="text-sm text-gray-600">
                  The Everlasting Gospel Mobile App is a collection of some of
                  the numerous Gospels, Bible Lectures, videos, audios, altar
                  briefs delivered by the Holy Spirit personified - Great Leader
                  Olumba Olumba Obu and His Christ His Holiness Olumba Olumba
                  Obu.
                </p>
              </div>
              {/* <div class="m-2">
          <a role='button' href='https://www.youtube.com/channel/UCvSDd_EpEMWXPF6MvWwi8dA' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
        </div> */}
            </a>
            <a
              target={"_blank"}
              href="https://play.google.com/store/apps/details?id=com.bcs.bcsevangelismapp&hl=en&gl=US"
              class="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
            >
              <img class="h-40 w-80 object-cover rounded-xl" src={"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2Fp2.png?alt=media&token=76592de0-e73c-4899-813f-75e58601ac56"} />
              <div class="p-2">
                <h2 class="font-bold text-lg mb-2  text-center">
                  Immortal Words App
                </h2>
                <p class="text-sm text-gray-600">
                  The Immortal Words App is an educative and informative social
                  media community that teaches and encourages moralities and
                  values of love, togetherness, humility, forgiveness, peace,
                  truth, and other good virtues
                </p>
              </div>
              {/* <div class="m-2">
          <a role='button' href='#' class="text-white bg-sky-500 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
        </div> */}
            </a>
            <a
              target={"_blank"}
              href="https://play.google.com/store/apps/details?id=io.cordova.BCS_HYMNARY&hl=en&gl=US"
              class="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
            >
              <img class="h-40 w-80 object-cover rounded-xl" src={"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2Fp1.png?alt=media&token=4129d57b-77f9-49f9-b223-e56099663a92"} />
              <div class="p-2">
                <h2 class="font-bold text-lg mb-2 ">BCS Hymnary</h2>
                <p class="text-sm text-gray-600">
                  The Brotherhood Hymnary is a comprehensive app contenting all
                  Brotherhood Hymns. This mobile app is an offline application
                  and requires no internet connection to use after the initial
                  download
                </p>
              </div>
              {/* <div class="m-2">
          <a role='button' href='#' class="text-white bg-green-500 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
        </div> */}
            </a>
            <a
              target={"_blank"}
              href="https://play.google.com/store/apps/details?id=com.alluniverses.biva&hl=en&gl=US"
              class="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
            >
              <img class="h-40 w-80 object-cover rounded-xl" src={"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2Fp.png?alt=media&token=ebb635ec-fdc9-408b-a06e-9e9a7335bae8"} />
              <div class="p-2">
                <h2 class="font-bold text-lg mb-2 ">BCS Eva</h2>
                <p class="text-sm text-gray-600">
                  BCS Eva is the first ever BCS Chatbot built to solve and also
                  aims at answering any question concerning Brotherhood of the
                  Cross and Star. You can get it on the Google Play Store Will
                  be on the App store soon.....
                </p>
              </div>
              {/* <div class="m-2">
          <a role='button' href='#' class="text-white bg-green-500 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
        </div> */}
            </a>
            <a
              target={"_blank"}
              href="https://play.google.com/store/apps/details?id=com.danielonugu.LearnBiakpan&hl=en&gl=US"
              class="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
            >
              <img class="h-40 w-80 object-cover rounded-xl" src={"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2Flen.jpg?alt=media&token=1ff6d4c9-148b-473a-9d4e-7f96efb28179"} />
              <div class="p-2">
                <h2 class="font-bold text-lg mb-2 ">Learn Biakpan</h2>
                <p class="text-sm text-gray-600">
                  With the mobile app you can learn the new world language at
                  the comfort of your home, and you can also learn the language
                  at anytime, anywhere, any day.
                </p>
              </div>
              {/* <div class="m-2">
          <a role='button' href='https://play.google.com/store/apps/details?id=com.danielonugu.LearnBiakpan&hl=en&gl=US' class="text-white bg-red-600 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
        </div> */}
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Apps;
