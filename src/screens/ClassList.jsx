import React from 'react';
import ListComponent from '../components/ListComponent';

// ClassList.tsx
const ClassList = ({ navigation, classes, onClassSelect }) => {
  return (
<ListComponent
  title="Select Class"
  data={classes}
  onSelect={(item) => {
    onClassSelect(item);
    navigation.goBack();
  }}
  onAdd={() => navigation.navigate('AddClass')}
  onBack={() => navigation.goBack()} // ✅ Pass onBack function
/>

  )
}
export default ClassList;

