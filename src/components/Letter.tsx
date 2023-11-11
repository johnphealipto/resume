import {
  Document,
  Font,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import Light from "../assets/fonts/Rubik-Light.ttf";
import SemiBold from "../assets/fonts/Rubik-SemiBold.ttf";
import Italic from "../assets/fonts/Rubik-Italic.ttf";
import { COLORS } from "../assets/colors";
import { CONTACTS } from "../constants";

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
    {
      src: Italic,
      fontStyle: "italic",
    },
  ],
});

const Paragraph: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Text
    style={[styles.medium, { marginBottom: 20 }]}
    hyphenationCallback={(word) => [word]}
  >
    {children}
  </Text>
);

const Letter = () => {
  return (
    <Document
      author="John Adibe"
      creator="John Adibe"
      title="John Adibe [Letter]"
    >
      <Page style={styles.body} size="A4" wrap>
        <View style={{ gap: 5, marginRight: 15 }}>
          <View
            style={{
              fontSize: 38,
              lineHeight: 0.9,
              marginBottom: 50,
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontSize: 38.3, fontWeight: "semibold" }}>JOHN</Text>
            <Text>ADIBE</Text>
            <Text style={{ fontSize: 16, marginTop: 15 }}>
              Frontend Engineer
            </Text>
          </View>
          <View style={{ gap: 5, alignItems: "flex-end" }}>
            {CONTACTS.map((item, idx) => (
              <View
                key={idx}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Text style={styles.medium}>{item.detail}</Text>
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
        <View
          style={{
            backgroundColor: COLORS.dark,
            width: 0.5,
            height: "100%",
            opacity: 0.5,
          }}
        />
        <View
          style={{ width: 370, marginTop: 10, paddingTop: 15, marginLeft: 15 }}
        >
          <View style={{ marginBottom: 30 }}>
            <Text style={[styles.medium, { fontStyle: "italic" }]}>To:</Text>
            <Text style={{ fontSize: 14 }}>Hiring Manager</Text>
            <Text style={{ fontSize: 14 }}>[company name]</Text>
          </View>
          <Paragraph>Dear Hiring Manager,</Paragraph>
          <Paragraph>
            I am writing to express my genuine interest in joining your team as
            a Senior Front End Developer. As a passionate developer with a
            strong background in front-end technologies, I am excited about the
            opportunity to contribute to [company name]'s innovative projects
            and collaborate with your talented team.
          </Paragraph>
          <Paragraph>
            Over the years, I have honed my skills in JavaScript, Typescript,
            HTML, CSS, and various front-end libraries and frameworks such as
            React.js. I have had the privilege of working on projects that
            demanded not only technical excellence but also a keen eye for user
            experience and design. I am confident that my expertise can help
            [company name] continues to create exceptional user interfaces and
            web applications.
          </Paragraph>
          {/* <Paragraph>
            What particularly excites me about [company name] is your
            commitment to bringing together innovative technologies,
            industry-best practices, and top-notch personnel to address the
            nation's most critical needs. Also, your dedication to becoming the
            technology company most sought by our customers, industry
            professionals, and business partners. I admire the work your team
            has done, particularly the Artificial Intelligence-Driven Data
            Enhancement Platform with Natural Language Enabled (ADELE) project
            which pushes the boundaries of technology.
          </Paragraph> */}
          <Paragraph>
            I am eager to learn more about opportunities at [company name] and
            how I can contribute to your mission. Please feel free to reach out
            to me at johnadibe450@gmail.com or +2348141726099 to discuss how my
            skills align with your current projects and goals.
          </Paragraph>
          <Paragraph>
            Thank you for considering my application. I look forward to the
            possibility of becoming a part of [company name]'s innovative team.
          </Paragraph>
          <Paragraph>Sincerely, {"\n"} John Adibe</Paragraph>
        </View>
      </Page>
    </Document>
  );
};

export default Letter;

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.white,
    color: COLORS.dark,
    fontFamily: "Rubik",
    padding: 30,
    lineHeight: 1.25,
    flexDirection: "row",
    height: "100%",
  },
  medium: {
    fontSize: 10,
  },
});
