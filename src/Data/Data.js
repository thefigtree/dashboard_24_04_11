import { UilEstate, UilPackage, UilUsersAlt } from "@iconscout/react-unicons";

export const SidebarData = [
  {
    icon: UilEstate,
    title: "Home",
  },
  {
    icon: UilPackage,
    title: "Archive",
  },
  {
    icon: UilUsersAlt,
    title: "Contact",
  },
];

export const CardsData = [
  {
    title: "Age",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 26,
    value: 26,
    series: [
      {
        name: "age",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Age",
    color: {
      backGround: "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
      boxShadow: "0px 10px 20px 0px #fdc027",
    },
    barValue: 26,
    value: 26,
    series: [
      {
        name: "age",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Age",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255,202,113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #f9d59b",
    },
    barValue: 26,
    value: 26,
    series: [
      {
        name: "age",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
];

// Stack Data
export const StacksData = [
  { name: "React" },
  { name: "Next js" },
  { name: "Javascript" },
];
