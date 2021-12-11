import React from "react";
import { View } from "react-native";

const Spacer = ({ space, row }) => {
    return (
        <View style={{
            marginVertical: space && space,
            marginHorizontal: row && row
        }} />
    )
};

export {
    Spacer
}
