import React, {useState, useEffect, useContext} from 'react';

import { 
  StyleSheet, 
  Dimensions, 
  TouchableWithoutFeedback,
  TouchableOpacity, 
  View, 
  Text, 
  TextInput,
  FlatList,
  ScrollView,
  ActivityIndicator
} 
from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LinearGradient} from 'expo-linear-gradient';
import { Modal, Portal, Provider } from 'react-native-paper';

import StoryTile from '../components/StoryTile';
import { AppContext } from '../AppContext';

import { promptsByDate, getPrompt, getUser } from '../src/graphql/queries';
import { createPrompt, updatePrompt, createSavedPrompt, deleteSavedPrompt } from '../src/graphql/mutations';
import {graphqlOperation, API, Auth} from 'aws-amplify';

import { useRoute } from '@react-navigation/native';

const PromptsHome = ({navigation} : any) => {

    const route = useRoute();
    const {promptID} = route.params

    const [prompts, setPrompts] = useState([])

    const [nextToken, setNextToken] = useState()

    const [didUpdate, setDidUpdate] = useState(false)

    useEffect(() => {

        let promptarr = []

        const fetchPrompts = async () => {
            let response = await API.graphql(graphqlOperation(
                promptsByDate, {
                    nextToken,
                    type: 'Prompt',
                    sortDirection: 'DESC',
                }
            ))

            if (response.data.promptsByDate.nextToken) {
                setNextToken(response.data.promptsByDate.nextToken);
                for (let i = 0; i < response.data.promptsByDate.items.length; i++) {
                    promptarr.push(response.data.promptsByDate.items[i])
                }
                fetchPrompts();
                return;
            } else {
                for (let i = 0; i < response.data.promptsByDate.items.length; i++) {
                    promptarr.push(response.data.promptsByDate.items[i])
                }
                setPrompts(promptarr)
                
            }
        }

        fetchPrompts();
        

    }, [didUpdate])

    useEffect(() => {
        if (promptID) {
            show2Modal({id: promptID})
        }
    }, [promptID])

    const [viewPrompt, setViewPrompt] = useState()

    const containerStyle = {
        backgroundColor: '#000', 
        borderRadius: 15,
        padding: 20
    };

    //submit prompt modal
    const [visible, setVisible] = useState(false);
    const showModal = () => {setVisible(true);}
    const hideModal = () => setVisible(false);

    //view prompt modal
    const [visible2, setVisible2] = useState(false);
    const show2Modal = (id : any) => {
        setViewPrompt(id);
        FetchPrompt(id)
        setVisible2(true);
    }
    const hide2Modal = () => {setVisible2(false); setIsSaved(false);}

    const [data, setData] = useState()

    const [isLoading, setIsLoading] = useState(false)

    const SubmitPrompt = async () => {

        setIsLoading(true);

        try {
            let userInfo = await Auth.currentAuthenticatedUser();

                let response = await API.graphql(graphqlOperation(
                    createPrompt, {input: {
                        type: 'Prompt',
                        prompt: data,
                        userID: userInfo.attributes.sub,
                        nsfw: false,
                        count: 0,
                        upvote: 0, 
                        updatedAt: new Date(),
                        createdAt: new Date(),
                    }}
                ))

                console.log(response)

                if (response) {
                    hideModal();
                    setIsLoading(false);
                    setDidUpdate(!didUpdate);
                }
        } catch {
            alert('Error. Please try again.')
            setIsLoading(false);
        }
    }

    const [promptData, setPromptData] = useState({
        id: '',
        prompt: '',
        count: 0,
        upvote: 0,
        createdAt: new Date(),
    })

    const [saved, setIsSaved] = useState(false);

    const [savedID, setSavedID] = useState()

      const [promptStories, setPromptStories] = useState();

      const [isPub, setIsPub] = useState(false)

      const FetchPrompt = async ({id, upvoted} : any) => {

        if (upvoted === true) {setIsUpVoted(true)}

        let userInfo = await Auth.currentAuthenticatedUser()

        let response = await API.graphql(graphqlOperation(
            getPrompt, {id: id }
        ))

        let userResponse = await API.graphql(graphqlOperation(
            getUser, {id: userInfo.attributes.sub }
        ))

        if (userResponse.data.getUser.isPublisher === true) {
            setIsPub(true)
        }

        for (let i = 0; i < userResponse.data.getUser.savedPrompts.items.length; i++) {
            if (userResponse.data.getUser.savedPrompts.items[i].prompt.id === id) {
                setIsSaved(true);
                setSavedID(userResponse.data.getUser.savedPrompts.items[i].id)
            }
        }

        setPromptData(response.data.getPrompt);
        setPromptStories(response.data.getPrompt.stories.items)
      }

      const [isUpVoted, setIsUpVoted] = useState(false)

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

      const Item = ({id, prompt, user, count, upvote} : any) => {

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
            <TouchableWithoutFeedback onPress={() => show2Modal({id, upvoted: isUpVoted})}>
                <View style={{alignSelf: 'center', marginVertical: 10, width: Dimensions.get('window').width - 40, backgroundColor: color, borderRadius: 15, overflow: 'hidden', padding: 20}}>
                    <Text numberOfLines={5} style={{color: '#fff', marginBottom: 20}}>
                        {prompt}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
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

        let user = ''

        if (item?.user) {
            user = item.user.name
        }
        
        return (
        <Item 
        id={item.id}
          prompt={item?.prompt}
          user={user}
          nsfw={item.nsfw}
          createdAt={item.createdAt}
          count={item.count}
          //color={item.color}
          upvote={item.upvote}
        />
      );}

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

      const SavePrompt = async (id: any) => {

        let userInfo = await Auth.currentAuthenticatedUser();

        console.log(id.id)

        let response = await API.graphql(graphqlOperation(
            createSavedPrompt, {
                input: {
                    type: 'SavedPrompt',
                    userID: userInfo.attributes.sub,
                    promptID: id.id,
                    createdAt: new Date()
                }
            }
        ))
        if (response) {
            setIsSaved(true)
            alert('Prompt saved!')
        }
      }

      const UnSavePrompt = async (id: any) => {

        let response = await API.graphql(graphqlOperation(
            deleteSavedPrompt, {
                input: {id: savedID
                }
            }
        ))

        setIsSaved(false);
        setSavedID(null)

        if (response) {
            alert('Prompt removed from saved.')
        }
      }

      const AddStory = ({id}: any) => {
        navigation.navigate('UploadAudio', {promptID: id})
      }

    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{textAlign: 'center',color: '#fff', fontWeight: 'bold', marginBottom: 20}}>
                            Submit a Writing Prompt
                        </Text>
                        <View style={{width: '90%', backgroundColor: '#363636', padding: 20, borderRadius: 10, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TextInput
                                placeholder='....'
                                placeholderTextColor='#ffffffa5'
                                style={{color: '#fff', fontWeight: 'bold', width: '90%'}}
                                maxLength={200}
                                multiline={true}
                                numberOfLines={10}
                                textAlignVertical='top'
                                onChangeText={val => setData(val)}
                            />
                        </View>
                        {isLoading === true ? (
                            <View>
                                <ActivityIndicator 
                                    color='cyan'
                                    size='small'
                                />
                            </View>
                        ) : (
                            <TouchableOpacity onPress={SubmitPrompt} >
                                <Text style={{marginTop: 10, alignSelf: 'center', borderRadius: 15, overflow: 'hidden', backgroundColor: 'cyan', paddingHorizontal: 20, paddingVertical: 6, }}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </Modal>

                <Modal visible={visible2} onDismiss={hide2Modal} contentContainerStyle={containerStyle}>
                    <View style={{height: Dimensions.get('window').height - 220}}>
                        <View style={{borderRadius: 15, overflow: 'hidden', backgroundColor: color}}>
                           <Text style={{paddingHorizontal: 10, paddingVertical: 20, color: '#fff', textAlign: 'center'}}>
                                {promptData.prompt}
                            </Text> 
                            <View style={{marginVertical: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
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
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <TouchableWithoutFeedback onPress={() => {saved === false ? SavePrompt({id: promptData.id}) : UnSavePrompt({id: promptData.id})}}>
                                    <Text style={{color: '#ffffffa5', padding: 10}}>
                                        {saved === true ? 'Unsave' : 'Save'}
                                    </Text>
                                </TouchableWithoutFeedback>
                       
                            {isPub === true ? (
                                <TouchableWithoutFeedback onPress={() => AddStory({id: promptData.id})}>
                                    <Text style={{color: '#ffffffa5', padding: 10}}>
                                        Add Story
                                    </Text>
                                </TouchableWithoutFeedback>
                            ) : null

                            }
                                
                            </View>
                        
                        <View style={{height: '90%', marginHorizontal: -20}}>
                            <FlatList 
                                data={promptStories}
                                keyExtractor={item => item.id}
                                renderItem={renderStoryTile}
                                maxToRenderPerBatch={10}
                                showsVerticalScrollIndicator={false}
                                ListFooterComponent={<View style={{height: 120}} />}
                                
                            />
                        </View>
                    </View>
                </Modal>
            </Portal>
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
                    <TouchableOpacity onPress={showModal}>
                        <Text style={{color: '#000', textAlign: 'center', marginHorizontal: 20, paddingVertical: 6, paddingHorizontal: 20, backgroundColor: '#00ffffa5', borderRadius: 15, overflow: 'hidden'}}>
                            Submit Prompt
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop: 20}}>
                    <FlatList 
                        data={prompts}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        scrollEnabled={false}
                        maxToRenderPerBatch={15}
                        showsVerticalScrollIndicator={false}
                        style={{marginBottom: 20}}
                        ListFooterComponent={
                            <View style={{height: 120}}/>
                        }
                    />
                </View>
                
            </View>
        </Provider>
    )
}

export default PromptsHome;