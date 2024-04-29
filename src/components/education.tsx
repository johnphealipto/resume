import SectionTitle from "./section-title";
import { Text, View } from "@react-pdf/renderer";
import { GLOBAL_STYLES } from "../utils";
import { EDUCATIONS } from "../constants";

const EducationSection = () => {
  return (
    <View>
      <SectionTitle title="Education" />
      <View style={{ gap: 10 }}>
        {EDUCATIONS.map((item, idx) => (
          <View key={idx} style={[GLOBAL_STYLES.text, { gap: 3 }]}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontWeight: "medium" }}>{item.certificate}</Text>
              <Text>{item.duration}</Text>
            </View>
            {item.grade ? <Text>{item.grade}</Text> : null}
            <Text>{item.school}</Text>
            {item.project ? (
              <Text>
                <Text style={{ fontWeight: "medium" }}>Project Title:</Text>{" "}
                {item.project}
              </Text>
            ) : null}
          </View>
        ))}
      </View>
    </View>
  );
};

export default EducationSection;
