"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {BaseCollection} from "@/app/types/nft";

interface NftsInCollection {
  image: string;
  name: string;
  staked: boolean;
}

interface Props {
  index: number;
  nft: BaseCollection;
}
const CollectionNftCard = ({ nft, index }: Props) => {
  const [showPopup, setshowPopup] = useState(false);
  const handleShwoPopup = () => {
    setshowPopup(!showPopup);
  };
  return (
    <Link href={`/stake/${nft.address?.toLowerCase()}`}>
      <motion.div
        style={{
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        whileHover={{
          border: "1px solid rgba(1, 239, 156, 1)",
          boxShadow: "8px 8px 0px #01EF9C",
        }}
        className="w-full flex flex-col gap-4 p-4 rounded-lg bg-black cursor-pointer"
      >
        <div className="relative flex w-full aspect-square items-center justify-center rounded overflow-hidden">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt=""
            src={nft.image}
          />
        </div>

        <h3>{nft.collection}</h3>

        <div className="w-full grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 w-full">
            <h5>Quantity</h5>
            <p>{nft.quantity}</p>
          </div>
        </div>
      </motion.div>

      {/* {showPopup && <MintPopup nft={nft} onClose={handleShwoPopup} />} */}
    </Link>
  );
};

export default CollectionNftCard;