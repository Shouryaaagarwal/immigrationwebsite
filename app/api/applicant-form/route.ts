// // import mongoose from "mongoose";
// // import userForm from "@/models/userForm";
// // import { NextRequest, NextResponse } from "next/server";
// // import { connect } from "@/backend/db";
// // import User from "@/models/userModel";  // For user validation

// // connect();

// // export async function POST(req: NextRequest, res: NextResponse) {
// //     try {
// //         const body = await req.json();
// //         const userId = body.userId;

// //         if (!mongoose.Types.ObjectId.isValid(userId)) {
// //             return NextResponse.json({ message: 'Invalid User ID' }, { status: 400 });
// //         }

// //         // Validate if the user exists
// //         const user = await User.findById(userId);
// //         console.log(user);  // Log the user object to check if it's found
// //         if (!user) {
// //             return NextResponse.json({ message: 'User not found' }, { status: 404 });
// //         }

// //         const applicantData = { ...body, user: userId };

// //         const newApplicant = new userForm(applicantData);
// //         await newApplicant.save();

// //         return NextResponse.json({ message: 'Applicant data saved successfully', applicant: newApplicant }, { status: 201 });
// //     } catch (err: any) {
// //         const errorMessage = err.message || 'Internal Server Error';
// //         return NextResponse.json({ message: 'Server Error', error: errorMessage }, { status: 500 });
// //     }
// // } 




// import mongoose from "mongoose";
// import userForm from "@/models/userForm";
// import { NextRequest, NextResponse } from "next/server";
// import { connect } from "@/backend/db";
// import User from "@/models/userModel";
// import { generateApplicationId } from "@/backend/utils/generateApplicationId";

// connect();

// export async function POST(req: NextRequest) {
//     try {
//         const body = await req.json();
//         const userId = body.userId;

//         if (!mongoose.Types.ObjectId.isValid(userId)) {
//             return NextResponse.json({ message: 'Invalid User ID' }, { status: 400 });
//         }

//         // Validate if the user exists
//         const user = await User.findById(userId);
//         if (!user) {
//             return NextResponse.json({ message: 'User not found' }, { status: 404 });
//         }

//         // 🔑 Generate a unique applicationId (job ID)
//         const applicationId = await generateApplicationId();

//         // Prepare the data
//         const applicantData = {
//             ...body,
//             userId,
//             applicationId // ⬅ Add it here
//         };

//         const newApplicant = new userForm(applicantData);
//         await newApplicant.save();

//         return NextResponse.json(
//             { message: 'Applicant data saved successfully', applicant: newApplicant },
//             { status: 201 }
//         );
//     } catch (err: any) {
//         const errorMessage = err.message || 'Internal Server Error';
//         return NextResponse.json(
//             { message: 'Server Error', error: errorMessage },
//             { status: 500 }
//         );
//     }
// }





/////////////////////////////////////////










// import mongoose from "mongoose";
// import userForm from "@/models/userForm";
// import { NextRequest, NextResponse } from "next/server";
// import { connect } from "@/backend/db";
// import User from "@/models/userModel";  // For user validation
// import { generateApplicationId } from "@/backend/utils/generateApplicationId"; // Import the utility function
// connect();

// export async function POST(req: NextRequest, res: NextResponse) {
//     try {
//         const body = await req.json();
//         const userId = body.userId;

//         if (!mongoose.Types.ObjectId.isValid(userId)) {
//             return NextResponse.json({ message: 'Invalid User ID' }, { status: 400 });
//         }

//         // Validate if the user exists
//         const user = await User.findById(userId);
//         console.log(user);  // Log the user object to check if it's found
//         if (!user) {
//             return NextResponse.json({ message: 'User not found' }, { status: 404 });
//         }
        
//         const applicationId = await generateApplicationId();
//         const applicantData = { ...body,
//              user: userId,
//              applicationId
//             };

//         console.log('Applicant Data:', applicantData); // Log the applicant data to verify

//         const newApplicant = new userForm(applicantData);
//         await newApplicant.save();


//         console.log('New Applicant Saved:', newApplicant); // Log the saved applicant

//         return NextResponse.json({ message: 'Applicant data saved successfully', applicant: newApplicant }, { status: 201 });
//     } catch (err: any) {
//         const errorMessage = err.message || 'Internal Server Error';
//         return NextResponse.json({ message: 'Server Error', error: errorMessage }, { status: 500 });
//     }
// } 




// // import mongoose from "mongoose";
// // import userForm from "@/models/userForm";
// // import { NextRequest, NextResponse } from "next/server";
// // import { connect } from "@/backend/db";
// // import User from "@/models/userModel";
// // import { generateApplicationId } from "@/backend/utils/generateApplicationId";

