"use client"
import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import { Raleway } from "next/font/google"; 
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Plus } from "lucide-react";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function Form() {
    const [page, setPage] = useState(1);

    // Function to scroll to the top of the page when page changes
    useEffect(() => {  
        window.scrollTo(0, 0);
    }, [page]);   
    const [educationRows, setEducationRows] = useState([{ id: 1 }]);
    const [workRows, setWorkRows] = useState([{ id: 1 }]);

    const addEducationRow = () => {
        setEducationRows([...educationRows, { id: educationRows.length + 1 }]);
    };

    const addWorkRow = () => {
        setWorkRows([...workRows, { id: workRows.length + 1 }]);
    };   
    const [addressRows, setAddressRows] = useState([{ id: 1 }]);
    const [travelRows, setTravelRows] = useState([{ id: 1 }]);

    const [childrenRows, setChildrenRows] = useState([{ id: 1 }]);
    const [siblingsRows, setSiblingsRows] = useState([{ id: 1 }]);

    const addChildrenRow = () => {
        setChildrenRows([...childrenRows, { id: childrenRows.length + 1 }]);
    };

    const addSiblingsRow = () => {
        setSiblingsRows([...siblingsRows, { id: siblingsRows.length + 1 }]);
    };      
    const [relativesRows, setRelativesRows] = useState([{ id: 1 }]);

    const addRelativeRow = () => setRelativesRows([...relativesRows, { id: relativesRows.length + 1 }]);

    const addAddressRow = () => setAddressRows([...addressRows, { id: addressRows.length + 1 }]);
    const addTravelRow = () => setTravelRows([...travelRows, { id: travelRows.length + 1 }]);
    return (    
        <div style={{ fontFamily: raleway.style.fontFamily }} className="w-full text-gray-500"> 
            <Navbar/>
            <div className="page-container pt-[140px] pb-10 pl-10 pr-10">
                {/* Page 1 */}
                {/* {page === 1 && (
                    <div className="page1 mb-10">   
                        <h2 className="text-4xl mb-10">PERSONAL INFORMATION SHEET </h2>
                        <h2 className="text-lg text-black mb-4">DETAILS OF APPLICATION:</h2>
                        <textarea 
                            className="w-[60%] p-2 border rounded-md mb-4" 
                            placeholder="Enter details here..."
                        ></textarea>      
                        <h2 className="text-lg text-black mb-4">Have you applied for a visa to Canada before? (If yes, please provide details):</h2>
                        <textarea 
                            className="w-[60%] p-2 border rounded-md mb-4" 
                            placeholder="Enter previous visa details..."
                        ></textarea>
                        <h2 className="text-lg text-black mb-4">UCI No: (8 digits number on your Canadian Permit/Visa/previous refusal letter)</h2>
                        <input 
                            type="text" 
                            className="w-[60%] p-2 border rounded-md mb-4" 
                            placeholder="Enter UCI Number..."
                        />   
                        <div className="">  
                            <h2 className="text-lg text-black mb-4">Select Your Application Type</h2>
                            <form className="space-y-3">
                                {["Express Entry - Principal Applicant", "PNP", "Spouse", "Study Permit", "Dependant (Over 18 Years of Age)", "Work Permit", "Visitor Visa/Super Visa"].map((option, index) => (
                                    <div key={index} className="flex items-center">
                                        <input 
                                            type="checkbox" 
                                            id={option} 
                                            name={option} 
                                            className="mr-2 w-5 h-5" 
                                        />
                                        <label htmlFor={option} className="text-gray-700">{option}</label>
                                    </div>
                                ))}
                            </form>
                        </div>
                    </div>
                )} */} 

                {page === 1 && (
  <div className="page1 mb-10  sm:px-6 lg:px-8">
    <h2 className="sm:text-4xl text-2xl mb-10 text-center sm:text-left">PERSONAL INFORMATION SHEET </h2>

    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-lg text-black mb-4">DETAILS OF APPLICATION:</h2>
      <textarea 
        className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] p-2 border rounded-md mb-4" 
        placeholder="Enter details here..."
      ></textarea>      

      <h2 className="text-lg text-black mb-4">
        Have you applied for a visa to Canada before? (If yes, please provide details):
      </h2>
      <textarea 
        className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] p-2 border rounded-md mb-4" 
        placeholder="Enter previous visa details..."
      ></textarea>

      <h2 className="text-lg text-black mb-4">
        UCI No: (8 digits number on your Canadian Permit/Visa/previous refusal letter)
      </h2>
      <input 
        type="text" 
        className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] p-2 border rounded-md mb-4" 
        placeholder="Enter UCI Number..."
      />   

      <div>  
        <h2 className="text-lg text-black mb-4">Select Your Application Type</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
          {[
            "Express Entry - Principal Applicant",
            "PNP",
            "Spouse",
            "Study Permit",
            "Dependant (Over 18 Years of Age)",
            "Work Permit",
            "Visitor Visa/Super Visa"
          ].map((option, index) => (
            <div key={index} className="flex items-center">
              <input 
                type="checkbox" 
                id={option} 
                name={option} 
                className="mr-2 w-5 h-5" 
              />
              <label htmlFor={option} className="text-gray-700">{option}</label>
            </div>
          ))}
        </form>
      </div>
    </div>
  </div>
)}


                {/* Page 2 */}
          {page === 2 && (
  <div id="page2" className="page2 pb-10  sm:px-10">
    <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">Applicant Information</h2>

    <form className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">First Name:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter First Name" />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Last Name (Surname):</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Last Name" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Date of Birth (dd/mm/yy):</label>
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Place of Birth:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Place of Birth" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Color of Eyes:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Eye Color" />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Height (inches/cm):</label>
          <input type="number" className="w-full p-2 border rounded-md" placeholder="Enter Height" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Gender:</label>
          <select className="w-full p-2 border rounded-md">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Telephone No:</label>
          <input type="number" className="w-full p-2 border rounded-md" placeholder="Enter Telephone No." />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Email Address:</label>
          <input type="email" className="w-full p-2 border rounded-md" placeholder="Enter Email Address" />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Status in Canada (If applicable):</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Status in Canada" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Current Address:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Current Address" />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Address in Home Country:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Address in Home Country" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Passport No:</label>
          <input type="number" className="w-full p-2 border rounded-md" placeholder="Enter Passport No" />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Issue Date:</label>
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Expiry Date:</label>
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Country of Issue:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Country of Issue" />
        </div>
      </div>

      <div className="w-full">
        <label className="text-lg text-black mb-2">Marital Status:</label>
        <select className="w-full p-2 border rounded-md">
          <option value="">Select Marital Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
      </div>
    </form>
  </div>
)}



                {/* Page 3 */}
               {page === 3 && (
  <div id="page3" className="page3 pb-10  sm:px-10">
    <h3 className="text-2xl sm:text-left text-center sm:text-4xl mb-4">Spouse/Common Law Partner Information</h3>

    {/* Spouse/Common Law Partner Information */}
    <div className="spouse-info space-y-6 mb-10">
      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Date of Marriage:</label>
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">First Name:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter First Name" />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Last Name:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Last Name" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Date of Birth (dd/mm/yy):</label>
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Place of Birth:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Place of Birth" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Occupation:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Occupation" />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Spouse Address:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Spouse Address" />
        </div>
      </div>
    </div>

    {/* If Married Previously Section */}
    <div className="previous-marriage-info space-y-6 mb-10">
      <h3 className="text-4xl mb-4">If Married Previously</h3>

      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Date of Marriage:</label>
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">End Date of Marriage:</label>
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Spouse First Name:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Spouse First Name" />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Spouse Last Name:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Spouse Last Name" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-y-6">
        <div className="w-full sm:w-1/2">
          <label className="text-lg text-black mb-2">Date of Birth (dd/mm/yy):</label>
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
      </div>
    </div>
  </div>
)}



                {/* Page 4 */}
                {page === 4 && (
  <div id="page4" className="page4 mb-10  sm:px-10">
    <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">Parental Information</h2>
    
    {/* Father's Details */}
    <div className="sm:p-6 rounded-lg mb-6">
      <h3 className="text-2xl mb-4">Father’s Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">First Name:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter first name" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Last Name:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter last name" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Date of Birth (dd/mm/yy):</label>
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Place of Birth:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter place of birth" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Occupation:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter occupation" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Current Address:</label>
          <textarea className="w-full p-2 border rounded-md" placeholder="Enter current address"></textarea>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1"> If Deceased , Date of Death (if applicable):</label>
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
      </div>
    </div>

    {/* Mother's Details */}
    <div className="sm:p-6 rounded-lg">
      <h3 className="text-2xl mb-4">Mother’s Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">First Name:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter first name" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Last Name:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter last name" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Date of Birth (dd/mm/yy):</label>
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Place of Birth:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter place of birth" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Occupation:</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter occupation" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Current Address:</label>
          <textarea className="w-full p-2 border rounded-md" placeholder="Enter current address"></textarea>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1"> If Deceased ,  Date of Death (if applicable):</label>
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
      </div>
    </div>
  </div>
)}




                {/* Page 5 */}
                {page === 5 && (
  <div id="page5" className="page5 mb-10  sm:px-10 overflow-x-auto">
    <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">Education and Work History</h2>

    {/* Education History Table */}
    <div className="mb-10">
      <h3 className="text-2xl mb-4">Education History</h3>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">From (dd/mm/yy)</th>
              <th className="p-2">To (dd/mm/yy)</th>
              <th className="p-2">Institute Name</th>
              <th className="p-2">City</th>
              <th className="p-2">Course</th>
            </tr>
          </thead>
          <tbody>
            {educationRows.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="p-2">
                  <input type="date" className="w-full p-1 border rounded-md" />
                </td>
                <td className="p-2">
                  <input type="date" className="w-full p-1 border rounded-md" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded-md" placeholder="Institute Name" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded-md" placeholder="City" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded-md" placeholder="Course" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={addEducationRow} className="mt-2 flex items-center text-[#155da9]">
        <Plus className="w-5 h-5 mr-1" /> Add Education Row
      </button>
    </div>

    {/* Work History Table */}
    <div>
      <h3 className="text-2xl mb-4">Work History (From 18th Birthday)</h3>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">From (Y/M/D)</th>
              <th className="p-2">To (Y/M/D)</th>
              <th className="p-2">Designation</th>
              <th className="p-2">Job Duties</th>
              <th className="p-2">City</th>
              <th className="p-2">Country</th>
              <th className="p-2">Company Name</th>
            </tr>
          </thead>
          <tbody>
            {workRows.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="p-2">
                  <input type="date" className="w-full p-1 border rounded-md" />
                </td>
                <td className="p-2">
                  <input type="date" className="w-full p-1 border rounded-md" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded-md" placeholder="Designation" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded-md" placeholder="Job Duties" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded-md" placeholder="City" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded-md" placeholder="Country" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded-md" placeholder="Company Name" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={addWorkRow} className="mt-2 flex items-center text-[#155da9]">
        <Plus className="w-5 h-5 mr-1" /> Add Work Row
      </button>
    </div>
  </div>
)}



                {/* Page 6 */}
              {page === 6 && (
  <div id="page6" className="page6 mb-10  sm:px-10">
    <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">Additional Information</h2>

    {/* Children of Main Applicant */}
    <div className="mb-10">
      <h3 className="text-2xl mb-4">Children of Main Applicant</h3>

      {childrenRows.map((row) => (
        <div key={row.id} className="mb-6 sm:p-4 border-b border-gray-300 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input type="text" className="w-full p-2 border rounded-md" placeholder="First Name" />
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Last Name" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <select className="w-full p-2 border rounded-md">
              <option>Son</option>
              <option>Daughter</option>
            </select>
            <input type="date" className="w-full p-2 border rounded-md" />
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Place of Birth" />
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">
              Marital Status: Married (M), Unmarried/Single (S), Divorced (D), Widowed (W)
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <input type="text" className="w-full p-2 border rounded-md" placeholder="M / S / D / W" />
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Occupation" />
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Current Address" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Eye Colour" />
            <div className="grid grid-cols-2 gap-2">
              <input type="number" className="w-full p-2 border rounded-md" placeholder="Feet" />
              <input type="number" className="w-full p-2 border rounded-md" placeholder="Inches" />
            </div>
          </div>
        </div>
      ))}

      <button onClick={addChildrenRow} className="mt-2 flex items-center text-[#155da9]">
        <Plus className="w-5 h-5 mr-1" /> Add Child
      </button>
    </div>

    {/* Siblings of Main Applicant */}
    <div>
      <h3 className="text-2xl mb-4">Brothers & Sisters of Main Applicant</h3>

      {siblingsRows.map((row) => (
        <div key={row.id} className="mb-6 sm:p-4 border-b border-gray-300 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Name" />
            <select className="w-full p-2 border rounded-md">
              <option>Brother</option>
              <option>Sister</option>
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <input type="date" className="w-full p-2 border rounded-md" />
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Place of Birth" />
            <input type="text" className="w-full p-2 border rounded-md" placeholder="M / S / D / W" />
          </div>

          <p className="text-sm text-gray-500">
            Marital Status: Married (M), Unmarried/Single (S), Divorced (D), Widowed (W)
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Occupation" />
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Current Address" />
          </div>
        </div>
      ))}

      <button onClick={addSiblingsRow} className="mt-2 flex items-center text-[#155da9]">
        <Plus className="w-5 h-5 mr-1" /> Add Sibling
      </button>
    </div>
  </div>
)}


                {page === 7 && (
  <div id="page7" className="page7 mb-10 px-4 sm:px-10">
    <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">Additional Information</h2>

    {/* Address History */}
    <div className="mb-10">
      <h3 className="sm:text-2xl text-lg mb-4">Address of Places the Main Applicant Has Lived Since 18th Birthday</h3>
      <p className="text-sm text-gray-500 mb-2">Do not leave any gap in the time period.</p>

      {addressRows.map((row) => (
        <div key={row.id} className="mb-6 sm:p-4 border-b border-gray-300 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="date" className="w-full p-2 border rounded-md" placeholder="From (Y/M/D)" />
            <input type="date" className="w-full p-2 border rounded-md" placeholder="To (Y/M/D)" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Address" />
            <input type="text" className="w-full p-2 border rounded-md" placeholder="City/State" />
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Country" />
          </div>
          <div>
            <select className="w-full p-2 border rounded-md">
              <option>Studying</option>
              <option>Working</option>
              <option>Not Employed</option>
            </select>
          </div>
        </div>
      ))}

      <button onClick={addAddressRow} className="mt-2 flex items-center text-[#155da9]">
        <Plus className="w-5 h-5 mr-1" /> Add Address
      </button>
    </div>

    {/* Travel History */}
    <div className="mb-10">
      <h3 className="sm:text-2xl text-lg mb-4">Travel History - Details of Travel Outside Country of Residence & Origin</h3>

      {travelRows.map((row) => (
        <div key={row.id} className="mb-6 sm:p-4 border-b border-gray-300 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="date" className="w-full p-2 border rounded-md" placeholder="From (dd/mm/yy)" />
            <input type="date" className="w-full p-2 border rounded-md" placeholder="To (dd/mm/yy)" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Place (City, Country)" />
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Purpose of Travel" />
          </div>
        </div>
      ))}

      <button onClick={addTravelRow} className="mt-2 flex items-center text-[#155da9]">
        <Plus className="w-5 h-5 mr-1" /> Add Travel Record
      </button>
    </div>
  </div>
)}

               {page === 8 && (
  <div id="page8" className="page8 mb-10 px-4 sm:px-10">
    <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">Additional Information</h2>

    {/* Relatives in Canada */}
    <div className="mb-10">
      <h3 className="sm:text-2xl text-lg mb-4">Relatives in Canada (If any)</h3>

      {relativesRows.map((row) => (
        <div key={row.id} className="mb-6 sm:p-4 border-b border-gray-300 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" className="w-full p-2 border rounded-md" placeholder="First Name" />
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Last Name" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Address" />
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Relation with Applicant" />
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Status in Canada" />
          </div>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="How many years in Canada?" />
        </div>
      ))}

      <button onClick={addRelativeRow} className="mt-2 flex items-center text-[#155da9]">
        <Plus className="w-5 h-5 mr-1" /> Add Relative
      </button>
    </div>

    {/* IELTS Scores */}
    <div className="mb-10">
      <h3 className=" text-lg sm:text-2xl mb-4">IELTS Score for Each Module</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
        <input type="text" className="w-full p-2 border rounded-md" placeholder="Listening Score" />
        <input type="text" className="w-full p-2 border rounded-md" placeholder="Reading Score" />
        <input type="text" className="w-full p-2 border rounded-md" placeholder="Writing Score" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" className="w-full p-2 border rounded-md" placeholder="Speaking Score" />
        <input type="text" className="w-full p-2 border rounded-md" placeholder="Overall Score" />
      </div>
    </div>

    {/* Important Questions */}
    <div className="mb-10">
      <h3 className=" text-lg sm:text-2xl mb-4">Please Read the Following and Answer Carefully</h3>
      <p className="text-sm text-gray-500 mb-4">(Applicable to all family members in the application)</p>

      {/* Question 1 */}
      <div className="mb-6">
        <p className="font-semibold">
          a) Have you ever been convicted of, currently charged with, on trial for, or party to any crime/offence in any country?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
          <label className="flex items-center">
            <input type="radio" name="crime" value="yes" className="mr-2" /> YES
          </label>
          <label className="flex items-center">
            <input type="radio" name="crime" value="no" className="mr-2" /> NO
          </label>
        </div>
        <textarea className="w-full p-2 mt-2 border rounded-md" placeholder="If yes, provide details"></textarea>
      </div>

      {/* Question 2 */}
      <div className="mb-6">
        <p className="font-semibold">
          b) Have you ever applied to Canada for any Visa/Permit/PR, or been approved/refused a visa/refugee application to Canada before?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
          <label className="flex items-center">
            <input type="radio" name="visa" value="yes" className="mr-2" /> YES
          </label>
          <label className="flex items-center">
            <input type="radio" name="visa" value="no" className="mr-2" /> NO
          </label>
        </div>
        <textarea className="w-full p-2 mt-2 border rounded-md" placeholder="If yes, provide details"></textarea>
      </div>

      {/* Question 3 */}
      <div className="mb-6">
        <p className="font-semibold">
          c) Have you ever had any disease or physical or mental disorder?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
          <label className="flex items-center">
            <input type="radio" name="health" value="yes" className="mr-2" /> YES
          </label>
          <label className="flex items-center">
            <input type="radio" name="health" value="no" className="mr-2" /> NO
          </label>
        </div>
        <textarea className="w-full p-2 mt-2 border rounded-md" placeholder="If yes, provide details"></textarea>
      </div>
    </div>

    {/* Important Note */}
    <div className="p-4 bg-gray-100 border-l-4 border-[#155da9]">
      <h3 className="text-lg font-semibold">Important Note:</h3>
      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
        <li>
          We use the information mentioned in this form for assessing and filling the information required for your application.
        </li>
        <li>
          By signing the application, you declare that all the information stated by you in this application is up-to-date and accurate.
        </li>
        <li>
          In the event of any changes in your personal circumstances, please inform us at the earliest.
        </li>
        <li>
          Please fill a separate form for your spouse and for dependent child above age of 19 if any, with their information in it.
        </li>
      </ul>
    </div>

    {/* Submit Button */}
    <div className="w-full flex mt-10 items-center justify-center">
      <button className="border-[#155da9] border-2 mt-8 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full">
        Submit
      </button>
    </div>
  </div>
)}



            </div>
            
               
            <div className="pb-10">
  <Pagination className="flex flex-wrap justify-center gap-2 sm:gap-4">
    <PaginationContent className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      <PaginationItem>
        {page > 1 && (
          <PaginationPrevious
            onClick={(e) => {
              e.preventDefault();
              setPage(page - 1);
            }}
            className="px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md hover:bg-gray-100"
          />
        )}
      </PaginationItem>

      {[1, 2, 3, 4, 5, 6, 7, 8].map((pageNum) => (
        <PaginationItem key={pageNum}>
          <PaginationLink
            onClick={(e) => {
              e.preventDefault();
              setPage(pageNum);
            }}
            className={`px-3 py-2 text-sm sm:text-base border rounded-md ${
              page === pageNum
                ? 'bg-[#155da9] text-white border-[#155da9]'
                : 'text-black border-gray-300 hover:bg-gray-100'
            }`}
          >
            {pageNum}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem>
        {page < 8 && (
          <PaginationNext
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}
            className="px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md hover:bg-gray-100"
          />
        )}
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</div>


        </div>
    );
}
