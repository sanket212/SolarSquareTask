import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import HeaderWithBack from "./HeaderWithBack";
import { colors } from "../utils/colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const ListComponent = ({ title, data, onSelect, onAdd, addButtonText, onBack }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithBack title={title} onBack={onBack} />

      <View style={styles.content}>
        {data.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="file-tray-outline" size={60} color={colors.secondary} />
            <Text style={styles.emptyText}>No items available</Text>
          </View>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.listContent}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        )}

        <TouchableOpacity style={styles.addButton} onPress={onAdd} activeOpacity={0.8}>
          <Ionicons name="add-circle" size={40} color={colors.light} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.light, 
    },
    content: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 10,
    },
    listContent: {
      flexGrow: 1,
      paddingBottom: 80, 
    },
    item: {
      backgroundColor: "white",
      borderRadius: 12,
      paddingVertical: 18, 
      paddingHorizontal: 20,
      marginBottom: 16, 
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,  
      },
      shadowOpacity: 0.2,  
      shadowRadius: 6, 
      elevation: 6,  
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    itemText: {
      fontSize: 17,
      color: colors.primary,
      fontWeight: "600",
    },
    separator: {
      height: 10,
      backgroundColor: "transparent",
    },
    addButton: {
      position: "absolute",
      bottom: 25,
      right: 25,
      backgroundColor: colors.primary,
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.5,
      elevation: 10,
    },
  });
  

export default ListComponent;
