import randomNumber from "../../../FrameWork/genericUtilities/randomNumber.js";
import { default as baseClassPage } from "../../../FrameWork/pageOjectModel/baseClass.page.js";
import dashBoardPage from "../../../FrameWork/pageOjectModel/dashBoard.page.js";
import loginPage from "../../../FrameWork/pageOjectModel/login.page.js";
import manageUserPage from "../../../FrameWork/pageOjectModel/manageUser.page.js";
import signUpPage from "../../../FrameWork/pageOjectModel/signUp.page.js";


describe('Create User and Verify the User Count', ()=>{
    let number = randomNumber.randomValues()
    let userName = "user"+number;
    let mail = "email"+number+"@gmail.com";
    let value_1 = ""
    it('Navigate to the Application', async ()=>{
        await baseClassPage.openBrowser()
    })

    it('Create New Account', async ()=>{
        await signUpPage.createNewUser(userName, mail)
    })

    it('Login as admin', async ()=>{
        await loginPage.adminLogin()
    })

    it('Get the user count from dashboard', async ()=>{
        value_1 = await dashBoardPage.getuserCount()
    })

    it('Get the user count from the manage user', async ()=>{
        await manageUserPage.getUserCount(value_1)
    })
})
