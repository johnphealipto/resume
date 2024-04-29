import { Text, View } from "@react-pdf/renderer";
import { CONTACTS } from "../constants";
import { GLOBAL_STYLES } from "../utils";
import { COLORS } from "../assets/colors";

const HeroSection = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ lineHeight: 0.9 }}>
        <Text style={{ fontSize: 35, fontWeight: "semibold" }}>JOHN</Text>
        <Text style={{ fontSize: 35 }}>ADIBE</Text>
        {/* <Text style={{ fontSize: 15, marginTop: 15 }}>Frontend Developer</Text> */}
      </View>
      <View style={{ gap: 5, alignItems: "flex-end", marginTop: 9 }}>
        {CONTACTS.map((item, idx) => (
          <View
            key={idx}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text style={GLOBAL_STYLES.text}>{item.detail}</Text>
            <View
              style={{
                backgroundColor: COLORS.dark,
                width: 20,
                height: 20,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
              }}
            >
              <item.icon size={10} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HeroSection;
