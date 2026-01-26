import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar } from 'react-native';

// Import the components
import NavigationBar from './components/navigation-bar';
import Sidebar from './components/sidebar';
import ForumPage from './components/ForumPage';
import OpportunityCard from './components/OpportunityCard';
import SearchBar from './components/SearchBar';

export default function App() {
  const [activeTab, setActiveTab] = useState('Opportunities');

  // Helper function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      // Inside App.js renderContent function
case 'Opportunities':
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.pageTitle}>Opportunities</Text>
      <Text style={styles.pageSubtitle}>Showing opportunities matching your profile: AE</Text>
      
      {/* Search Section */}
      <SearchBar />

      {/* Cards List */}
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
      
      {/* 1. Nav Bar - Fixed at the top */}
      <NavigationBar userName="Shaoni Mukherjee" notificationCount={3} />

      <View style={styles.mainBody}>
        {/* 2. Sidebar - Fixed on the left */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* 3. Content Area - Scrollable on the right */}
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
    flexDirection: 'row' // Aligns Sidebar and Content side-by-side
  },
  content: { 
    flex: 1, 
    backgroundColor: '#faf5ff' // Light purple background for the dashboard area
  },
  scrollPadding: {
    padding: 24, // Consistent spacing for all pages
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