// // connect();

// // export async function POST(req: NextRequest) {
// //     try {
// //         const body = await req.json();
// //         const userId = body.userId;

// //         if (!mongoose.Types.ObjectId.isValid(userId)) {
// //             return NextResponse.json({ message: 'Invalid User ID' }, { status: 400 });
// //         }

// //         // Validate if the user exists
// //         const user = await User.findById(userId);
// //         if (!user) {
// //             return NextResponse.json({ message: 'User not found' }, { status: 404 });
// //         }

// //         // 🔑 Generate a unique applicationId (job ID)
// //         const applicationId = await generateApplicationId();

// //         // Prepare the data
// //         const applicantData = {
// //             ...body,
// //             userId,
// //             applicationId 
// //         };

// //         const newApplicant = new userForm(applicantData);
// //         await newApplicant.save();

// //         return NextResponse.json(
// //             { message: 'Applicant data saved successfully', applicant: newApplicant },
// //             { status: 201 }
// //         );
// //     } catch (err: any) {
// //         const errorMessage = err.message || 'Internal Server Error';
// //         return NextResponse.json(
// //             { message: 'Server Error', error: errorMessage },
// //             { status: 500 }
// //         );
// //     }
// // }


import mongoose from 'mongoose';
import userForm from '@/models/userForm';
import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/backend/db';
import User from '@/models/userModel';
import { generateApplicationId } from '@/backend/utils/generateApplicationId';

