import React from 'react';
import {
  View,
  Text
} from 'react-native';

export default () => {
  return (
    <View style = {
      {
        "alignItems": "flex-start"
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 35,
        "paddingTop": 28,
        "width": 294,
        "height": 118,
        "borderRadius": 11,
        "borderWidth": 2,
        "borderColor": "rgba(255, 255, 255, 255)",
        "backgroundColor": "rgba(242, 242, 242, 255)"
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "width": 225,
        "height": 26,
        "borderRadius": 13,
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    }
    />
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 9,
        "paddingTop": 3,
        "marginTop": 10,
        "width": 225,
        "height": 27,
        "borderRadius": 13.5,
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontSize": 15,
        "color": "rgba(168, 168, 168, 255)"
      }
    } > Senha </Text>
    </View>
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 9,
        "paddingTop": 2,
        "marginStart": 0,
        "marginTop": -63
      }
    } >
    <Text style = {
      {
        "fontFamily": "Segoe UI",
        "fontSize": 15,
        "color": "rgba(168, 168, 168, 255)"
      }
    } > Usuário </Text>
    </View>
    </View>
    </View>

  );
};