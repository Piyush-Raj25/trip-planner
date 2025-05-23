import GlobalApi from "@/service/GlobalApi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HotelCardItem from "./HotelCardItem";

function Hotels({ trip }) {

  return (

    <div>
      
      <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          
          <HotelCardItem hotel={hotel}></HotelCardItem>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
