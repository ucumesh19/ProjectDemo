import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icons, Images, nf, hpx, wpx, hp, wp } from '../../constants/constants';

const Messages = () => {

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerView}>
                <Text style={styles.msgText}>Messages</Text>
                <View style={styles.pointView}>
                    <Text style={styles.pointText}>4</Text>
                </View>
            </View>

            <View style={styles.tabContainer}>
                <View style={styles.mymsgView}>
                    <Text style={styles.mymsgText}>My Messages</Text>
                </View>
                <View style={styles.patientView} >
                    <Text style={styles.patientText}>Patient Messages</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.notifyView} />
                <View style={styles.messageContainer} >
                    <Text style={styles.subjText}>Message Subject</Text>
                    <Text style={styles.dateText}>12-12-2019</Text>
                </View>
                <Text style={styles.descriptionText}>Lorem Ipsum is simply dummy text of the printing …..</Text>
                <View style={{ flexDirection: "row" }}>
                    <Image source={Images.image} style={styles.imageStyle} />
                    <Text style={styles.nameText}>Mary John</Text>
                </View>
                <View style={styles.notifyyView}>
                    <Text style={styles.notifyyText}>2</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.messageContainer} >
                    <Text style={styles.subjText}>Message Subject</Text>
                    <Text style={styles.dateText}>12-12-2019</Text>
                </View>
                <Text style={styles.descriptionText}>Lorem Ipsum is simply dummy text of the printing …..</Text>
                <View style={{ flexDirection: "row" }}>
                    <Image source={Images.image} style={styles.imageStyle} />
                    <Text style={styles.nameText}>Mary John</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.notifyView} />
                <View style={styles.messageContainer} >
                    <Text style={styles.subjText}>Message Subject</Text>
                    <Text style={styles.dateText}>12-12-2019</Text>
                </View>
                <Text style={styles.descriptionText}>Lorem Ipsum is simply dummy text of the printing …..</Text>
                <View style={{ flexDirection: "row" }}>
                    <Image source={Images.image} style={styles.imageStyle} />
                    <Text style={styles.nameText}>Mary John</Text>
                </View>
                <View style={styles.notifyyView}>
                    <Text style={styles.notifyyText}>2</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.messageContainer} >
                    <Text style={styles.subjText}>Message Subject</Text>
                    <Text style={styles.dateText}>12-12-2019</Text>
                </View>
                <Text style={styles.descriptionText}>Lorem Ipsum is simply dummy text of the printing …..</Text>
                <View style={{ flexDirection: "row" }}>
                    <Image source={Images.image} style={styles.imageStyle} />
                    <Text style={styles.nameText}>Mary John</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.messageContainer} >
                    <Text style={styles.subjText}>Message Subject</Text>
                    <Text style={styles.dateText}>12-12-2019</Text>
                </View>
                <Text style={styles.descriptionText}>Lorem Ipsum is simply dummy text of the printing …..</Text>
                <View style={{ flexDirection: "row" }}>
                    <Image source={Images.image} style={styles.imageStyle} />
                    <Text style={styles.nameText}>Mary John</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.messageContainer} >
                    <Text style={styles.subjText}>Message Subject</Text>
                    <Text style={styles.dateText}>12-12-2019</Text>
                </View>
                <Text style={styles.descriptionText}>Lorem Ipsum is simply dummy text of the printing …..</Text>
                <View style={{ flexDirection: "row" }}>
                    <Image source={Images.image} style={styles.imageStyle} />
                    <Text style={styles.nameText}>Mary John</Text>
                </View>
            </View>

        </View>

    );

}

const styles = StyleSheet.create({
    headerView: {
        height: hpx(70),
        backgroundColor: "#180334",
        paddingLeft: wpx(22),
        paddingTop: hpx(17),
        flexDirection: "row"
    },
    msgText: {
        fontSize: nf(19),
        fontFamily: "Roboto-Regular",
        color: "#FFFFFF"
    },
    pointView: {
        width: wpx(23),
        height: hpx(14),
        backgroundColor: "#6D52E1",
        borderRadius: wpx(7),
        color: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: wpx(6),
        marginTop: hpx(5)
    },
    pointText: {
        fontSize: nf(11),
        color: "#FFFFFF",
        fontFamily: "Roboto-Regular"
    },
    container: {
        height: hpx(87),
        width: wpx(371),
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: wpx(10),
        marginHorizontal: wpx(22),
        marginTop: hpx(13),
        paddingLeft: wpx(38),
        paddingTop: hpx(11)
    },
    messageContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    subjText: {
        fontSize: nf(16),
        fontFamily: "Roboto-Bold",
        color: "#180334"
    },
    dateText: {
        fontSize: nf(9),
        fontFamily: "Roboto-Regular",
        color: "#3D349E",
        paddingRight: wpx(11),
        paddingTop: hpx(3)
    },
    descriptionText: {
        fontSize: nf(14),
        fontFamily: "Roboto-Regular",
        color: "#180334"
    },
    nameText: {
        fontSize: nf(13),
        fontFamily: "Roboto-Regular",
        color: "#180334",
        marginLeft: wpx(4)
    },
    imageStyle: {
        height: hpx(14),
        width: wpx(14)
    },
    tabContainer: {
        width: wpx(371),
        height: hpx(36),
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        marginHorizontal: wpx(22),
        borderWidth: 1,
        borderColor: "#180334",
        borderRadius: wpx(18),
        marginTop: hpx(17)
    },
    mymsgView: {
        flex: 0.5,
        backgroundColor: "#6D52E1",
        borderRadius: wpx(18),
        justifyContent: "center",
        alignItems: "center"
    },
    mymsgText: {
        fontSize: nf(17),
        fontFamily: "Roboto-Regular",
        color: "#FFFFFF"
    },
    patientView: {
        flex: 0.5,
        backgroundColor: "#FFFFFF",
        borderRadius: wpx(18),
        justifyContent: "center",
        alignItems: "center"
    },
    patientText: {
        fontSize: nf(17),
        fontFamily: "Roboto-Regular",
        color: "#180334"
    },
    notifyView: {
        position: "absolute",
        height: hpx(8), width: wpx(10),
        borderRadius: hpx(5),
        backgroundColor: "#6D52E1",
        top: hpx(34),
        left: wpx(13)
    },
    notifyyView: {
        position: "absolute",
        height: hpx(16), width: wpx(18),
        borderRadius: hpx(9),
        backgroundColor: "#6D52E1",
        top: hpx(63),
        right: wpx(14),
        alignItems: "center",
        justifyContent: "center"

    },
    notifyyText: {
        fontSize: 11,
        fontFamily: "Roboto-Regular",
        color: "white"
    }

})

export default Messages;