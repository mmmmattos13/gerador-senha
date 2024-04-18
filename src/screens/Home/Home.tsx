import React from "react";
import { View } from "react-native";
import styles from './Style'
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home(){
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>  

            <View style={styles.inputContainer}>                  
                <BatButton/>
            </View>         
            
        </View>    
    )
}