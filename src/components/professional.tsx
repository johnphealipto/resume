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
import Medium from "../assets/fonts/Rubik-Medium.ttf";
import Italic from "../assets/fonts/Rubik-Italic.ttf";
import { COLORS } from "../assets/colors";
import { CONTACTS, EXPERIENCES, SKILLS } from "../constants";

Font.register({
  family: "Rubik",
  fonts: [
    {
      src: Light,
    },
    {
      src: Medium,
      fontWeight: "medium",
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

const SectionTitle = ({ title }: { title: string }) => (
  <View style={{ marginBottom: 4.5 }}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ExperienceSection = () => {
  return (
    <View>
      <SectionTitle title="Experience" />
      <View style={{ gap: 25, marginTop: 3 }}>
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
              <Text style={styles.subtitle}>{item.title}</Text>
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
                <Text style={styles.subtitle}>{item.start}</Text>
                <View
                  style={{
                    height: 0.8,
                    width: 5,
                    backgroundColor: COLORS.dark,
                    opacity: 0.5,
                  }}
                />
                <Text style={styles.subtitle}>{item.end}</Text>
              </View>
            </View>
            <Text style={[styles.subtitle, { marginTop: 2 }]}>
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
                    style={[styles.text, { flex: 1 }]}
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

const LeftView = () => (
  <View style={{ paddingRight: 20, width: 350 }}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 35,
      }}
    >
      <View
        style={{
          fontSize: 38,
          lineHeight: 0.9,
        }}
      >
        <Text style={{ fontSize: 38.3, fontWeight: "semibold" }}>JOHN</Text>
        <Text>ADIBE</Text>
        <Text style={{ fontSize: 16, marginTop: 15 }}>Frontend Developer</Text>
      </View>
      <View style={{ gap: 5, alignItems: "flex-end", marginTop: 9 }}>
        {CONTACTS.map((item, idx) => (
          <View
            key={idx}
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
          >
            <Text style={styles.text}>{item.detail}</Text>
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
    <View style={{ marginTop: 25 }}>
      <ExperienceSection />
    </View>
  </View>
);

const RightView = () => (
  <View style={{ marginLeft: 15, flex: 1, gap: 25, marginTop: 9 }}>
    <View>
      <SectionTitle title="Profile" />
      <Text
        style={[styles.text, { lineHeight: 1.45 }]}
        hyphenationCallback={(word) => [word]}
      >
        Frontend developer with 4 years of experience building responsive and
        scalable web and mobile applications, with a particular passion for
        developing innovative UI & UX solutions. Highly experienced in
        Javascript, Typescript, HTML and modern CSS.
      </Text>
    </View>
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
              <Text key={id} style={styles.text}>
                {item}
                {skill.list.length - 1 === id ? "." : ","}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </View>
    <View>
      <SectionTitle title="Education" />
      <View style={[styles.text, { gap: 3 }]}>
        <Text style={{ fontWeight: "medium" }}>
          B.Sc / Mathematics Education
        </Text>
        <Text>University of Nigeria, Nsukka</Text>
        <Text>2013 - 2017</Text>
      </View>
    </View>
    <View>
      <SectionTitle title="Languages" />
      <View style={[styles.text, { gap: 5 }]}>
        <Text>English (Professional)</Text>
        <Text>Spanish (Beginner)</Text>
        <Text>Igbo (Native)</Text>
      </View>
    </View>
    <View>
      <SectionTitle title="Certifications" />
      <View style={[styles.text, { gap: 3 }]}>
        <Text>Microsoft Certified: Azure Fundamentals.</Text>
        <Text>Oct 2021</Text>
        <Text style={{ fontStyle: "italic" }}>- Verified by Credly</Text>
      </View>
    </View>
  </View>
);

const ProfessionalResume = () => {
  return (
    <Document
      author="John Adibe"
      creator="John Adibe"
      title="John Adibe [Resumé]"
    >
      <Page style={styles.body} size="A4" wrap>
        <View style={{ flexDirection: "row", height: "100%" }}>
          <LeftView />
          <View
            style={{
              backgroundColor: COLORS.dark,
              width: 0.5,
              height: "100%",
              opacity: 0.5,
            }}
          />
          <RightView />
        </View>
      </Page>
    </Document>
  );
};

export default ProfessionalResume;

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.white,
    color: COLORS.dark,
    fontFamily: "Rubik",
    padding: 30,
    lineHeight: 1.25,
  },
  title: { fontSize: 14, fontWeight: "semibold", textTransform: "uppercase" },
  subtitle: {
    fontSize: 11.5,
  },
  text: {
    fontSize: 10,
    opacity: 0.75,
  },
});
