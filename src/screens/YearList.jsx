import React from 'react';
import ListComponent from '../components/ListComponent';

const YearList = ({ navigation, academicYears, onYearSelect }) => (
<ListComponent
  title="Select Academic Year"
  data={academicYears}
  onSelect={(item) => {
    onYearSelect(item);
    navigation.goBack();
  }}
  onAdd={() => navigation.navigate('AddAcademicYear')}
  addButtonText="Add New Year"
  onBack={() => navigation.goBack()} // ✅ Pass onBack function
/>

);

export default YearList;