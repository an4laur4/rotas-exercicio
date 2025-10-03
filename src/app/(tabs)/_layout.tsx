import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarLabelPosition: "beside-icon", tabBarStyle: { flexDirection: "row" } }}>
            <Tabs.Screen name='home' options={{ tabBarLabel: "Filmes Princesas", tabBarIcon: ({ color, size }) => <MaterialIcons name='movie' color={color} size={size} />, tabBarItemStyle: { flex: 1 } }} />
            <Tabs.Screen name='filmes' options={{ tabBarLabel: "Filmes Super-Herois", tabBarIcon: ({ color, size }) => <MaterialIcons name='movie' color={color} size={size} />, tabBarItemStyle: { flex: 1 } }} />
            <Tabs.Screen name='[id]/index' options={{ tabBarButton: () => null, tabBarItemStyle: { flex: 0 } }} />
        </Tabs>
    )
}