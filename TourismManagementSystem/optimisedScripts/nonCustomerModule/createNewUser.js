import { default as signUpPage } from "../../../FrameWork/signUp.page.js"
import { default as baseClassPage } from "../../../FrameWork/pageOjectModel/baseClass.page.js"
import loginPage from "../../../FrameWork/login.page.js";
import dashBoardPage from "../../../FrameWork/dashBoard.page.js";
import manageUserPage from "../../../FrameWork/manageUser.page.js";

describe('Create New User and Verify the User Count', ()=>{

    let number = Math.random();
    let userName = "user"+number;
    let mail = "email"+number+"@gmail.com";
    let value_1 = ""
    
    it('Navigate to the Application', async ()=>{ await baseClassPage.openBrowser() })

    it('Create Your Account', async ()=>{ await signUpPage.createNewUser(userName,mail) })

    it('Login as Admin', async ()=> { await loginPage.adminLogin() })

    it('Get the User Count From DashBoard', async ()=>{ value_1 = await dashBoardPage.getuserCount() })

    it('Get the User cunt from the manageUser', async ()=>{ await manageUserPage.getUserCount(value_1) })

    
})