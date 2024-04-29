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

const AcademicResume = () => {
  return (
    <Document
      author="John Adibe"
      creator="John Adibe"
      title="John Adibe [Resumé]"
    >
      <Page style={GLOBAL_STYLES.body} size="A4" wrap>
        <View style={{ flexDirection: "row", height: "100%" }}>
          <View style={{ paddingRight: 20, width: 375, gap: 20 }}>
            <HeroSection />
            <EducationSection />
            <CertificationSection />
            <ExperienceSection />
          </View>
          <View
            style={{
              backgroundColor: COLORS.dark,
              width: 0.5,
              height: "100%",
              opacity: 0.5,
            }}
          />
          <View style={{ marginLeft: 15, flex: 1, gap: 20, marginTop: 9 }}>
            <SkillSection />
            <View>
              <SectionTitle title="AWARDS" />
              <Text style={GLOBAL_STYLES.text}>
                Employee of the Month at{" "}
                <Text style={{ fontWeight: "medium" }}>Clinify INC</Text> in Nov
                and Dec 2022.
              </Text>
            </View>
            <View>
              <SectionTitle title="Achievements" />
              <View style={{ gap: 10 }}>
                <Text
                  style={GLOBAL_STYLES.text}
                  hyphenationCallback={(word) => [word]}
                >
                  - Spearheaded the development of a Staff Management web
                  application at{" "}
                  <Text style={{ fontWeight: "medium" }}>Outcess LTD</Text>{" "}
                  which inturn increased HR team's work efficiency by 35%. This
                  application is still serving till date.
                </Text>
                <Text
                  style={GLOBAL_STYLES.text}
                  hyphenationCallback={(word) => [word]}
                >
                  - Organized and led 5 students to a Spelling Bee contest and
                  won 2nd place in the year 2016. Where I served as a Practicing
                  Teacher at{" "}
                  <Text style={{ fontWeight: "medium" }}>
                    Dominican Sisters College
                  </Text>
                  .
                </Text>
              </View>
            </View>
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

export default AcademicResume;
