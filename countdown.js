import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const Countdown = (props) => {

    const { initialMinute = 0, initialSeconds = 59 } = props;
    const [minutes, setMinutes] = React.useState(initialMinute);
    const [seconds, setSeconds] = React.useState(initialSeconds);

    React.useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    // const start = () => {
    //     let timer = setInterval(() => {
    //         if (seconds > 0) {
    //             setSeconds(seconds - 1);
    //         }
    //         if (seconds === 0) {
    //             if (minutes === 0) {
    //                 clearInterval(myInterval)
    //             } else {
    //                 setMinutes(minutes - 1);
    //                 setSeconds(59);
    //             }
    //         } 
    //     }, 1000) 
    //     clearInterval(timer); 
    // }
    const reset = () => {
        setMinutes(minutes);
        setSeconds(59);
    }
    return (
        <View>
            <Text style={styles.timer}> {minutes === 0 && seconds === 0
                ? null
                : `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}s`}
            </Text>
            <TouchableOpacity onPress={minutes === 0 && seconds === 0 ? reset : null}>
                {minutes === 0 && seconds === 0 ? 
                <Text>Re-send Email</Text> 
                : 
                null
                }
            </TouchableOpacity>
        </View>
    )
}


export default Countdown

const styles = StyleSheet.create({
    timer: {
        fontSize: 30,
    }
})