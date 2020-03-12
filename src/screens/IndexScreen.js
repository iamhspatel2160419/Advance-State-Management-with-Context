import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext'



const IndexScreen = ({ navigation }) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button onPress={() => { navigation.navigate('Create') ; }} title="Add" />
          ),
        });
      }, [navigation]);

    const { state, deleteBlogPost } = useContext(Context);
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={state}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Show', { id: item.id })}
                        >
                            <View style={styles.rowStyle}>
                                <Text style={styles.titleStyle}>{item.title}</Text>
                                <TouchableOpacity
                                    onPress={() => deleteBlogPost(item.id)}
                                >
                                 <Text style = {styles.titleStyle}> Delete </Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    iconStyle: {
        fontSize: 25
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      }
});

export default IndexScreen;