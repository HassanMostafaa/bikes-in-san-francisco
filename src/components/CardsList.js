import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const CardsList = () => {
  const cards = [
    {
      img: "./images/fatboy.jpg",
      brand: "Harley-Davidson",
      name: "Fat Boy® Classic",
      location: "San Francisco, CA",
      shop: "EagleRider",
      shopLocation: "San Francisco",
      Price: "$154",
      PricePer: "day",
      rate: 4.9,
    },
    {
      img: "./images/fatboy.jpg",
      brand: "Matt Clarckson",
      name: "Fat Boy® Classic",
      location: "Near China Town San Francisco",
      shop: "EagleRider",
      shopLocation: "San Francisco",
      Price: "$120",
      PricePer: "day",
      rate: 4.8,
    },
    {
      img: "./images/fatboy.jpg",
      brand: "Samuel MaCartney",
      name: "Fat Boy® Classic",
      location: "Fresherman's Warf SF",
      shop: "EagleRider",
      shopLocation: "San Francisco",
      Price: "$135",
      PricePer: "day",
      rate: 3.6,
    },
    {
      img: "./images/fatboy.jpg",
      brand: "Samuel MaCartnei",
      name: "Fat Boy® Classic",
      location: "Fresherman's Warf SF",
      shop: "EagleRider",
      shopLocation: "San Francisco",
      Price: "$135",
      PricePer: "day",
      rate: 3.6,
    },
    {
      img: "./images/fatboy.jpg",
      brand: "Samuel MaCartni",
      name: "Fat Boy® Classic",
      location: "Fresherman's Warf SF",
      shop: "EagleRider",
      shopLocation: "San Francisco",
      Price: "$135",
      PricePer: "day",
      rate: 3.6,
    },
    {
      img: "./images/fatboy.jpg",
      brand: "Samuel MaCartnye",
      name: "Fat Boy® Classic",
      location: "Fresherman's Warf SF",
      shop: "EagleRider",
      shopLocation: "San Francisco",
      Price: "$135",
      PricePer: "day",
      rate: 3.6,
    },
    {
      img: "./images/fatboy.jpg",
      brand: "Samuel MaCartnii",
      name: "Fat Boy® Classic",
      location: "Fresherman's Warf SF",
      shop: "EagleRider",
      shopLocation: "San Francisco",
      Price: "$135",
      PricePer: "day",
      rate: 3.6,
    },
  ];
  return (
    <div>
      <h1>Bikes In San Francisco</h1>
      <div className="cardsList">
        {cards.map((card, ix) => (
          <motion.div
            layout
            key={ix}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: ix / 3 }}
          >
            <Card card={card} cards={cards} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardsList;
