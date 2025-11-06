import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import Loading from './components/shared/Loading';
import NetworkError from './components/shared/NetworkError';
import useFetchData from './hooks/useFetchData';

export default function App() {
  const [keyword, setKeyword] = useState('');
  const { data, loading, error, onReload } = useFetchData('/search', { q: keyword });
  const { courses } = data;

  // 加载中
  if (loading) {
    return <Loading />;
  }

  // 网络错误提示
  if (error) {
    return <NetworkError title='🤪唉呀妈呀，网坏了，咋回事呢？' onReload={onReload}/>;
  }

  return (
    <View style={styles.container}>
      <Text>您搜索的关键词是：{keyword}</Text>

      <TextInput
        style={styles.input}
        placeholder="请填写要所搜索的课程!"
        onChangeText={text => setKeyword(text)}
        defaultValue={keyword}
      />

      {courses.map((course) => (
        <Text key={course.id}>
          {course.name}
        </Text>
      ))}
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
  input: {
    height: 40,
    width: 300,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
