import { Link, Text, View } from "@react-pdf/renderer";
import SectionTitle from "./section-title";
import { GLOBAL_STYLES } from "../utils";
import { COLORS } from "../assets/colors";

const CertificationSection = () => {
  return (
    <View>
      <SectionTitle title="Certifications" />
      <View style={{ gap: 10 }}>
        <View style={[GLOBAL_STYLES.text, { gap: 3 }]}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "medium" }}>
              Succeeding in Web Development: Full Stack and Front End
            </Text>
            <Text>Dec 2021</Text>
          </View>
          <Link
            src="https://www.linkedin.com/learning/certificates/de1a3407909b958c461a3909d280438d3518406cf845c5022bf1567f578f0321?trk=backfilled_certificate"
            style={{ color: COLORS.dark }}
          >
            Verified by LinkedIn
          </Link>
        </View>
        <View style={[GLOBAL_STYLES.text, { gap: 3 }]}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "medium" }}>
              Microsoft Certified: Azure Fundamentals
            </Text>
            <Text>Oct 2021</Text>
          </View>
          <Link
            src="https://www.credly.com/badges/264b0597-195b-4222-bbb9-9947501e2f8b/public_url"
            style={{ color: COLORS.dark }}
          >
            Verified by Credly
          </Link>
        </View>
        {/* <View style={[GLOBAL_STYLES.text, { gap: 3 }]}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "medium" }}>
              Teachers Registration Council of Nigeria (TRCN)
            </Text>
            <Text>Feb 2019</Text>
          </View>
          <Text>Office: President of The Federal Republic of Nigeria</Text>
        </View>
        <View style={[GLOBAL_STYLES.text, { gap: 3 }]}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "medium" }}>
              Universal Mandatory IT Training (UMITT)
            </Text>
            <Text>Sep 2014</Text>
          </View>
          <Text>AfriHUB Alumni Association</Text>
        </View> */}
      </View>
    </View>
  );
};

export default CertificationSection;
