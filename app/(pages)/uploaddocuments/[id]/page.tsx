

"use client"
import Navbar2 from '@/app/components/Navbar2';
import { useState } from 'react';  
import { useParams } from 'next/navigation';
import { FiUpload, FiTrash2, FiPlus, FiCheck } from 'react-icons/fi';
import { UploadButton } from '@/src/utils/uploadthing';
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const DocumentUploadPage = () => {
   const user = useSelector((state:any) => state.auth.user);
    const userId = user?._id;   

  const router = useRouter();    
   const params = useParams();
  const applicationId = params.id; // This should work now    
  console.log(applicationId) ; 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Required single documents
  const [passport, setPassport] = useState<{ name: string; url: string } | null>(null);
  const [nationalId, setNationalId] = useState<{ name: string; url: string } | null>(null);
  const [birthCertificate, setBirthCertificate] = useState<{ name: string; url: string; description: string } | null>(null);

  // Multiple document sections
  const [marksheets, setMarksheets] = useState<Array<{ file: { name: string; url: string } | null; description: string }>>([]);
  const [visas, setVisas] = useState<Array<{ file: { name: string; url: string } | null; description: string }>>([]);
  const [workExperience, setWorkExperience] = useState<Array<{ file: { name: string; url: string } | null; description: string }>>([]);
  const [previousRefusals, setPreviousRefusals] = useState<Array<{ file: { name: string; url: string } | null; description: string }>>([]);

  // National ID examples by country
  const nationalIdExamples = [
    { country: 'India', name: 'Aadhaar Card' },
    { country: 'USA', name: 'Social Security Card' },
    { country: 'UK', name: 'National Insurance Number' },
    { country: 'Canada', name: 'SIN Card' },
    { country: 'Australia', name: 'Medicare Card' },
  ];

  const handleMultipleFileChange = (
    array: Array<{ file: { name: string; url: string } | null; description: string }>,
    setter: React.Dispatch<React.SetStateAction<Array<{ file: { name: string; url: string } | null; description: string }>>>,
    index: number,
    field: 'file' | 'description',
    value: { name: string; url: string } | string
  ) => {
    const newArray = [...array];
    newArray[index] = { ...newArray[index], [field]: value };
    setter(newArray);
  };

  const addDocumentSection = (
    setter: React.Dispatch<React.SetStateAction<Array<{ file: { name: string; url: string } | null; description: string }>>>
  ) => {
    setter(prev => [...prev, { file: null, description: '' }]);
  };

  const removeDocumentSection = (
    array: Array<{ file: { name: string; url: string } | null; description: string }>,
    setter: React.Dispatch<React.SetStateAction<Array<{ file: { name: string; url: string } | null; description: string }>>>,
    index: number
  ) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setter(newArray);
  };
  
  console.log(userId)
  console.log(passport?.url)
    
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
  
    try {
      if (!userId) {
        throw new Error('User not authenticated');
      }
  
      // Validate required fields
      if (!passport || !nationalId || !birthCertificate || marksheets.length === 0 || visas.length === 0) {
        throw new Error('Please fill all required fields');
      }
  
      // Prepare data for API
      const documentData = {
        userId: userId,  
        applicationId : applicationId,
        passport: {
          url: passport.url
        },
        marksheets: marksheets
          .filter(m => m.file)
          .map(m => ({
            url: m.file!.url,
            description: m.description
          })),
        countryVisa: visas[0]?.file ? {
          url: visas[0].file.url,
          description: visas[0].description
        } : null,
        nationalId: nationalId.url,
        previousWork: workExperience
          .filter(w => w.file)
          .map(w => ({
            url: w.file!.url,
            description: w.description
          })),
        birthCertificate: {
          url: birthCertificate.url,
          description: birthCertificate.description || 'Birth Certificate'
        },
        previousRefusals: previousRefusals
          .filter(r => r.file)
          .map(r => ({
            url: r.file!.url
          }))
      };
  
      // 1. Submit the documents
      const response = await fetch('/api/documents/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(documentData)
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit documents');
      }
  
      try {
        await axios.patch(
          `/api/tracker/${userId}/${applicationId}`,
          {
            field: "formSubmission",
            value: true
          },
          {
            headers: { "Content-Type": "application/json" },
            }
        );
      } catch (trackerError) {
        console.error('Tracker update error:', trackerError);
        // You might want to handle this error differently or just log it
      }
  
      // 3. Redirect after successful submission 
      router.push('/profile'); 
      alert('Documents submitted successfully!');
      
    } catch (err) {
      console.error('Submission error:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6"> 
      <Navbar2/>
      <div className="pt-[110px]">
        <h1 className="text-5xl text-[#155da9] font-normal mb-8">Upload Documents</h1>
        
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Passport - Required Single */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-xl text-[#155da9] font-normal mb-4">Passport <span className="text-[#c30e16]">*</span></h2>
            <div className="flex items-center gap-4">
              <UploadButton
                endpoint="fileUploader"
                onClientUploadComplete={(res: { name: string; url: string }[] | null) => {
                  if (res && res[0]) {
                    setPassport({ name: res[0].name, url: res[0].url });
                  }
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
                appearance={{
                  button: "bg-gradient-to-r from-[#c30e16] to-[#155da9] text-white rounded-md px-6 py-3",
                  allowedContent: "hidden",
                }}
              />
              {passport && (
                <div className="flex items-center bg-gray-50 px-4 py-2 rounded-md">
                  <FiCheck className="text-green-600 mr-2" />
                  <span className="text-gray-700">{passport.name}</span>
                </div>
              )}
            </div>
          </div>

          {/* National ID - Required Single */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-xl text-[#155da9] font-normal mb-4">National ID <span className="text-[#c30e16]">*</span></h2>
            <p className="text-sm text-gray-600 mb-4">
              Examples: {nationalIdExamples.map((id, i) => (
                <span key={i} className="font-medium">{id.name} ({id.country}){i < nationalIdExamples.length - 1 ? ', ' : ''}</span>
              ))}
            </p>
            <div className="flex items-center gap-4">
              <UploadButton
                endpoint="fileUploader"
                onClientUploadComplete={(res) => {
                  if (res && res[0]) {
                    setNationalId({ name: res[0].name, url: res[0].url });
                  }
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
                appearance={{
                  button: "bg-gradient-to-r from-[#c30e16] to-[#155da9] text-white rounded-md px-6 py-3",
                  allowedContent: "hidden",
                }}
              />
              {nationalId && (
                <div className="flex items-center bg-gray-50 px-4 py-2 rounded-md">
                  <FiCheck className="text-green-600 mr-2" />
                  <span className="text-gray-700">{nationalId.name}</span>
                </div>
              )}
            </div>
          </div>

          {/* Marksheets - Required Multiple with Descriptions */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-xl text-[#155da9] font-normal mb-4">Marksheets/Certificates <span className="text-[#c30e16]">*</span></h2>
            {marksheets.map((doc, index) => (
              <div key={index} className="mb-6 p-5 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-[#155da9]">Document {index + 1}</h3>
                  <button 
                    type="button" 
                    onClick={() => removeDocumentSection(marksheets, setMarksheets, index)}
                    className="text-[#c30e16] hover:text-[#a00c12]"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-normal text-gray-700 mb-2">File</label>
                    <UploadButton
                      endpoint="fileUploader"
                      onClientUploadComplete={(res) => {
                        if (res && res[0]) {
                          handleMultipleFileChange(
                            marksheets, 
                            setMarksheets, 
                            index, 
                            'file', 
                            { name: res[0].name, url: res[0].url }
                          );
                        }
                      }}
                      onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                      }}
                      appearance={{
                        button: "bg-gradient-to-r from-[#c30e16] to-[#155da9] text-white rounded-md px-6 py-3",
                        allowedContent: "hidden",
                      }}
                    />
                    {doc.file && (
                      <div className="mt-2 flex items-center bg-gray-50 px-4 py-2 rounded-md">
                        <FiCheck className="text-green-600 mr-2" />
                        <span className="text-gray-700">{doc.file.name}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <input
                      type="text"
                      value={doc.description}
                      onChange={(e) => handleMultipleFileChange(
                        marksheets, 
                        setMarksheets, 
                        index, 
                        'description', 
                        e.target.value
                      )}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#155da9] focus:border-transparent"
                      placeholder="E.g., 10th Grade Marksheet"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addDocumentSection(setMarksheets)}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-[#c30e16] to-[#155da9] text-white rounded-md hover:opacity-90 transition-opacity mt-3"
            >
              <FiPlus className="mr-1" /> Add Another Marksheet
            </button>
          </div>

          {/* Country Visas - Required Multiple with Descriptions */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-xl text-[#155da9] font-normal mb-4">Country Visas <span className="text-[#c30e16]">*</span></h2>
            {visas.map((doc, index) => (
              <div key={index} className="mb-6 p-5 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-[#155da9]">Visa {index + 1}</h3>
                  <button 
                    type="button" 
                    onClick={() => removeDocumentSection(visas, setVisas, index)}
                    className="text-[#c30e16] hover:text-[#a00c12]"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">File</label>
                    <UploadButton
                      endpoint="fileUploader"
                      onClientUploadComplete={(res) => {
                        if (res && res[0]) {
                          handleMultipleFileChange(
                            visas, 
                            setVisas, 
                            index, 
                            'file', 
                            { name: res[0].name, url: res[0].url }
                          );
                        }
                      }}
                      onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                      }}
                      appearance={{
                        button: "bg-gradient-to-r from-[#c30e16] to-[#155da9] text-white rounded-md px-6 py-3",
                        allowedContent: "hidden",
                      }}
                    />
                    {doc.file && (
                      <div className="mt-2 flex items-center bg-gray-50 px-4 py-2 rounded-md">
                        <FiCheck className="text-green-600 mr-2" />
                        <span className="text-gray-700">{doc.file.name}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <input
                      type="text"
                      value={doc.description}
                      onChange={(e) => handleMultipleFileChange(
                        visas, 
                        setVisas, 
                        index, 
                        'description', 
                        e.target.value
                      )}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#155da9] focus:border-transparent"
                      placeholder="E.g., USA Student Visa 2020-2024"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addDocumentSection(setVisas)}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-[#c30e16] to-[#155da9] text-white rounded-md hover:opacity-90 transition-opacity mt-3"
            >
              <FiPlus className="mr-1" /> Add Another Visa
            </button>
          </div>

          {/* Birth Certificate - Required Single */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-xl text-[#155da9] font-normal mb-4">Birth Certificate <span className="text-[#c30e16]">*</span></h2>
            <div className="flex items-center gap-4">
              <UploadButton
                endpoint="fileUploader"
                onClientUploadComplete={(res) => {
                  if (res && res[0]) {
                    setBirthCertificate({ 
                      name: res[0].name, 
                      url: res[0].url,   
                      description: 'Birth Certificate' 
                    });
                  }
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
                appearance={{
                  button: "bg-gradient-to-r from-[#c30e16] to-[#155da9] text-white rounded-md px-6 py-3",
                  allowedContent: "hidden",
                }}
              />
              {birthCertificate && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-gray-50 px-4 py-2 rounded-md">
                    <FiCheck className="text-green-600 mr-2" />
                    <span className="text-gray-700">{birthCertificate.name}</span>
                  </div>
                  <input
                    type="text"
                    value={birthCertificate.description}
                    onChange={(e) => setBirthCertificate(prev => 
                      prev ? { ...prev, description: e.target.value } : null
                    )}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#155da9] focus:border-transparent"   
                    readOnly
                    placeholder="Birth Certificate Description"
                    required
                  />
                </div>
              )}
            </div>
          </div>

          {/* Work Experience - Optional Multiple with Descriptions */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-xl text-[#155da9] font-normal mb-4">Work Experience (Optional)</h2>
            {workExperience.map((doc, index) => (
              <div key={index} className="mb-6 p-5 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-[#155da9]">Document {index + 1}</h3>
                  <button 
                    type="button" 
                    onClick={() => removeDocumentSection(workExperience, setWorkExperience, index)}
                    className="text-[#c30e16] hover:text-[#a00c12]"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">File</label>
                    <UploadButton
                      endpoint="fileUploader"
                      onClientUploadComplete={(res) => {
                        if (res && res[0]) {
                          handleMultipleFileChange(
                            workExperience, 
                            setWorkExperience, 
                            index, 
                            'file', 
                            { name: res[0].name, url: res[0].url }
                          );
                        }
                      }}
                      onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                      }}
                      appearance={{
                        button: "bg-gradient-to-r from-[#c30e16] to-[#155da9] text-white rounded-md px-6 py-3",
                        allowedContent: "hidden",
                      }}
                    />
                    {doc.file && (
                      <div className="mt-2 flex items-center bg-gray-50 px-4 py-2 rounded-md">
                        <FiCheck className="text-green-600 mr-2" />
                        <span className="text-gray-700">{doc.file.name}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <input
                      type="text"
                      value={doc.description}
                      onChange={(e) => handleMultipleFileChange(
                        workExperience, 
                        setWorkExperience, 
                        index, 
                        'description', 
                        e.target.value
                      )}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#155da9] focus:border-transparent"
                      placeholder="E.g., ABC Corp Employment Certificate"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addDocumentSection(setWorkExperience)}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-[#c30e16] to-[#155da9] text-white rounded-md hover:opacity-90 transition-opacity mt-3"
            >
              <FiPlus className="mr-1" /> Add Work Experience Document
            </button>
          </div>

          {/* Previous Refusals - Optional Multiple with Descriptions */}
          <div className="pb-8">
            <h2 className="text-xl text-[#155da9e2] font-normal mb-4">Previous Visa Refusals (Optional)</h2>
            {previousRefusals.map((doc, index) => (
              <div key={index} className="mb-6 p-5 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-[#155da9]">Document {index + 1}</h3>
                  <button 
                    type="button" 
                    onClick={() => removeDocumentSection(previousRefusals, setPreviousRefusals, index)}
                    className="text-[#c30e16] hover:text-[#a00c12]"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">File</label>
                    <UploadButton
                      endpoint="fileUploader"
                      onClientUploadComplete={(res) => {
                        if (res && res[0]) {
                          handleMultipleFileChange(
                            previousRefusals, 
                            setPreviousRefusals, 
                            index, 
                            'file', 
                            { name: res[0].name, url: res[0].url }
                          );
                        }
                      }}
                      onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                      }}
                      appearance={{
                        button: "bg-gradient-to-r from-[#c30e16] to-[#155da9] text-white rounded-md px-6 py-3",
                        allowedContent: "hidden",
                      }}
                    />
                    {doc.file && (
                      <div className="mt-2 flex items-center bg-gray-50 px-4 py-2 rounded-md">
                        <FiCheck className="text-green-600 mr-2" />
                        <span className="text-gray-700">{doc.file.name}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <input
                      type="text"
                      value={doc.description}
                      onChange={(e) => handleMultipleFileChange(
                        previousRefusals, 
                        setPreviousRefusals, 
                        index, 
                        'description', 
                        e.target.value
                      )}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#155da9] focus:border-transparent"
                      placeholder="E.g., UK Student Visa Refusal 2022"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addDocumentSection(setPreviousRefusals)}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-[#c30e16] to-[#155da9] text-white rounded-md hover:opacity-90 transition-opacity mt-3"
            >
              <FiPlus className="mr-1" /> Add Refusal Document
            </button>
          </div>

          <div className="flex justify-center pb-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`border-[1px] text-center border-[#155da9] mt-4 text-[#155da9] px-8 py-3 text-sm sm:text-base font-normal hover:bg-[#155da9] hover:text-white transition-all duration-300 hover:-translate-y-1 rounded-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Documents'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentUploadPage;



