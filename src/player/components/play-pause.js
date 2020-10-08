import React from 'react'
import { 
    TouchableHighlight, 
    TouchableOpacity, 
    TouchableWithoutFeedback,
    StyleSheet,
    Text
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export const PlayPause = ({ onPress, paused }) => {
    return (
        <TouchableHighlight 
         onPress={onPress}
         style={styles.container}
         underlayColor="rgba(0,0,0,.5)"
         hitSlop={{
             left: 5,
             top: 5,
             bottom: 5,
             right: 5
         }}
        >
            {
                paused 
                    ? <Icon name="play-outline" size={25} color="white" />
                    : <Icon name="pause-outline" size={25} color="white"/>
            }
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
     button:  {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    container:  {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        // backgroundColor: 'gray'
    }
})