connect();

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json();
        const userId = body.userId;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return NextResponse.json({ message: 'Invalid User ID' }, { status: 400 });
        }

        // Validate if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
        
        const applicationId = await generateApplicationId();
        
        // Transform the frontend data structure to match the backend schema
        const transformedData = {
            applicationId,
            userId,
            
            // Transform applicationType
            applicationType: {
                expressEntry: body.applicationType?.includes('Express Entry - Principal Applicant') || false,
                pnp: body.applicationType?.includes('PNP') || false,
                studyPermit: body.applicationType?.includes('Study Permit') || false,
                workPermit: body.applicationType?.includes('Work Permit') || false,
                visitorVisa: body.applicationType?.includes('Visitor Visa/Super Visa') || false,
            },
            
            // Transform previousVisaApplication
            previousVisaApplication: {
                appliedBefore: body.previousVisaDetails ? true : false,
                details: body.previousVisaDetails || ''
            },
            
            uciNumber: body.uciNumber,
            
            // Transform personalDetails from applicantInfo
            personalDetails: {
                firstName: body.applicantInfo?.firstName || '',
                lastName: body.applicantInfo?.lastName || '',
                dateOfBirth: body.applicantInfo?.dob || '',
                placeOfBirth: body.applicantInfo?.placeOfBirth || '',
                colorOfEyes: body.applicantInfo?.eyeColor || '',
                height: {
                    inches: body.applicantInfo?.height ? parseFloat(body.applicantInfo.height) : 0,
                    cm: body.applicantInfo?.height ? parseFloat(body.applicantInfo.height) * 2.54 : 0,
                },
                gender: body.applicantInfo?.gender || '',
                telephone: body.applicantInfo?.telephone || '',
                email: body.applicantInfo?.email || '',
                statusInCanada: body.applicantInfo?.statusInCanada || '',
                currentAddress: body.applicantInfo?.currentAddress || '',
                homeCountryAddress: body.applicantInfo?.homeCountryAddress || '',
            },
            
            // Transform passportDetails from applicantInfo
            passportDetails: {
                passportNumber: body.applicantInfo?.passportNumber || '',
                issueDate: body.applicantInfo?.passportIssueDate || '',
                expiryDate: body.applicantInfo?.passportExpiryDate || '',
                countryOfIssue: body.applicantInfo?.passportCountry || '',
            },
            
            maritalStatus: body.applicantInfo?.maritalStatus || '',
            
            // Transform spouseDetails
            spouseDetails: {
                dateOfMarriage: body.spouseInfo?.marriageDate || '',
                firstName: body.spouseInfo?.firstName || '',
                lastName: body.spouseInfo?.lastName || '',
                dateOfBirth: body.spouseInfo?.dob || '',
                placeOfBirth: body.spouseInfo?.placeOfBirth || '',
                occupation: body.spouseInfo?.occupation || '',
                address: body.spouseInfo?.address || '',
            },
            
            // Transform fatherDetails
            fatherDetails: {
                firstName: body.parentsInfo?.father?.firstName || '',
                lastName: body.parentsInfo?.father?.lastName || '',
                dateOfBirth: body.parentsInfo?.father?.dob || '',
                placeOfBirth: body.parentsInfo?.father?.placeOfBirth || '',
                occupation: body.parentsInfo?.father?.occupation || '',
                currentAddress: body.parentsInfo?.father?.address || '',
                deceased: !!body.parentsInfo?.father?.dateOfDeath,
                dateOfDeath: body.parentsInfo?.father?.dateOfDeath || '',
            },
            
            // Transform motherDetails
            motherDetails: {
                firstName: body.parentsInfo?.mother?.firstName || '',
                lastName: body.parentsInfo?.mother?.lastName || '',
                dateOfBirth: body.parentsInfo?.mother?.dob || '',
                placeOfBirth: body.parentsInfo?.mother?.placeOfBirth || '',
                occupation: body.parentsInfo?.mother?.occupation || '',
                currentAddress: body.parentsInfo?.mother?.address || '',
                deceased: !!body.parentsInfo?.mother?.dateOfDeath,
                dateOfDeath: body.parentsInfo?.mother?.dateOfDeath || '',
            },
            
            // Transform educationHistory
            educationHistory: body.educationHistory?.map((edu: any) => ({
                from: edu.fromDate || '',
                to: edu.toDate || '',
                institute: edu.instituteName || '',
                city: edu.city || '',
                course: edu.course || '',
            })) || [],
            
            // Transform workHistory
            workHistory: body.workHistory?.map((work: any) => ({
                from: work.fromDate || '',
                to: work.toDate || '',
                designation: work.designation || '',
                jobDuties: work.jobDuties || '',
                city: work.city || '',
                country: work.country || '',
                companyName: work.companyName || '',
            })) || [],
            
            // Transform childrenDetails
            childrenDetails: body.children?.map((child: any) => ({
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
            siblingDetails: body.siblings?.map((sibling: any) => ({
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
            addressHistory: body.addressHistory?.map((address: any) => ({
                from: address.fromDate || '',
                to: address.toDate || '',
                address: address.address || '',
                cityState: address.cityState || '',
                country: address.country || '',
                activity: address.currentStatus || '',
            })) || [],
            
            // Transform travelHistory
            travelHistory: body.travelHistory?.map((travel: any) => ({
                from: travel.fromDate || '',
                to: travel.toDate || '',
                place: travel.place || '',
                purpose: travel.purpose || '',
            })) || [],
            
            // Transform relativesInCanada
            relativesInCanada: body.relativesInCanada?.map((relative: any) => ({
                firstName: relative.firstName || '',
                lastName: relative.lastName || '',
                address: relative.address || '',
                relation: relative.relation || '',
                statusInCanada: relative.status || '',
                yearsInCanada: relative.yearsInCanada ? parseFloat(relative.yearsInCanada) : 0,
            })) || [],
            
            // Transform ieltsScores
            ieltsScores: {
                listening: body.ieltsScores?.listening ? parseFloat(body.ieltsScores.listening) : 0,
                reading: body.ieltsScores?.reading ? parseFloat(body.ieltsScores.reading) : 0,
                writing: body.ieltsScores?.writing ? parseFloat(body.ieltsScores.writing) : 0,
                speaking: body.ieltsScores?.speaking ? parseFloat(body.ieltsScores.speaking) : 0,
                overall: body.ieltsScores?.overall ? parseFloat(body.ieltsScores.overall) : 0,
            },
            
            // Transform additionalQuestions
            additionalQuestions: {
                criminalRecord: body.questions?.crime?.answer === 'yes',
                previousVisaRefusal: body.questions?.visa?.answer === 'yes',
                medicalIssues: body.questions?.health?.answer === 'yes',
                notes: [
                    body.questions?.crime?.answer === 'yes' ? body.questions.crime.details : '',
                    body.questions?.visa?.answer === 'yes' ? body.questions.visa.details : '',
                    body.questions?.health?.answer === 'yes' ? body.questions.health.details : ''
                ].filter(Boolean).join('; ')
            },
            
            // Transform declaration
            declaration: {
                signedDate: new Date().toISOString().split('T')[0],
                signature: `${body.applicantInfo?.firstName || ''} ${body.applicantInfo?.lastName || ''}`.trim()
            }
        };

        const newApplicant = new userForm(transformedData);
        await newApplicant.save();

        return NextResponse.json({ 
            message: 'Applicant data saved successfully', 
            applicant: newApplicant 
        }, { status: 201 });
    } catch (err: any) {
        console.error('Error saving applicant:', err);
        const errorMessage = err.message || 'Internal Server Error';
        return NextResponse.json({ 
            message: 'Server Error', 
            error: errorMessage 
        }, { status: 500 });
    }
}