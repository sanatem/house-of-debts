import React from 'react';

import {Text, View, SectionList, StyleSheet} from 'react-native';

export default class HomeScreen extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Text> Main menu !!</Text>
         <SectionList
          renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
          renderSectionHeader={({ section: { title } }) => <Text style={{ fontWeight: 'bold' }}>{title}</Text>}
          sections={[
           { title: 'Title1', data: ['item1', 'item2'] },
           { title: 'Title2', data: ['item3', 'item4'] },
           { title: 'Title3', data: ['item5', 'item6'] },
           ]}
          keyExtractor={(item, index) => item + index} />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
