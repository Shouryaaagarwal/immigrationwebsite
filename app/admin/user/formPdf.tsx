// components/formPdf.tsx
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { FiDownload } from 'react-icons/fi';
// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    borderBottom: '1px solid #000',
    paddingBottom: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    width: '30%',
    fontWeight: 'bold',
  },
  value: {
    width: '70%',
  },
  tableHeader: {
    flexDirection: 'row',
    fontWeight: 'bold',
    borderBottom: '1px solid #000',
    paddingBottom: 5,
    marginBottom: 5,
  },
  tableRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  tableCol: {
    width: '25%',
  },
});

const FormPdf = ({ data }: { data: any }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Applicant Information</Text>
        
        {/* Application Type */}
        <Text style={styles.subHeader}>Application Type</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Express Entry:</Text>
          <Text style={styles.value}>{data.applicationType.expressEntry ? 'Yes' : 'No'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>PNP:</Text>
          <Text style={styles.value}>{data.applicationType.pnp ? 'Yes' : 'No'}</Text>
        </View>
        {/* Add other application types similarly */}

        {/* Passport Details */}
        <Text style={styles.subHeader}>Passport Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Passport Number:</Text>
          <Text style={styles.value}>{data.passportDetails.passportNumber}</Text>
        </View>
        {/* Add other passport details similarly */}

        {/* Education History */}
        {data.educationHistory?.length > 0 && (
          <>
            <Text style={styles.subHeader}>Education History</Text>
            <View style={styles.tableHeader}>
              <Text style={styles.tableCol}>From</Text>
              <Text style={styles.tableCol}>To</Text>
              <Text style={styles.tableCol}>Institute</Text>
              <Text style={styles.tableCol}>Course</Text>
            </View>
            {data.educationHistory.map((edu: any, index: number) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCol}>{edu.from}</Text>
                <Text style={styles.tableCol}>{edu.to}</Text>
                <Text style={styles.tableCol}>{edu.institute}</Text>
                <Text style={styles.tableCol}>{edu.course}</Text>
              </View>
            ))}
          </>
        )}

        {/* Work History */}
        {data.workHistory?.length > 0 && (
          <>
            <Text style={styles.subHeader}>Work History</Text>
            <View style={styles.tableHeader}>
              <Text style={styles.tableCol}>From</Text>
              <Text style={styles.tableCol}>To</Text>
              <Text style={styles.tableCol}>Company</Text>
              <Text style={styles.tableCol}>Designation</Text>
            </View>
            {data.workHistory.map((work: any, index: number) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCol}>{work.from}</Text>
                <Text style={styles.tableCol}>{work.to}</Text>
                <Text style={styles.tableCol}>{work.companyName}</Text>
                <Text style={styles.tableCol}>{work.designation}</Text>
              </View>
            ))}
          </>
        )}

        {/* Add other sections similarly */}
      </View>
    </Page>
  </Document>
);

export default FormPdf;

export const DownloadPdfButton = ({ data }: { data: any }) => (
  <PDFDownloadLink 
    document={<FormPdf data={data} />} 
    fileName={`hello.pdf`}
  >
    {({ loading }) => (
      <button className="flex ml-auto items-center px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
        {loading ? 'Preparing document...' : (
          <>
            <FiDownload className="mr-2" /> Download Form
          </>
        )}
      </button>
    )}
  </PDFDownloadLink>
);