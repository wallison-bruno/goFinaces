import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native"
import AppRouts from "./app.routes";
import SigninRouts from "./signin.routes";

import { useAuth } from "../hook/auth";

export function Routs() {
    const { user } = useAuth();
    console.log(user);
    return (
        <NavigationContainer>
            {user.name ? < AppRouts /> : <SigninRouts />}
        </NavigationContainer>
    )
}