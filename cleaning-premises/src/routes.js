import Home from './pages/Home'
import Brigades from './pages/Brigades'
import SchedulePage from './pages/SchedulePage'
import RoomPage from './pages/RoomPage'
import QuestionsPage from './pages/QuestionsPage'
import LogIn from './pages/LogIn'
import Registrstion from './pages/Registration'
import UserProfile from './pages/UserProfile'
import { HOME_ROUTE, BRIGADE_ROUTE, SCHEDULE_ROUTE, ROOMS_ROUTE, QUESTIONS_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE, USERPROFILE_ROUTE } from './utils/consts'


export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE,
    //     Component: Admin
    // },
    // {
    //     path: USER_PROFILE_ROUTE,
    //     Component: User
    // },
    // {
    //     path: CREATE_STUDENT_ROUTE,
    //     Component: CreateStudent
    // }
    {
        path: USERPROFILE_ROUTE,
        Component: UserProfile
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: BRIGADE_ROUTE,
        Component: Brigades
    },
    {
        path: SCHEDULE_ROUTE,
        Component: SchedulePage
    },
    {
        path: ROOMS_ROUTE,
        Component: RoomPage
    },
    {
        path: QUESTIONS_ROUTE,
        Component: QuestionsPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registrstion
    },
    {
        path: LOGIN_ROUTE,
        Component: LogIn
    },
    
]