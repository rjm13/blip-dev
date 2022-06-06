import React, {useState, useEffect} from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    TouchableOpacity, 
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';

import {graphqlOperation, API, Auth} from 'aws-amplify';
import {updateUser} from '../src/graphql/mutations';

const PremiumHome = ({navigation} : any) => {

    const GetInfo = async () => {
        let userInfo = await Auth.currentAuthenticatedUser();
        console.log(userInfo.signInUserSession.idToken.payload["cognito:groups"][0])
    }

    async function addToGroup() { 

        let userInfo = await Auth.currentAuthenticatedUser();

        let apiName = 'AdminQueries';
        let path = '/addUserToGroup';
        let myInit = {
            body: {
              "username" : userInfo.attributes.email,
              "groupname": "Premium"
            }, 
            headers: {
              'Content-Type' : 'application/json',
              Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            } 
        }
        return await API.post(apiName, path, myInit).then(
                navigation.navigate('Redirect', {trigger: Math.random()})
        )
      }

    const Subscribe = async () => {

        //this function will need users to confrim subscription through
        //Google Play Console and
        //Apple Developer Account/itunes connect
        //on confirmation of payment, a lambda function will trigger using
        //AdminAddUserToGroup, that will add the user to the premium user pool
        //for now, the user just has a field that updates in the DynamoDB table
        //and sets the global context for 'premium'

        let userInfo = await Auth.currentAuthenticatedUser();

        let response = await API.graphql(graphqlOperation(
            updateUser, {input: {
                id: userInfo.attributes.sub,
                plan: 'premium'
            }}
        ))

        if (response.data.updateUser.plan === 'premium') {
            navigation.navigate('Redirect', {trigger: Math.random()})
        }
    }


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
                        onPress={addToGroup}
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