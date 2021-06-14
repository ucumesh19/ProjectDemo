import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icons, nf, hpx, wpx, hp, wp } from '../constants/constants';

const Header = ({ name }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.head1}>{name}</Text>
            <Text style={styles.head2}>Clear All</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        //  marginHorizontal: wpx(22),
        borderBottomWidth: 1,
        borderBottomColor: "#C9C9C9"
    },
    head1: {
        fontSize: nf(20),
        color: "#606060",
        fontFamily: "Roboto-Regular"
    },
    head2: {
        fontSize: nf(12),
        color: "#606060",
        fontFamily: "Roboto-Bold"
    }
})

export default Header;