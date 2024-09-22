import {  ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Topbar from '../components/Topbar';
import Title from '../components/Title';
import Buttons from '../components/Buttons';
import FeaturedText from '../components/FeaturedText';
import Cards from '../components/Cards';
import TopActions from '../components/TopActions';
import MiniCards from '../components/MiniCards';
import SeasonalText from '../components/BestSellsText';
import BestSellCards from '../components/BestSellsCards';
import Testamonials from '../components/Testanomial';
import Footer from '../components/footer'



const index = () => {
  return (
    
      <ScrollView style={tw`flex-1 gap-5 p-5`}>
        <Title/>
        <Buttons/>
        <FeaturedText/>
        <Cards/>
        <TopActions/>
        <MiniCards/>
        <SeasonalText/>
        <BestSellCards/>
        <Testamonials/>
        <Footer/>
     </ScrollView>
     
    
  )
}

export default index


