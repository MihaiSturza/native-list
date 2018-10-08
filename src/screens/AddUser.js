import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddUser } from '../actions';
import { View, Text, TextInput } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { Field, reduxForm } from 'redux-form';

import { darkBlue, vermillion } from '../styles';


class AddUser extends Component {
  constructor(props) {
    super(props);
  }

  submit(values) {
    console.log('submit value: ', values);
    this.props.AddUser(values);
    this.props.navigation.navigate('Home');
  }

  
  


  render() {
    console.log('addProps: ', this.props);
    const { handleSubmit } = this.props;
    return (
      <View>
        <Header
          centerComponent={{ text: 'List', style: { color: vermillion, fontSize: 25 } }}
          innerContainerStyles={{ backgroundColor: darkBlue, justifyContent: 'space-between', paddingTop: 10 }}
          outerContainerStyles={{ backgroundColor: darkBlue, height: 80 }} 
        />
        <Field name="name" component={renderInput} />
        <Button
          type="submit" 
          icon={{ name: 'nodejs', type: 'material-community', size: 30 }} 
          title="Create new user"
          backgroundColor={darkBlue}
          onPress={handleSubmit(this.submit.bind(this))}
        /> 
        
      </View>
    );
  }
}

const renderInput = ({input: { onChange }}) => {
  return (
    <TextInput 
        style={styles.textInputStyle} 
        placeholder="Name"
        onChangeText={onChange}
        autoFocus
        />
  ) 
}

const styles = {
  textInputStyle: {
    height: 40, 
    borderColor: darkBlue,
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15 
  }
}

export default reduxForm({
  form: 'add-new-user'
})(AddUser);