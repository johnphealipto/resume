import { Text, View } from "@react-pdf/renderer";
import SectionTitle from "./section-title";
import { GLOBAL_STYLES } from "../utils";

const LanguagesSection = () => {
  return (
    <View>
      <SectionTitle title="Languages" />
      <View style={[GLOBAL_STYLES.text, { gap: 5 }]}>
        <Text>English (Professional)</Text>
        <Text>Spanish (Beginner)</Text>
        <Text>Igbo (Native)</Text>
      </View>
    </View>
  );
};

export default LanguagesSection;
