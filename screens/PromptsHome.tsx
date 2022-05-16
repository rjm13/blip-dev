import React, {useState, useEffect, useContext} from 'react';

import { 
  StyleSheet, 
  Dimensions, 
  TouchableWithoutFeedback,
  TouchableOpacity, 
  View, 
  Text, 
  Image,
  FlatList,
  ScrollView,
} 
from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LinearGradient} from 'expo-linear-gradient';
import PromptCarousel from '../components/HorizList/PromptCarousel';

import { AppContext } from '../AppContext';

import { listGenres, tagsByUpdated } from '../src/graphql/queries';
import {graphqlOperation, API} from 'aws-amplify';

const PromptsHome = ({navigation} : any) => {


    return (
        <View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 60, marginLeft: 20}}>
                <FontAwesome5 
                    name='chevron-left'
                    color='#fff'
                    size={22}
                    style={{padding: 20, margin: -20}}
                    onPress={() => navigation.goBack()}
                />
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 22, marginLeft: 40}}>
                    Writing Prompts
                </Text>
            </View>

            <View style={{marginTop: 20}}>
                <TouchableOpacity>
                    <Text style={{textAlign: 'center', marginHorizontal: 20, paddingVertical: 6, paddingHorizontal: 20, backgroundColor: '#949494', borderRadius: 15, overflow: 'hidden'}}>
                        Submit Prompt
                    </Text>
                </TouchableOpacity>
                
            </View>
            
        </View>
    )
}

export default PromptsHome;