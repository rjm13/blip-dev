import React, {useState, useEffect} from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    TouchableOpacity, 
    TouchableWithoutFeedback
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';

import { useRoute } from '@react-navigation/native';

const PremiumHome = ({navigation} : any) => {


    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['black', '#363636a5', 'black']}
                style={{height: Dimensions.get('window').height, justifyContent: 'center'}}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.container}>

                    <View style={{alignSelf: 'center', justifyContent: 'center', alignContent: 'center', marginHorizontal: 20}}>
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 32, fontWeight: 'bold'}}>
                           Blip Premium
                        </Text>
                    </View>

                    <View style={{marginVertical: 40}}>
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 24, }}>
                            Only $5/month
                        </Text>
                    </View>
                    

                    <View style={{alignSelf: 'center', justifyContent: 'center', alignContent: 'center', marginHorizontal: 30, marginBottom: 40}}>
                        <View style={{flexDirection: 'row', marginBottom: 20}}>
                            <FontAwesome5 
                                name='check'
                                size={18}
                                color='#00ffff'
                                style={{marginRight: 20, alignSelf: 'center'}}
                            />
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 14}}>
                                No Ads
                            </Text>
                        </View>

                        <View style={{flexDirection: 'row', marginBottom: 20}}>
                            <FontAwesome5 
                                name='check'
                                size={18}
                                color='#00ffff'
                                style={{marginRight: 20, alignSelf: 'center'}}
                            />
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 14}}>
                                Access all curated and explicit content
                            </Text>
                        </View>

                        <View style={{flexDirection: 'row', marginBottom: 20}}>
                            <FontAwesome5 
                                name='check'
                                size={18}
                                color='#00ffff'
                                style={{marginRight: 20, alignSelf: 'center'}}
                            />
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 14}}>
                                Access the After Dark genre
                            </Text>
                        </View>

                        
                        
                    </View>

                    <TouchableOpacity 
                        style={{ backgroundColor: '#00ffff', borderRadius: 18, width: '50%', alignSelf: 'center'}}
                        //onPress={() => {navigation.navigate('NarratorSetup', {user: User})}}
                    >
                        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', paddingVertical: 6,}}>
                            Get Premium
                        </Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        width: Dimensions.get('window').width,
    },
    header: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 40,
    },
});

export default PremiumHome;