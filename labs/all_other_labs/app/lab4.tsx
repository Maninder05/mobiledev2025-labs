import React, { useState } from "react";
import {useRouter} from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator, Button} from "react-native";
import vacationDestinations, { VacationDestination } from "../lib/vacationsDestinations";

type WikiResponse = {
  extract: string;
  thumbnail?: {                          //might return a thumbnail or not
    source: string;
  };
};
const router= useRouter();

export default function Lab4() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [wikiData, setWikiData] = useState<WikiResponse | null>(null);
  const [loading, setLoading] = useState(false);                    //loading will be set true when lab 4 btn clicked and state of the setLoading mthd will change 

  const handleSelect = async (destination: VacationDestination) => {   //wait for the response to be fetched from handleSelect
    if (selectedId === destination.id) {
      setSelectedId(null);
      setWikiData(null);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(destination.location)}`
      );
      const data = await res.json();
      setSelectedId(destination.id);
      setWikiData(data);
    } catch (error) {
      console.error("Wikipedia fetch error:", error);
      setWikiData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.backButtonContainer}>
        <Button title="Back" onPress={() => router.back()} />
      </View>
      <Text style={styles.title}>Vacation Destinations</Text>
      {vacationDestinations.map((dest) => (
        <TouchableOpacity key={dest.id} style={styles.item} onPress={() => handleSelect(dest)}>
          <Text style={styles.location}>{dest.location}</Text>
          {selectedId === dest.id && (
            <View style={styles.details}>
              <Text>Price: ${dest.price.toLocaleString()}</Text>
              <Text>Avg. Temp: {dest.average_yearly_temperature}</Text>
              {loading ? (
                <ActivityIndicator size="small" color="#000" />
              ) : (
                wikiData && (
                  <>
                    {wikiData.thumbnail && (
                      <Image source={{ uri: wikiData.thumbnail.source }} style={styles.image} />
                    )}
                    <Text style={styles.description}>{wikiData.extract}</Text>
                  </>
                )
              )}
            </View>
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  backButtonContainer: {
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  item: {
    backgroundColor: "#f5f5f5",
    marginBottom: 14,
    padding: 12,
    borderRadius: 8,
  },
  location: {
    fontSize: 18,
    fontWeight: "600",
  },
  details: {
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 150,
    marginVertical: 10,
    borderRadius: 6,
    resizeMode: "cover",
  },
  description: {
    fontSize: 14,
    color: "#444",
  },
});
