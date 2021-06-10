import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Icons, Images, nf, hpx, wpx, hp, wp } from '../../constants/constants';

const Profile = () => {

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image source={Images.doctor} style={styles.doctorImage} />
                <Text style={styles.stanleyText}>Stanley Jock</Text>
                <Text style={styles.docText}>A Saudi doctor</Text>
                <Text style={styles.dentistText}>Dentist</Text>
                <Text style={[styles.masterText]}>Master,PhD,Surgeon</Text>

                <View style={styles.iconView}>
                    <Image source={Icons.email} style={styles.iconStyle} />
                    <Image source={Icons.heart} style={styles.icon2Style} />
                </View>
            </View>
            <View style={{ marginHorizontal: wpx(22), flex: 1 }}>
                <Text style={styles.workTextStyle}>Currently Work at:</Text>
                <View style={styles.viewContainer}>
                    <Text style={styles.containerFirstText}>MD center , Riyadh</Text>
                    <Text style={styles.containerSecondText}>Call: 011-54112554</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.containerFirstText}>National center , Riyadh</Text>
                    <Text style={styles.containerSecondText}>Call: 011-54-55412</Text>
                </View>
                <View style={{ marginTop: hpx(27), borderBottomWidth: 1, borderBottomColor: "#C9C9C9" }}>
                    <Text style={{ fontSize: nf(18), fontFamily: "Roboto-Regular", color: "#FFFFFF", backgroundColor: "#6A50D5", height: hpx(89), paddingLeft: wpx(27), paddingTop: hpx(12) }}>All Bio information has been verified by ABCD (Verified by admin)</Text>
                    <Text style={{ fontSize: nf(16), fontFamily: "Roboto-Regular", color: "#180334", marginVertical: hpx(5) }}>Education and Training</Text>
                </View>


                <View style={{ height: hpx(144), marginTop: hpx(14), backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#E8E8E8", borderRadius: 12, padding: wpx(13) }}>
                    <Text style={styles.containerFirstText}>Name of Training</Text>
                    <Text style={styles.containerSecondText}>Name of Training Institute</Text>
                    <Text style={styles.containerSecondText}> Chandigarh, India</Text>
                    <Text style={styles.containerSecondText}>Ph.D</Text>
                    <Text style={styles.containerSecondText}>Obtained in 2014</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.containerFirstText}>Name of Training</Text>
                    <Text style={styles.containerSecondText}>Name of Training Institute</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.containerFirstText}>Name of Training</Text>
                    <Text style={styles.containerSecondText}>Name of Training Institute</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.containerFirstText}>Name of Training</Text>
                    <Text style={styles.containerSecondText}>Name of Training Institute</Text>
                </View>


            </View>

        </ScrollView>
    )

}


const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#C9C9C9",
    },
    doctorImage: {
        height: hpx(102),
        width: wpx(102)
    },
    stanleyText: {
        fontSize: nf(25),
        fontFamily: "Roboto-Bold",
        color: "#180334"
    },
    docText: {
        fontSize: nf(16),
        fontFamily: "Roboto-Regular",
        color: "#6D52E1"
    },
    masterText: {
        fontSize: nf(16),
        fontFamily: "Roboto-Regular",
        color: "#6D52E1",
        marginBottom: hpx(6)
    },
    dentistText: {
        fontSize: nf(22),
        fontFamily: "Roboto-Regular",
        color: "#180334"
    },
    iconView: {
        flexDirection: "row",
        position: "absolute"
    },
    iconStyle: {
        top: 15,
        right: 150
    },
    icon2Style: {
        top: 15,
        left: 150
    },
    workTextStyle: {
        fontSize: nf(16),
        fontFamily: "Roboto-Medium",
        color: "#180334",
        marginTop: hpx(12)
    },
    viewContainer: {
        height: hpx(70),
        marginTop: hpx(14),
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 12,
        padding: wpx(13)
    },
    containerFirstText: {
        fontSize: nf(16),
        fontFamily: "Roboto-Bold",
        color: "#180334"
    },
    containerSecondText: {
        fontSize: nf(14),
        fontFamily: "Roboto-Regular",
        color: "#180334",
        marginTop: hpx(4)
    }
})

export default Profile;