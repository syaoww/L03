import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ToastAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox = ({label, onChangeText})=> {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    );
};

const myApp = ()=> {
    const [type, setValue] = useState('');
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');
    return (
      <View>
          <Text>User Type:</Text>
          <RNPickerSelect
              onValueChange={(value) => setValue((value))}
              items={[
                  { label: 'Admin', value: 'Admin' },
                  { label: 'Guest', value: 'Guest' },
              ]}
          />
          <InputBox label="User Name:" onChangeText={(text) => setName(text)}/>
          <InputBox label="Password:" onChangeText={(text) => setPw(text)}/>
          <TouchableOpacity onPress={()=> {
              const correctPassword = '123';
              let mymessage = 'Error! Wrong Password!';
              if (pw == correctPassword) {
                  mymessage = 'Welcome ' + type + ' ' + name;
              }
              ToastAndroid.show(mymessage, ToastAndroid.SHORT);
          }
          }>
              <Text>LOG IN</Text>
          </TouchableOpacity>
          <Text>{pw}</Text>
      </View>
  );
};

export default myApp;