import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import sourceFile from '../assets/pdf/test.pdf';
import Pdf from 'react-native-pdf';
import {pageChange} from '../redux/features/PdfSlice';
import {useDispatch, useSelector} from 'react-redux';
import ChaptersModal from '../components/drawer/modals/ChaptersModal';
import Header from '../components/header/Header';
import FavoritesModal from '../components/drawer/modals/FavoritesModal';
import BookmarkModal from '../components/drawer/modals/BookmarkModal';

const ViewPDF = () => {
  const dispatch = useDispatch();
  const PdfState = useSelector(state => state.Pdf);

  const handlePageChange = pageNo => {
    dispatch(pageChange(pageNo));
  };
  return (
    <View style={styles.container}>
      <Header />
      <Pdf
        trustAllCerts={false}
        horizontal
        source={sourceFile}
        enablePaging={true}
        style={styles.pdf}
        enableRTL={true}
        page={PdfState.lastOpnedPage || 1}
        spacing={40}
        showsHorizontalScrollIndicator={false}
        onPageChanged={page => handlePageChange(page)}
      />

      {/* <ChaptersModal /> */}
      <FavoritesModal />
      <BookmarkModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    marginTop: 5,
    transform: [{scaleY: 1.12}, {scaleX: 1.07}],
    width: '100%',
  },
});

export default ViewPDF;
