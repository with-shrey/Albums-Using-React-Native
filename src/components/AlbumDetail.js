import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { thumbnailStyle, headerContainerStyle, imageStyle, titleText } = styles;
  return (
    <Card>
    <CardSection>
    <View>
      <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
    </View>
    <View style={headerContainerStyle}>
      <Text style={titleText}>{title}</Text>
      <Text>{artist}</Text>
      </View>
      </CardSection>
      <CardSection>
      <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
      <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
    headerContainerStyle: {
      justifyContent: 'space-around',
      flexDirection: 'column'
    },
    thumbnailStyle: {
      height: 50,
      width: 50,
      marginLeft: 5,
      marginRight: 5
    },
    imageStyle: {
      flex: 1,
      height: 300,
      width: null
    },
    titleText: {
      fontSize: 15,
      fontWeight: 'bold'
    }
};

export default AlbumDetail;
