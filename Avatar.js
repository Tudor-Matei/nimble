import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ShopTab = ({ numberOfCoins, setNumberOfCoins }) => {
  const [items, setItems] = useState([
    { image: "assets/icon.png", name: "Wings", price: 30 },
    { image: "assets/icon.png", name: "Bracelet", price: 30 },
    { image: "assets/icon.png", name: "Earrings", price: 30 },
    { image: "assets/icon.png", name: "lmao", price: 30 },
  ]);
  
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const previewItem = (index) => {
    // TODO: preview
    setSelectedItemIndex(index);
  }

  const buyItem = (index) => {
    if (numberOfCoins >= items[index].price) {
      setNumberOfCoins(numberOfCoins - items[index].price);
      setItems(items.filter((_, i) => i !== index)); 
      setSelectedItemIndex(-1);
    }
  }

  return (
    <ScrollView style={styles.shopTab}>
      {/* <Image source={require(item.image)} width={10} resizeMode='contain' height={10} /> */}
      {
        items.map((item, i) => (
          <TouchableOpacity key={`item_${i}`} onPress={selectedItemIndex !== i ? () => previewItem(i) : () => buyItem(i)}>
          <View style={[styles.item, selectedItemIndex === i ? {backgroundColor: 'red', justifyContent: 'center'} : {}]}>
            {
              selectedItemIndex === i ? <Text>Buy</Text> : (
                <>
                <View style={{width: 75, height: 75, backgroundColor: 'red'}}></View>
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
  const [isShopOpen, setShopOpen] = useState(true);
  const [numberOfCoins, setNumberOfCoins] = useState(1000);

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
        <Image source={require("./assets/animal_adult.png")} style={styles.logoImage} />
        <View style={styles.userInfo}>
          <Text style={[styles.username, isShopOpen ? { display: "none"} : {}]}>John Doe</Text>
          <Text style={[styles.email, isShopOpen ? { display: "none"} : {}]}>john.doe@example.com</Text>
        </View>
      </View>
      {
        isShopOpen && <ShopTab numberOfCoins={numberOfCoins} setNumberOfCoins={setNumberOfCoins} />
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
    zIndex: 200,
    bottom: -100,
  },
  item: {
    padding: 15,
    margin: 10,
    color: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 30
  }
});

export default Avatar;
