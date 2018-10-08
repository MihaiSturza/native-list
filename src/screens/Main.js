import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';
import { 
  Header, 
  Icon, 
  Divider, 
  List, 
  ListItem 
} from 'react-native-elements';
import axios from 'axios';
import { darkBlue, vermillion } from '../styles';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { users: []};
  }


  componentDidMount() {
    this.fetchUsers();
  }


  async fetchUsers() {
      const ROOT_URL = 'https://lateral-node-api.herokuapp.com/api';
      const response = await axios.get(`${ROOT_URL}/user`);
      this.setState({ users: response.data });
        
}


  AddUser() {
    console.log(this.props);
    this.props.navigation.navigate('newUser');
  }

  toMenu() {
    console.log('This is the menu');
  }


  showUser(item)  {
    console.log('Here are the details of the user!', item);
          <View style={styles.details}>
                <Text>{item.phone}</Text>
                <Text>{item.favColor}</Text>
          </View>
    
  }


  renderList(user) {
    const { item } = user;
    return (
          <View>
            <ListItem
              titleStyle={{color: vermillion}}
              wrapperStyle={{ height: 70, backgroundColor: darkBlue}}
              onPress={() => this.showUser(item)}
              title={item.name}
              subtitle={item.dob.slice(0, 10)}
              subtitleStyle={{ color: vermillion }}
              leftIcon={{ name: 'account-circle', size: 40, color: vermillion}} 
          />
          </View>
            )
  }

  render() {
    console.log('props:', this.props);
    return (
      <View>
        <Header
          leftComponent={<LeftComponent onPress={this.toMenu.bind(this)}/>}
          centerComponent={{ text: 'List', style: { color: vermillion, fontSize: 25 } }}
          rightComponent={<Icon  size={30} name="account-plus" type="material-community" color={vermillion} onPress={this.AddUser.bind(this)}/>}
          innerContainerStyles={{ backgroundColor: darkBlue, justifyContent: 'space-between', paddingTop: 10 }}
          outerContainerStyles={{ backgroundColor: darkBlue, height: 80 }}
        />
        <Divider style={{ backgroundColor: darkBlue, height: 2 }} />
        <ScrollView>
        <List containerStyle={{ marginTop: 0 }}>
          { this.state.users.length ? 
            <FlatList 
              data={this.state.users} 
              renderItem={this.renderList.bind(this)} 
              keyExtractor={user => user.name} 
            /> 
            : <Text></Text>
          }
        </List>
        </ScrollView>
      </View>
      
    );
  }
}


const LeftComponent = (props) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Icon 
        name='react' 
        type='material-community' 
        size={30} 
        color={vermillion}
        onPress={props.onPress} 
         />
    </View>
  )
}


const styles = {
  details: {
    height: 80,
    backgroundColor: vermillion,
    justifyContent: 'center',
    alignItems: 'center'
  }
} 



export default Main;