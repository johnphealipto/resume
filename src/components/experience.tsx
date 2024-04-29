import { Text, View } from "@react-pdf/renderer";
import SectionTitle from "./section-title";
import { EXPERIENCES } from "../constants";
import { COLORS } from "../assets/colors";
import { GLOBAL_STYLES } from "../utils";

const ExperienceSection = () => {
  return (
    <View>
      <SectionTitle title="Experience" />
      <View style={{ gap: 10 }}>
        {EXPERIENCES.map((item, idx) => (
          <View key={idx}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <Text style={GLOBAL_STYLES.subtitle}>{item.title}</Text>
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
                <Text style={GLOBAL_STYLES.subtitle}>{item.start}</Text>
                <View
                  style={{
                    height: 0.8,
                    width: 5,
                    backgroundColor: COLORS.dark,
                    opacity: 0.5,
                  }}
                />
                <Text style={GLOBAL_STYLES.subtitle}>{item.end}</Text>
              </View>
            </View>
            <Text style={[GLOBAL_STYLES.subtitle, { marginTop: 2 }]}>
              {item.company}{" "}
              <Text style={{ opacity: 0.75 }}>| {item.location}</Text>
            </Text>
            <View style={{ gap: 3.5, marginTop: 8, marginLeft: 5 }}>
              {item.description.map((desc, idx) => (
                <View key={idx} style={{ flexDirection: "row", gap: 8 }}>
                  <View
                    style={{
                      backgroundColor: COLORS.dark,
                      width: 4,
                      height: 4,
                      borderRadius: 2,
                      marginTop: 4,
                    }}
                  />
                  <Text
                    style={[GLOBAL_STYLES.text, { flex: 1 }]}
                    hyphenationCallback={(word) => [word]}
                  >
                    {desc}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ExperienceSection;
