import React, { Component } from 'react';
import { 
    Text,
    TouchableWithoutFeedback,
    View
 } from 'react-native';
 import { connect } from 'react-redux';
 import { Actions } from 'react-native-router-flux';
import { FeedButton, LoginSection,CardSection,Card } from './common';
import { goToChat } from '../actions';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

class MessageItem extends Component {
  onButtonPress() {
    const { uid } = this.props.joinedevent;
    this.props.goToChat({ uid });
  }

 
    render() {

        const { name , date, location , tag , description } = this.props.joinedevent;

        return(
      <Card>
                      <View style={styles.container}>
                          <View style={styles.header}>
                              <View style={styles.subsection1}>
                                  <View style={styles.photo}>
                                  </View>
                                  
                                  <View style={styles.mainInfo}>
                                      <View style={styles.name}>
                                          <Text style={styles.nameStyle}>
                                               {name}
                                          </Text>
                                          <FeedButton onPress={this.onButtonPress.bind(this)}>Chat  </FeedButton>
                                      </View>
                                    
                                  </View>
                              </View>
                  
                          </View>
                          
                         
                      </View>
                  </Card>
        );
    }
}

const styles ={
    container: {
      flex: 1,
      backgroundColor: '#fff',

    },
    header: {
      padding: 10,
    },
    subsection1: {
      flexDirection: 'row',
    },
    photo: {
      height: 50,
      width: 50,
      backgroundColor: 'lightblue',
      borderRadius: 25,
    },
    mainInfo: {
      paddingLeft: 10,
    },
    name: {
      
    },
    nameStyle: {
      fontSize: 20,
      color: '#2699fb',
    },
    LocDate: {
      flexDirection: 'row',
    },
    location: {
      marginRight: '7%',
    },
    date: {
      
    },
    description: {
      color: '#000',
      marginTop: '3%',
    },
    image: {
      height: 200,
      flex: 1,
      backgroundColor: 'lightblue',
    },
    footer: {
      
    },
};
const mapStateToProps = (state) => {
  const { name , date, location , tag , description } = state.eventForm;

  return { name , date, location , tag , description };
};

export default connect(
  mapStateToProps,
   { 
    goToChat
  })
  (MessageItem);