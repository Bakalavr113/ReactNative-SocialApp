import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
export const POSTER_API = "https://www.themoviedb.org/t/p/w1280";
import { AntDesign } from "@expo/vector-icons";
const MovieContainer = ({ route,navigation }) => {
  const backFunc = () => {
    navigation.goBack()
  }
  return (
    <SafeAreaView style={styles().container}>
       
      <View style={styles().content}>
      <TouchableOpacity style={styles().back} onPress={() => backFunc()}>
        <Ionicons name="ios-chevron-back-circle-outline" size={30 } color="#4191e1" />
        <Text style={styles().bakcText}>Back</Text>
        </TouchableOpacity>
        <View style={styles().titleBlock}>
          <Image
            style={styles().logo}
            source={{ uri: `${POSTER_API}${route.params.backdrop_path}` }}
          />
          <Text style={styles().title}>{route.params.title}</Text>
          <Text style={styles().text}>{route.params.overview}</Text>
          <View style={styles().voteCount}>
            <View style={styles().voteItem}>
              <Ionicons name="eye-outline" size={24} color="#4191e1" />
              <Text style={styles().text}>{route.params.vote_count}</Text>
            </View>

            <View style={styles().voteItem}>
              <AntDesign name="staro" size={24} color="#4191e1" />
              <Text style={styles().text}>{route.params.vote_average}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
// const MovieInfo = ({route}) =>{
//   return (

//   )
// }

const styles = (vote) =>
  StyleSheet.create({
    container: {
      flex: 1,

      backgroundColor: "black",
    },
    content: {
      padding: 30,
      flex: 1,

      width: "100%",
      //  backgroundColor: "red"
    },

    titleBlock: {
      flex: 1,
    },
    voteCount: {
      marginTop: 20,
      flexDirection: "row",
    },
    voteItem: {
      flexDirection: "row",
      marginRight: 20
    },
    title: {
      fontSize: 25,
      color: "white",
      alignSelf: "center",
    },
    text: {
      color: "white",
      fontSize: 15,
      alignSelf: "center",
      textAlign: "center",
    },
    logo: {
      width: "100%",
      height: "30%",
    },
    back: {
      flexDirection: "row",
      marginBottom: 20,
      alignItems: "center"
      
    },
    bakcText: {
      marginLeft: 5,
      textTransform: "uppercase",
      color: "#4191e1",
      fontSize: 15,
      alignSelf: "center",
      textAlign: "center",
    }
  });

export default MovieContainer;
