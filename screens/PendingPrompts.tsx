import React, {useState, useEffect} from 'react';
import {
    View, 
    Text, 
    TouchableWithoutFeedback,
    TouchableOpacity,
    FlatList,
    RefreshControl
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { promptsByDate } from '../src/graphql/queries';
import { updatePrompt, deletePrompt } from '../src/graphql/mutations';
import { formatRelative, parseISO } from "date-fns";

const PendingPrompts = ({navigation} : any) => {

    const [didUpdate, setDidUpdate] = useState(false)

    const [prompts, setPrompts] = useState([])

       //refresh state of the flatlist
       const [isFetching, setIsFetching] = useState(false);

       const onRefresh = () => {
           setIsFetching(true);
           setDidUpdate(!didUpdate)
           setTimeout(() => {
               setIsFetching(false);
           }, 2000);
           }

    useEffect(() => {
        const getUser = async () => {
            let response = await Auth.currentAuthenticatedUser();
            if (response.attributes.email === 'martianspidermedia@gmail.com') {
                return
            } else {
                navigation.navigate('HomeScreen');
            }
        }
        getUser();
    }, [])

    useEffect(() => {
        const fetchComments = async () => {
            let response = await API.graphql(graphqlOperation(
                promptsByDate, {
                    sortDirection: 'ASC',
                    type: 'Prompt',
                    filter: {
                        approved: {
                            eq: false
                        }
                    }
                }
            ))
            setPrompts(response.data.promptsByDate.items)
        }
        fetchComments();
    }, [didUpdate])

    const Prompt = ({createdAt, id, username, updatedAt, prompt, userID} : any) => {

        const Delete = async () => {
            try {
                await API.graphql(graphqlOperation(
                    deletePrompt, {input: {
                        id: id,
                    }}
                ))
            } catch {
                alert ('Prompt Deleted')
            }
            setDidUpdate(!didUpdate)
        }
    
        const Approve =  async () => {
            try {
                await API.graphql(graphqlOperation(
                    updatePrompt, {input: {
                        id: id,
                        approved: true
                    }}
                ))
            } catch {
                alert ('Could not update prompt')
            }
            setDidUpdate(!didUpdate)
        }
        
        return (
            <TouchableWithoutFeedback onPress={Approve} onLongPress={Delete}>
                <View style={{backgroundColor: '#132F35', margin: 20, padding: 10, borderRadius: 15}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('UserScreen', {userID: userID})}>
                            <Text style={{fontWeight: 'bold', color: '#fff', marginVertical: 4, textTransform: 'capitalize'}}>
                                {username}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{color: '#fff', marginVertical: 10}}>
                        {prompt}
                    </Text>
                    <Text style={{fontSize: 11, color: '#fff', marginVertical: 4, textTransform: 'capitalize'}}>
                    {formatRelative(parseISO(createdAt), new Date())}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    const renderPrompt = ({item} : any) => {
        return (
            <Prompt 
                createdAt={item.createdAt}
                updatedAt={item.updatedAt}
                id={item.id}
                username={item.user.name}
                prompt={item.prompt}
                userID={item.userID}
            />
        )
    }




    return (
        <View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 60, marginBottom: 30, marginLeft: 20 }}>
                <FontAwesome5 
                    name='chevron-left'
                    size={20}
                    color='#fff'
                    style={{padding: 30, margin: -30}}
                    onPress={() => navigation.goBack()}
                />
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18, marginLeft: 40}}>
                    New Prompts
                </Text>
            </View>

            <FlatList 
                data={prompts}
                keyExtractor={item => item.id}
                extraData={prompts}
                renderItem={renderPrompt}
                showsVerticalScrollIndicator={false}
                maxToRenderPerBatch={20}
                    refreshControl={
                        <RefreshControl
                        refreshing={isFetching}
                        onRefresh={onRefresh}
                        />
                    }
                    ListEmptyComponent={ () => {
                        return (
                            <View style={{ alignItems: 'center'}}>
                                    <Text style={{ color: 'white', margin: 20,}}>
                                        No new prompts.
                                    </Text>
                            </View>
                    );}}
                    ListFooterComponent={ () => {
                        return (
                            <View style={{ height: 100}}>
                            </View>
                    );}}
            />


        </View>
    )
}

export default PendingPrompts;