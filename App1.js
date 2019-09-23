import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconTextInput from './components/IconTextInput'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import LoginScreen from './screens/LoginScreen'
import RegisterCarScreen from './screens/RegisterCarScreen';
import RegisterAuctionScreen from './screens/RegisterAuctionScreen'
import SettingScreen from './screens/SettingScreen';
import MyCarListScreen from './screens/MyCarListScreen';
import MyCarDetailScreen from './screens/MyCarDetailScreen';

import {Ionicons} from '@expo/vector-icons'

const App2Navigator = createStackNavigator({
  Home1:{
    screen:MyCarListScreen
  },
  DetailCar1: {
    screen:MyCarDetailScreen
  }
})

const AppNavigator = createStackNavigator({
  Home2:{
    screen:MyCarListScreen
  },
  DetailCar2: {
    screen:MyCarDetailScreen
  }
})

const Setting = createStackNavigator({
  Setting:{
    screen:SettingScreen
  }
})

const RegisterCar = createStackNavigator({
  Register:{
    screen:RegisterCarScreen
  }
})

const RegisterAuction = createStackNavigator({
  RegisterAuction:{
    screen:RegisterAuctionScreen
  }
})

const TabNavigator = createBottomTabNavigator(
  {
  MyCar : App2Navigator,
  Auction : AppNavigator,
  Setting : Setting,  
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'MyCar') {
          iconName = 'ios-car';
        } else if (routeName === 'Auction') {
          iconName = "ios-list";
        } else if (routeName === 'Settings') {
          iconName = 'ios-options';
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)

const RootStack = createStackNavigator(
  {
    Main: {
      screen: LoginScreen,
      //screen: MyCarListScreen
    },
    TabNav: {
      screen: TabNavigator
    },
    RegisterCar: {
      screen: RegisterCar
    },
    RegisterAuction: {
      screen: RegisterAuction
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
 );

const AppContainer = createAppContainer(RootStack)
export default class App extends Component{
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}
// export default function App() {
//   return (
    
//     <View style={styles.container}>
//       <AppContainer />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
