import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Button } from 'react-native';
import { Context } from '../context/BlogContext';


const ShowScreen = ({ navigation,route }) => {
    const { state } = useContext(Context);
    const { id } = route.params;
    const blogPost = state.find(item => item.id === id);


    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button onPress={() => { navigation.navigate('Edit', { id: id }) ; }} title="Edit" />
          ),
        });
      }, [navigation]);

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{blogPost.title}</Text>
            <Text style={styles.textStyle}>{blogPost.content}</Text>
        </View>
    );
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
            <Text>Edit</Text>
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    viewStyle: {
        paddingHorizontal: 15,
        paddingVertical: 30,
        alignItems: "center",
        flex: 1
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30
    }
});

export default ShowScreen;