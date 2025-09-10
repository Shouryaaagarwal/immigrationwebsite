// // import { NextRequest, NextResponse } from 'next/server';
// // import mongoose from 'mongoose';
// // import User from '@/models/userModel';
// // import UserForm from '@/models/userForm'; 
// // import { connect } from '@/backend/db';

// // await connect(); // Ensure DB is connected before operations

// // export async function PATCH(req: NextRequest) {
// //     try {
// //         const { userId, ...updateFields } = await req.json(); // Prevent overriding userId

// //         if (!mongoose.Types.ObjectId.isValid(userId)) {
// //             return NextResponse.json({ message: 'Invalid User ID' }, { status: 400 });
// //         }

// //         const user = await User.findById(userId);
// //         if (!user) {
// //             return NextResponse.json({ message: 'User not found' }, { status: 404 });
// //         }

// //         const existingApplicant = await UserForm.findOne({ userId });
// //         if (!existingApplicant) {
// //             return NextResponse.json({ message: 'Applicant data not found for this user' }, { status: 404 });
// //         }

// //         // Update applicant data
// //         const updatedApplicant = await UserForm.findOneAndUpdate(
// //             { userId },
// //             { $set: updateFields }, // Exclude userId from updates
// //             { new: true }
// //         );

// //         return NextResponse.json(
// //             { message: 'Applicant data updated successfully', applicant: updatedApplicant },
// //             { status: 200 }
// //         );
// //     } catch (err: any) {
// //         return NextResponse.json({ message: 'Server Error', error: err.message || 'Internal Server Error' }, { status: 500 });
// //     }
// // }
   

// import { NextRequest, NextResponse } from 'next/server';
// import mongoose from 'mongoose';
// import User from '@/models/userModel';
// import UserForm from '@/models/userForm'; 
// import { connect } from '@/backend/db';

// await connect(); // Ensure DB is connected

// export async function PATCH(req: NextRequest) {
//     try {
//         const body = await req.json();
//         const { userId, applicationId, ...updateFields } = body;

//         // ✅ Validate inputs
//         if (!mongoose.Types.ObjectId.isValid(userId)) {
//             return NextResponse.json({ message: 'Invalid User ID' }, { status: 400 });
//         }

//         if (!applicationId || typeof applicationId !== 'string') {
//             return NextResponse.json({ message: 'Application ID is required and must be a string' }, { status: 400 });
//         }

//         // ✅ Check if user exists
//         const user = await User.findById(userId);
//         if (!user) {
//             return NextResponse.json({ message: 'User not found' }, { status: 404 });
//         }

//         // ✅ Find the specific application
//         const existingApplication = await UserForm.findOne({ userId, applicationId });
//         if (!existingApplication) {
//             return NextResponse.json({ message: 'Application not found for this user' }, { status: 404 });
//         }

//         // ✅ Update the form — prevent modifying userId/applicationId
//         const updatedApplication = await UserForm.findOneAndUpdate(
//             { userId, applicationId },
//             { $set: updateFields },
//             { new: true, runValidators: true }
//         );

//         return NextResponse.json({
//             message: 'Application updated successfully',
//             applicant: updatedApplication
//         }, { status: 200 });

//     } catch (err: any) {
//         return NextResponse.json({
//             message: 'Server Error',
//             error: err.message || 'Internal Server Error'
//         }, { status: 500 });
//     }
// }









////////////////////// 















// import { NextRequest, NextResponse } from 'next/server';
// import mongoose from 'mongoose';
// import User from '@/models/userModel';
// import UserForm from '@/models/userForm'; 
// import { connect } from '@/backend/db';

// await connect(); // Ensure DB is connected before operations

// export async function PATCH(req: NextRequest) {
//     try {
//         const { userId, ...updateFields } = await req.json(); // Prevent overriding userId

//         if (!mongoose.Types.ObjectId.isValid(userId)) {
//             return NextResponse.json({ message: 'Invalid User ID' }, { status: 400 });
//         }

//         const user = await User.findById(userId);
//         if (!user) {
//             return NextResponse.json({ message: 'User not found' }, { status: 404 });
//         }

//         const existingApplicant = await UserForm.findOne({ userId });
//         if (!existingApplicant) {
//             return NextResponse.json({ message: 'Applicant data not found for this user' }, { status: 404 });
//         }

//         // Update applicant data
//         const updatedApplicant = await UserForm.findOneAndUpdate(
//             { userId },
//             { $set: updateFields }, // Exclude userId from updates
//             { new: true }
//         );

