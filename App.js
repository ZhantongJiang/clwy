import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import Loading from './components/shared/Loading';
import { useState, useEffect } from 'react';

export default function App() {
  const [courses, setCourses] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);

  /**
   * 获取搜索接口课程数据
   * @returns {Promise<void>}
   */
  const fetchData = async () => {
    try {
      const res = await fetch(
        `http://192.168.17.105:3000/search?q=${keyword}`
      );
      const { data } = await res.json();
      setCourses(data.courses);
    } finally {
      setLoading(false);
    }
  };

  // 默认情况下，只要组件发生重新渲染，useEffect 就会再次执行。
  useEffect(() => {
    fetchData();
  }, [keyword]); // 添加空依赖数组，确保只在组件挂载时执行一次

  if (loading) {
    return <Loading />;
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
