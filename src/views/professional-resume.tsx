import { COLORS } from "../assets/colors";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import ExperienceSection from "../components/experience";
import EducationSection from "../components/education";
import LanguagesSection from "../components/languages";
import SkillSection from "../components/skills";
import CertificationSection from "../components/certifications";
import HeroSection from "../components/hero";
import SectionTitle from "../components/section-title";
import { GLOBAL_STYLES } from "../utils";

const ProfessionalResume = () => {
  return (
    <Document
      author="John Adibe"
      creator="John Adibe"
      title="John Adibe [Resumé]"
    >
      <Page
        style={[
          GLOBAL_STYLES.body,
          { paddingVertical: 25, paddingHorizontal: 30 },
        ]}
        size="A4"
        wrap
      >
        <View style={{ flexDirection: "row", height: "100%" }}>
          <View style={{ paddingRight: 20, width: 375, gap: 30 }}>
            <HeroSection />
            <ExperienceSection />
            <EducationSection />
            <CertificationSection />
          </View>
          <View
            style={{
              backgroundColor: COLORS.dark,
              width: 0.5,
              height: "100%",
              opacity: 0.5,
            }}
          />
          <View style={{ marginLeft: 15, flex: 1, gap: 30, marginTop: 9 }}>
            <View>
              <SectionTitle title="Profile" />
              <Text
                style={[GLOBAL_STYLES.text, { lineHeight: 1.45 }]}
                hyphenationCallback={(word) => [word]}
              >
                Frontend developer with three years of experience building
                scalable web and mobile applications, with a particular passion
                for developing innovative UI & UX solutions. Experienced in
                Typescript and Python.
              </Text>
            </View>
            <SkillSection />
            <LanguagesSection />
            <View>
              <SectionTitle title="References" />
              <Text style={[GLOBAL_STYLES.text, { fontStyle: "italic" }]}>
                Available on request.
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ProfessionalResume;
