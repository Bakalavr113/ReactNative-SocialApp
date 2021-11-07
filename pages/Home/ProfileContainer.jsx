import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  Animated,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersAction, getUsers } from "../../Redux/profile-reducer";
import MovieContainer from "./MovieContainer";
export const POSTER_API = "https://www.themoviedb.org/t/p/w1280";
const {width, height} = Dimensions.get("screen")
const ProfileContainer = ({ navigation }) => {
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const scrollX = useRef(new Animated.Value(0)).current
  const Users = useSelector((state) => state.profilePage.Posts);
  const Fetch = useSelector((state) => state.profilePage.fetch);
  return (
    <View style={styles().container}>
      <View style={StyleSheet.absoluteFillObject}>
        {Users.map((el,index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
          ]
          // const opacity = scrollX.interpolate({ inputRange, outputRange: [0.1, 1] })
          const opacity =  scrollX.interpolate({
            inputRange,
            outputRange: [0,1,0]
          })
         return <Animated.Image
            blurRadius={14}
            style={[StyleSheet.absoluteFillObject, {opacity}]}
            key={`el-${index}`}
            source={{ uri: `${POSTER_API}${el.poster_path}` }}
          />;
        })}
      </View>

      <Animated.FlatList
        horizontal={true}
        onScroll={
          Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: true,
          })
        }
        pagingEnabled
        // refreshControl={
        //   <RefreshControl
        //     tintColor={"white"}
        //     colors={"white"}
        //     refreshing={Fetch}
        //     onRefresh={() => dispatch(getUsers())}
        //   />
        // }
        data={Users}
        renderItem={({ item }) => <PostList navigation={navigation} item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const PostList = ({ navigation, item }) => {
  const dispatch = useDispatch();
  const vote = item.vote_average;
  return (
    <SafeAreaView style={styles().item}>
      <View style={styles().banner}>
        <TouchableOpacity
          style={styles().tinyLogo}
          onPress={() => navigation.navigate("Movie", item)}
        >
          {item.vote_average && (
            <Text style={styles(vote).voteAverage}>{item.vote_average}</Text>
          )}
          <Image
            style={styles().logo}
            source={{ uri: `${POSTER_API}${item.poster_path}` }}
          />
          {item.adult && <Text style={styles().adult}>18+</Text>}
        </TouchableOpacity>

        <Text style={styles().text}>{item.title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = (vote) =>
  StyleSheet.create({
    container: {
      flex: 1,
      // position: "relative",
      backgroundColor: "black",
      // marginTop: StatusBar.currentHeight || 0,
    },
    bg: {
      position: "absolute",
      width: "100%",
      height: "100%",

      zIndex: 1,
    },
    item: {
      zIndex: 2,
      // marginTop: 30,
      // backgroundColor: "black",
      width: width,
      // justifyContent: "centerw",
      alignItems: "center",
      justifyContent: "center",
    },
    tinyLogo: {
      position: "relative",
      width: width - 50,
      height: "70%",
      alignSelf: "center",
      borderRadius: 5,
      resizeMode: "cover",
      alignSelf: "center",
      justifyContent: "center",
    },
    logo: {
      width: "100%",
      height: "100%",
    },
    banner: {
      zIndex: 3,
      flex: 1,
      // overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: "red",
      position: "relative",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
      elevation: 15,
    },
    adult: {
      fontSize: 20,
      color: "red",
      position: "absolute",
      bottom: 10,
      right: 10,
    },
    voteAverage: {
      zIndex: 4,
      position: "absolute",
      top: 10,
      left: 10,
      fontSize: 25,
      backgroundColor: "white",
      width: 50,
      textAlign: "center",
      color: vote < 6 ? "red" : "green",
    },

    title: {
      fontSize: 32,
    },
    text: {
      textAlign: "center",
      fontSize: 40,
      // alignSelf: "center",
      color: "white",
    },
  });

export default ProfileContainer;
