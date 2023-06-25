import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import {useRoute} from '@react-navigation/native';
import Map from '../Components/Map';

export default function About({navigation}) {

    const route = useRoute();
    const {item} = route.params;

    const initialRegion = {
        latitude: item.lat,
        longitude: item.lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
    
      const markerCoordinate = {
        latitude: item.lat,
        longitude: item.lon,
      };
    
      const markerTitle = item.name;
      const markerDescription = item.address;
   

  return (
    <ScrollView style={styles.container}>
  <Text style={{alignSelf:'center', color:'blue', fontSize:25, marginVertical:10, }}>{item.name}</Text>

  <Image source={{ uri: item.featured_image}} style={{ width:'100%', height:200}} /> 

<View style={{flexDirection:'row', width:'90%', alignSelf:'center'}}>

<Text style={{fontSize:20, color:'black', width:'30%', marginRight:20, marginVertical:20}}>Address</Text>
<Text style={{fontSize:20, color:'blue', width:'65%', marginTop:20, marginBottom:0}}>{item.address}</Text>

</View>
 <FlatList
        scrollEnabled={false}
        style={{ marginTop: 10 }}
        data={item.facilities}
        renderItem={({item,index}) =>{
          return(
            <View style={{flexDirection:"row", width:'90%', alignSelf:'center', backgroundColor:'white', marginVertical:10, elevation:5, borderRadius:20}}>

              <Image source={{ uri: item.icon}} style={{ width:100, height:100, aspectRatio:1, borderRadius:20}} />
                <Text style={{ fontSize:20, color:'blue', width:'60%', alignSelf:'center', textAlign:'center'}}>{item.name}</Text>

            </View>
             
             

             
          )
        }} />
        <View style={{flex:1, height:500, width:'100%', margin:20, alignSelf:'center', borderColor:'blue', borderWidth:10}}>

        <Map
        initialRegion={initialRegion}
        markerCoordinate={markerCoordinate}
        markerTitle={markerTitle}
        markerDescription={markerDescription}
      />
        </View>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
