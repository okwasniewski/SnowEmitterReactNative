import {XR} from '@callstack/react-native-visionos';
import React from 'react';
import {
  Alert,
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

console.log('Dimensions: ', Dimensions.get('window'));

function App(): React.JSX.Element {
  const dimensions = useWindowDimensions();
  const openImmersiveSpace = async () => {
    try {
      await XR.requestSession('SnowEmitter');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error', error.message);
      }
    }
  };

  const closeImmersiveSpace = async () => {
    await XR.endSession();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        React native visionOS {dimensions.height} {dimensions.width}👋
      </Text>
      <Button
        title="Open ImmersiveSpace"
        onPress={openImmersiveSpace}
        color="white"
      />
      <Button
        title="Close ImmersiveSpace"
        onPress={closeImmersiveSpace}
        color="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default App;
