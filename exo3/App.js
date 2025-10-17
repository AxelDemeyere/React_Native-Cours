import React from 'react';
import ContactListPage from './components/ContactList/ContactListPage/ContactListPage';
import ContactPage from './components/Contact/ContactPage/ContactPage';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {NavigationContainer} from "@react-navigation/native";
import { ContactProvider } from './context/ContactContext';
import Form from './components/ContactForm/Form';

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
          <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#007aff',
            tabBarInactiveTintColor: '#0c0c0cff'
          }}>
            <Tab.Screen
              name="Contacts"
              component={ContactStack}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Ajouter"
              component={Form}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ContactProvider>
  )
}
