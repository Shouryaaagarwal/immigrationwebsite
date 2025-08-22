// import userForm from '@/models/userForm';

// export const generateApplicationId = async (): Promise<string> => {
//   let applicationId = ''; // ✅ Initialize to fix TS error
//   let exists = true;

//   while (exists) {
//     applicationId = Math.floor(1000 + Math.random() * 9000).toString();
//     exists = await userForm.findOne({ applicationId });
//   }

//   return applicationId;
// }; 



import userForm from '@/models/userForm';

export const generateApplicationId = async (): Promise<string> => {
  let applicationId = '';
  let exists = true;

  while (exists) {
    applicationId = Math.floor(1000 + Math.random() * 9000).toString();
    const result = await userForm.findOne({ applicationId });
    exists = !!result; // Converts document | null => boolean
  }

  return applicationId;
};
