import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import Loading from './components/shared/Loading';
import NetworkError from './components/shared/NetworkError';
import { useState, useEffect } from 'react';
import request, { get } from './utils/request';

export default function App() {
  const [courses, setCourses] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /**
   * 获取搜索接口课程数据
   * @returns {Promise<void>}
   */
  const fetchData = async () => {
    try {
      // 使用 request
      // const { data } = await request(`/search?q=${keyword}`);
      // const { data } = await request('/search', {
      //   params: { q: keyword },
      // });

      // 使用 get
      // const { data } = await get(`/search?q=${keyword}`);
      const { data } = await get('/search', { q: keyword });
      setCourses(data.courses);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // 重新加载
  const onReload = async () => {
    setLoading(true);
    setError(false);
    await fetchData();
  }

  // 默认情况下，只要组件发生重新渲染，useEffect 就会再次执行。
  useEffect(() => {
    fetchData();
  }, [keyword]); // 添加空依赖数组，确保只在组件挂载时执行一次

  
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
