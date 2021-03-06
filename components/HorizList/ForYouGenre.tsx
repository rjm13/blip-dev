import React, {useState, useEffect, useContext} from 'react';
import { 
    View,
    Text, 
    FlatList,
    TouchableOpacity, 
} from 'react-native';

import {useNavigation} from '@react-navigation/native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HorzStoryTile from '../HorzStoryTile';
import { AppContext } from '../../AppContext';

import { getGenre, storiesByUpdated, listStories } from '../../src/graphql/queries';
import {graphqlOperation, API} from 'aws-amplify';


const ForYouGenre = ({genreid} : any) => {

    const { nsfwOn } = useContext(AppContext);

    const navigation = useNavigation();

    const [Genre, setGenre] = useState()

    const [nextToken, setNextToken] = useState()

    useEffect(() => {
        const fetchGenre = async () => {
            const genreInfo = await API.graphql(graphqlOperation(
                getGenre, {id: genreid}
            ))
            setGenre(genreInfo.data.getGenre)
        }
        console.log(genreid)
        fetchGenre();

    }, [])

//fetch the stories for a specific genre for promoted carousel      
    const [tagStories, setTagStories] = useState([]);

    useEffect(() => {

        let genreArr = []
            
        //gets the most recently rated stories in a genre with a rating over 6, sorts by the most recently created
        const fetchStorys = async () => {
                
            if (genreid) {
                try {
                    const response = await API.graphql(
                        graphqlOperation(
                            storiesByUpdated, {
                                nextToken,
                                type: 'Story',
                                sortDirection: 'DESC',
                                filter: {
                                    // ratingAvg: {
                                    //     gt: 6
                                    // },
                                    genreID: {
                                        eq: genreid
                                    },
                                    approved: {
                                        eq: 'approved'
                                    },
                                    hidden: {
                                        eq: false
                                    },
                                    nsfw: {
                                        ne: nsfwOn === true ? true : null
                                    }
                                }
                            } 
                        )
                    )

                    console.log(response.data.storiesByUpdated.items.length)

                    if (response.data.storiesByUpdated.items.length > 0) {
                        for (let i = 0; i < response.data.storiesByUpdated.items.length; i++) {
                            if (i === response.data.storiesByUpdated.items.length - 1 ) {
                                genreArr.push(response.data.storiesByUpdated.items[i])
                                if (genreArr.length === 8) {
                                    setTagStories(genreArr);
                                    return
                                }
                                if (response.data.storiesByUpdated.nextToken) {
                                    setNextToken(response.data.storiesByUpdated.nextToken)
                                    fetchStorys()
                                    return
                                } 
                                else {
                                    setTagStories(genreArr);
                                    return;
                                }
                            } else {
                                if (genreArr.length === 8) {
                                    setTagStories(genreArr);
                                    return
                                }
                                else {genreArr.push(response.data.storiesByUpdated.items[i])}
                                setTagStories(genreArr);
                                
                            }
                        }
                    } 
       
                } catch (e) {
                    console.log(e);}
            }
        }

        fetchStorys();

    },[genreid, nextToken])


    const renderItem = ({ item }: any) => {

        let icon = ''
        let genreName = ''

        if (item.genre) {
            icon = item.genre.icon
            genreName = item.genre.genre
        }
        
        return (
        <HorzStoryTile 
          title={item.title}
          imageUri={item.imageUri}
          genreName={null}
          icon={icon}
          id={item.id}
          ratingAvg={item.ratingAvg}
        />
      );}

    return (

        <View>
            <View style={{marginBottom: 0, marginLeft: 20}}>
                {tagStories.length === 0 ? null : (
                    <Text style={{textTransform: 'capitalize', fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
                        {Genre?.genre}
                    </Text>
                )}
                
            </View>
            <FlatList
                data={tagStories}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ListFooterComponent={
                    <TouchableOpacity onPress={() => navigation.navigate('GenreHome', {genreRoute: Genre?.id})}>
                        {tagStories.length === 0 ? null : (
                        <View style={{ width: 100, height: 200, justifyContent: 'center', alignItems: 'center'}}>
                            <FontAwesome5 
                                name='chevron-circle-right'
                                color='#ffffffa5'
                                size={25}
                            />
                        </View>
                )}
                    </TouchableOpacity>
                }
            />
        </View>
    );
}

export default ForYouGenre;
