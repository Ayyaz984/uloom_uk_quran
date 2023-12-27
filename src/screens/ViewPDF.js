import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import sourceFile from '../assets/pdf/test.pdf';
import Pdf from 'react-native-pdf';

const ViewPDF = () => {
  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        horizontal
        source={sourceFile}
        enablePaging={true}
        style={styles.pdf}
        enableRTL={true}
        spacing={40}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    transform: [{scaleY: 1.15}],
    width: '100%', // Ensure the PDF takes up the full width
  },
});

export default ViewPDF;
