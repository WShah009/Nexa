import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ShopScreen} from '../screens';
const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={ShopScreen} />
    </Tab.Navigator>
  );
}
