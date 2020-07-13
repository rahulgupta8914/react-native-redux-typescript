import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { DashboardStackParamList } from '../../navigation/DashBoard';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootState } from '../../redux/rootReducer';
import { useSelector } from 'react-redux';
import { newsIcons } from '../../constants/Images';

type HomeScreenNavigationProp = StackNavigationProp<
  DashboardStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
const HomeScreen: React.FC<Props> = () => {
  const reduxState = (state: RootState) => state.auth;
  const state = useSelector(reduxState);
  const { userName } = state;
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.header}>
        <Text style={styles.mainHead}>Welcome, {`${userName}`}</Text>
        <Text style={styles.subHead}>Browse Latest News</Text>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollView}>
        <View style={styles.newsContainer}>
          <View style={styles.tinyWrrapper}>
            <Image style={styles.tinyIcon} source={newsIcons[0]} />
          </View>
          <View style={styles.newsWrrapper}>
            <Text style={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. odit
              iste sit amet consectetur...
            </Text>
            <View style={styles.timeLog}>
              <Text style={styles.history}>History</Text>
              <Text style={styles.time}>15 min ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.tinyWrrapper}>
            <Image style={styles.tinyIcon} source={newsIcons[2]} />
          </View>
          <View style={styles.newsWrrapper}>
            <Text style={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. odit
              iste sit amet consectetur...
            </Text>
            <View style={styles.timeLog}>
              <Text style={styles.history}>History</Text>
              <Text style={styles.time}>15 min ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.tinyWrrapper}>
            <Image style={styles.tinyIcon} source={newsIcons[3]} />
          </View>
          <View style={styles.newsWrrapper}>
            <Text style={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. odit
              iste sit amet consectetur...
            </Text>
            <View style={styles.timeLog}>
              <Text style={styles.history}>History</Text>
              <Text style={styles.time}>15 min ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.tinyWrrapper}>
            <Image style={styles.tinyIcon} source={newsIcons[5]} />
          </View>
          <View style={styles.newsWrrapper}>
            <Text style={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. odit
              iste sit amet consectetur...
            </Text>
            <View style={styles.timeLog}>
              <Text style={styles.history}>History</Text>
              <Text style={styles.time}>15 min ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.tinyWrrapper}>
            <Image style={styles.tinyIcon} source={newsIcons[6]} />
          </View>
          <View style={styles.newsWrrapper}>
            <Text style={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. odit
              iste sit amet consectetur...
            </Text>
            <View style={styles.timeLog}>
              <Text style={styles.history}>History</Text>
              <Text style={styles.time}>15 min ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.tinyWrrapper}>
            <Image style={styles.tinyIcon} source={newsIcons[7]} />
          </View>
          <View style={styles.newsWrrapper}>
            <Text style={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. odit
              iste sit amet consectetur...
            </Text>
            <View style={styles.timeLog}>
              <Text style={styles.history}>History</Text>
              <Text style={styles.time}>15 min ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.tinyWrrapper}>
            <Image style={styles.tinyIcon} source={newsIcons[8]} />
          </View>
          <View style={styles.newsWrrapper}>
            <Text style={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. odit
              iste sit amet consectetur...
            </Text>
            <View style={styles.timeLog}>
              <Text style={styles.history}>History</Text>
              <Text style={styles.time}>15 min ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.tinyWrrapper}>
            <Image style={styles.tinyIcon} source={newsIcons[0]} />
          </View>
          <View style={styles.newsWrrapper}>
            <Text style={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. odit
              iste sit amet consectetur...
            </Text>
            <View style={styles.timeLog}>
              <Text style={styles.history}>History</Text>
              <Text style={styles.time}>15 min ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.tinyWrrapper}>
            <Image style={styles.tinyIcon} source={newsIcons[2]} />
          </View>
          <View style={styles.newsWrrapper}>
            <Text style={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. odit
              iste sit amet consectetur...
            </Text>
            <View style={styles.timeLog}>
              <Text style={styles.history}>History</Text>
              <Text style={styles.time}>15 min ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.tinyWrrapper}>
            <Image style={styles.tinyIcon} source={newsIcons[3]} />
          </View>
          <View style={styles.newsWrrapper}>
            <Text style={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. odit
              iste sit amet consectetur...
            </Text>
            <View style={styles.timeLog}>
              <Text style={styles.history}>History</Text>
              <Text style={styles.time}>15 min ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.tinyWrrapper}>
            <Image style={styles.tinyIcon} source={newsIcons[5]} />
          </View>
          <View style={styles.newsWrrapper}>
            <Text style={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. odit
              iste sit amet consectetur...
            </Text>
            <View style={styles.timeLog}>
              <Text style={styles.history}>History</Text>
              <Text style={styles.time}>15 min ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.tinyWrrapper}>
            <Image style={styles.tinyIcon} source={newsIcons[6]} />
          </View>
          <View style={styles.newsWrrapper}>
            <Text style={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. odit
              iste sit amet consectetur...
            </Text>
            <View style={styles.timeLog}>
              <Text style={styles.history}>History</Text>
              <Text style={styles.time}>15 min ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.tinyWrrapper}>
            <Image style={styles.tinyIcon} source={newsIcons[7]} />
          </View>
          <View style={styles.newsWrrapper}>
            <Text style={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. odit
              iste sit amet consectetur...
            </Text>
            <View style={styles.timeLog}>
              <Text style={styles.history}>History</Text>
              <Text style={styles.time}>15 min ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.tinyWrrapper}>
            <Image style={styles.tinyIcon} source={newsIcons[8]} />
          </View>
          <View style={styles.newsWrrapper}>
            <Text style={styles.newsText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. odit
              iste sit amet consectetur...
            </Text>
            <View style={styles.timeLog}>
              <Text style={styles.history}>History</Text>
              <Text style={styles.time}>15 min ago</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  mainHead: { fontSize: 30 },
  subHead: { fontSize: 18 },
  contentWrapper: {
    flex: 1,
  },
  scrollView: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  newsWrrapper: { flex: 1 },
  newsContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
  },
  tinyWrrapper: { paddingRight: 15 },
  tinyIcon: {
    width: 60,
    height: 60,
  },
  newsText: { fontSize: 15, color: '#8b008b', paddingBottom: 5 },
  time: { fontWeight: 'bold' },
  history: {
    fontWeight: 'bold',
    letterSpacing: 3,
    color: '#8a2be2',
  },
  timeLog: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
