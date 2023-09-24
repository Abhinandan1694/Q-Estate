import React, { useEffect, useState } from 'react';
import "./FeaturedListings.css";
import axios from "axios"
import config from '../../config';
import {Box} from "@mui/material"

const FeaturedListings = () => {

  const [listingsData, setListingsData] = useState([]);
  
  async function fetchListings() {
    try {
      const res = await axios.get(`${config.backendEndPoint}/real-estate-data`)
      console.log(res);
      const data = res.data.listings;
      setListingsData(data.slice(0, 8));
    } catch (e) {
      setListingsData([]);
      console.log(e);
    }
  }
  useEffect(() => {
    fetchListings();
  }, []);
  return (
    <Box sx={{ width : 100% ""}}>
      Featured Listings
    </Box>
  )
}

export default FeaturedListings;