import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextImputStyles';

interface BatTextImputPorps{
  pass:string
}

export function BatTextInput(props : BatTextImputPorps) {
  return (    
        <TextInput
            style={styles.inputer}
            placeholder='pass'
            multiline= {true}
            value={props.pass}
        />           
        
  );
}