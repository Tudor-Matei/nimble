import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ShopTab = ({ numberOfCoins, setNumberOfCoins, setImageURL }) => {
  const [items, setItems] = useState([
    { name: "Red skin", price: 40, color: "red", image: "./assets/dragon-red.png"},
    { name: "Green skin", price: 50, color: "green", image: "./assets/dragon-green.png"},
    { name: "Blue skin", price: 120, color: "blue", image: "./assets/dragon-blue.png"},
    { name: "Turqouise skin", price: 40, color: "cyan", image: "./assets/dragon-turqouise.png"},
    { name: "Purple skin", price: 90, color: "purple", image: "./assets/dragon-purple.png" },
    { name: "Light purple skin", price: 90, color: "violet", image: "./assets/dragon-light-purple.png" },
  ])
  
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const previewItem = (index) => {
    setSelectedItemIndex(index);
  }

  const buyItem = (index) => {
    if (numberOfCoins >= items[index].price) {
      setNumberOfCoins(numberOfCoins - items[index].price);
      setItems(items.filter((_, i) => i !== index)); 
      setSelectedItemIndex(-1);
      setImageURL(items[index].image);
    }
  }

  return (
    <ScrollView style={styles.shopTab}>
      {
        items.map((item, i) => (
          <TouchableOpacity key={`item_${i}`} onPress={selectedItemIndex !== i ? () => previewItem(i) : () => buyItem(i)}>
          <View style={[styles.item, selectedItemIndex === i ? {backgroundColor: 'gold', justifyContent: 'center'} : {}]}>
            {
              selectedItemIndex === i ? <Text>Buy</Text> : (
                <>
                <View style={{width: 75, height: 75, backgroundColor: item.color}}></View>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                </>
              )
            }
          </View> 
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  )
}

const Avatar = () => {
  const [isShopOpen, setShopOpen] = useState(false);
  const [numberOfCoins, setNumberOfCoins] = useState(1005);
  const [imageURL, setImageURL] = useState("./assets/animal_adult.png");
  return (
    <>
      <View style={styles.topInfo} >
        <Text>{numberOfCoins} coins</Text>
        <TouchableOpacity onPress={() => setShopOpen(!isShopOpen)}>
          <MaterialCommunityIcons
            style={styles.cart}
            name="cart"
            size={25}
            color={'#5e5b08'}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.container, isShopOpen ? { marginBottom: -150} : {}]}>
        { imageURL === "./assets/dragon-red.png" &&
          <Image source={require("./assets/dragon-red.png")} style={styles.logoImage} />
         }
         { imageURL === "./assets/dragon-green.png" &&
          <Image source={require("./assets/dragon-green.png")} style={styles.logoImage} />
         }
         { imageURL === "./assets/dragon-blue.png" &&
          <Image source={require("./assets/dragon-blue.png")} style={styles.logoImage} />
         }
         { imageURL === "./assets/dragon-turqouise.png" &&
          <Image source={require("./assets/dragon-turqouise.png")} style={styles.logoImage} />
         }
         { imageURL === "./assets/dragon-purple.png" &&
          <Image source={require("./assets/dragon-purple.png")} style={styles.logoImage} />
         }
         { imageURL === "./assets/dragon-light-purple.png" &&
          <Image source={require("./assets/dragon-light-purple.png")} style={styles.logoImage} />
         }
        <View style={styles.userInfo}>
          <Text style={[styles.username, isShopOpen ? { display: "none"} : {}]}>John Doe</Text>
          <Text style={[styles.email, isShopOpen ? { display: "none"} : {}]}>john.doe@example.com</Text>
        </View>
      </View>
      {
        isShopOpen && <ShopTab setImageURL={setImageURL} numberOfCoins={numberOfCoins} setNumberOfCoins={setNumberOfCoins} />
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  logoImage: {
    height: '60%',
    resizeMode: "contain"
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  topInfo: {
    position: 'absolute',
    width: '100%',
    top: '7%',
    // right: "10%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  cart: {
    backgroundColor: "rgba(227, 216, 126, 0.5)",
    borderRadius: 100,
    padding: 15,
  },
  shopTab: {
    width: '100%',
    backgroundColor: "#f7ffbd",
    height: '10%',
    bottom: -100
  },
  item: {
    padding: 15,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 30
  }
});

export default Avatar;
