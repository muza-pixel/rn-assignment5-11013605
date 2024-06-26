import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Apple from '../assets/apple.png'
import Spotify from '../assets/spotify.png'
import Transfer from '../assets/moneyTransfer.png'
import Grocery from '../assets/grocery.png'
import Profile from '../assets/profile.png'
import Search from '../assets/search.png'
import Card from '../assets/Card.png'
import Recieve from '../assets/recieve.png'
import Send from '../assets/send.png'
import Loan from '../assets/loan.png'
import TopUp from '../assets/topUp.png'

const data = [
    {id: 1, image: Apple, name: 'Apple Store', text: 'Entertainment', amount: '-$5.99'},
    {id: 2, image: Spotify, name: 'Spotify', text: 'Music', amount: '-$12.99'},
    {id: 3, image: Transfer, name: 'Money Transfer', text: 'Transaction', amount: '$300'},
    {id: 4, image: Grocery, name: 'Grocery', text: 'Shop', amount: '-$6.99'},
]

const Home = ({ isDarkMode }) => {

    const renderItem = () => {
        return(
            <View  style={{...styles.transactionList, ...themeStyles.container}}>
                {data.map((item, id) => {
                    return(
                        <View key={id} style={{...styles.transactionItem, ...themeStyles.transactionItem}}>
                            <View style={styles.transactionDetails}>
                                <View style={styles.transactionIcon}>
                                    <Image source={item.image}/>
                                </View>
                                <View>
                                    <Text style={{...styles.transactionName, ...themeStyles.text}}>{item.name}</Text>
                                    <Text style={themeStyles.text}>{item.text}</Text>
                                </View>
                            </View>
                            <Text style={{...styles.transactionAmount, ...themeStyles.text}}>{item.amount}</Text>
                        </View>
                    )
                })}
            </View>
        )
    }

    const themeStyles = isDarkMode ? darkStyles : lightStyles;

    return (
        <SafeAreaView style={themeStyles.container}>
            <View style={styles.header}>
                <View style={styles.headerText}>  
                    <Image source={Profile}/>
                    <View>
                        <Text style={{...styles.welcomeText, ...themeStyles.text}}>Welcome back,</Text>
                        <Text style={{...styles.userName, ...themeStyles.text}}>Muza</Text>
                    </View>
                </View>
                <View style={styles.actionIcon}>
                    <Image source={Search}/>
                </View>
                
            </View>
            <View style={styles.cardContainer}>
                <Image source={Card} style={styles.cardImage}/>
            </View>
            <View style={styles.actionsContainer}>
                <View style={styles.actionItem}>
                    <View style={styles.actionIcon}>
                        <Image source={Send}/>
                    </View>
                    <Text style={themeStyles.text}>Send</Text>
                </View>
                <View style={styles.actionItem}>
                    <View style={styles.actionIcon}>
                        <Image source={Recieve}/>
                    </View>
                    <Text style={themeStyles.text}>Receive</Text>
                </View>
                <View style={styles.actionItem}>
                    <View style={styles.actionIcon}>
                        <Image source={Loan}/>
                    </View>
                    <Text style={themeStyles.text}>Loan</Text>
                </View>
                <View style={styles.actionItem}>
                    <View style={styles.actionIcon}>
                        <Image source={TopUp}/>
                    </View>
                    <Text style={themeStyles.text}>Top Up</Text>
                </View>
            </View>
            <View style={styles.transactionContainer}>
                <Text style={{...styles.transactionHeader, ...themeStyles.text}}>Transaction</Text>
                <Text style={{...styles.seeAll, ...themeStyles.text}}>See All</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    )
}

export default Home

const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        color: '#000',
    },
    transactionItem: {
        backgroundColor: '#f4f4f4',
    }
});

const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    text: {
        color: '#fff',
    },
    transactionItem: {
        backgroundColor: '#333',
    }
});

const styles = StyleSheet.create({
    header: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexDirection: 'row',
        marginHorizontal: 19,
        marginVertical: 20
    },
    headerText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        gap:10
    },
    welcomeText: {
        fontSize: 10,
    },
    userName: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    cardContainer: {
        display:'flex', 
        alignItems:'center', 
        marginVertical: 30
    },
    cardImage: {
        width: 370, 
        height: 230, 
        borderRadius: 30
    },
    actionsContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-evenly', 
        marginVertical: 20
    },
    actionItem: {
        display: 'flex', 
        alignItems: 'center'
    },
    actionIcon: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: 40, 
        height: 40, 
        backgroundColor: '#f4f4f4', 
        borderRadius: 50
    },
    transactionContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        padding: 10,
    },
    transactionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    seeAll: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    transactionList: {
        display: 'flex', 
        flexDirection: 'column', 
        gap: 20, 
        marginBottom: 20
    },
    transactionItem: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 10
    },
    transactionDetails: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 10
    },
    transactionIcon: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: 40, 
        height: 40, 
        backgroundColor: '#f4f4f4', 
        borderRadius: 50
    },
    transactionName: {
        fontSize: 20, 
        fontWeight: 'bold'
    },
    transactionAmount: {
        fontSize: 18, 
        fontWeight: 'bold'
    }
})
