import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import HeaderWithBack from '../components/HeaderWithBack';
import { colors } from '../utils/colors';

const AddAcademicYear = ({ navigation, addAcademicYear, academicYears }) => {
  const [year, setYear] = useState('');

  const handleSubmit = () => {
    if (!year) {
      alert('Please enter an academic year.');
      return;
    }

    if (academicYears.includes(year)) {
      alert('Academic year already exists.');
      return;
    }

    addAcademicYear(year);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
    <HeaderWithBack 
        title="Add Academic Year"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Enter academic year below</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Academic Year</Text>
            <TextInput
              style={styles.input}
              value={year}
              onChangeText={setYear}
              placeholder="Enter academic year (e.g., 2024)"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Add Year</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
    flex: 1,
  },
    headerText: {
      fontSize: 18,
      fontWeight: "600",
      color: colors.primary,
      marginBottom: 15,
      textAlign: "left",
    },
  form: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputGroup: {
    marginBottom: 28,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 6,
  },
  input: {
    backgroundColor: colors.light,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    color: colors.primary,
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  submitButtonText: {
    color: colors.light,
    fontSize: 18,
    fontWeight: "700",
  },
});

export default AddAcademicYear;