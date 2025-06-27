import type { ImageMetadata } from "astro";
import BirdImage from "../../public/gallery/ink/bird.png";
import ButterflyImage from "../../public/gallery/ink/butterflies.png";
import BusinessNatural from "../../public/gallery/digital_art/taking_care_of_business.jpg";
import CatOnShoulder from "../../public/gallery/digital_art/looking_over_your_shoulder.jpg";
import CottonFlower from "../../public/gallery/digital_art/cottonflower.jpg";
import Astronaut from "../../public/gallery/digital_art/astronaut.jpg";
import Bonsai from "../../public/gallery/digital_art/bonsai.jpg";
import Surprised from "../../public/gallery/digital_art/surprised.jpg";
import Home from "../../public/gallery/digital_art/peace.jpg";
import Husband from "../../public/gallery/digital_art/ari.jpg";
import Rainbows from "../../public/gallery/digital_art/neko_rainbows.png";
import NekoHebiTori from "../../public/gallery/digital_art/neko_hebi_tori.jpg";
import Serene from "../../public/gallery/digital_art/image_0274.png";
import RoadSigns from "../../public/gallery/digital_art/image_0276.png";
import Mendokusai from "../../public/gallery/digital_art/Mendokusai.jpg";
import NeuronRiot from "../../public/gallery/digital_art/IMG_0371.png";
import OnFire from "../../public/main/img404.jpg";
import SelfPortrait from "../../public/gallery/digital_art/me_in_color.png";
import SocialDistance from "../../public/gallery/digital_art/IMG_0277.png";
import Pumpkin from "../../public/gallery/clay/pumpkin.jpg";
import Calcifer from "../../public/gallery/clay/calcifer.png";
import Kitsune from "../../public/gallery/clay/kitsune_yagmur.jpg";
import Kaonashi from "../../public/gallery/clay/kaonashi_yagmur.jpg";
import Wolf from "../../public/gallery/clay/wolf_yagmur.png";
import ZeldaMask from "../../public/gallery/clay/zeldamask_yagmur.png";
import StandingTallSculpture from "../../public/gallery/clay/standingtall_yagmur.jpg";
import Sandman from "../../public/gallery/clay/snowman_yagmur.png";
import Kindred from "../../public/gallery/clay/kindred_yagmur.png";
import HappyPupper from "../../public/gallery/clay/doggo_yagmur.png";
import Lion from "../../public/gallery/clay/lionmask_yagmur.png";
import Warrior from "../../public/gallery/clay/warrior_yagmur.png";
import Pagoda from "../../public/gallery/clay/pagoda_yagmur.png";
import Fragile from "../../public/gallery/clay/fragile_yagmur.png";
import AstronautLinocut1 from "../../public/gallery/linocut/astronaut.png";
import AstronautLinocut2 from "../../public/gallery/linocut/astronaut2.png";
import Spidey from "../../public/gallery/linocut/spidey.png";
import TheBumblebee from "../../public/gallery/intaglio/thebumblebee.png";

export type GalleryData = {
  name: string;
  year: string;
  medium: string;
  imageSrc: ImageMetadata;
  altText: string;
  studio?: string;
  studioLink?: string;
};

const inkWork: GalleryData[] = [
  {
    name: "Bird",
    year: "2020",
    medium: "Sumi-e ink",
    imageSrc: BirdImage,
    altText: "bird hanging on a tree branch",
  },
  {
    name: "Butterflies",
    year: "2020",
    medium: "Sumi-e ink",
    imageSrc: ButterflyImage,
    altText: "butterflies why not",
  },
];

const digitalWork: GalleryData[] = [
  {
    name: "Business Natural",
    year: "2022",
    medium: "Digital art made by using Procreate.",
    imageSrc: BusinessNatural,
    altText:
      "digital illustration of a caterpillar, a sparrow and a bee on a branch, looking rather serious",
  },
  {
    name: "Looking over your shoulder",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    imageSrc: CatOnShoulder,
    altText:
      "digital illustration of a cat in a flower field, looking over a human's shoulder",
  },
  {
    name: "Cottonflower",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    imageSrc: CottonFlower,
    altText:
      "digital illustration of a cottonflower and little monsters that inhabit the island it's in",
  },
  {
    name: "Calistoga",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    imageSrc: Astronaut,
    altText:
      "digital illustration of an astronaut reading a book under traffic lights",
  },
  {
    name: "Your own little part of the world",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    imageSrc: Bonsai,
    altText:
      "digital illustration of little monsters hanging around a bonsai tree",
  },
  {
    name: "Surprised",
    year: "2021",
    medium:
      "Digital art made by using Procreate. You can see the artist's obvious efforts to not draw hands or feet (or hair, for that matter).",
    imageSrc: Surprised,
    altText:
      "digital illustration of a surprised tribal people with pink monsters",
  },
  {
    name: "Home is wherever your heart sings",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    imageSrc: Home,
    altText: "digital illustration of my dream home",
  },
  {
    name: "彼はすごい",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    imageSrc: Husband,
    altText: "digital illustration of my husband",
  },
  {
    name: "I eat rainbows",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    imageSrc: Rainbows,
    altText: "digital illustration of a cat and two birds",
  },
  {
    name: "Neko, hebi, tori",
    year: "2021",
    medium: "Digital art made by using Procreate.",
    imageSrc: NekoHebiTori,
    altText:
      "digital illustration of a portrait of a cat with his best friends",
  },
  {
    name: "Serene",
    year: "2020",
    medium: "Digital art made by using Procreate.",
    imageSrc: Serene,
    altText:
      "digital illustration of power lines with weird colorful creatures",
  },
  {
    name: "Just Choose",
    year: "2020",
    medium: "Digital art made by using Procreate.",
    imageSrc: RoadSigns,
    altText:
      "digital illustration of a beach and road signs with weird creatures",
  },
  {
    name: "Mendokusai",
    year: "2020",
    medium: "Digital art made by using Procreate.",
    imageSrc: Mendokusai,
    altText: "digital illustration of an angry coconut and a parrotlet",
  },
  {
    name: "Neuron Riot",
    year: "2020",
    medium: "Digital art made by using Procreate.",
    imageSrc: NeuronRiot,
    altText: "digital illustration of neurons rioting",
  },
  {
    name: "This is fine",
    year: "2020",
    medium: "Digital art made by using Procreate.",
    imageSrc: OnFire,
    altText:
      "digital illustration of a character surrounded by little versions of himself.",
  },
  {
    name: "Self Portrait",
    year: "2020",
    medium: "Digital art made by using Procreate.",
    imageSrc: SelfPortrait,
    altText: "digital illustration of myself in color",
  },
  {
    name: "Social Distance",
    year: "2020",
    medium: "Digital art made by using Procreate.",
    imageSrc: SocialDistance,
    altText: "digital illustration of humanity in 2020 social distancing",
  },
];

