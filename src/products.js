const data = [
  {
    title: "Pledge with no reward",
    subtitle: "",
    text: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    left: null,
    min: 0,
  },
  {
    title: "Bamboo stand",
    subtitle: "pledge $25 or more",
    text: "you get an ergonomic stand made of natural bamboo. you've helped us launch our promotional campaign, and you’ll be added to a special backer member list.",
    left: 101,
    min: 25,
  },
  {
    title: "Black Edition Stand",
    subtitle: "Pledge $75 or more",
    text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    left: 64,
    min: 75,
  },
  {
    title: "Mahogany Special Edition ",
    subtitle: "Pledge $200 or more",
    text: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    left: 0,
    min: 200,
  },
];

export const getData = () => {
  return data;
};
