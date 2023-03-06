import antmanImg from "./imgs/antman.png";
import blackwidowImg from "./imgs/black-widow.png";
import captainAmericaImg from "./imgs/captain-america.png";
import deadpoolImg from "./imgs/deadpool.png";
import doctorStrangeImg from "./imgs/doctor-strange.png";
import ironManImg from "./imgs/ironman.png";
import spidermanImg from "./imgs/spiderman.png";
import starLordImg from "./imgs/starlord.png";
import thorImg from "./imgs/thor.png";

const characters = [
  {
    styles: {
      backgroundColor: "#357250",
      zIndex: "9",
    },
    name: () => (
      <>
        Dr.
        <br />
        Stephen Strange
      </>
    ),
    alt: "Dr. Strange",
    years: () => (
      <>
        2016 -<br />
        Present
      </>
    ),
    imgSrc: doctorStrangeImg,
  },
  {
    styles: {
      backgroundColor: "#F44746",
      zIndex: "8",
    },
    name: () => (
      <>
        The
        <br />
        Ironman
      </>
    ),
    alt: "Ironman",
    years: () => (
      <>
        2008 -<br />
        2019
      </>
    ),
    imgSrc: ironManImg,
  },
  {
    styles: {
      backgroundColor: "#3D5F7B",
      zIndex: "7",
    },
    name: () => (
      <>
        Thor
        <br />
        The Son of Odin
      </>
    ),
    alt: "Thor",
    years: () => (
      <>
        2011 -<br />
        Present
      </>
    ),
    imgSrc: thorImg,
  },
  {
    styles: {
      backgroundColor: "#23A4D1",
      zIndex: "6",
    },
    name: () => (
      <>
        The
        <br />
        Captain America
      </>
    ),
    alt: "Captain America",
    years: () => (
      <>
        2011 -<br />
        2019
      </>
    ),
    imgSrc: captainAmericaImg,
  },
  {
    styles: {
      backgroundColor: "#FF5050",
      zIndex: "5",
    },
    name: () => (
      <>
        The
        <br />
        Deadpool
      </>
    ),
    alt: "Deadpool",
    years: () => (
      <>
        2016 -<br />
        Present
      </>
    ),
    imgSrc: deadpoolImg,
  },
  {
    styles: {
      backgroundColor: "#23A4D1",
      zIndex: "4",
    },
    name: () => (
      <>
        The
        <br />
        Spiderman
      </>
    ),
    alt: "Spiderman",
    years: () => (
      <>
        2017 -<br />
        Present
      </>
    ),
    imgSrc: spidermanImg,
  },
  {
    styles: {
      backgroundColor: "#FF5050",
      zIndex: "3",
    },
    name: () => (
      <>
        The
        <br />
        Star Lord
      </>
    ),
    alt: "Star Lord",
    years: () => (
      <>
        2014 -<br />
        Present
      </>
    ),
    imgSrc: starLordImg,
  },
  {
    styles: {
      backgroundColor: "#A633F0",
      zIndex: "2",
    },
    name: () => (
      <>
        The
        <br />
        Black Widow
      </>
    ),
    alt: "Black Widow",
    years: () => (
      <>
        2010 -<br />
        2019
      </>
    ),
    imgSrc: blackwidowImg,
  },
  {
    styles: {
      backgroundColor: "#FBCA03",
      zIndex: "1",
    },
    name: () => (
      <>
        The
        <br />
        Antman
      </>
    ),
    alt: "Antman",
    years: () => (
      <>
        2015 -<br />
        Present
      </>
    ),
    imgSrc: antmanImg,
  },
];

export default characters;
