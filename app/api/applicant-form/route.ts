// import mongoose from "mongoose";
// import userForm from "@/models/userForm";
// import { NextRequest, NextResponse } from "next/server";
// import { connect } from "@/backend/db";
// import User from "@/models/userModel";  // For user validation

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

//         const applicantData = { ...body, user: userId };

//         const newApplicant = new userForm(applicantData);
//         await newApplicant.save();

//         return NextResponse.json({ message: 'Applicant data saved successfully', applicant: newApplicant }, { status: 201 });
//     } catch (err: any) {
//         const errorMessage = err.message || 'Internal Server Error';
//         return NextResponse.json({ message: 'Server Error', error: errorMessage }, { status: 500 });
//     }
// } 




import mongoose from "mongoose";
import userForm from "@/models/userForm";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/backend/db";
import User from "@/models/userModel";
import { generateApplicationId } from "@/backend/utils/generateApplicationId";

connect();

export async function POST(req: NextRequest) {
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

        // 🔑 Generate a unique applicationId (job ID)
        const applicationId = await generateApplicationId();

        // Prepare the data
        const applicantData = {
            ...body,
            userId,
            applicationId // ⬅ Add it here
        };

        const newApplicant = new userForm(applicantData);
        await newApplicant.save();

        return NextResponse.json(
            { message: 'Applicant data saved successfully', applicant: newApplicant },
            { status: 201 }
        );
    } catch (err: any) {
        const errorMessage = err.message || 'Internal Server Error';
        return NextResponse.json(
            { message: 'Server Error', error: errorMessage },
            { status: 500 }
        );
    }
}


