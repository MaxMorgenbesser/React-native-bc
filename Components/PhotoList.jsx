import React from "react";
import { ScrollView, StyleSheet} from "react-native";
import PhotoCard from "./PhotoCard";

const bsPhotos =[
    {id:1,description:'selfie with mom'},
    {id:2,description:'bird'},
    {id:3,description:'painted nails'},
    {id:4,description:'abandoned door'},
    {id:5,description:'Black and white skyline'}
]

function PhotoList (){
return (
    <>
    <ScrollView style={styles.photoList}>
      {bsPhotos.map((photo)=>{
<PhotoCard key={photo.id} photo={photo}/>
      })}
    </ScrollView>
    </>
)
}

const styles=StyleSheet.create({
    photoList:{
        flex :1,
        backgroundColor: '#e8e8e8',
    }
})
export default PhotoList