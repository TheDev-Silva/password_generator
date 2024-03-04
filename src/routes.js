import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'
import { Passwords } from './pages/password'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export function Routes() {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name='HOME'
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShow: false,
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused){
                            return <Ionicons size={size} color="#edbb00" name="home"/>
                        }
                        return <Ionicons size={size} color="black" name="home"/>
                    }
                }}
            />
            <Tab.Screen
                name='Passwords'
                component={Passwords}
                options={{
                    tabBarShowLabel: false,
                    headerShow: false,
                    tabBarIcon: ({focused, size}) => {
                        if(focused){
                            return <Ionicons size={size} color="#edbb00" name="lock-open"/>
                        }
                        return <Ionicons size={size} color="black" name="lock-closed"/>
                    }
                }}

            />
        </Tab.Navigator>
    )
}