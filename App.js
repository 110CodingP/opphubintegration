import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar } from 'react-native';

import NavigationBar from './components/navigation-bar';
import Sidebar from './components/sidebar';
import ForumPage from './components/ForumPage';
import OpportunityCard from './components/OpportunityCard';
import SearchBar from './components/SearchBar';

export default function App() {
  const [activeTab, setActiveTab] = useState('Opportunities');

 
  const renderContent = () => {
    switch (activeTab) {
  
case 'Opportunities':
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.pageTitle}>Opportunities</Text>
      <Text style={styles.pageSubtitle}>Showing opportunities matching your profile: AE</Text>
      
    
      <SearchBar />

      <View style={styles.cardsList}>
        <OpportunityCard title="Software Engineer" company="Tech Innovators" tag="Full-time" />
        <OpportunityCard title="Marketing Intern" company="Global Brands" tag="Internship" />
        <OpportunityCard title="Data Analyst" company="FinTech Solutions" tag="Remote" />
      </View>
    </View>
  );
      case 'Forum':
        return <ForumPage />;
      case 'Calendar':
        return (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderText}>Calendar coming soon!</Text>
          </View>
        );
      default:
        return <Text>Select a tab from the sidebar</Text>;
    }
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="dark-content" />
      

      <NavigationBar userName="Shaoni Mukherjee" notificationCount={3} />

      <View style={styles.mainBody}>
   
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

    
        <View style={styles.content}>
          <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollPadding}
          >
            {renderContent()}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: { 
    flex: 1, 
    height: '100vh', 
    width: '100vw', 
    backgroundColor: '#fff' 
  },
  mainBody: { 
    flex: 1, 
    flexDirection: 'row' 
  },
  content: { 
    flex: 1, 
    backgroundColor: '#faf5ff' 
  },
  scrollPadding: {
    padding: 24,
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  placeholderText: {
    fontSize: 18,
    color: '#6b7280',
    fontWeight: '500',
  }
});
