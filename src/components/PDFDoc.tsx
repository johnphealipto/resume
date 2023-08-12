import {
  Document,
  Font,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import Light from "../assets/fonts/Rubik-Light.ttf";
import SemiBold from "../assets/fonts/Rubik-SemiBold.ttf";
import Avatar from "../assets/images/avatar.png";
import { COLORS } from "../assets/colors";
import {
  EnvelopeIcon,
  LinkIcon,
  LocationIcon,
  PhoneIcon,
} from "../assets/icons";

Font.register({
  family: "Rubik",
  fonts: [
    {
      src: Light,
    },
    {
      src: SemiBold,
      fontWeight: "semibold",
    },
    // {
    //   src: '/fonts/Lato-Italic.ttf',
    //   fontWeight: 400,
    //   fontStyle: 'italic',
    // },
  ],
});

const SectionTitle = ({ title }: { title: string }) => (
  <View>
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

const PDFDocument = () => {
  return (
    <Document author="John Adibe" creator="John Adibe">
      <Page style={styles.body} size="A4" wrap>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ justifyContent: "space-between" }}>
            <View style={{ fontSize: 40, lineHeight: 0.9 }}>
              <Text style={{ fontSize: 40.3, fontWeight: "semibold" }}>
                JOHN
              </Text>
              <Text>ADIBE</Text>
              <Text style={{ fontSize: 16, marginTop: 10 }}>
                Frontend Developer
              </Text>
            </View>
            <View
              style={{ backgroundColor: COLORS.dark, width: 40, height: 1 }}
            />
            <View>
              <SectionTitle title="Contact" />
              <PhoneIcon />
              <LinkIcon />
              <EnvelopeIcon />
              <LocationIcon />
            </View>
          </View>
          {/* <View
            style={{ padding: 5, borderWidth: 1, borderColor: COLORS.dark }}
          > */}
          <Image
            src={Avatar}
            style={{ width: 120, height: 180, objectFit: "cover" }}
          />
          {/* </View> */}
        </View>
        <Text style={{ fontSize: 12 }}>Frontend Developer</Text>
      </Page>
    </Document>
  );
};

export default PDFDocument;

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.white,
    color: COLORS.dark,
    fontFamily: "Rubik",
    padding: 30,
    lineHeight: 1.25,
  },
  text: {
    fontSize: 12,
  },
});
