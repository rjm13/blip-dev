import React, {useState, useEffect} from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    FlatList, 
    Dimensions, 
    RefreshControl, 
    ActivityIndicator,
    TouchableWithoutFeedback
} from 'react-native';

import StoryTile from '../components/StoryTile';

import { Modal, Portal, Provider } from 'react-native-paper';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { getUser, getPrompt } from '../src/graphql/queries';
import { updatePrompt, deleteSavedPrompt } from '../src/graphql/mutations';
import {graphqlOperation, API, Auth} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native'


const SavedPromptList = () => {

    const navigation = useNavigation()

//state for the array of pinned stories for that user
    const [savedPrompts, setSavedPrompts] = useState([])

//update trigger for fetching the pinned stories
    const [didUpdate, setDidUpdate] = useState(false);

    const [nextToken, setNextToken] = useState()

    const [isPub, setIsPub] = useState(false)

    useEffect(() => {

        const Prompts = []

        const fetchPrompts = async () => {

            setIsLoading(true);

            const userInfo = await Auth.currentAuthenticatedUser();

            if (!userInfo) {return;}

            try {

                const promptData = await API.graphql(graphqlOperation(
                    getUser, {nextToken, id: userInfo.attributes.sub}))

                if (promptData.data.getUser.savedPrompts.items.length > 0) {
                    for (let i = 0; i < promptData.data.getUser.savedPrompts.items.length; i++) {
                        Prompts.push(promptData.data.getUser.savedPrompts.items[i])
                    } 

                    if (promptData.data.getUser.savedPrompts.nextToken) {
                        setNextToken(promptData.data.savedPrompts.nextToken)
                        fetchPrompts();
                        return;
                    }
                }
                   
                if (promptData.data.getUser.isPublisher === true) {
                    setIsPub(true)
                }

                setSavedPrompts(Prompts);
                setIsLoading(false);
              
            } catch (e) {
            console.log(e);
          }
        }
           fetchPrompts(); 
      }, [didUpdate])


    const [isFetching, setIsFetching] = useState(false);

    const onRefresh = () => {
        setIsFetching(true);
        setDidUpdate(!didUpdate)
        setTimeout(() => {
          setIsFetching(false);
        }, 2000);
    }
        
    const [promptData, setPromptData] = useState({
        id: '',
        prompt: '',
        count: 0,
        upvote: 0,
        createdAt: new Date(),
    })
        
    const [promptStories, setPromptStories] = useState([]);

    const FetchPrompt = async ({pid, upvoted} : any) => {

        let prstories = []

        if (upvoted === true) {setIsUpVoted(true)}

        let response = await API.graphql(graphqlOperation(
            getPrompt, {id: pid }
        ))

      setPromptData(response.data.getPrompt);

      for (let i = 0; i < response.data.getPrompt.stories.items.length; i++) {
         if (response.data.getPrompt.stories.items[i].approved === 'approved' && response.data.getPrompt.stories.items[i].hidden === false) {
             prstories.push(response.data.getPrompt.stories.items[i])
         }
      }
      setPromptStories(prstories)
    }

    const [isUpVoted, setIsUpVoted] = useState(false)

//view prompt modal
    const [visible2, setVisible2] = useState(false);
    const show2Modal = (pid : any) => {
    //setViewPrompt(id);
        FetchPrompt(pid)
        setVisible2(true);
    }

    const hide2Modal = () => setVisible2(false);

    const containerStyle = {
        backgroundColor: '#000', 
        borderRadius: 15,
        padding: 20
    };

    const [data, setData] = useState()

    const Prompt = ({id, prompt, user, nsfw, createdAt, count, upvote, pid} : any) => {
    
        const [isUpVoted, setIsUpVoted] = useState(false)

        const UpVote = async () => {
            if (isUpVoted === true) {return}

            await API.graphql(graphqlOperation(
                updatePrompt, {input: {
                id: id,
                upvote: upvote + 1
                }}
            ))
            setIsUpVoted(true)
        }

        const colors = ['#3B4B80', '#007676a5', '#703232', '#706A32']
        const color = colors[Math.floor(Math.random()*colors.length)]

        return (
            <TouchableWithoutFeedback onPress={() => show2Modal({pid, upvoted: isUpVoted})}>
                <View>
                    <View style={{alignSelf: 'center', marginVertical: 10, width: Dimensions.get('window').width - 40, backgroundColor: color, borderRadius: 15, overflow: 'hidden', padding: 20}}>
                        <Text numberOfLines={5} style={{color: '#fff', marginBottom: 20}}>
                            {prompt}
                        </Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <TouchableWithoutFeedback onPress={() => UnSavePrompt(id)} >
                                <Text style={{color: '#ffffffa5', padding: 0}}>
                                    Unsave
                                </Text>
                            </TouchableWithoutFeedback>
                            
                            {isPub === true ? (
                                <TouchableWithoutFeedback onPress={() => AddStory(pid)}>
                                    <Text style={{color: '#ffffffa5', padding: 0}}>
                                        Add Story
                                    </Text>
                                </TouchableWithoutFeedback>
                            ) : null}                            
                        </View>
                    </View>
                    <View style={{marginHorizontal: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>
                            {count} {count === 1 ? 'Story' : 'Stories'}
                        </Text>
                        <TouchableWithoutFeedback onPress={UpVote}>
                            <View style={{flexDirection: 'row'}}>
                                <FontAwesome 
                                    name='thumbs-up'
                                    color='#fff'
                                    size={17}
                                    style={{marginRight: 10}}
                                />
                                <Text style={{color: '#fff', fontWeight: 'bold'}}>
                                    {isUpVoted === true ? upvote + 1 : upvote}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    const renderItem = ({ item }: any) => {
   
    
    return (
    <Prompt 
        id={item.id}
        pid={item.prompt.id}
        prompt={item?.prompt.prompt}
        nsfw={item.prompt.nsfw}
        createdAt={item.prompt.createdAt}
        count={item.prompt.count}
        //color={item.color}
        upvote={item.prompt.upvote}
    />
    );}

      const [isLoading, setIsLoading] = useState(false);

      const renderStoryTile = ({ item }: any) => {

       
        let icon = ''
        let genreName = ''
        let primary = ''

        if (item.genre) {
            icon = item.genre.icon
            genreName = item.genre.genre
            primary = item.genre.PrimaryColor
        }
        
        return (
        <StoryTile 
          title={item.title}
          imageUri={item.imageUri}
          genreName={genreName}
          icon={icon}
          primary={primary}
          audioUri={item.audioUri}
          summary={item.summary}
          author={item.author}
          narrator={item.narrator}
          time={item.time}
          id={item.id}
          ratingAvg={item.ratingAvg}
          ratingAmt={item.ratingAmt}
        />
      );}

    //   const SavePrompt = async (id: any) => {

    //     let userInfo = await Auth.currentAuthenticatedUser();

    //     console.log(id.id)

    //     let response = await API.graphql(graphqlOperation(
    //         createSavedPrompt, {
    //             input: {
    //                 type: 'SavedPrompt',
    //                 userID: userInfo.attributes.sub,
    //                 promptID: id.id,
    //                 createdAt: new Date()
    //             }
    //         }
    //     ))
    //     if (response) {
    //         setIsSaved(true)
    //         alert('Prompt saved!')
    //     }
    //   }

      const UnSavePrompt = async (id: any) => {

        let response = await API.graphql(graphqlOperation(
            deleteSavedPrompt, {
                input: {id: id
                }
            }
        ))

        setDidUpdate(!didUpdate)

        if (response) {
            alert('Prompt removed from saved.')
        }
      }

      const AddStory = (pid : any) => {
        navigation.navigate('UploadAudio', {promptID: pid})
      }

      const UpVote = async () => {
        if (isUpVoted === true) {return}

        await API.graphql(graphqlOperation(
            updatePrompt, {input: {
            id: promptData.id,
            upvote: promptData.upvote + 1
            }}
        ))
        setIsUpVoted(true)
    }

    const colors = ['#3B4B80', '#007676a5', '#703232', '#706A32']
    const color = colors[Math.floor(Math.random()*colors.length)]

    return (
        <Provider>
            <Portal>
            <Modal visible={visible2} onDismiss={hide2Modal} contentContainerStyle={containerStyle}>
                    <View style={{height: Dimensions.get('window').height - 220}}>
                        <View style={{borderRadius: 15, overflow: 'hidden', backgroundColor: color}}>
                           <Text style={{paddingHorizontal: 10, paddingVertical: 20, color: '#fff', textAlign: 'center'}}>
                                {promptData.prompt}
                            </Text> 
                            
                        </View>
                        
                        <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10}}>
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>
                                {promptData.count} {promptData.count === 1 ? 'Story' : 'Stories'}
                            </Text>
                            <TouchableWithoutFeedback onPress={UpVote}>
                                <View style={{flexDirection: 'row'}}>
                                    <FontAwesome 
                                        name='thumbs-up'
                                        color='#fff'
                                        size={17}
                                        style={{marginRight: 10}}
                                    />
                                    <Text style={{color: '#fff', fontWeight: 'bold'}}>
                                        {isUpVoted === true ? promptData.upvote + 1 : promptData.upvote}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{height: '90%', marginHorizontal: -20}}>
                            <FlatList 
                                data={promptStories}
                                keyExtractor={item => item.id}
                                renderItem={renderStoryTile}
                                maxToRenderPerBatch={10}
                                showsVerticalScrollIndicator={false}
                                ListHeaderComponent={<View style={{height: 20}}/>}
                                ListFooterComponent={<View style={{height: 120}}/>}
                                
                            />
                        </View>
                    </View>
                </Modal>
            </Portal>
            <View style={styles.container}>

                <FlatList 
                    data={savedPrompts}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={savedPrompts}
                    maxToRenderPerBatch={20}
                    refreshControl={
                        <RefreshControl
                        refreshing={isFetching}
                        onRefresh={onRefresh}
                        />
                    }
                    showsVerticalScrollIndicator={false}    
                    ListFooterComponent={ () => {
                        return (
                            <View style={{ height:  120, alignItems: 'center'}}/>
                    );}}
                    ListHeaderComponent={ () => {
                        return (
                            <View style={{ height:  40, alignItems: 'center'}}/>
                    );}}
                    ListEmptyComponent={ () => {
                        return (
                            <View>
                                {isLoading === true ? (
                                <View style={{margin: 30}}>
                                    <ActivityIndicator size='small' color='cyan' />
                                </View>
                                ) : (
                                <View>
                                    <Text style={{ color: 'white', margin: 20, textAlign: 'center'}}>
                                        There is nothing here!
                                    </Text>
                                    <Text style={{ color: '#ffffffa5', margin: 20, textAlign: 'center'}}>
                                        (pull to refresh)
                                    </Text>
                                </View>
                                
                                )}
                            </View>
                    );}}
                />

            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
       width: Dimensions.get('window').width, 
       height: '99%'
    },
    tile: {
        backgroundColor: '#363636a5',
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 20,
        borderRadius: 15,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        flexWrap: 'wrap',
        width: 225,
    },
    userId: {
        fontSize: 12,
        color: '#ffffffa5',
        marginRight: 15,
        marginLeft: 5,
    },
    icontext: {
        fontSize: 10,
        color: '#ffffffa5',
        marginTop: 5,
    },
    popupblock: {
        marginTop: 10,
    },
    paragraph: {
        color: '#ffffffB3'
    },
    playbutton: {
        borderWidth: 0.5,
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 15,
        borderColor: '#ffffffa5',
        color: '#ffffffa5',
    },
    time: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#ffffffa5',
        marginHorizontal: 5,
    },
    category: {
        fontSize: 14,
        color: 'gray',
        //fontStyle: 'italic',
        marginVertical: 3,
        textTransform: 'capitalize'

    },

});

export default SavedPromptList;
