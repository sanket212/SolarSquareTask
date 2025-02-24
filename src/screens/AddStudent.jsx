
import { useState } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native"
import { colors } from "../utils/colors"
import HeaderWithBack from "../components/HeaderWithBack"

const AddStudent = ({ navigation, addStudent, academicYears, classes, selectedYear, selectedClass }) => {
  const [name, setName] = useState("")
  const [fee, setFee] = useState("")

  const handleSubmit = () => {
    if (!name || !fee || !selectedYear || !selectedClass) {
      alert("Please fill in all fields.")
      return
    }

    const newStudent = { name, fee, year: selectedYear, class: selectedClass }
    addStudent(newStudent)
    navigation.navigate("StudentList")
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithBack title="Add New Student" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerText}>Enter student details below</Text>

        <View style={styles.form}>
          {/* Student Name */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Student Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter student's full name"
              placeholderTextColor={colors.secondary}
            />
          </View>

          {/* Fee Amount */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Fee Amount (₹)</Text>
            <TextInput
              style={styles.input}
              value={fee}
              onChangeText={setFee}
              keyboardType="numeric"
              placeholder="Enter fee amount"
              placeholderTextColor={colors.secondary}
            />
          </View>

          {/* Academic Year Selection */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Academic Year</Text>
            <TouchableOpacity
              style={[styles.selectButton, selectedYear && styles.selectButtonActive]}
              onPress={() => navigation.navigate("YearList")}
              activeOpacity={0.7}
            >
              <Text style={[styles.selectButtonText, selectedYear && styles.selectButtonTextActive]}>
                {selectedYear || "Select Academic Year"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Class Selection */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Class</Text>
            <TouchableOpacity
              style={[styles.selectButton, selectedClass && styles.selectButtonActive]}
              onPress={() => navigation.navigate("ClassList")}
              activeOpacity={0.7}
            >
              <Text style={[styles.selectButtonText, selectedClass && styles.selectButtonTextActive]}>
                {selectedClass || "Select Class"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} activeOpacity={0.8}>
          <Text style={styles.submitButtonText}>Add Student</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  scrollContainer: {
    padding: 20,
    alignContent: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 15,
    textAlign: "left",
  },
  form: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 18,
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
  selectButton: {
    backgroundColor: colors.light,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  selectButtonActive: {
    backgroundColor: colors.ternary,
    borderColor: colors.primary,
  },
  selectButtonText: {
    fontSize: 16,
    color: colors.secondary,
  },
  selectButtonTextActive: {
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
})

export default AddStudent

