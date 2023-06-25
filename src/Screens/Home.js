import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, Text, ImageBackground } from 'react-native';
import axios from 'axios';
import Map from '../Components/Map';



export default function Home({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://cx6bmbl1e3.execute-api.us-east-2.amazonaws.com/venues'); // Replace with your API endpoint
      setData(response.data);
      
    } catch (error) {
      console.error(error);
    }
  };

  console.log(data);

  return (
    <ImageBackground source={require('../Assets/splash.jpg')} style={{flex:1}}>
     <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
        data={data.results}
        renderItem={({item,index}) =>{
          return(
            <TouchableOpacity style={{ marginRight: 10 }} onPress={()=>navigation.navigate('About', {item})}>
            
              <Image
              source={{ uri: item.featured_image}}
          style={{ width:'100%', height:200, aspectRatio:2}}
        />
             
            </TouchableOpacity>

             
          )
        }} />

       
    </ImageBackground >
  );
}
