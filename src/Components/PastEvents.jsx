import React, { useState } from "react";
import { motion } from "framer-motion";
// import Son from "../img/Events.jpg";
import AcordPast from "./AccordPast";
import { Link } from "react-router-dom";



function PastEvents() {
  const Son  = "https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2Fpe.jpg?alt=media&token=7c22bde0-1d6d-4a9e-8358-9ad1330e38ac";
  const [open, setOpen] = useState(false);

  const toogle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const aboutus = [
    {
        i: Son
    },
    {
        i: Son

    },
    {
        i: Son
    },
    {
        i: Son
    },
]

  const accordioni = [
    {
      question: "2000	-	Divine Coronation",
      answer:
        "Repentance and baptism of the Holy Spirit is the gateway to salvation, and into The Kingdom Of God. Through Baptism of the Holy Spirit, the gift of the holy spirit is bestowed unto you. Baptism is conducted at any time or day, whenever the person is ready to accept, it is for all ages. Matt 3:11 28:19, John 3:5, mark 16:16, Ephesian 4:4-5. Baptism is one of the sacraments in Brotherhood of The Cross and Star. It is a passage rite into Gods Kingdom now established on earth. All those seeking for the kingdom of God must observe the first step which is to be baptised by immersion notwithstanding whether or not one had been baptised elsewhere. Baptism can be conducted anywhere in the world, it is not restricted to any area or location. Once a new convert is ready for baptism, same should not be postponed. Members must be ready to administer at all times and at all places provided where there is water deep enough to cover the new convert when immersed. Children should be baptised too. The day of baptism into Brotherhood of the Cross and Star, the Kingdom of God on earth is a unique and most important day in the persons life; and the person should break a feast. It is a day of salvation, a day of joy. Baptism into Brotherhood of the Cross and Star is a must if one must have salvation (St johns 3:5; St mark 16:16) after baptism and anointing one becomes bound in unity with other brethren to fulfill the scriptures which says “one lord, one faith and one baptism”. Nobody is coerced, intimidated, threatened or begged to accept baptism in BCS. Prospective members must denounce and resign their membership all secret societies, do away with all charms and concoctions, rings and talisman, occult books, materials and practices before baptism; into Brotherhood, else such baptism is without benefit. Money is not charged for baptism; such practices are evil and attract terrible negative consequences to the perpetrator.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fcoronation1.jpg?alt=media&token=5a2073d1-e3b9-4056-b5fa-54452dad5a0b" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fcoronation3.jpg?alt=media&token=ebd5f673-2945-4df1-9e64-8630324f596d",
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fcoronation4.jpg?alt=media&token=629ed1e3-515f-4405-bdd8-555170c874b4" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fcoronation5.jpg?alt=media&token=98c6a4e6-09fd-438e-99c2-4ace802b0ef6" ,
    },
    {
      question: "2004			-	Eternal Dominion      ",
      answer:
        "Child blessing is an acceptable sacrament in Brotherhood. The practice of child blessing has an ancient origin. It is a form of acknowledgement and acceptance by a family, couple and families of God’s gift and God’s love experienced in the form of a child. As our Lord Jesus Christ was presented in the temple on the eight day, it is mandatory that every child in Brotherhood of the Cross and Star be blessed. It is done either during morning or evening prayers, but with strong emphasis on the eight day. There is an order for the conduction of child blessing as set down by the Holy Spirit.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent1.jpeg?alt=media&token=8e81abae-3f1b-4070-94e7-036f95366b88" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent3.jpeg?alt=media&token=a0871968-5e16-46ad-bc21-9be465fc73ac" ,
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent4.jpeg?alt=media&token=31798458-8295-414f-8710-d346e8070a29" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent7.jpeg?alt=media&token=f22a180e-3093-4cbb-908d-b5912ff9a819" ,
          },
    {
      question: "2005		-	Eternal Redeeming Covenant",
      answer:
        "Marriage blessing is also one of the sacraments in Brotherhood. Marriage as holy institution is recommended for all brethren of the fold, if they so which but on one condition that a man be husband to one wife, and a woman be wife to one husband. Solemnization of marriage in Brotherhood is the highest anybody can desire to experience because it is done by the Holy Spirit. The Father therefore advises that all brethren have their marriage blessed, even if they were married in court or church prior to their baptism into the fold.  Any man or woman who does not practice strict monogamy should remain a celibate. Trial, contract marriages are not allowed in Brotherhood. Once a man’s marriage is blessed, such cannot marry again except on the grounds of adultery or demise of one of the partners. All married couples, indeed all brethren, are advised to go and read the publication entitled “key to successful marriage” -sermons by Leader Olumba Olumba Obu.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent5.jpeg?alt=media&token=09ef570e-1b72-4838-a87b-38b1a98b846c" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent6.jpeg?alt=media&token=5b1911a1-9fef-4181-84d6-c99f0fa575b7" ,
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent7.jpeg?alt=media&token=f22a180e-3093-4cbb-908d-b5912ff9a819" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent8.jpeg?alt=media&token=7469f686-2b2c-469f-8358-45bc99c8373a",
          },
    {
      question: "2007	-	Seal of the Living God",
      answer:
        "Love feast is sacrament introduced by the Holy Spirit in Brotherhood of the Cross and Star. It is to commemorate the Passover last supper, during which our God and savior changed bread to his living Body, and wine to his priceless Blood. We daily celebrate the Holy Communion or the Love Feast.  The love feast is very sacred and can accomplish anything. Feast is not food that you can eat to be filled. Thus a piece of bread, biscuit, banana, orange, paw-paw, pineapple and even a spoon full of rice is enough for one to eat as feast. Feast should be bought, prepared and eaten with utmost reverence and respect to the Holy Spirit. Nobody should struggle and fight for feast.   When feast is served, everyone should kneel down when he or she collects same. No special time has been set for feast conducting. No special fruits are recommended for feast. No conditions, modality or amount are stipulated for celebration of feast. Feast in Consist of fruits, vegetables, rice etc., and water. It is purely vegetarian and is blessed and served after service or fasting.  Feast could be of two types Fruit feast: prepared basically with various types of fruit. Full feast: consist of both fruits and food. There is also house feast, which could be fruits or full. BCS members do house feast or blessing before or shortly after they move into a new house and also at will, as the Holy Spirit reveals or directs. Acts 2:42-47. BCS members neither kill, eat nor offer meat or fish; nor do they eat any dairy product. In BCS, Vegetarian is practiced. Eating of fruits is very important and significant, hence BCS members usually have fruits at their homes; fruits are served to visitor or strangers in place of drinks. Genesis 1:29., BCS members do not drink or offer alcoholic drink, wine, soft or any artificially mixed drink except water. Smoking and snuffing is not the food of the Holy Spirit and it is not acceptable in BCS.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent9.jpeg?alt=media&token=9cdd5646-08e6-4b16-8cc8-7bc923d5de19" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent10.jpeg?alt=media&token=789ea595-7cdc-45fe-8f76-07b4f81da6a2" ,
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent11.jpeg?alt=media&token=a5c0805c-bee8-4c73-854a-c63fbe4726ef" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent12.jpeg?alt=media&token=2b415d0b-0a8d-45b3-a7b8-0fefb2aeb601" ,
          },
    {
      question: "2008	-	March of the Redeemed/Golden Jubilee",
      answer:
        "Love feast is sacrament introduced by the Holy Spirit in Brotherhood of the Cross and Star. It is to commemorate the Passover last supper, during which our God and savior changed bread to his living Body, and wine to his priceless Blood. We daily celebrate the Holy Communion or the Love Feast.  The love feast is very sacred and can accomplish anything. Feast is not food that you can eat to be filled. Thus a piece of bread, biscuit, banana, orange, paw-paw, pineapple and even a spoon full of rice is enough for one to eat as feast. Feast should be bought, prepared and eaten with utmost reverence and respect to the Holy Spirit. Nobody should struggle and fight for feast.   When feast is served, everyone should kneel down when he or she collects same. No special time has been set for feast conducting. No special fruits are recommended for feast. No conditions, modality or amount are stipulated for celebration of feast. Feast in Consist of fruits, vegetables, rice etc., and water. It is purely vegetarian and is blessed and served after service or fasting.  Feast could be of two types Fruit feast: prepared basically with various types of fruit. Full feast: consist of both fruits and food. There is also house feast, which could be fruits or full. BCS members do house feast or blessing before or shortly after they move into a new house and also at will, as the Holy Spirit reveals or directs. Acts 2:42-47. BCS members neither kill, eat nor offer meat or fish; nor do they eat any dairy product. In BCS, Vegetarian is practiced. Eating of fruits is very important and significant, hence BCS members usually have fruits at their homes; fruits are served to visitor or strangers in place of drinks. Genesis 1:29., BCS members do not drink or offer alcoholic drink, wine, soft or any artificially mixed drink except water. Smoking and snuffing is not the food of the Holy Spirit and it is not acceptable in BCS.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent13.jpeg?alt=media&token=0a3a4088-4253-413f-949a-db964656acb2" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent15.jpeg?alt=media&token=4a29c2da-3197-403c-bd64-5bf3b9cb2a9c" ,
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent16.jpeg?alt=media&token=7010315d-3061-456e-9816-e378201cc599" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent17.jpeg?alt=media&token=dae23262-7d8b-4496-9e19-73592465f5eb" ,
          },
    {
      question: "2009	-	Divine Anointing",
      answer:
        "Love feast is sacrament introduced by the Holy Spirit in Brotherhood of the Cross and Star. It is to commemorate the Passover last supper, during which our God and savior changed bread to his living Body, and wine to his priceless Blood. We daily celebrate the Holy Communion or the Love Feast.  The love feast is very sacred and can accomplish anything. Feast is not food that you can eat to be filled. Thus a piece of bread, biscuit, banana, orange, paw-paw, pineapple and even a spoon full of rice is enough for one to eat as feast. Feast should be bought, prepared and eaten with utmost reverence and respect to the Holy Spirit. Nobody should struggle and fight for feast.   When feast is served, everyone should kneel down when he or she collects same. No special time has been set for feast conducting. No special fruits are recommended for feast. No conditions, modality or amount are stipulated for celebration of feast. Feast in Consist of fruits, vegetables, rice etc., and water. It is purely vegetarian and is blessed and served after service or fasting.  Feast could be of two types Fruit feast: prepared basically with various types of fruit. Full feast: consist of both fruits and food. There is also house feast, which could be fruits or full. BCS members do house feast or blessing before or shortly after they move into a new house and also at will, as the Holy Spirit reveals or directs. Acts 2:42-47. BCS members neither kill, eat nor offer meat or fish; nor do they eat any dairy product. In BCS, Vegetarian is practiced. Eating of fruits is very important and significant, hence BCS members usually have fruits at their homes; fruits are served to visitor or strangers in place of drinks. Genesis 1:29., BCS members do not drink or offer alcoholic drink, wine, soft or any artificially mixed drink except water. Smoking and snuffing is not the food of the Holy Spirit and it is not acceptable in BCS.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent18.jpeg?alt=media&token=c605cbff-78d1-4246-9d76-e23de9cb0958" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent19.jpeg?alt=media&token=2d71bf63-38eb-45dc-936b-6d9ec8dc1397" ,
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent20.jpeg?alt=media&token=b3a46f7c-96c1-45cd-bf84-d1143e66a018" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent21.jpeg?alt=media&token=e40640f0-daae-42d3-9408-6892888533e5" ,
          },
    {
      question: "2010	-	My Redeemer Liveth",
      answer:
        "Love feast is sacrament introduced by the Holy Spirit in Brotherhood of the Cross and Star. It is to commemorate the Passover last supper, during which our God and savior changed bread to his living Body, and wine to his priceless Blood. We daily celebrate the Holy Communion or the Love Feast.  The love feast is very sacred and can accomplish anything. Feast is not food that you can eat to be filled. Thus a piece of bread, biscuit, banana, orange, paw-paw, pineapple and even a spoon full of rice is enough for one to eat as feast. Feast should be bought, prepared and eaten with utmost reverence and respect to the Holy Spirit. Nobody should struggle and fight for feast.   When feast is served, everyone should kneel down when he or she collects same. No special time has been set for feast conducting. No special fruits are recommended for feast. No conditions, modality or amount are stipulated for celebration of feast. Feast in Consist of fruits, vegetables, rice etc., and water. It is purely vegetarian and is blessed and served after service or fasting.  Feast could be of two types Fruit feast: prepared basically with various types of fruit. Full feast: consist of both fruits and food. There is also house feast, which could be fruits or full. BCS members do house feast or blessing before or shortly after they move into a new house and also at will, as the Holy Spirit reveals or directs. Acts 2:42-47. BCS members neither kill, eat nor offer meat or fish; nor do they eat any dairy product. In BCS, Vegetarian is practiced. Eating of fruits is very important and significant, hence BCS members usually have fruits at their homes; fruits are served to visitor or strangers in place of drinks. Genesis 1:29., BCS members do not drink or offer alcoholic drink, wine, soft or any artificially mixed drink except water. Smoking and snuffing is not the food of the Holy Spirit and it is not acceptable in BCS.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent1.jpeg?alt=media&token=8e81abae-3f1b-4070-94e7-036f95366b88" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent3.jpeg?alt=media&token=a0871968-5e16-46ad-bc21-9be465fc73ac" ,
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent4.jpeg?alt=media&token=31798458-8295-414f-8710-d346e8070a29" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent7.jpeg?alt=media&token=f22a180e-3093-4cbb-908d-b5912ff9a819" ,
          },
    {
      question: "2011			-	Overcomers’ Convention",
      answer:
        "Love feast is sacrament introduced by the Holy Spirit in Brotherhood of the Cross and Star. It is to commemorate the Passover last supper, during which our God and savior changed bread to his living Body, and wine to his priceless Blood. We daily celebrate the Holy Communion or the Love Feast.  The love feast is very sacred and can accomplish anything. Feast is not food that you can eat to be filled. Thus a piece of bread, biscuit, banana, orange, paw-paw, pineapple and even a spoon full of rice is enough for one to eat as feast. Feast should be bought, prepared and eaten with utmost reverence and respect to the Holy Spirit. Nobody should struggle and fight for feast.   When feast is served, everyone should kneel down when he or she collects same. No special time has been set for feast conducting. No special fruits are recommended for feast. No conditions, modality or amount are stipulated for celebration of feast. Feast in Consist of fruits, vegetables, rice etc., and water. It is purely vegetarian and is blessed and served after service or fasting.  Feast could be of two types Fruit feast: prepared basically with various types of fruit. Full feast: consist of both fruits and food. There is also house feast, which could be fruits or full. BCS members do house feast or blessing before or shortly after they move into a new house and also at will, as the Holy Spirit reveals or directs. Acts 2:42-47. BCS members neither kill, eat nor offer meat or fish; nor do they eat any dairy product. In BCS, Vegetarian is practiced. Eating of fruits is very important and significant, hence BCS members usually have fruits at their homes; fruits are served to visitor or strangers in place of drinks. Genesis 1:29., BCS members do not drink or offer alcoholic drink, wine, soft or any artificially mixed drink except water. Smoking and snuffing is not the food of the Holy Spirit and it is not acceptable in BCS.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent5.jpeg?alt=media&token=09ef570e-1b72-4838-a87b-38b1a98b846c" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent6.jpeg?alt=media&token=5b1911a1-9fef-4181-84d6-c99f0fa575b7" ,
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent7.jpeg?alt=media&token=f22a180e-3093-4cbb-908d-b5912ff9a819" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent8.jpeg?alt=media&token=7469f686-2b2c-469f-8358-45bc99c8373a",
          },
    {
      question: "2012		-	Abba Father",
      answer:
        "Love feast is sacrament introduced by the Holy Spirit in Brotherhood of the Cross and Star. It is to commemorate the Passover last supper, during which our God and savior changed bread to his living Body, and wine to his priceless Blood. We daily celebrate the Holy Communion or the Love Feast.  The love feast is very sacred and can accomplish anything. Feast is not food that you can eat to be filled. Thus a piece of bread, biscuit, banana, orange, paw-paw, pineapple and even a spoon full of rice is enough for one to eat as feast. Feast should be bought, prepared and eaten with utmost reverence and respect to the Holy Spirit. Nobody should struggle and fight for feast.   When feast is served, everyone should kneel down when he or she collects same. No special time has been set for feast conducting. No special fruits are recommended for feast. No conditions, modality or amount are stipulated for celebration of feast. Feast in Consist of fruits, vegetables, rice etc., and water. It is purely vegetarian and is blessed and served after service or fasting.  Feast could be of two types Fruit feast: prepared basically with various types of fruit. Full feast: consist of both fruits and food. There is also house feast, which could be fruits or full. BCS members do house feast or blessing before or shortly after they move into a new house and also at will, as the Holy Spirit reveals or directs. Acts 2:42-47. BCS members neither kill, eat nor offer meat or fish; nor do they eat any dairy product. In BCS, Vegetarian is practiced. Eating of fruits is very important and significant, hence BCS members usually have fruits at their homes; fruits are served to visitor or strangers in place of drinks. Genesis 1:29., BCS members do not drink or offer alcoholic drink, wine, soft or any artificially mixed drink except water. Smoking and snuffing is not the food of the Holy Spirit and it is not acceptable in BCS.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent1.jpeg?alt=media&token=8e81abae-3f1b-4070-94e7-036f95366b88" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent3.jpeg?alt=media&token=a0871968-5e16-46ad-bc21-9be465fc73ac" ,
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent4.jpeg?alt=media&token=31798458-8295-414f-8710-d346e8070a29" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent7.jpeg?alt=media&token=f22a180e-3093-4cbb-908d-b5912ff9a819" ,
          },
    {
      question: "2013		-	Salt of the Earth",
      answer:
        "Love feast is sacrament introduced by the Holy Spirit in Brotherhood of the Cross and Star. It is to commemorate the Passover last supper, during which our God and savior changed bread to his living Body, and wine to his priceless Blood. We daily celebrate the Holy Communion or the Love Feast.  The love feast is very sacred and can accomplish anything. Feast is not food that you can eat to be filled. Thus a piece of bread, biscuit, banana, orange, paw-paw, pineapple and even a spoon full of rice is enough for one to eat as feast. Feast should be bought, prepared and eaten with utmost reverence and respect to the Holy Spirit. Nobody should struggle and fight for feast.   When feast is served, everyone should kneel down when he or she collects same. No special time has been set for feast conducting. No special fruits are recommended for feast. No conditions, modality or amount are stipulated for celebration of feast. Feast in Consist of fruits, vegetables, rice etc., and water. It is purely vegetarian and is blessed and served after service or fasting.  Feast could be of two types Fruit feast: prepared basically with various types of fruit. Full feast: consist of both fruits and food. There is also house feast, which could be fruits or full. BCS members do house feast or blessing before or shortly after they move into a new house and also at will, as the Holy Spirit reveals or directs. Acts 2:42-47. BCS members neither kill, eat nor offer meat or fish; nor do they eat any dairy product. In BCS, Vegetarian is practiced. Eating of fruits is very important and significant, hence BCS members usually have fruits at their homes; fruits are served to visitor or strangers in place of drinks. Genesis 1:29., BCS members do not drink or offer alcoholic drink, wine, soft or any artificially mixed drink except water. Smoking and snuffing is not the food of the Holy Spirit and it is not acceptable in BCS.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent5.jpeg?alt=media&token=09ef570e-1b72-4838-a87b-38b1a98b846c" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent6.jpeg?alt=media&token=5b1911a1-9fef-4181-84d6-c99f0fa575b7" ,
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent7.jpeg?alt=media&token=f22a180e-3093-4cbb-908d-b5912ff9a819" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent8.jpeg?alt=media&token=7469f686-2b2c-469f-8358-45bc99c8373a",
          },
    {
      question: "2014		-	Hidden Manner",
      answer:
        "Love feast is sacrament introduced by the Holy Spirit in Brotherhood of the Cross and Star. It is to commemorate the Passover last supper, during which our God and savior changed bread to his living Body, and wine to his priceless Blood. We daily celebrate the Holy Communion or the Love Feast.  The love feast is very sacred and can accomplish anything. Feast is not food that you can eat to be filled. Thus a piece of bread, biscuit, banana, orange, paw-paw, pineapple and even a spoon full of rice is enough for one to eat as feast. Feast should be bought, prepared and eaten with utmost reverence and respect to the Holy Spirit. Nobody should struggle and fight for feast.   When feast is served, everyone should kneel down when he or she collects same. No special time has been set for feast conducting. No special fruits are recommended for feast. No conditions, modality or amount are stipulated for celebration of feast. Feast in Consist of fruits, vegetables, rice etc., and water. It is purely vegetarian and is blessed and served after service or fasting.  Feast could be of two types Fruit feast: prepared basically with various types of fruit. Full feast: consist of both fruits and food. There is also house feast, which could be fruits or full. BCS members do house feast or blessing before or shortly after they move into a new house and also at will, as the Holy Spirit reveals or directs. Acts 2:42-47. BCS members neither kill, eat nor offer meat or fish; nor do they eat any dairy product. In BCS, Vegetarian is practiced. Eating of fruits is very important and significant, hence BCS members usually have fruits at their homes; fruits are served to visitor or strangers in place of drinks. Genesis 1:29., BCS members do not drink or offer alcoholic drink, wine, soft or any artificially mixed drink except water. Smoking and snuffing is not the food of the Holy Spirit and it is not acceptable in BCS.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent1.jpeg?alt=media&token=8e81abae-3f1b-4070-94e7-036f95366b88" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent3.jpeg?alt=media&token=a0871968-5e16-46ad-bc21-9be465fc73ac" ,
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent4.jpeg?alt=media&token=31798458-8295-414f-8710-d346e8070a29" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent7.jpeg?alt=media&token=f22a180e-3093-4cbb-908d-b5912ff9a819" ,
          },
    {
      question: "2015		-	Powerful Remnant",
      answer:
        "Love feast is sacrament introduced by the Holy Spirit in Brotherhood of the Cross and Star. It is to commemorate the Passover last supper, during which our God and savior changed bread to his living Body, and wine to his priceless Blood. We daily celebrate the Holy Communion or the Love Feast.  The love feast is very sacred and can accomplish anything. Feast is not food that you can eat to be filled. Thus a piece of bread, biscuit, banana, orange, paw-paw, pineapple and even a spoon full of rice is enough for one to eat as feast. Feast should be bought, prepared and eaten with utmost reverence and respect to the Holy Spirit. Nobody should struggle and fight for feast.   When feast is served, everyone should kneel down when he or she collects same. No special time has been set for feast conducting. No special fruits are recommended for feast. No conditions, modality or amount are stipulated for celebration of feast. Feast in Consist of fruits, vegetables, rice etc., and water. It is purely vegetarian and is blessed and served after service or fasting.  Feast could be of two types Fruit feast: prepared basically with various types of fruit. Full feast: consist of both fruits and food. There is also house feast, which could be fruits or full. BCS members do house feast or blessing before or shortly after they move into a new house and also at will, as the Holy Spirit reveals or directs. Acts 2:42-47. BCS members neither kill, eat nor offer meat or fish; nor do they eat any dairy product. In BCS, Vegetarian is practiced. Eating of fruits is very important and significant, hence BCS members usually have fruits at their homes; fruits are served to visitor or strangers in place of drinks. Genesis 1:29., BCS members do not drink or offer alcoholic drink, wine, soft or any artificially mixed drink except water. Smoking and snuffing is not the food of the Holy Spirit and it is not acceptable in BCS.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent5.jpeg?alt=media&token=09ef570e-1b72-4838-a87b-38b1a98b846c" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent6.jpeg?alt=media&token=5b1911a1-9fef-4181-84d6-c99f0fa575b7" ,
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent7.jpeg?alt=media&token=f22a180e-3093-4cbb-908d-b5912ff9a819" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent8.jpeg?alt=media&token=7469f686-2b2c-469f-8358-45bc99c8373a",
          },
    {
      question: "2016		-	Olumba’s Supreme Temple",
      answer:
        "Love feast is sacrament introduced by the Holy Spirit in Brotherhood of the Cross and Star. It is to commemorate the Passover last supper, during which our God and savior changed bread to his living Body, and wine to his priceless Blood. We daily celebrate the Holy Communion or the Love Feast.  The love feast is very sacred and can accomplish anything. Feast is not food that you can eat to be filled. Thus a piece of bread, biscuit, banana, orange, paw-paw, pineapple and even a spoon full of rice is enough for one to eat as feast. Feast should be bought, prepared and eaten with utmost reverence and respect to the Holy Spirit. Nobody should struggle and fight for feast.   When feast is served, everyone should kneel down when he or she collects same. No special time has been set for feast conducting. No special fruits are recommended for feast. No conditions, modality or amount are stipulated for celebration of feast. Feast in Consist of fruits, vegetables, rice etc., and water. It is purely vegetarian and is blessed and served after service or fasting.  Feast could be of two types Fruit feast: prepared basically with various types of fruit. Full feast: consist of both fruits and food. There is also house feast, which could be fruits or full. BCS members do house feast or blessing before or shortly after they move into a new house and also at will, as the Holy Spirit reveals or directs. Acts 2:42-47. BCS members neither kill, eat nor offer meat or fish; nor do they eat any dairy product. In BCS, Vegetarian is practiced. Eating of fruits is very important and significant, hence BCS members usually have fruits at their homes; fruits are served to visitor or strangers in place of drinks. Genesis 1:29., BCS members do not drink or offer alcoholic drink, wine, soft or any artificially mixed drink except water. Smoking and snuffing is not the food of the Holy Spirit and it is not acceptable in BCS.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent1.jpeg?alt=media&token=8e81abae-3f1b-4070-94e7-036f95366b88" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent3.jpeg?alt=media&token=a0871968-5e16-46ad-bc21-9be465fc73ac" ,
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent4.jpeg?alt=media&token=31798458-8295-414f-8710-d346e8070a29" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent7.jpeg?alt=media&token=f22a180e-3093-4cbb-908d-b5912ff9a819" ,
          },
    {
      question: "2018			-	Centenary of the Ancient of Days",
      answer:
        "Love feast is sacrament introduced by the Holy Spirit in Brotherhood of the Cross and Star. It is to commemorate the Passover last supper, during which our God and savior changed bread to his living Body, and wine to his priceless Blood. We daily celebrate the Holy Communion or the Love Feast.  The love feast is very sacred and can accomplish anything. Feast is not food that you can eat to be filled. Thus a piece of bread, biscuit, banana, orange, paw-paw, pineapple and even a spoon full of rice is enough for one to eat as feast. Feast should be bought, prepared and eaten with utmost reverence and respect to the Holy Spirit. Nobody should struggle and fight for feast.   When feast is served, everyone should kneel down when he or she collects same. No special time has been set for feast conducting. No special fruits are recommended for feast. No conditions, modality or amount are stipulated for celebration of feast. Feast in Consist of fruits, vegetables, rice etc., and water. It is purely vegetarian and is blessed and served after service or fasting.  Feast could be of two types Fruit feast: prepared basically with various types of fruit. Full feast: consist of both fruits and food. There is also house feast, which could be fruits or full. BCS members do house feast or blessing before or shortly after they move into a new house and also at will, as the Holy Spirit reveals or directs. Acts 2:42-47. BCS members neither kill, eat nor offer meat or fish; nor do they eat any dairy product. In BCS, Vegetarian is practiced. Eating of fruits is very important and significant, hence BCS members usually have fruits at their homes; fruits are served to visitor or strangers in place of drinks. Genesis 1:29., BCS members do not drink or offer alcoholic drink, wine, soft or any artificially mixed drink except water. Smoking and snuffing is not the food of the Holy Spirit and it is not acceptable in BCS.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent5.jpeg?alt=media&token=09ef570e-1b72-4838-a87b-38b1a98b846c" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent6.jpeg?alt=media&token=5b1911a1-9fef-4181-84d6-c99f0fa575b7" ,
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent7.jpeg?alt=media&token=f22a180e-3093-4cbb-908d-b5912ff9a819" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent8.jpeg?alt=media&token=7469f686-2b2c-469f-8358-45bc99c8373a",
          },
    {
      question: "2019	-	Heavenly Father",
      answer:
        "Love feast is sacrament introduced by the Holy Spirit in Brotherhood of the Cross and Star. It is to commemorate the Passover last supper, during which our God and savior changed bread to his living Body, and wine to his priceless Blood. We daily celebrate the Holy Communion or the Love Feast.  The love feast is very sacred and can accomplish anything. Feast is not food that you can eat to be filled. Thus a piece of bread, biscuit, banana, orange, paw-paw, pineapple and even a spoon full of rice is enough for one to eat as feast. Feast should be bought, prepared and eaten with utmost reverence and respect to the Holy Spirit. Nobody should struggle and fight for feast.   When feast is served, everyone should kneel down when he or she collects same. No special time has been set for feast conducting. No special fruits are recommended for feast. No conditions, modality or amount are stipulated for celebration of feast. Feast in Consist of fruits, vegetables, rice etc., and water. It is purely vegetarian and is blessed and served after service or fasting.  Feast could be of two types Fruit feast: prepared basically with various types of fruit. Full feast: consist of both fruits and food. There is also house feast, which could be fruits or full. BCS members do house feast or blessing before or shortly after they move into a new house and also at will, as the Holy Spirit reveals or directs. Acts 2:42-47. BCS members neither kill, eat nor offer meat or fish; nor do they eat any dairy product. In BCS, Vegetarian is practiced. Eating of fruits is very important and significant, hence BCS members usually have fruits at their homes; fruits are served to visitor or strangers in place of drinks. Genesis 1:29., BCS members do not drink or offer alcoholic drink, wine, soft or any artificially mixed drink except water. Smoking and snuffing is not the food of the Holy Spirit and it is not acceptable in BCS.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent1.jpeg?alt=media&token=8e81abae-3f1b-4070-94e7-036f95366b88" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent3.jpeg?alt=media&token=a0871968-5e16-46ad-bc21-9be465fc73ac" ,
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent4.jpeg?alt=media&token=31798458-8295-414f-8710-d346e8070a29" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fpastevent7.jpeg?alt=media&token=f22a180e-3093-4cbb-908d-b5912ff9a819" ,
          },
    {
      question: "2023	-	Divine Numbering Of The Elects",
      answer:
        "Love feast is sacrament introduced by the Holy Spirit in Brotherhood of the Cross and Star. It is to commemorate the Passover last supper, during which our God and savior changed bread to his living Body, and wine to his priceless Blood. We daily celebrate the Holy Communion or the Love Feast.  The love feast is very sacred and can accomplish anything. Feast is not food that you can eat to be filled. Thus a piece of bread, biscuit, banana, orange, paw-paw, pineapple and even a spoon full of rice is enough for one to eat as feast. Feast should be bought, prepared and eaten with utmost reverence and respect to the Holy Spirit. Nobody should struggle and fight for feast.   When feast is served, everyone should kneel down when he or she collects same. No special time has been set for feast conducting. No special fruits are recommended for feast. No conditions, modality or amount are stipulated for celebration of feast. Feast in Consist of fruits, vegetables, rice etc., and water. It is purely vegetarian and is blessed and served after service or fasting.  Feast could be of two types Fruit feast: prepared basically with various types of fruit. Full feast: consist of both fruits and food. There is also house feast, which could be fruits or full. BCS members do house feast or blessing before or shortly after they move into a new house and also at will, as the Holy Spirit reveals or directs. Acts 2:42-47. BCS members neither kill, eat nor offer meat or fish; nor do they eat any dairy product. In BCS, Vegetarian is practiced. Eating of fruits is very important and significant, hence BCS members usually have fruits at their homes; fruits are served to visitor or strangers in place of drinks. Genesis 1:29., BCS members do not drink or offer alcoholic drink, wine, soft or any artificially mixed drink except water. Smoking and snuffing is not the food of the Holy Spirit and it is not acceptable in BCS.",
        image:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent9.jpeg?alt=media&token=9cdd5646-08e6-4b16-8cc8-7bc923d5de19" ,
        image1:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent10.jpeg?alt=media&token=789ea595-7cdc-45fe-8f76-07b4f81da6a2" ,
        image2:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent11.jpeg?alt=media&token=a5c0805c-bee8-4c73-854a-c63fbe4726ef" ,
        image3:"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/pastevent%2Fevent12.jpeg?alt=media&token=2b415d0b-0a8d-45b3-a7b8-0fefb2aeb601" ,
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
                      <img  src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2Fpastevent.jpg?alt=media&token=388f5b1b-8c1b-4c2c-8f99-ac20b8ad51fb" style={{ width: '85%', }}/>
      </div>

            {/* <img  src={Son} style={{ width: '100%', marginBottom: 0    }}/>
            <h6 style={{ color: "#333", padding: 30, }}  className="">
In Brotherhood Of The Cross And Star Certain rites are performed according
to the directives of The Holy Spirit. These include Baptism, Child Blessing, 
Love Feast and Marriage Blessing...
</h6> */}
              {/* <h1 style={{}} className="text-6xl pt-5 p-5  text-center bg-[#b30000] font-bold bg-gradient-to-r from-[#b30000]-400 via-purple-500 to-[#b30000]-800 text-transparent bg-clip-text">
PAST EVENTS
</h1> */}

<h1 style={{fontSize:40, color: "#b30000", fontWeight: "bold", paddingTop: 30 }}  className=" text-center">BCS PAST MEGA EVENTS</h1>


    <section className="bg-[#fcfcfc] pb-20 flex justify-center max-[900px]:grid">
      <div className="px-[40px] max-w-[900px] max-[700px]:w-[380px] max-[700px]:px-[0px] max-[700px]:max-h-[100%]">
        {accordioni.map((data, index) => {
          return (
            <AcordPast
              key={index}
              open={index === open}
              question={data.question}
            //   answer={data.answer}
              image={data.image}
              image1={data.image1}
              image2={data.image2}
              image3={data.image3}
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
            <Link  to="/About">
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

export default PastEvents;