import React, { useState } from 'react';
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Icons, nf, hpx, wpx, hp, wp } from '../../constants/constants';
import Header from '../../common/Header';

const Notifications = () => {

    const List = [
        {
            "id": 1,
            "title": "You received a question",
            "message": "Hello doctor Ahmed, I want to ask a question for this..",
            "duration": "1 day ago",
        },
        {
            "id": 2,
            "title": "View Your Profile",
            "message": "53 people view your profile last week",
            "duration": "2 day ago",
        },
        {
            "id": 3,
            "title": "Weekly Report",
            "message": "Your weekly report is out! View it now",
            "duration": "3 day ago",
        },
        {
            "id": 4,
            "title": "You received a question",
            "message": "Hello doctor Ahmed, I want to ask a question for this..",
            "duration": "4 day ago",
        },
        {
            "id": 5,
            "title": "You received a question",
            "message": "Hello doctor Ahmed, I want to ask a question for this..",
            "duration": "5 day ago",
        },
    ]

    const [userList, setUserList] = useState(
        List.map((ListItem, index) => ({
            key: `${index}`,
            // key: ListIem.id,
            title: ListItem.title,
            message: ListItem.message,
            duration: ListItem.duration
        })),
    );

    const close = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };
    const deleteRow = (rowMap, rowKey) => {
        close(rowMap, rowKey);
        const newData = [...userList];
        const prevIndex = userList.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setUserList(newData);
    };

    const renderItem = (data, rowMap) => (
        <View style={styles.container}>
            <Text style={styles.titleText}>{data.item.title}</Text>
            <Text style={styles.messageText}>{data.item.message}</Text>
            <View style={styles.durationView}>
                <Image source={Icons.clock} />
                <Text style={styles.durationText}>{data.item.duration}</Text>
            </View>
        </View>
    )

    const renderHiddenItem = (data, rowMap) => (
        <TouchableOpacity onPress={() => deleteRow(rowMap, data.item.key)}>
            <View style={styles.swipeContainer}>
                <Image source={Icons.delete} style={styles.deleteIcon} />
            </View>
        </TouchableOpacity>
    )

    return (
        <>
            <Header name="Notifications" />
            <View style={{ flex: 1 }}>
                <SwipeListView
                    data={userList}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    disableRightSwipe
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: wpx(371),
        height: hpx(93),
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: wpx(15),
        borderColor: "#E8E8E8",
        marginHorizontal: wpx(22),
        marginVertical: hpx(12),
        paddingLeft: wpx(22),
        paddingTop: hpx(7)
    },
    swipeContainer: {
        width: wpx(371),
        height: hpx(93),
        backgroundColor: "#FFFFFF",
        marginHorizontal: wpx(22),
        marginVertical: hpx(12)
    },
    titleText: {
        fontFamily: "Roboto",
        fontSize: nf(21),
        fontWeight: "bold",
        color: "#606060"

    },
    messageText: {
        fontFamily: "Roboto",
        fontSize: nf(13),
        color: "#C6C6C6"

    },
    durationView: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: wpx(16),
        marginTop: hpx(6)
    },
    durationText: {
        fontFamily: "Roboto",
        fontSize: nf(12),
        color: "#5D5D5D",
        marginLeft: wpx(2)
    },
    deleteIcon: {
        alignSelf: "flex-end",
        marginRight: wpx(20),
        marginTop: hpx(25)
    }

})

export default Notifications;





