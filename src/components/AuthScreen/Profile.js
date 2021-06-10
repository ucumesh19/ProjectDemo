import { Row } from 'native-base';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Icons, Images, nf, hpx, wpx, hp, wp } from '../../constants/constants';

const Profile = () => {

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.headerView}>
                <Image source={Icons.back} />
                <Text style={styles.headerText}>Profile</Text>
                <Image source={Icons.features} />
            </View>

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


            <View style={{ flex: 1 }}>
                <Text style={styles.workTextStyle}>Currently Work at:</Text>

                <View style={styles.viewLogoContainer}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.containerFirstText}>MD center , Riyadh</Text>
                        <Text style={styles.containerSecondText}>Call: 011-54112554</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: wpx(60), marginTop: hpx(4) }}>
                        <Text style={{ fontSize: nf(17), fontFamily: "Roboto-Medium", color: "#6D52E1" }} >Clinic</Text>
                        <Image source={Icons.clinic_logo} />
                        <Text style={{ fontSize: nf(17), fontFamily: "Roboto-Medium", color: "#6D52E1" }} >Logo</Text>
                    </View>
                </View>

                <View style={styles.viewLogoContainer}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.containerFirstText}>National center , Riyadh</Text>
                        <Text style={styles.containerSecondText}>Call: 011-54-55412</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: wpx(30), marginTop: hpx(4) }}>
                        <Text style={{ fontSize: nf(17), fontFamily: "Roboto-Medium", color: "#6D52E1" }} >Clinic</Text>
                        <Image source={Icons.clinic_logo} />
                        <Text style={{ fontSize: nf(17), fontFamily: "Roboto-Medium", color: "#6D52E1" }} >Logo</Text>
                    </View>
                </View>


                <View style={styles.verifyView}>
                    <Text style={styles.verifyText}>All Bio information has been verified by ABCD (Verified by admin)</Text>
                    <Text style={styles.educationText}>Education and Training</Text>
                </View>


                <View style={styles.trainingView}>
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
        fontFamily: "Roboto-Medium",
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
        top: hpx(15),
        right: wpx(160)
    },
    icon2Style: {
        top: hpx(15),
        left: wpx(160)
    },
    workTextStyle: {
        marginHorizontal: wpx(22),
        fontSize: nf(16),
        fontFamily: "Roboto-Medium",
        color: "#180334",
        marginTop: hpx(12)
    },
    viewContainer: {
        marginHorizontal: wpx(22),
        height: hpx(70),
        marginTop: hpx(14),
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 12,
        padding: wpx(13)
    },
    viewLogoContainer: {
        marginHorizontal: wpx(22),
        height: hpx(70),
        marginTop: hpx(14),
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 12,
        padding: wpx(13),
        flexDirection: "row",
        // flex: 0.7
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
    },
    headerView: {
        flexDirection: "row",
        backgroundColor: "#180334",
        height: hpx(60),
        paddingLeft: wpx(21),
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: wpx(18)
    },
    headerText: {
        fontSize: nf(19),
        paddingRight: wpx(200),
        fontFamily: "Roboto-Regular",
        color: "#FFFFFF"
    },
    verifyView: {
        marginTop: hpx(27),
        borderBottomWidth: 1,
        borderBottomColor: "#C9C9C9"
    },
    verifyText: {
        fontSize: nf(18),
        fontFamily: "Roboto-Regular",
        color: "#FFFFFF",
        backgroundColor: "#6A50D5",
        height: hpx(89),
        paddingLeft: wpx(27),
        paddingTop: hpx(12)
    },
    educationText: {
        marginHorizontal: wpx(22),
        fontSize: nf(16),
        fontFamily: "Roboto-Medium",
        color: "#180334",
        marginVertical: hpx(5)
    },
    trainingView: {
        marginHorizontal: wpx(22),
        height: hpx(144),
        marginTop: hpx(14),
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 12,
        padding: wpx(13)

    }
})

export default Profile;