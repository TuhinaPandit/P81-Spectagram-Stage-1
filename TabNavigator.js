//importing components such as CreateBottomTabNavigator 
//(A predefined component from the package installd in node/command prompt)
//importing ionicons (the little icons such as magnifier for search)
//and screens like feed and createPost
import React from 'react';
import { createBottomNavigator } from '@react-navigatioin/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed'
import CreatePost from '../screens/CreatePost'

//creating TabNavigator component
const Tab = createBottomTabNavigator();

//passing files feed and create post 
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                //assigning properties size, color, focused (must be which screen its focused on/styling)
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    //assigning book ionicon to feed and nothing to createPost
                    if (route.name ==='Feed') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'CreatePost') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            //when screen clicked on, icon becomes red, if not, gray
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Create Post" component={CreatePost} />
        </Tab.Navigator>      
    );
}

export default BottomTabNavigator 