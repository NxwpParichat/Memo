import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./scr/screens/IndexScreen";
import { Provider } from './scr/context/BlogContext';
import ShowScreen from './scr/screens/ShowScreen';
import CreateScreen from './scr/screens/CreateScreen';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EditScreen from './scr/screens/EditScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitle: 'Memo📋'}}>
      <Stack.Screen 
        name='Index' 
        component={IndexScreen} 
        options={({navigation}) => ({
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Create")}>
            <AntDesign name="pluscircleo" size={24} color="black" />
          </TouchableOpacity>
        ),
      })} />
      <Stack.Screen name='Create' component={CreateScreen} />
      <Stack.Screen name='Edit' component={EditScreen} />
      <Stack.Screen 
        name='Show' 
        component={ShowScreen} 
        options={({navigation, route}) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => 
                navigation.navigate("Edit", {
                  id: route.params.id,
                }) 
            }>
              <MaterialCommunityIcons name="pencil-circle" size={24} color="black" />
            </TouchableOpacity>
          ),
        })} 
      />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
export default App;