import { Text, View } from "@react-pdf/renderer";

const SectionTitle = ({ title }: { title: string }) => (
  <View style={{ marginBottom: 4 }}>
    <Text
      style={{
        fontSize: 14,
        fontWeight: "semibold",
        textTransform: "uppercase",
      }}
    >
      {title}
    </Text>
  </View>
);

export default SectionTitle;
