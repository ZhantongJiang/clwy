/*
 * @Author: zhengye 958150192@qq.com
 * @Date: 2025-11-05 16:00:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-11-05 16:39:10
 * @FilePath: \clwy-app\components\shared\NetworkError.js
 * @Description: 自定义网络错误组件
 */
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function NetworkError(props) {
  const title = props.title || '抱歉，网络连接出错了！';
  const { onReload } = props;

  return (
    <View style={styles.container}>
      <SimpleLineIcons name={'drawer'} size={160} color={'#ddd'}/>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.reload} onPress={onReload}>
        <Text style={styles.label}>重新加载</Text>
      </TouchableOpacity>
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
    color: '#999',
  },
  reload: {
    marginTop: 10,
    backgroundColor: '#1f99b0',
    height: 40,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  label: {
    color: '#fff',
    lineHeight: 40,
  },
});
