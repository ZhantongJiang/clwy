import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('App 运行了!!!')
  return (
    <View style={styles.container}>
      <View>
        <Text style={[{ fontSize: 50, width: 200 }, styles.title]}>
          欢迎来到长乐未央 React Native 课程!
        </Text>
      </View>
      <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#ff7f6f' }}>
        Hello React Native!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e29447',
  }
});
