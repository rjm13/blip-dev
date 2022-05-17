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

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import { promptsByUpdated } from '../../src/graphql/queries';
import {graphqlOperation, API} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native'

const PromptCarousel = () => {

    const navigation = useNavigation()

    

    const [prompts, setPrompts] = useState([
    {
        prompt: 'A story about a guy who gets a super power to fart mustard gas at will and with deadly force. A story about a guy who gets a super power to fart mustard gas at will and with deadly force.',
        count: 1,
        user: {name: 'Martin Short'},
        upvote: 2,
        color: '#007676a5'
    },
    {
        prompt: 'A story about a mouse who lives in a soda can.',
        count: 1,
        user: {name: 'Martin Short'},
        upvote: 2,
        color: '#3B4B80'
    },
    {
        prompt: 'A story about about killer peas',
        count: 3,
        user: {name: 'Martin Short'},
        upvote: 2,
        color: '#703232'
    },
    {
        prompt: 'A tale about Paul Bunons bunyons',
        count: 2,
        user: {name: 'Martin Short'},
        upvote: 2,
        color: '#706A32'
    },
])

    useEffect(() => {
        const fetchPrompts = async () => {
            let response = await API.graphql(graphqlOperation(
                promptsByUpdated, {
                    type: 'Prompt',
                    sortDirection: 'DESC', 
                }
            ))
            setPrompts(response.data.promptsByUpdated.items)
        }

        fetchPrompts()
    }, [])

    const Item = ({prompt, user, count, upvote} : any) => {

        const colors = ['#3B4B80', '#007676a5', '#703232', '#706A32']
        const color = colors[Math.floor(Math.random()*colors.length)]
        
        return (
            <View style={{width: Dimensions.get('window').width - 40, backgroundColor: color, borderRadius: 15, overflow: 'hidden', padding: 20}}>
                <Text numberOfLines={5} style={{color: '#fff', marginBottom: 20}}>
                    {prompt}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        {count} {count === 1 ? 'Story' : 'Stories'}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <FontAwesome 
                            name='thumbs-up'
                            color='#fff'
                            size={17}
                            style={{marginRight: 10}}
                        />
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>
                            {upvote}
                        </Text>
                    </View>
                    
                </View>
            </View>
        )
    }

    const renderItem = ({ item }: any) => {

        let user = ''

        if (item?.user) {
            user = item.user.name
        }
        
        return (
        <Item 
          prompt={item?.prompt}
          user={user}
          nsfw={item.nsfw}
          createdAt={item.createdAt}
          count={item.count}
          //color={item.color}
          upvote={item.upvote}
        />
      );}

      const [activeSlide, setActiveSlide] = useState(0);
      
    return (
        <View>
            <Carousel
              data={prompts}
              renderItem={renderItem}
              extraData={true}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width-40}
              layout={'default'} 
              enableSnap={true}
              enableMomentum={true}
              decelerationRate='fast'
              onSnapToItem={(index) => setActiveSlide(index) }
              loop={true}
              autoplay={true}
              autoplayInterval={5000}
              //layoutCardOffset={0}
            />
            <Pagination
              dotsLength={prompts.length}
              activeDotIndex={activeSlide}
              containerStyle={{ backgroundColor: 'transparent' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
            
        </View>
    )
}

export default PromptCarousel;