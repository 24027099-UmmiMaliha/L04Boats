
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';

const Boat = ({name, description, image, icon_name, icon_color, name_color}) => {
    return (
        <ScrollView>
            <Text></Text>
            <Text>
                <FontAwesome6 name={icon_name} size={30} color={icon_color}/>
            </Text>

            <Text style={{fontSize:20, fontWeight:'bold',  color: name_color}}>
                {name}
            </Text>

            <Text>
                {description}
            </Text>

            <Image source={image} style={{width:400,height:500}} />
        </ScrollView>
    );
};

export default Boat;
