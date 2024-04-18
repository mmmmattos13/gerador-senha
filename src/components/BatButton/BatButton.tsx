import React, { useState } from 'react';
import { Text, Pressable} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextImput';
import generatePass from '../../services/passwordServices';

export function BatButton() {

    const [pass, setPass] = useState('');

    function handleGenerateButton(){
        let generationToken = generatePass();
        setPass(generationToken);
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }

  return (
    <>
        <BatTextInput pass={pass}/>

        <Pressable style={styles.button} onPress={handleGenerateButton}>
            <Text style={styles.text}>Gerar</Text>    
        </Pressable>      

        <Pressable style={styles.button} onPress={handleCopyButton}>
            <Text style={styles.text}>Copiar</Text>    
        </Pressable>    
    </>
  );
}