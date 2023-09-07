import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";

import ListDiscipline from "../pages/ListDiscipline";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import NewDiscipline from "../pages/NewDiscipline";

type AuthRoutes = {
    listDiscipline: undefined;
    login: undefined;
    logout: undefined;
    newDiscipline: undefined;
}

export type AuthNavigatornRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();


export default function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
             <Screen
                name="login"
                component={Login}
            />
            <Screen
                name="logout"
                component={Logout}
            />
             <Screen
                 name="listDiscipline"
                 component={ListDiscipline}
             />
            <Screen
                name="newDiscipline"
                component={NewDiscipline}
            />          
        </Navigator>
    );
}