//         return NextResponse.json(
//             { message: 'Applicant data updated successfully', applicant: updatedApplicant },
//             { status: 200 }
//         );
//     } catch (err: any) {
//         return NextResponse.json({ message: 'Server Error', error: err.message || 'Internal Server Error' }, { status: 500 });
//     }
// }
   

// import { NextRequest, NextResponse } from 'next/server';
// import mongoose from 'mongoose';
// import User from '@/models/userModel';
// import UserForm from '@/models/userForm'; 
// import { connect } from '@/backend/db';

// await connect(); // Ensure DB is connected

// export async function PATCH(req: NextRequest) {
//     try {
//         const body = await req.json();
//         const { userId, applicationId, ...updateFields } = body;

//         // ✅ Validate inputs
//         if (!mongoose.Types.ObjectId.isValid(userId)) {
//             return NextResponse.json({ message: 'Invalid User ID' }, { status: 400 });
//         }

//         if (!applicationId || typeof applicationId !== 'string') {
//             return NextResponse.json({ message: 'Application ID is required and must be a string' }, { status: 400 });
//         }

//         // ✅ Check if user exists
//         const user = await User.findById(userId);
//         if (!user) {
//             return NextResponse.json({ message: 'User not found' }, { status: 404 });
//         }

//         // ✅ Find the specific application
//         const existingApplication = await UserForm.findOne({ userId, applicationId });
//         if (!existingApplication) {
//             return NextResponse.json({ message: 'Application not found for this user' }, { status: 404 });
//         }

//         // ✅ Update the form — prevent modifying userId/applicationId
//         const updatedApplication = await UserForm.findOneAndUpdate(
//             { userId, applicationId },
//             { $set: updateFields },
//             { new: true, runValidators: true }
//         );

//         return NextResponse.json({
//             message: 'Application updated successfully',
//             applicant: updatedApplication
//         }, { status: 200 });

//     } catch (err: any) {
//         return NextResponse.json({
//             message: 'Server Error',
//             error: err.message || 'Internal Server Error'
//         }, { status: 500 });
//     }
// }




// export async function GET(
//     request: Request,
//     { params }: { params: { id: string } }
//   ) {
//     await connect();
  
//     try {
//       const id = params?.id;
//       console.log('id', id);
  
//       if (!id) {
//         return NextResponse.json(
//           { message: 'User ID is required' },
//           { status: 400 }
//         );
//       }
  
//       // Find all documents for this user based on userId
//       const documents = await UserForm.find({ userId: id });
//       console.log('documents', documents);
  
//       if (!documents || documents.length === 0) {
//         return NextResponse.json(
//           { message: 'No documents found for this user' },
//         );
//       }
  
//       return NextResponse.json(documents);
//     } catch (error) {
//       console.error('Error fetching documents:', error);
//       return NextResponse.json(
//         { message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' },
//         { status: 500 }
//       );
//     }
//   }




import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import User from '@/models/userModel';
import UserForm from '@/models/userForm'; 
import { connect } from '@/backend/db';

await connect(); // Ensure DB is connected

