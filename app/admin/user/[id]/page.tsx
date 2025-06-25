'use client'

import { FiArrowLeft, FiCheck, FiDownload, FiExternalLink } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, use } from 'react';
import Navbar from '@/app/components/Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import { PDFDownloadLink, Document as PDFDocument, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';

// Define interfaces
interface User {
  id: string;
  name: string;
  email: string;
  status: 'pending' | 'done';
}

interface Document {
  _id: string;
  userId: string;
  type: string;
  submittedDate: Date;
  fileUrl: string;
  description?: string;
}

interface Tracker {
  _id: string;
  userId: string;
  result: boolean;
  status: 'pending' | 'done';
}

interface UserFormData {
  userId: string;
  applicationType: {
    expressEntry: boolean;
    pnp: boolean;
    studyPermit: boolean;
    workPermit: boolean;
    visitorVisa: boolean;
  };
  previousVisaApplication: {
    appliedBefore: boolean;
    details: string;
  };
  uciNumber: string;
  personalDetails: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    placeOfBirth: string;
    colorOfEyes: string;
    height: {
      inches: number;
      cm: number;
    };
    gender: string;
    telephone: string;
    email: string;
    statusInCanada: string;
    currentAddress: string;
    homeCountryAddress: string;
  };
  passportDetails: {
    passportNumber: string;
    issueDate: string;
    expiryDate: string;
    countryOfIssue: string;
  };
  maritalStatus: string;
  spouseDetails: {
    dateOfMarriage: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    placeOfBirth: string;
    occupation: string;
    address: string;
  };
  fatherDetails: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    placeOfBirth: string;
    occupation: string;
    currentAddress: string;
    deceased: boolean;
    dateOfDeath: string;
  };
  motherDetails: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    placeOfBirth: string;
    occupation: string;
    currentAddress: string;
    deceased: boolean;
    dateOfDeath: string;
  };
  educationHistory: Array<{
    from: string;
    to: string;
    institute: string;
    city: string;
    course: string;
  }>;
  workHistory: Array<{
    from: string;
    to: string;
    designation: string;
    jobDuties: string;
    city: string;
    country: string;
    companyName: string;
  }>;
  childrenDetails: Array<{
    firstName: string;
    lastName: string;
    relation: string;
    dateOfBirth: string;
    placeOfBirth: string;
    maritalStatus: string;
    occupation: string;
    currentAddress: string;
    eyeColor: string;
    height: {
      feet: number;
      inches: number;
    };
  }>;
  siblingDetails: Array<{
    firstName: string;
    lastName: string;
    relation: string;
    dateOfBirth: string;
    placeOfBirth: string;
    maritalStatus: string;
    occupation: string;
    currentAddress: string;
  }>;
  addressHistory: Array<{
    from: string;
    to: string;
    address: string;
    cityState: string;
    country: string;
    activity: string;
  }>;
  travelHistory: Array<{
    from: string;
    to: string;
    place: string;
    purpose: string;
  }>;
  relativesInCanada: Array<{
    firstName: string;
    lastName: string;
    address: string;
    relation: string;
    statusInCanada: string;
    yearsInCanada: number;
  }>;
  ieltsScores: {
    listening: number;
    reading: number;
    writing: number;
    speaking: number;
    overall: number;
  };
  additionalQuestions: {
    criminalRecord: boolean;
    previousVisaRefusal: boolean;
    medicalIssues: boolean;
    notes: string;
  };
  declaration: {
    signedDate: string;
    signature: string;
  };
}

