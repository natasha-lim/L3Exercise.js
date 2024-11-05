import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

{/*Custom Components*/}
const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    );
};

const MyApp = () => {
    // let username="";
    // let password="";
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');

    return (

    //   <Text>Username:</Text>
    // <TextInput style={{borderWidth: 1}} onChangeText={(text) => username = text}/>
    //
    //     <Text>Password:</Text>
    //     <TextInput style={{borderWidth: 1}} onChangeText={(text) => password = text}/>
    //
    //     <TouchableOpacity onPress={()=>ToastAndroid.show("Hello" + username + " " + password, ToastAndroid.SHORT)}>
    //         <Text>LOG IN</Text>
    //     </TouchableOpacity>

      <View style={{padding: 20, paddingTop: 50}}>

          {/*Exercise 1B*/}
          <Text>User Type:</Text>
          <RNPickerSelect
              onValueChange={(value) => setType(value)}
              items={[
                  { label: 'Admin', value: 'Admin' },
                  { label: 'Guest', value: 'Guest' }
              ]}
          />

          {/*/!*States Examples*!/*/}
          {/*<Text>Password</Text>*/}
          {/*<TextInput style={{borderWidth: 1}}*/}
          {/*           onChangeText={(text => setPassword(text))}*/}
          {/*/>*/}

          {/*<TouchableOpacity onPress={() => ToastAndroid.show(password, ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*<Text>{password}</Text>*/}

          {/*Exercise 1A*/}
          {/*<Text> Password: </Text>*/}
          {/*<TextInput style={{borderWidth: 1}} />*/}

          {/*/!*Exercise 1C and 1D*!/*/}
          {/*<Button*/}
          {/*    title="Log In"*/}
          {/*    onPress={()=>Alert.alert("Log In")}*/}
          {/*/>*/}

          {/*Exercise 1E*/}
          {/*<TouchableOpacity*/}
          {/*    onPress={()=>Alert.alert("Welcome")}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*Exercise 1F*/}
          {/*<TouchableOpacity*/}
          {/*    onPress={()=>ToastAndroid.show("Welcome", ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN 2</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*Exercise 1G*/}
          {/*<Text>Username:</Text>*/}
          {/*<TextInput style={{borderWidth: 1}}*/}
          {/*           onValueChange={(text) => setUser(text)}*/}
          {/*/>*/}

          {/*<Text>Password:</Text>*/}
          {/*<TextInput style={{borderWidth: 1}}*/}
          {/*           onChangeText={(text => setPassword(text))}*/}
          {/*/>*/}

          <InputBox label="User Name:" onChangeText={(text)=>setUser(text)} />
          <InputBox label="Password:" onChangeText={(text)=>setPassword(text)} />

          <TouchableOpacity onPress={() => ToastAndroid.show('Welcome' + type + ' ' + username, ToastAndroid.SHORT)}>
              <Text>LOG IN</Text>
          </TouchableOpacity>

          <Text>{password}</Text>

      </View>
  );
};

export default MyApp;
