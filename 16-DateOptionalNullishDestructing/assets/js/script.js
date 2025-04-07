// ----------------------  TASK - 1   -----------------------

const currentTime = new Date();
console.log(currentTime);

// ----------------------  TASK - 2   -----------------------

const employee = {
    name: "Farid Ali",
    department: "Engineering",
    contact: {
        email: "farid.ali@example.com",
        phone: "555-1234",
        emergencyContact: {
            name: "Far For",
            relation: "Spouse"
        }
    }
};

const { name, department, contact } = employee;
const { email, phone, emergencyContact } = contact;
const { name: emergencyContactName, relation: emergencyRelation } = emergencyContact;

console.log({ name, department, email, phone, emergencyContactName, emergencyRelation });

// ----------------------  TASK - 3   -----------------------

const apiResponse = [
    {
        id: 1,
        title: "JavaScript əsasları",
        author: "Səid Məmmədov",
        stats: [2500, 150, 30] // [oxunma, bəyənmə, şərhlər]
    },
    {
        id: 2,
        title: "Array Destructuring",
        author: "Leyla Əliyeva",
        stats: [1800, 220, 45]
    },
    {
        id: 3,
        title: "Müasir JavaScript",
        author: "Tural Həsənli",
        stats: [3200, 380, 70]
    }
];

//  1. Destructuring istifadə edərək ikinci məqalənin məlumatlarını çıxarın

const [, { id, title, author, stats: [oxunma, bəyənmə, şərhlər] }] = apiResponse;

console.log(`${id}, ${title}, ${author}, ${oxunma}, ${bəyənmə}, ${şərhlər}`);


//  2. stats array-ini də destructuring edin (oxunma, bəyənmə, şərhlər)
const [, { stats: [oxunma, beyenme, serhler] }] = apiResponse;

console.log(`oxunma: ${oxunma}, beyenme: ${beyenme}, serhler: ${serhler}`);

// 3. Aşağıdakı formatda nəticəni console-a çıxarın:
// "Məqalə: Array Destructuring, Müəllif: Leyla Əliyeva, 1800 oxunma, 220 bəyənmə, 45 şərh"

const {title, author, stats: [oxunma, begenme, serhler]} = apiResponse.find(article => article.id == 2);

console.log(
    `Məqalə: ${title}, Müəllif: ${author}, ${oxunma} oxunma, ${begenme} bəyənmə, ${serhler} şərh`
);

// ----------------------  TASK - 4   -----------------------


    // 1. Optional chaining ilə təhlükəsiz şəkildə userData-dan məlumatları əldə edin
    // 2. Nullish coalescing ilə əksik məlumatlar üçün default dəyərlər təyin edin
    
    //  Nəticə olaraq bu məlumatları qaytarın:
    //  İstifadəçi adı (default: "Qonaq")
    //  Profil şəkli URL (default: "/default-avatar.png")
    //  Bio məlumatı (default: "Məlumat yoxdur")
    //  Əlaqə emaili (default: "təyin edilməyib")
    //  Premium statusu (default: false)


    function renderUserProfile(userData) {
     return {
    //    Tamamlayın

            username: userData.user?.username ?? "Qonaq",
            avatar: userData.user?.profile?.avatar ?? "/default-avatar.png",
            bio: userData.user?.profile?.bio ?? "Məlumat yoxdur",
            email: userData.user?.contact?.email ?? "təyin edilməyib",
            premium: userData.user?.account?.premium ?? false
            
     };
   }
   console.log(renderUserProfile({}));