import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Icons, Images, nf, hpx, wpx, hp, wp } from '../../constants/constants';
import ImagePicker from 'react-native-image-crop-picker';

const CameraProfile = () => {

    const [img, setImg] = useState([]);
    const [count, setCount] = useState(0)

    //Choose pics from gallery
    const libraryFunc = () => {
        ImagePicker.openPicker({
            multiple: true,
            width: 300,
            height: 400,
            //  cropping: true
        }).then(image => {
            console.log(image);
            setImg(image);
            // setCount(count + 1);
        }).catch(err => {
            console.log(err);
        });
    }

    const onDelete = (index) => {
        //  console.log(index);
        const newImg = [...img];
        newImg.splice(index, 1);
        setImg(newImg);

    }

    const renderItemFunc = ({ item, index }) => (

        <View>
            <Image source={{ uri: item.path }} style={{ height: hpx(86), width: wpx(138), marginRight: wpx(10), marginTop: hpx(4) }} />
            <View style={{ height: hpx(11), width: wpx(13), borderRadius: hpx(6), backgroundColor: "#6D52E1", position: "absolute", alignItems: "center", justifyContent: "center", right: -0.5, top: -1 }}>
                <TouchableOpacity onPress={() => { onDelete(index) }}>
                    <Image source={Icons.deleteP} />
                </TouchableOpacity>
            </View>

        </View>
    )


    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="#180334" />
            <View style={styles.headerView}>
                <Image source={Icons.back} />
                <Text style={styles.msgText}>Stanley Jock</Text>
            </View>

            <Text style={styles.questionText}>Please enter Your Question</Text>
            <View style={styles.dataView}>
                <Text style={styles.dataText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>
            <Text style={styles.noteText}>Note: Do not ask for consultation through the platform, this is only for simple questions.</Text>

            <Text style={styles.uploadText}>Uploaded Image ({count}/3)</Text>


            <View style={{ marginTop: hpx(13), marginLeft: wpx(29), height: hpx(90), backgroundColor: "#FFFFFF" }}>
                {/* <Image
                    source={{ uri: img[0] }}
                    style={{ height: hpx(88), width: wpx(138) }}
                /> */}

                <FlatList
                    data={img}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItemFunc}
                    horizontal={true}
                />

            </View>


            <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.uploadButton} onPress={libraryFunc} >
                    <Image source={Icons.upload} />
                    <Text style={styles.uploadButtonText}>Upload</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Save to draft</Text>
                </TouchableOpacity>
                <Text style={styles.doctorText}>Doctor usually answer in … days</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    headerView: {
        height: hpx(70),
        backgroundColor: "#180334",
        padding: wpx(21),
        flexDirection: "row"
    },
    msgText: {
        fontSize: nf(19),
        fontFamily: "Roboto-Regular",
        color: "#FFFFFF",
        paddingLeft: wpx(27),
    },
    questionText: {
        marginTop: hpx(10),
        marginLeft: wpx(21),
        fontSize: nf(13),
        fontFamily: "Roboto-Regular",
        color: "#180334"
    },
    dataView: {
        height: hpx(165),
        marginLeft: wpx(21),
        marginRight: wpx(36),
        marginTop: hpx(9),
        backgroundColor: "#F7F7F7",
        borderWidth: 1,
        borderColor: "#C6C6C6",
        borderRadius: wpx(14),
        padding: wpx(14)
    },
    dataText: {
        color: "#180334",
        fontSize: nf(13),
        fontFamily: "Roboto-Regular"
    },
    noteText: {
        marginHorizontal: wpx(29),
        marginTop: hpx(10),
        color: "#F40202",
        fontSize: nf(12),
        fontFamily: "Roboto-Regular"
    },
    uploadText: {
        marginLeft: wpx(29),
        marginTop: hpx(15),
        color: "#180334",
        fontSize: nf(13),
        fontFamily: "Roboto-Regular"
    },
    uploadButton: {
        backgroundColor: "#6D52E1",
        height: hpx(74),
        width: wpx(360),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hpx(23),
        borderRadius: wpx(12)
    },
    uploadButtonText: {
        color: "#FFFFFF",
        fontSize: nf(14),
        fontFamily: "Roboto-Regular"
    },
    sendButton: {
        backgroundColor: "#4BF6D2",
        height: hpx(44),
        width: wpx(180),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hpx(29),
        borderRadius: wpx(25)
    },
    sendButtonText: {
        color: "#2B1056",
        fontSize: nf(16),
        fontFamily: "Roboto-Bold"
    },
    saveButton: {
        backgroundColor: "#6D52E1",
        height: hpx(44),
        width: wpx(180),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hpx(11),
        borderRadius: wpx(25)
    },
    saveButtonText: {
        color: "#FFFFFF",
        fontSize: nf(17),
        fontFamily: "Roboto-Bold"
    },
    doctorText: {
        color: "#180334",
        fontSize: nf(16),
        fontFamily: "Roboto-Regular",
        marginTop: hpx(10)
    }

})

export default CameraProfile;