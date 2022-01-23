import * as React from 'react';
import {
  Text,
  description,
  View,
  StyleSheet,
  Image,
  Platform,
  Button,
  Share,
  KeyboardAvoidingView,
  auto,
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginBottom: '10px',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'rgba(4, 91, 98, 1)',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(152, 222, 243, 1',
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
    color:'rgba(4, 91, 98, 1)',
  },
  description: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },
  
  
});
const Dashboard = () => {
  const onShare6 = async () => {
    {
      const result = await Share.share({
        message:
          'Class 6th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-6th.pdf',
      });
    }
  };

  const onShare7 = async () => {
    {
      const result = await Share.share({
        message:
          'Class 7th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-7th.pdf',
      });
    }
  };

  const onShare8 = async () => {
    {
      const result = await Share.share({
        message:
          'Class 8th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-8th.pdf',
      });
    }
  };

  const onShare9 = async () => {
    {
      const result = await Share.share({
        message:
          'Class 9th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-9th.pdf',
      });
    }
  };

  const onShare10 = async () => {
    {
      const result = await Share.share({
        message:
          'Class 10th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-10th.pdf',
      });
    }
  };

  const logout = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BOOKS</Text>
      <Text>{'\n'} </Text>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjspPtUIqQmZyzIoz0yzFIjQ8sR_6Edv7Aw&usqp=CAU' }}
        style={{ width: auto, height: 250 }}
      />

      <Text style={styles.text}>Computer Education Class 6th</Text>
      <Text style={styles.description}>
        Class 6th Computer book Punjab Curriculum and Textbook Board
      </Text>

      <a href="https://co.vid19.pk/media/books/computer-education-class-6th.pdf" style={{textAlign:'center',color:'rgba(4, 91, 98, 1)'}} >
        <h2>Read OR Download</h2>
      </a>

      <Button
        onPress={onShare6}
        title="Share"
        color="orange"
        fontWeight="bold"></Button>
      <Text>{'\n'} </Text>
      <Image
        source={{ uri: 'https://i1.rgstatic.net/publication/331929054_Computer_Education_Book_for_class_7th_Published_by_Punjab_Textbook_Board_Lahore_Pakistan/links/5c936c3c299bf111693bf778/largepreview.png' }}
        style={{ width: auto, height: 250 }}
      />

      <Text style={styles.text}>Computer Education Class 7th</Text>
      <Text style={styles.description}>
        Class 7th Computer book Punjab Curriculum and Textbook Board
      </Text>

      <a href="https://co.vid19.pk/media/books/computer-education-class-7th.pdf" style={{textAlign:'center',color:'rgba(4, 91, 98, 1)'}}>
        <h2>Read OR Download</h2>
      </a>

      <Button
        onPress={onShare7}
        title="Share"
        color="orange"
        fontWeight="bold"></Button>
      <Text>{'\n'} </Text>
      <Image
        source={{ uri: 'https://cdn.shopify.com/s/files/1/0026/0787/4084/products/Computer-Education-Class-8-PTB-918-01_800x.jpg?v=1529943607' }}
        style={{ width: auto, height:250 }}
      />

      <Text style={styles.text}>Computer Education Class 8th</Text>
      <Text style={styles.description}>
        Class 8th Computer book Punjab Curriculum and Textbook Board
      </Text>

      <a href="https://co.vid19.pk/media/books/computer-education-class-8th.pdf" style={{textAlign:'center',color:'rgba(4, 91, 98, 1)'}}>
        <h2>Read OR Download</h2>
      </a>

      <Button
        onPress={onShare8}
        title="Share"
        color="orange"
        fontWeight="bold"></Button>
      <Text>{'\n'} </Text>
      <Image
        source={{ uri: 'https://1.bp.blogspot.com/-7RqJY1SY4mA/XnV70iwJfRI/AAAAAAAAObY/1ty3qdxrCvsTcOWomi3lTO1RzNZauUpsQCNcBGAsYHQ/s1600/9th%2Bclass%2Bcomputer%2Bscience%2Bbook%2Bnews%2Bcourse%2B2020-min.jpg' }}
        style={{ width: auto, height: 250 }}
      />

      <Text style={styles.text}>Computer Education Class 9th</Text>
      <Text style={styles.description}>
        Class 9th Computer book Punjab Curriculum and Textbook Board
      </Text>

      <a href="https://co.vid19.pk/media/books/computer-education-class-9th.pdf" style={{textAlign:'center', color:'rgba(4, 91, 98, 1)'}}>
        <h2>Read OR Download</h2>
      </a>

      <Button
        onPress={onShare9}
        title="Share"
        color="orange"
        fontSize="26"
        fontWeight="bold"></Button>
      <Text>{'\n'} </Text>
      <Image
        source={{ uri: 'https://mybookshop.co.in/myshop/media/product/9a5/next-education-computer-masti-class-10-book-a-475.jpg' }}
        style={{ width: auto, height:250 }}
      />

      <Text style={styles.text}>Computer Education Class 10th</Text>
      <Text style={styles.description}>
        Class 10th Computer book Punjab Curriculum and Textbook Board
      </Text>

      <a href="https://co.vid19.pk/media/books/computer-education-class-10th.pdf" style={{textAlign:'center', color:'rgba(4, 91, 98, 1)'}}>
        <h2>Read OR Download</h2>
      </a>

      <Button
        onPress={onShare10}
        title="Share"
        color="orange"
        fontSize="26"
        fontWeight="bold"></Button>
      <Text>{'\n'} </Text>
    </View>
  );
};

export default Dashboard;