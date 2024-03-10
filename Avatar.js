import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// TODO: 
//evolutia va fi facuta intr-un check dupa fiecare workout completat. Daca numarul de workouturi depaseste un numar, se face evolutia automat

const ShopTab = ({ numberOfCoins, setNumberOfCoins }) => {
  const [items, setItems] = useState([
    { name: "Red skin", price: 30 },
    { name: "Green skin", price: 30, url:"./assets/dragon_adult_verde.png"  },
    { name: "Blue skin", price: 30  },
    { name: "Magenta skin", price: 30 },
    { name: "Orange skin", price: 30 },
  ])
  
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
  const [isShopOpen, setShopOpen] = useState(false);
  const [numberOfCoins, setNumberOfCoins] = useState(1005);

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
    bottom: -100
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
