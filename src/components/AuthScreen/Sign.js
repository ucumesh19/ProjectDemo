import { CheckBox } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Icons, nf, hpx, wpx, hp, wp } from '../../constants/constants';

const Sign = () => {
    return (

        <ScrollView style={styles.container}>
            <View style={styles.outerView}>
                <Image source={Icons.splash_logo} style={{ marginTop: hp(9) }} />
            </View>
            <View style={styles.mainView}>
                <Text style={styles.patientText} >Are you a Patient?</Text>
                <Text style={styles.doctorText} >Doctor MemberShip Request</Text>
                <View style={{ margin: 20 }}>
                    <Text style={styles.fieldText}> Full name </Text>
                    <View style={{ flexDirection: "row" }}>
                        <TextInput style={styles.fieldContainer} placeholder="Full Name" />
                        <Image source={Icons.avatar} style={styles.icon} />
                    </View>

                    <Text style={styles.fieldText}> Password</Text>
                    <View style={{ flexDirection: "row" }}>
                        <TextInput style={styles.fieldContainer} placeholder="Password" secureTextEntry={true} />
                        <Image source={Icons.eye} style={styles.icon} />
                    </View>

                    <Text style={styles.fieldText}> Confirm Password </Text>
                    <View style={{ flexDirection: "row" }}>
                        <TextInput style={styles.fieldContainer} placeholder="Confirm Password" secureTextEntry={true} />
                        <Image source={Icons.eye} style={styles.icon} />
                    </View>

                    <Text style={styles.fieldText}> Email </Text>
                    <View style={{ flexDirection: "row" }}>
                        <TextInput style={styles.fieldContainer} placeholder="email" />
                        <Image source={Icons.email} style={styles.icon} />
                    </View>

                    <Text style={styles.fieldText}> Phone </Text>
                    <View style={{ flexDirection: "row" }}>
                        <TextInput style={styles.fieldContainer} placeholder="Mobile Number" keyboardType='number-pad' />
                        <Image source={Icons.phone} style={styles.icon} />
                    </View>

                    <Text style={styles.fieldText}> Upload Cv</Text>
                    <View style={{ flexDirection: "row" }}>
                        <TextInput style={styles.fieldContainer} placeholder="Upload CV" />
                        <Image source={Icons.fileUpload} style={styles.icon} />
                    </View>
                </View>


                <View style={{ flexDirection: "row", marginHorizontal: wpx(20) }}>
                    <CheckBox style={{ marginHorizontal: wpx(6), borderColor: "black" }} />
                    <Text style={styles.acceptText}>    I accept </Text>
                    <Text style={styles.termText}>Terms & Conditions</Text>
                </View>



                <View style={{ alignItems: "center", marginTop: hpx(20) }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", marginTop: hpx(5), marginBottom: hpx(25) }} >
                        <Text style={styles.fieldText}>Already have an account?</Text>
                        <Text style={styles.loginText}>Login</Text>
                    </View>
                </View>

            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2B1056",
        flex: 1
    },
    fieldContainer: {
        fontSize: nf(16),
        color: "#180334",
        borderColor: "#C6C6C6",
        borderWidth: 1,
        borderRadius: 30,
        padding: 12,
        fontFamily: "Lato",
        marginBottom: 15,
        width: wpx(357),
        height: hpx(44)
    },
    fieldText: {
        fontSize: nf(14),
        color: "#180334",
        fontFamily: "Lato"

    },
    signUpText: {
        color: "#2B1056",
        fontFamily: "Lato",
        fontWeight: "bold",
        fontSize: nf(17)
    },
    button: {
        backgroundColor: "#4BF6D2",
        alignItems: "center",
        justifyContent: "center",
        width: wpx(180),
        height: hpx(44),
        borderRadius: 20
    },
    outerView: {
        height: wp(70),
        width: wp(100),
        alignItems: "center",
        backgroundColor: "#2B1056"
    },
    mainView: {
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: wp(25),
        // position: "absolute",
        // marginTop: hp(35),
        flex: 1
    },
    patientText: {
        fontSize: nf(14),
        color: "#180334",
        fontWeight: "bold",
        fontFamily: "Roboto",
        textAlign: 'right',
        marginTop: hpx(10),
        marginRight: wpx(28)
    },
    doctorText: {
        margin: 10,
        textAlign: 'center',
        fontSize: nf(26),
        color: "#180334",
        fontWeight: "bold",
        fontFamily: "Lato"
    },
    icon: {
        position: "absolute",
        right: wpx(35),
        top: hpx(10)
    },
    acceptText: {
        fontSize: nf(13),
        fontFamily: "Lato",
        color: "#3F2D56"
    },
    termText: {
        fontSize: nf(13),
        fontFamily: "Lato",
        color: "#6D52E1",
        fontWeight: "bold"
    },
    loginText: {
        fontSize: nf(14),
        color: "#180334",
        fontFamily: "Lato",
        fontWeight: "bold"
    }
});

export default Sign;
