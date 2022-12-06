import React, { Component } from 'react'
import { Text, View } from 'react-native'

const Alert = () => {
  submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  };
  
    return (
      <View>
        
      </View>
    )
}

export default Alert
