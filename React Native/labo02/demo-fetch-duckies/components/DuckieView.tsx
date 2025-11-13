import { Duckie } from "@/types";
import { View } from "react-native";

interface DuckieViewProps {
    duckie: Duckie
}

const DuckieView = ({duckie} : DuckieViewProps) => {
    return (
        <View>
            {duckie.name}
        </View>
    )
};

export default DuckieView;