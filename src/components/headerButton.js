import {Button } from 'react-native';

export default ({title,navigation}) => {
    return (
        <Button
            onPress={() => {navigation.navigate('Create');}}
            title={title}
            color="#00cc00"
          />
    );
}