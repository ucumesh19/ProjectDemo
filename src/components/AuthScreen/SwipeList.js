import React, { useState } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

const SwipeList = () => {
    const People = [
        { key: 1, name: "Umesh" },
        { key: 2, name: "Sam" },
        { key: 3, name: "Sonu" },
        { key: 4, name: "Ram" },
        { key: 5, name: "UC" },
        { key: 6, name: "Umesh" },
        { key: 7, name: "Sam" },
        { key: 8, name: "Sonu" },
        { key: 9, name: "Ram" },
        { key: 10, name: "UC" },
    ]
    const [user, setUser] = useState(
        People.map((PeopleItem, index) => ({
            key: `${index}`,
            // key: PeopleItem.key,
            name: PeopleItem.name,
        })),
    );

    const close = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };
    const deleteRow = (rowMap, rowKey) => {
        close(rowMap, rowKey);
        const newData = [...user];
        const prevIndex = user.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setUser(newData);
    };

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40 }}> RN Swipe Up List </Text>
            <SwipeListView
                data={user}
                renderItem={
                    (data, rowMap) => (

                        <View style={{ backgroundColor: "lightblue", margin: 10, height: 80, padding: 20 }}>
                            <Text style={{ fontSize: 25, fontWeight: "bold" }}> My id is {data.item.id} and name {data.item.name}</Text>
                        </View>
                    )}
                renderHiddenItem={(data, rowMap) => (
                    <View style={{ backgroundColor: "pink", margin: 10, height: 80, padding: 20, flexDirection: "row" }}>
                        <TouchableOpacity
                            onPress={() => deleteRow(rowMap, data.item.key)}
                            style={{ justifyContent: "flex-end", alignSelf: "flex-end" }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => close(rowMap, data.item.key)}
                            style={{ justifyContent: "flex-end" }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Close</Text>
                        </TouchableOpacity>
                        {/* <Text>Right</Text> */}
                    </View>
                )}
                leftOpenValue={150}
                rightOpenValue={-75}
                disableRightSwipe

            />
        </View>
    )
}

export default SwipeList;