// PDF Styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#155da9',
  },
  section: {
    marginBottom: 15,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#c30e16',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 3,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    width: '40%',
    fontWeight: 'bold',
    fontSize: 12,
  },
  value: {
    width: '60%',
    fontSize: 12,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#155da9',
    backgroundColor: '#f0f7ff',
    paddingVertical: 5,
    marginBottom: 5,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#cccccc',
    paddingVertical: 3,
  },
  tableCol: {
    width: '25%',
    fontSize: 10,
    paddingHorizontal: 2,
  },
  signature: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  signatureLine: {
    width: 200,
    borderTopWidth: 1,
    borderTopColor: '#000000',
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 10,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 10,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const UserFormPDF = ({ formData, user }: { formData: UserFormData; user: User }) => (
  <PDFDocument>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.header}>Applicant Form Details</Text>
        
        {/* Applicant Info */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Applicant Information</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Application ID:</Text>
            <Text style={styles.value}>{user.id}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{`${formData.personalDetails?.firstName || ''} ${formData.personalDetails?.lastName || ''}`}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{formData.personalDetails?.email || user.email}</Text>
          </View>
        </View>

        {/* Application Type */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Application Type</Text>
          {Object.entries(formData.applicationType || {}).map(([key, value]) => (
            <View key={key} style={styles.row}>
              <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</Text>
              <Text style={styles.value}>{value ? 'Yes' : 'No'}</Text>
            </View>
          ))}
        </View>

        {/* Personal Details */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Personal Details</Text>
          {formData.personalDetails && Object.entries(formData.personalDetails).map(([key, value]) => {
            if (typeof value === 'object') {
              return (
                <View key={key}>
                  <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</Text>
                  {value && Object.entries(value).map(([subKey, subValue]) => (
                    <View key={subKey} style={[styles.row, { marginLeft: 20 }]}>
                      <Text style={styles.label}>{subKey}:</Text>
                      <Text style={styles.value}>{subValue}</Text>
                    </View>
                  ))}
                </View>
              );
            }
            return (
              <View key={key} style={styles.row}>
                <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</Text>
                <Text style={styles.value}>{value}</Text>
              </View>
            );
          })}
        </View>

        {/* Passport Details */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Passport Details</Text>
          {formData.passportDetails && Object.entries(formData.passportDetails).map(([key, value]) => (
            <View key={key} style={styles.row}>
              <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
          ))}
        </View>
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    {/* Second Page */}
    <Page size="A4" style={styles.page}>
      {/* Family Information */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Family Information</Text>
        
        {/* Marital Status */}
        <View style={styles.row}>
          <Text style={styles.label}>Marital Status:</Text>
          <Text style={styles.value}>{formData.maritalStatus}</Text>
        </View>

        {/* Spouse Details */}
        {formData.spouseDetails && (
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 5 }}>Spouse/Partner Details:</Text>
            {Object.entries(formData.spouseDetails).map(([key, value]) => (
              <View key={key} style={[styles.row, { marginLeft: 20 }]}>
                <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</Text>
                <Text style={styles.value}>{value}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Parents Details */}
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 5 }}>Parents Details:</Text>
          {formData.fatherDetails && (
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 11, fontWeight: 'bold' }}>Father:</Text>
              {Object.entries(formData.fatherDetails).map(([key, value]) => (
                <View key={key} style={[styles.row, { marginLeft: 20 }]}>
                  <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</Text>
                  <Text style={styles.value}>{value}</Text>
                </View>
              ))}
            </View>
          )}
          {formData.motherDetails && (
            <View>
              <Text style={{ fontSize: 11, fontWeight: 'bold' }}>Mother:</Text>
              {Object.entries(formData.motherDetails).map(([key, value]) => (
                <View key={key} style={[styles.row, { marginLeft: 20 }]}>
                  <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</Text>
                  <Text style={styles.value}>{value}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>

      {/* Children Details */}
      {formData.childrenDetails?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Children Details</Text>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCol, { fontWeight: 'bold' }]}>Name</Text>
            <Text style={[styles.tableCol, { fontWeight: 'bold' }]}>Relation</Text>
            <Text style={[styles.tableCol, { fontWeight: 'bold' }]}>Date of Birth</Text>
            <Text style={[styles.tableCol, { fontWeight: 'bold' }]}>Address</Text>
          </View>
          {formData.childrenDetails.map((child, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCol}>{`${child.firstName} ${child.lastName}`}</Text>
              <Text style={styles.tableCol}>{child.relation}</Text>
              <Text style={styles.tableCol}>{child.dateOfBirth}</Text>
              <Text style={styles.tableCol}>{child.currentAddress}</Text>
            </View>
          ))}
        </View>
      )}
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    {/* Third Page */}
    <Page size="A4" style={styles.page}>
      {/* Education History */}
      {formData.educationHistory?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Education History</Text>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCol, { width: '30%', fontWeight: 'bold' }]}>Period</Text>
            <Text style={[styles.tableCol, { width: '30%', fontWeight: 'bold' }]}>Institution</Text>
            <Text style={[styles.tableCol, { width: '20%', fontWeight: 'bold' }]}>City</Text>
            <Text style={[styles.tableCol, { width: '20%', fontWeight: 'bold' }]}>Course</Text>
          </View>
          {formData.educationHistory.map((edu, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={[styles.tableCol, { width: '30%' }]}>{`${edu.from} - ${edu.to}`}</Text>
              <Text style={[styles.tableCol, { width: '30%' }]}>{edu.institute}</Text>
              <Text style={[styles.tableCol, { width: '20%' }]}>{edu.city}</Text>
              <Text style={[styles.tableCol, { width: '20%' }]}>{edu.course}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Work History */}
      {formData.workHistory?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Work History</Text>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCol, { width: '25%', fontWeight: 'bold' }]}>Period</Text>
            <Text style={[styles.tableCol, { width: '25%', fontWeight: 'bold' }]}>Company</Text>
            <Text style={[styles.tableCol, { width: '20%', fontWeight: 'bold' }]}>Position</Text>
            <Text style={[styles.tableCol, { width: '30%', fontWeight: 'bold' }]}>Job Duties</Text>
          </View>
          {formData.workHistory.map((work, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={[styles.tableCol, { width: '25%' }]}>{`${work.from} - ${work.to}`}</Text>
              <Text style={[styles.tableCol, { width: '25%' }]}>{work.companyName}</Text>
              <Text style={[styles.tableCol, { width: '20%' }]}>{work.designation}</Text>
              <Text style={[styles.tableCol, { width: '30%' }]}>{work.jobDuties}</Text>
            </View>
          ))}
        </View>
      )}
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    {/* Fourth Page */}
    <Page size="A4" style={styles.page}>
      {/* Address History */}
      {formData.addressHistory?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Address History</Text>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCol, { width: '25%', fontWeight: 'bold' }]}>Period</Text>
            <Text style={[styles.tableCol, { width: '40%', fontWeight: 'bold' }]}>Address</Text>
            <Text style={[styles.tableCol, { width: '20%', fontWeight: 'bold' }]}>Country</Text>
            <Text style={[styles.tableCol, { width: '15%', fontWeight: 'bold' }]}>Activity</Text>
          </View>
          {formData.addressHistory.map((address, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={[styles.tableCol, { width: '25%' }]}>{`${address.from} - ${address.to}`}</Text>
              <Text style={[styles.tableCol, { width: '40%' }]}>{address.address}</Text>
              <Text style={[styles.tableCol, { width: '20%' }]}>{address.country}</Text>
              <Text style={[styles.tableCol, { width: '15%' }]}>{address.activity}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Travel History */}
      {formData.travelHistory?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Travel History</Text>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCol, { width: '25%', fontWeight: 'bold' }]}>Period</Text>
            <Text style={[styles.tableCol, { width: '30%', fontWeight: 'bold' }]}>Place</Text>
            <Text style={[styles.tableCol, { width: '45%', fontWeight: 'bold' }]}>Purpose</Text>
          </View>
          {formData.travelHistory.map((travel, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={[styles.tableCol, { width: '25%' }]}>{`${travel.from} - ${travel.to}`}</Text>
              <Text style={[styles.tableCol, { width: '30%' }]}>{travel.place}</Text>
              <Text style={[styles.tableCol, { width: '45%' }]}>{travel.purpose}</Text>
            </View>
          ))}
        </View>
      )}
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    {/* Fifth Page */}
    <Page size="A4" style={styles.page}>
      {/* Relatives in Canada */}
      {formData.relativesInCanada?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Relatives in Canada</Text>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCol, { width: '30%', fontWeight: 'bold' }]}>Name</Text>
            <Text style={[styles.tableCol, { width: '20%', fontWeight: 'bold' }]}>Relation</Text>
            <Text style={[styles.tableCol, { width: '30%', fontWeight: 'bold' }]}>Address</Text>
            <Text style={[styles.tableCol, { width: '20%', fontWeight: 'bold' }]}>Years in Canada</Text>
          </View>
          {formData.relativesInCanada.map((relative, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={[styles.tableCol, { width: '30%' }]}>{`${relative.firstName} ${relative.lastName}`}</Text>
              <Text style={[styles.tableCol, { width: '20%' }]}>{relative.relation}</Text>
              <Text style={[styles.tableCol, { width: '30%' }]}>{relative.address}</Text>
              <Text style={[styles.tableCol, { width: '20%' }]}>{relative.yearsInCanada}</Text>
            </View>
          ))}
        </View>
      )}

      {/* IELTS Scores */}
      {formData.ieltsScores && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>IELTS Scores</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Listening:</Text>
            <Text style={styles.value}>{formData.ieltsScores.listening}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Reading:</Text>
            <Text style={styles.value}>{formData.ieltsScores.reading}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Writing:</Text>
            <Text style={styles.value}>{formData.ieltsScores.writing}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Speaking:</Text>
            <Text style={styles.value}>{formData.ieltsScores.speaking}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Overall Band Score:</Text>
            <Text style={styles.value}>{formData.ieltsScores.overall}</Text>
          </View>
        </View>
      )}

      {/* Additional Questions */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Additional Information</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Criminal Record:</Text>
          <Text style={styles.value}>{formData.additionalQuestions?.criminalRecord ? 'Yes' : 'No'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Previous Visa Refusal:</Text>
          <Text style={styles.value}>{formData.additionalQuestions?.previousVisaRefusal ? 'Yes' : 'No'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Medical Issues:</Text>
          <Text style={styles.value}>{formData.additionalQuestions?.medicalIssues ? 'Yes' : 'No'}</Text>
        </View>
        {formData.additionalQuestions?.notes && (
          <View style={styles.row}>
            <Text style={styles.label}>Additional Notes:</Text>
            <Text style={styles.value}>{formData.additionalQuestions.notes}</Text>
          </View>
        )}
      </View>

      {/* Declaration */}
      <View style={styles.signature}>
        <View style={styles.signatureLine}>
          <Text>Applicant's Signature</Text>
          {formData.declaration?.signedDate && (
            <Text>Date: {formData.declaration.signedDate}</Text>
          )}
        </View>
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </PDFDocument>

);

const UserDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [tracker, setTracker] = useState<Tracker | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<UserFormData | null>(null);
  
  const { id: userId } = use(params);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch tracker data first
        const trackerResponse = await axios.get(`/api/tracker/${userId}`);
        const trackerData = trackerResponse.data.tracker;
        setTracker(trackerData);

        // Then fetch user, documents, and form data
        const [userResponse, docsResponse, formResponse] = await Promise.all([
          fetch(`/api/users/open-user/${userId}`),
          fetch(`/api/users/user_documents/${userId}`),
          fetch(`/api/applicant-form/${userId}`)
        ]);

        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        if (!docsResponse.ok) throw new Error('Failed to fetch documents');
        if (!formResponse.ok) throw new Error('Failed to fetch form data');

        const [userData, docsData, formData] = await Promise.all([
          userResponse.json(),
          docsResponse.json(),
          formResponse.json()
        ]);

        setUser(userData);
        setFormData(formData);

        // Process documents
        let extractedDocs: Document[] = [];
        
        if (Array.isArray(docsData)) {
          extractedDocs = docsData.flatMap((doc: any) => {
            const documents: Document[] = [];
            
            // Handle single documents
            if (doc.passport?.url) {
              documents.push({
                _id: `${doc._id}-passport`,
                userId: doc.userId,
                type: 'Passport',
                submittedDate: doc.createdAt || new Date(),
                fileUrl: doc.passport.url
              });
            }
        
            if (doc.countryVisa?.url) {
              documents.push({
                _id: `${doc._id}-countryVisa`,
                userId: doc.userId,
                type: 'Country Visa',
                submittedDate: doc.createdAt || new Date(),
                fileUrl: doc.countryVisa.url,
                description: doc.countryVisa.description
              });
            }
        
            if (doc.birthCertificate?.url) {
              documents.push({
                _id: `${doc._id}-birthCertificate`,
                userId: doc.userId,
                type: 'Birth Certificate',
                submittedDate: doc.createdAt || new Date(),
                fileUrl: doc.birthCertificate.url,
                description: doc.birthCertificate.description
              });
            }
        
            // Handle array documents
            if (Array.isArray(doc.marksheets)) {
              doc.marksheets.forEach((marksheet: any, index: number) => {
                if (marksheet.url) {
                  documents.push({
                    _id: `${doc._id}-marksheet-${index}`,
                    userId: doc.userId,
                    type: `Marksheet ${index + 1}`,
                    submittedDate: doc.createdAt || new Date(),
                    fileUrl: marksheet.url,
                    description: marksheet.description
                  });
                }
              });
            }
        
            if (Array.isArray(doc.previousWork)) {
              doc.previousWork.forEach((work: any, index: number) => {
                if (work.url) {
                  documents.push({
                    _id: `${doc._id}-previousWork-${index}`,
                    userId: doc.userId,
                    type: `Previous Work ${index + 1}`,
                    submittedDate: doc.createdAt || new Date(),
                    fileUrl: work.url,
                    description: work.description
                  });
                }
              });
            }
        
            if (Array.isArray(doc.previousRefusals)) {
              doc.previousRefusals.forEach((refusal: any, index: number) => {
                if (refusal.url) {
                  documents.push({
                    _id: `${doc._id}-previousRefusal-${index}`,
                    userId: doc.userId,
                    type: `Previous Refusal ${index + 1}`,
                    submittedDate: doc.createdAt || new Date(),
                    fileUrl: refusal.url
                  });
                }
              });
            }
        
            // Handle nationalId if it's a URL
            if (doc.nationalId && typeof doc.nationalId === 'string' && doc.nationalId.startsWith('http')) {
              documents.push({
                _id: `${doc._id}-nationalId`,
                userId: doc.userId,
                type: 'National ID',
                submittedDate: doc.createdAt || new Date(),
                fileUrl: doc.nationalId
              });
            }
        
            return documents;
          });
        }
        
        setDocuments(extractedDocs);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);


  console.log(UserFormPDF, 'UserFormPDF Component');

  const updateTrackerStatus = async (result: boolean) => {
    try {
      setLoading(true);
      setError(null);

      // Update tracker result
      const response = await axios.patch(`/api/tracker/${userId}`, {
        field: 'result',
        value: result,
      });

      // Update local state
      setTracker(prev => ({
        ...prev!,
        result,
        status: result ? "done" : "pending"
      }));

      toast(`Status updated to ${result ? 'done' : 'pending'} successfully!`);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!user || !tracker || !formData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">User Not Found</h2>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Users
          </button>
        </div>
      </div>
    );
  }

  // Determine status based on tracker.result
  const currentStatus = tracker.result ? true : false;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="absolute top-[110px] left-4 z-10">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <FiArrowLeft className="mr-2" /> Back to Users
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-[160px] pb-8">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#c30e16] to-[#155da9] p-6 text-white">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-300 flex items-center justify-center text-2xl font-bold text-blue-800">
                {user.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-blue-100">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium text-gray-900">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-medium text-gray-900">{user.email}</p>
                  </div>
  
                  <div>
                    <p className="text-sm text-gray-500">Account Status</p>
                    <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                      currentStatus === true ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-black'
                    }`}>
                      {currentStatus ? 'done' : 'pending'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={() => updateTrackerStatus(true)}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                <FiCheck className="mr-2" /> Approve 
              </button>
              <button 
                onClick={() => updateTrackerStatus(false)}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
              >
                Reject 
              </button>
              
              {/* PDF Download Button */}
              <PDFDownloadLink 
                document={<UserFormPDF formData={formData} user={user} />}
                fileName={`${user.name.replace(' ', '_')}_application_form.pdf`}
                className="flex ml-auto items-center px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
              >
                {({ loading }) => (
                  loading ? 'Preparing document...' : (
                    <>
                      <FiDownload className="mr-2" /> Download Form
                    </>
                  )
                )}
              </PDFDownloadLink>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">📄 Submitted Documents</h2>

            
              {documents.length === 0 ? (
                <div className="bg-gray-50 p-8 text-center rounded-xl">
                  <p className="text-gray-500">No documents submitted yet</p>
                </div>
              ) : (
                <div className="overflow-hidden border border-gray-200 rounded-xl">
                  <table className="min-w-full bg-white">
                    <thead className="text-white" style={{
                      background: "linear-gradient(90deg, #155da9, #c30e16)",
                    }}>
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Document Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Submitted Date</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {documents.map((doc) => (
                        <tr key={doc._id} className="bg-white hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {doc.type}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {new Date(doc.submittedDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </td>
                          <td className="px-6 py-4 text-sm text-center">
                            <a
                              href={doc.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-[#c30e16] text-white rounded-lg hover:opacity-90 transition"
                            >
                              <FiExternalLink className="mr-2" />
                              View
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;