export async function PATCH(req: NextRequest) {
    try {
        const body = await req.json();
        const { userId, applicationId, ...frontendData } = body;

        // ✅ Validate inputs
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return NextResponse.json({ message: 'Invalid User ID' }, { status: 400 });
        }

        if (!applicationId || typeof applicationId !== 'string') {
            return NextResponse.json({ message: 'Application ID is required and must be a string' }, { status: 400 });
        }

        // ✅ Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        // ✅ Find the specific application
        const existingApplication = await UserForm.findOne({ userId, applicationId });
        if (!existingApplication) {
            return NextResponse.json({ message: 'Application not found for this user' }, { status: 404 });
        }

        // ✅ Transform the frontend data structure to match the backend schema
        const transformedData = {
            // Transform applicationType
            applicationType: {
                expressEntry: frontendData.applicationType?.includes('Express Entry - Principal Applicant') || false,
                pnp: frontendData.applicationType?.includes('PNP') || false,
                studyPermit: frontendData.applicationType?.includes('Study Permit') || false,
                workPermit: frontendData.applicationType?.includes('Work Permit') || false,
                visitorVisa: frontendData.applicationType?.includes('Visitor Visa/Super Visa') || false,
            },
            
            // Transform previousVisaApplication
            previousVisaApplication: {
                appliedBefore: frontendData.previousVisaDetails ? true : false,
                details: frontendData.previousVisaDetails || ''
            },
            
            uciNumber: frontendData.uciNumber,
            
            // Transform personalDetails from applicantInfo
            personalDetails: {
                firstName: frontendData.applicantInfo?.firstName || '',
                lastName: frontendData.applicantInfo?.lastName || '',
                dateOfBirth: frontendData.applicantInfo?.dob || '',
                placeOfBirth: frontendData.applicantInfo?.placeOfBirth || '',
                colorOfEyes: frontendData.applicantInfo?.eyeColor || '',
                height: {
                    inches: frontendData.applicantInfo?.height ? parseFloat(frontendData.applicantInfo.height) : 0,
                    cm: frontendData.applicantInfo?.height ? parseFloat(frontendData.applicantInfo.height) * 2.54 : 0,
                },
                gender: frontendData.applicantInfo?.gender || '',
                telephone: frontendData.applicantInfo?.telephone || '',
                email: frontendData.applicantInfo?.email || '',
                statusInCanada: frontendData.applicantInfo?.statusInCanada || '',
                currentAddress: frontendData.applicantInfo?.currentAddress || '',
                homeCountryAddress: frontendData.applicantInfo?.homeCountryAddress || '',
            },
            
            // Transform passportDetails from applicantInfo
            passportDetails: {
                passportNumber: frontendData.applicantInfo?.passportNumber || '',
                issueDate: frontendData.applicantInfo?.passportIssueDate || '',
                expiryDate: frontendData.applicantInfo?.passportExpiryDate || '',
                countryOfIssue: frontendData.applicantInfo?.passportCountry || '',
            },
            
            maritalStatus: frontendData.applicantInfo?.maritalStatus || '',
            
            // Transform spouseDetails
            spouseDetails: {
                dateOfMarriage: frontendData.spouseInfo?.marriageDate || '',
                firstName: frontendData.spouseInfo?.firstName || '',
                lastName: frontendData.spouseInfo?.lastName || '',
                dateOfBirth: frontendData.spouseInfo?.dob || '',
                placeOfBirth: frontendData.spouseInfo?.placeOfBirth || '',
                occupation: frontendData.spouseInfo?.occupation || '',
                address: frontendData.spouseInfo?.address || '',
            },
            
            // Transform fatherDetails
            fatherDetails: {
                firstName: frontendData.parentsInfo?.father?.firstName || '',
                lastName: frontendData.parentsInfo?.father?.lastName || '',
                dateOfBirth: frontendData.parentsInfo?.father?.dob || '',
                placeOfBirth: frontendData.parentsInfo?.father?.placeOfBirth || '',
                occupation: frontendData.parentsInfo?.father?.occupation || '',
                currentAddress: frontendData.parentsInfo?.father?.address || '',
                deceased: !!frontendData.parentsInfo?.father?.dateOfDeath,
                dateOfDeath: frontendData.parentsInfo?.father?.dateOfDeath || '',
            },
            
            // Transform motherDetails
            motherDetails: {
                firstName: frontendData.parentsInfo?.mother?.firstName || '',
                lastName: frontendData.parentsInfo?.mother?.lastName || '',
                dateOfBirth: frontendData.parentsInfo?.mother?.dob || '',
                placeOfBirth: frontendData.parentsInfo?.mother?.placeOfBirth || '',
                occupation: frontendData.parentsInfo?.mother?.occupation || '',
                currentAddress: frontendData.parentsInfo?.mother?.address || '',
                deceased: !!frontendData.parentsInfo?.mother?.dateOfDeath,
                dateOfDeath: frontendData.parentsInfo?.mother?.dateOfDeath || '',
            },
            
            // Transform educationHistory
            educationHistory: frontendData.educationHistory?.map((edu: any) => ({
                from: edu.fromDate || '',
                to: edu.toDate || '',
                institute: edu.instituteName || '',
                city: edu.city || '',
                course: edu.course || '',
            })) || [],
            
            // Transform workHistory
            workHistory: frontendData.workHistory?.map((work: any) => ({
                from: work.fromDate || '',
                to: work.toDate || '',
                designation: work.designation || '',
                jobDuties: work.jobDuties || '',
                city: work.city || '',
                country: work.country || '',
                companyName: work.companyName || '',
            })) || [],
            
            // Transform childrenDetails
            childrenDetails: frontendData.children?.map((child: any) => ({
                firstName: child.firstName || '',
                lastName: child.lastName || '',
                relation: child.relation || '',
                dateOfBirth: child.dob || '',
                placeOfBirth: child.placeOfBirth || '',
                maritalStatus: child.maritalStatus || '',
                occupation: child.occupation || '',
                currentAddress: child.currentAddress || '',
                eyeColor: child.eyeColour || '',
                height: {
                    feet: child.heightFeet ? parseFloat(child.heightFeet) : 0,
                    inches: child.heightInches ? parseFloat(child.heightInches) : 0,
                },
            })) || [],
            
            // Transform siblingDetails
            siblingDetails: frontendData.siblings?.map((sibling: any) => ({
                firstName: sibling.name ? sibling.name.split(' ')[0] : '',
                lastName: sibling.name ? sibling.name.split(' ').slice(1).join(' ') : '',
                relation: sibling.relation || '',
                dateOfBirth: sibling.dob || '',
                placeOfBirth: sibling.placeOfBirth || '',
                maritalStatus: sibling.maritalStatus || '',
                occupation: sibling.occupation || '',
                currentAddress: sibling.currentAddress || '',
            })) || [],
            
            // Transform addressHistory
            addressHistory: frontendData.addressHistory?.map((address: any) => ({
                from: address.fromDate || '',
                to: address.toDate || '',
                address: address.address || '',
                cityState: address.cityState || '',
                country: address.country || '',
                activity: address.currentStatus || '',
            })) || [],
            
            // Transform travelHistory
            travelHistory: frontendData.travelHistory?.map((travel: any) => ({
                from: travel.fromDate || '',
                to: travel.toDate || '',
                place: travel.place || '',
                purpose: travel.purpose || '',
            })) || [],
            
            // Transform relativesInCanada
            relativesInCanada: frontendData.relativesInCanada?.map((relative: any) => ({
                firstName: relative.firstName || '',
                lastName: relative.lastName || '',
                address: relative.address || '',
                relation: relative.relation || '',
                statusInCanada: relative.status || '',
                yearsInCanada: relative.yearsInCanada ? parseFloat(relative.yearsInCanada) : 0,
            })) || [],
            
            // Transform ieltsScores
            ieltsScores: {
                listening: frontendData.ieltsScores?.listening ? parseFloat(frontendData.ieltsScores.listening) : 0,
                reading: frontendData.ieltsScores?.reading ? parseFloat(frontendData.ieltsScores.reading) : 0,
                writing: frontendData.ieltsScores?.writing ? parseFloat(frontendData.ieltsScores.writing) : 0,
                speaking: frontendData.ieltsScores?.speaking ? parseFloat(frontendData.ieltsScores.speaking) : 0,
                overall: frontendData.ieltsScores?.overall ? parseFloat(frontendData.ieltsScores.overall) : 0,
            },
            
            // Transform additionalQuestions
            additionalQuestions: {
                criminalRecord: frontendData.questions?.crime?.answer === 'yes',
                previousVisaRefusal: frontendData.questions?.visa?.answer === 'yes',
                medicalIssues: frontendData.questions?.health?.answer === 'yes',
                notes: [
                    frontendData.questions?.crime?.answer === 'yes' ? frontendData.questions.crime.details : '',
                    frontendData.questions?.visa?.answer === 'yes' ? frontendData.questions.visa.details : '',
                    frontendData.questions?.health?.answer === 'yes' ? frontendData.questions.health.details : ''
                ].filter(Boolean).join('; ')
            },
            
            // Transform declaration
            declaration: {
                signedDate: new Date().toISOString().split('T')[0],
                signature: `${frontendData.applicantInfo?.firstName || ''} ${frontendData.applicantInfo?.lastName || ''}`.trim()
            }
        };

        // ✅ Update the form with transformed data
        const updatedApplication = await UserForm.findOneAndUpdate(
            { userId, applicationId },
            { $set: transformedData },
            { new: true, runValidators: true }
        );

        return NextResponse.json({
            message: 'Application updated successfully',
            applicant: updatedApplication
        }, { status: 200 });

    } catch (err: any) {
        console.error('Error updating application:', err);
        return NextResponse.json({
            message: 'Server Error',
            error: err.message || 'Internal Server Error'
        }, { status: 500 });
    }
}

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    await connect();

    try {
        const id = params?.id;
        console.log('id', id);

        if (!id) {
            return NextResponse.json(
                { message: 'User ID is required' },
                { status: 400 }
            );
        }

        // Find all documents for this user based on userId
        const documents = await UserForm.find({ userId: id });
        console.log('documents', documents);

        if (!documents || documents.length === 0) {
            return NextResponse.json(
                { message: 'No documents found for this user' },
                { status: 404 }
            );
        }

        return NextResponse.json(documents);
    } catch (error) {
        console.error('Error fetching documents:', error);
        return NextResponse.json(
            { message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}