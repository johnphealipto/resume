import SectionTitle from "./section-title";
import { Text, View } from "@react-pdf/renderer";
import { SKILLS } from "../constants";
import { GLOBAL_STYLES } from "../utils";

const SkillSection = () => {
  return (
    <View>
      <SectionTitle title="Skills" />
      <View style={{ gap: 8 }}>
        {SKILLS.map((skill, idx) => (
          <View
            key={idx}
            style={{ flexDirection: "row", flexWrap: "wrap", gap: 3 }}
          >
            <Text style={{ fontSize: 10, fontWeight: "medium" }}>
              {skill.label}:{" "}
            </Text>
            {skill.list.map((item, id) => (
              <Text key={id} style={GLOBAL_STYLES.text}>
                {item}
                {skill.list.length - 1 === id ? "." : ","}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default SkillSection;
