import MealList from "../components/MealsList/MealList";
import {useContext} from "react";
import {FavoriteContext} from "../store/context/favorite-context";
import {MEALS} from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";

function FavoriteScreen(){
    const favoriteMealCtx = useContext(FavoriteContext);

    const favoriteMeals = MEALS.filter(meal => favoriteMealCtx.ids.includes(meal.id));

    if(favoriteMeals.length === 0){
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        );
    }

    return (
        <MealList items={favoriteMeals}/>
    );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});