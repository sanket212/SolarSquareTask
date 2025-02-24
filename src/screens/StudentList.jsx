import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../utils/colors';

const StudentList = ({ navigation, students }) => {
  const studentsByClass = students.reduce((acc, student) => {
    if (!acc[student.class]) {
      acc[student.class] = [];
    }
    acc[student.class].push(student);
    return acc;
  }, {});

  const renderStudentCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>
            {item.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View style={styles.cardHeaderText}>
          <Text style={styles.studentName}>{item.name}</Text>
          <Text style={styles.studentDetails}>
            Year: {item.year} • Class: {item.class}
          </Text>
        </View>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.feeText}>Fee: ₹{item.fee}</Text>
        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.detailsButtonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Student Dashboard</Text>
      </View>
      <View style={styles.top}>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{students.length}</Text>
            <Text style={styles.statLabel}>Students</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>
              {Object.keys(studentsByClass).length}
            </Text>
            <Text style={styles.statLabel}>Classes</Text>
          </View>
        </View>
      </View>

      {/* Student List */}
      {students.length > 0 ? (
        <FlatList
          data={students}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderStudentCard}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>No students added yet</Text>
          <Text style={styles.emptyStateSubtext}>
            Tap the + button to add your first student
          </Text>
        </View>
      )}

      {/* FAB */}
      <TouchableOpacity
        style={styles.addStudent}
        onPress={() => navigation.navigate('AddStudent')}
      >
        <Ionicons name="add-circle" size={35} color={colors.light} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  top: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    paddingTop: 70,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.light,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statBox: {
    backgroundColor: colors.light,
    borderRadius: 12,
    padding: 15,
    width: width * 0.4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 15,
    fontWeight:"bold",
    color: colors.secondary,
    marginTop: 5,
  },
  listContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: colors.light,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: colors.light,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardHeaderText: {
    flex: 1,
  },
  studentName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  studentDetails: {
    fontSize: 14,
    color: colors.secondary,
    marginTop: 2,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.ternary,
  },
  feeText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  detailsButton: {
    backgroundColor: colors.ternary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  detailsButtonText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  addStudent: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: colors.primary,
    width: 66,
    height: 66,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    textAlign: 'center',
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: colors.secondary,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default StudentList;
