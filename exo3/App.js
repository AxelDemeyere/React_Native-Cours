import React from 'react';
import ContactListPage from './components/ContactList/ContactListPage/ContactListPage';
import ContactPage from './components/Contact/ContactPage/ContactPage';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {NavigationContainer} from "@react-navigation/native";
import { ContactProvider } from './context/ContactContext';
import Form from './components/ContactForm/Form/Form';
import FavoritePage from "./components/ContactFavorite/FavoritePage/FavoritePage";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function ContactStack() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ContactList" component={ContactListPage} />
        <Stack.Screen name="Contact" component={ContactPage} />
      </Stack.Navigator>
  )
}

export default function App() {
  return (
      <ContactProvider>
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#007aff',
                    tabBarInactiveTintColor: '#0c0c0cff',
                    animation: 'shift',
                    animationDuration: 400
                }}
            >
            <Tab.Screen
              name="Contacts"
              component={ContactStack}
              options={{ headerShown: false, tabBarLabel: 'Contacts', tabBarIcon: () => (
                <FontAwesome name={"address-book"} size={24} color={"brown"} />
                  ) }}
            />
            <Tab.Screen
              name="Favorite"
              component={FavoritePage}
              options={{ headerShown: false, tabBarLabel: 'Favoris', tabBarIcon: () => (
            <FontAwesome name={"star"} size={24} color={"gold"} />
                ) }}
            />
            <Tab.Screen
              name="Ajouter"
              component={Form}
              options={{ headerShown: false, tabBarLabel: 'Ajouter', tabBarIcon: () => (
            <FontAwesome name={"plus-square"} size={24} color={"green"} />
                ) }}

            />
          </Tab.Navigator>
        </NavigationContainer>
      </ContactProvider>
  )
}
