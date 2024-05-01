import { Text, View } from "@react-pdf/renderer";

const SectionTitle = ({ title }: { title: string }) => (
  <View style={{ marginBottom: 4 }}>
    <Text
      style={{
        fontSize: 14,
        fontFamily: "Times-Bold",
        textTransform: "uppercase",
      }}
    >
      {title}
    </Text>
  </View>
);

export default SectionTitle;