const clayWork: GalleryData[] = [
  {
    name: "Jack-o'-lantern",
    year: "2021",
    medium: "Cone 6 clay & glaze.",
    studio: "Crealde School of Art",
    imageSrc: Pumpkin,
    altText: "Jack-o'-lantern made from clay",
  },
  {
    name: "Calcifer",
    year: "2019",
    medium: "Cone 6 clay & underglaze.",
    studio: "Crealde School of Art",
    imageSrc: Calcifer,
    altText: "Clay mask of Calcifer",
  },
  {
    name: "Kitsune",
    year: "2019",
    medium: "Cone 6 clay & underglaze.",
    studio: "Crealde School of Art",
    imageSrc: Kitsune,
    altText: "Clay mask of kitsune",
  },
  {
    name: "Kaonashi",
    year: "2019",
    medium: "Cone 6 clay & underglaze.",
    studio: "Crealde School of Art",
    imageSrc: Kaonashi,
    altText: "Clay mask of kaonashi",
  },
  {
    name: "Wolf",
    year: "2019",
    medium: "Cone 10 clay & underglaze.",
    studio: "Crealde School of Art",
    imageSrc: Wolf,
    altText: "Clay wolf mask",
  },
  {
    name: "Zelda Mask",
    year: "2019",
    medium: "Cone 6 clay & underglaze.",
    studio: "Crealde School of Art",
    imageSrc: ZeldaMask,
    altText: "Clay zelda mask",
  },
  {
    name: "Standing Tall",
    year: "2019",
    medium: "Cone 6 clay, underglaze & clear glaze.",
    studio: "Crealde School of Art",
    imageSrc: StandingTallSculpture,
    altText: "Small clay sculpture",
  },
  {
    name: "Sandman and cardinal",
    year: "2019",
    medium: "Cone 10 clay & underglaze",
    studio: "Crealde School of Art",
    imageSrc: Sandman,
    altText: "Small clay sculpture",
  },
  {
    name: "Kindred: Half lamb, half wolf",
    year: "2019",
    medium: "Cone 6 clay & underglaze.",
    studio: "Crealde School of Art",
    imageSrc: Kindred,
    altText: "Small clay sculpture of a Kindred mask",
  },
  {
    name: "Happy Pupper",
    year: "2019",
    medium: "Cone 10 clay & underglaze",
    studio: "Crealde School of Art",
    imageSrc: HappyPupper,
    altText: "Small clay sculpture of a dog",
  },
  {
    name: "Lion",
    year: "2019",
    medium: "Cone 6 clay & underglaze",
    studio: "Crealde School of Art",
    imageSrc: Lion,
    altText: "Clay lion mask",
  },
  {
    name: "Warrior",
    year: "2019",
    medium: "Cone 6 clay & underglaze",
    studio: "Crealde School of Art",
    imageSrc: Warrior,
    altText: "Small sculpture of a tiny tribal warrior creature",
  },
  {
    name: "Pagoda",
    year: "2019",
    medium: "Cone 6 clay & underglaze",
    studio: "Crealde School of Art",
    imageSrc: Pagoda,
    altText: "A red and black pagoda with two stores",
  },
  {
    name: "Fragile",
    year: "2019",
    medium: "Cone 6 clay & underglaze",
    studio: "Crealde School of Art",
    imageSrc: Fragile,
    altText: "Small sculpture of a tiny tribal warrior creatures",
  },
];

const linocutWork: GalleryData[] = [
  {
    name: "Astronaut-1",
    year: "2020",
    medium: "Linoleum block, Speedball Block Printing Water Soluble Ink",
    imageSrc: AstronautLinocut1,
    altText: "A linocut artwork of an astronaut on a planet",
  },
  {
    name: "Astronaut-2",
    year: "2020",
    medium: "Linoleum block, Speedball Block Printing Water Soluble Ink",
    imageSrc: AstronautLinocut2,
    altText: "A linocut artwork of an astronaut on a planet",
  },
  {
    name: "Spidey",
    year: "2020",
    medium: "Carved linoleum block",
    imageSrc: Spidey,
    altText: "The linocut block of a jumping spider",
  },
];

const intaglioWork: GalleryData[] = [
  {
    name: "The bumblebee",
    year: "2021",
    medium: "Copper block, etching ink",
    imageSrc: TheBumblebee,
    altText: "An intaglio print of a bumblebee flying around flowers",
  },
];

export { digitalWork, clayWork, inkWork, linocutWork, intaglioWork };
