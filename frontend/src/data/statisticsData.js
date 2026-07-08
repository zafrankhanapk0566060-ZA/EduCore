import {
    FaUserGraduate,
    FaBookOpen,
    FaChalkboardTeacher,
    FaAward,
} from "react-icons/fa";

const statisticsData = [
    {
        id: 1,
        icon: FaUserGraduate,
        number: "50K+",
        title: "Active Students",
        description: "Learners from over 100 countries.",
        color: "bg-blue-100 text-blue-600",
    },

    {
        id: 2,
        icon: FaBookOpen,
        number: "1,200+",
        title: "Online Courses",
        description: "Industry-focused learning programs.",
        color: "bg-green-100 text-green-600",
    },

    {
        id: 3,
        icon: FaChalkboardTeacher,
        number: "300+",
        title: "Expert Instructors",
        description: "Experienced teachers and professionals.",
        color: "bg-purple-100 text-purple-600",
    },

    {
        id: 4,
        icon: FaAward,
        number: "98%",
        title: "Success Rate",
        description: "Students achieving their learning goals.",
        color: "bg-orange-100 text-orange-600",
    },
];

export default statisticsData;