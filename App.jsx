import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StudentList from './src/screens/StudentList';
import AddStudent from './src/screens/AddStudent';
import AddAcademicYear from './src/screens/AddAcademicYear';
import AddClass from './src/screens/AddClass';
import YearList from './src/screens/YearList';
import ClassList from './src/screens/ClassList';
import SplashScreen from './src/screens/SplashScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  const [students, setStudents] = useState([]);
  const [academicYears, setAcademicYears] = useState([]);
  const [classes, setClasses] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  const STORAGE_KEY_STUDENTS = 'students'; 
  const STORAGE_KEY_YEARS = 'academicYears';
  const STORAGE_KEY_CLASSES = 'classes';

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const studentsData = await AsyncStorage.getItem(STORAGE_KEY_STUDENTS);
      if (studentsData !== null) {
        setStudents(JSON.parse(studentsData));
      }

      const yearsData = await AsyncStorage.getItem(STORAGE_KEY_YEARS);
      if (yearsData !== null) {
        setAcademicYears(JSON.parse(yearsData));
      }

      const classesData = await AsyncStorage.getItem(STORAGE_KEY_CLASSES);
      if (classesData !== null) {
        setClasses(JSON.parse(classesData));
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const saveData = async (key, data) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const addStudent = (newStudent) => {
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    saveData(STORAGE_KEY_STUDENTS, updatedStudents);
  };

  const addAcademicYear = (newYear) => {
    const updatedYears = [...academicYears, newYear];
    setAcademicYears(updatedYears);
    saveData(STORAGE_KEY_YEARS, updatedYears);
  };

  const addClass = (newClass) => {
    const updatedClasses = [...classes, newClass];
    setClasses(updatedClasses);
    saveData(STORAGE_KEY_CLASSES, updatedClasses);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

    const handleClassSelect = (className) => {
      setSelectedClass(className);
    };


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="StudentList">
          {(props) => <StudentList {...props} students={students} />}
        </Stack.Screen>
        <Stack.Screen name="AddStudent">
          {(props) => (
            <AddStudent
              {...props}
              addStudent={addStudent}
              academicYears={academicYears}
              classes={classes}
              selectedYear={selectedYear}
              selectedClass={selectedClass}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddAcademicYear">
          {(props) => (
            <AddAcademicYear
              {...props}
              addAcademicYear={addAcademicYear}
              academicYears={academicYears}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddClass">
          {(props) => (
            <AddClass {...props} addClass={addClass} classes={classes} />
          )}
        </Stack.Screen>
        <Stack.Screen name="YearList">
          {(props) => (
            <YearList
              {...props}
              academicYears={academicYears}
              onYearSelect={handleYearSelect}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="ClassList">
          {(props) => (
            <ClassList
              {...props}
              classes={classes}
              onClassSelect={handleClassSelect}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;