import React from "react";
import { useState } from "react";
import { ArrowDown, ArrowUp, Bell, Calendar, Clock, FileText, Gift, Home, LogOut, Mail, Menu, MessageSquare, Play, Plus, Search, Settings, User } from "lucide-react";
import { Button, Card } from "flowbite-react";
import { CardContent } from "@mui/material";
const Design = () => {
    const jsonData = {
        statements: [
            "Thomas Edward has a social security number (NSS)",
            "You have 1 pending taks related to your establishment remember to process it before your payroll closing date",
        ],
    };
    const events = [
        {
            title: "Presentation of the new department",
            time: "Today | 6:00 PM",
            icon: <Calendar className="text-blue-500" size={20} />,
            timeLeft: "4h",
            arrow: <ArrowUp className="text-yellow-500" size={16} />,
            borderColor: "border-l-blue-500",
        },
        {
            title: "Anna’s Birthday",
            time: "Today | 5:00 PM",
            icon: <Gift className="text-pink-500" size={20} />,
            timeLeft: "2h",
            arrow: <ArrowDown className="text-green-500" size={16} />,
            borderColor: "border-l-pink-500",
        },
    ];

    const tasks1 = [
        {
            title: "Calendar",
            description: "Follow the absences of all your employees Find all the payslips of the month Follow the absences of all your employees Find all the payslips of the month   ",
            icon: <Calendar size={20} />,

        },
        {
            title: "Payslips",
            description: "Follow the absences of all your employees Find all the payslips of the month Follow the absences of all your employees Find all the payslips of the month ",
            icon: <Calendar size={20} />,

        },
    ];
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [tasks, setTasks] = useState(jsonData.statements);


    return (
        <>
            <div className="flex min-h-screen bg-gray-50">
                <aside className={`bg-white p-6 shadow-xl transition-all duration-300 flex flex-col justify-between ${isSidebarOpen ? "w-72" : "w-20"}`}>

                    <div>
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-extrabold text-blue-600">{isSidebarOpen ? "EXGER_XEDGER" : "EX"}</h1>
                            <Menu className="cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                        </div>


                        <nav className="mt-6 space-y-5">
                            {[
                                { icon: Home, label: "Dashboard" },
                                { icon: User, label: "Profile" },
                                { icon: Mail, label: "Travel Management" },
                                { icon: MessageSquare, label: "Messages" },
                                { icon: FileText, label: "Info Portal" },
                                { icon: Settings, label: "Settings" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 text-gray-700 font-medium cursor-pointer hover:text-blue-500 transition-all duration-200"
                                >
                                    <item.icon size={20} />
                                    {isSidebarOpen && <span>{item.label}</span>}
                                </div>
                            ))}
                        </nav>
                    </div>
                    <div className="mt-6 flex flex-col items-center text-gray-700 font-medium cursor-pointer hover:text-red-500">
                        <div className="mt-6 ">
                            {isSidebarOpen && <div className="bg-blue-50 p-4 flex flex-col items-center">
                                <img
                                    src="./help.png"
                                    // src={help}
                                    alt="Support"
                                    className="w-50 h-50 rounded-full"
                                />
                                <Button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow">Contact Support</Button>
                            </div>}
                        </div>
                        <LogOut className="mt-4" size={20} />
                        {isSidebarOpen && <span>Logout</span>}
                    </div>
                </aside>

                <main className="flex-1 p-8">

                    <div className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">

                        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>


                        <div className="flex items-center space-x-4">

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for something"
                                    className="pl-10 pr-4 py-2 bg-gray-100 rounded-full text-gray-600 focus:outline-none shadow-sm"
                                />
                                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                            </div>


                            <Settings className="text-gray-500 cursor-pointer hover:text-gray-700" size={24} />
                            <Bell className="text-red-500 cursor-pointer hover:text-red-600" size={24} />


                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-H_USyjMgq6magY2wnfjpBZ0f1Ail_GUe_g&s"
                                alt="User"
                                className="w-10 h-10 rounded-full object-cover border border-gray-300 shadow-sm cursor-pointer"
                            />
                        </div>
                    </div>


                    <div className="mt-6 bg-blue-500 text-white p-6 rounded-xl flex items-center justify-between shadow-lg relative overflow-hidden">

                        <div>
                            <h3 className="text-lg font-bold uppercase">Acceptance / Refusal of Subject Experts</h3>
                            <p className="text-sm opacity-90">
                                Interview of the faculty under the Assessment Promotion Scheme (APS) &lt;Month&gt; &lt;Year&gt;
                            </p>


                            <button className="mt-4 flex items-center bg-black text-white px-4 py-2 rounded-full shadow hover:bg-gray-900 transition">
                                <Play size={16} className="mr-2" />
                                View
                            </button>
                        </div>


                        <div className="relative">
                            <img
                                src="./email.webp"
                                alt="Support"
                                className="w-24 h-24 object-contain"
                            />
                        </div>
                    </div>


                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-gray-800">Your quick access</h4>

                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {tasks1.map((task, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="bg-blue-500 text-white p-3 rounded-full text-lg">
                                                {task.icon}
                                            </div>
                                            <h5 className="font-bold text-gray-800">{task.title} ➝</h5>
                                        </div>
                                        <p className="text-gray-600 mt-2">{task.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
                            <div className="flex justify-between items-center ">
                                <h4 className="text-xl font-bold text-gray-800">Pending Tasks</h4>
                                <p className="text-blue-500 ">See all task</p>
                            </div>
                            <p className="my-2 text-3xl font-semibold "> {tasks.length}</p>
                            <p className="text-gray-600 "> tasks pending..</p>
                            <ul className="mt-4 space-y-4">
                                {tasks.map((task, index) => (
                                    <li
                                        key={index}
                                        className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img className="w-6" src="./exclamation-mark.png" alt="!" />
                                            <span>{task}</span>
                                        </div>
                                        <span className="text-blue-500  px-4 py-2 rounded-lg">
                                            Resolve
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    <div className="mt-8">

                        <div className="flex justify-between items-center">
                            <h4 className="text-xl font-bold text-gray-800">Nearest Events</h4>
                            <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
                                <Plus size={16} />
                                <span>Add Event</span>
                            </button>
                        </div>


                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {events.map((event, index) => (
                                <div
                                    key={index}
                                    className={`border ${event.borderColor} border-l-4 shadow-md p-4 rounded-lg bg-white flex justify-between items-center`}
                                >

                                    <div>
                                        <div className="flex flex-col gap-4 text-end space-x-2">
                                            {event.icon}
                                            <h5 className="text-lg font-semibold text-gray-800">
                                                {event.title}
                                            </h5>
                                        </div>
                                        <p className="text-gray-600 text-sm">{event.time}</p>
                                    </div>


                                    <div className="flex flex-col gap-4 text-end space-x-2">
                                        {event.arrow}
                                        <div className="flex items-center bg-gray-200 px-3 py-1 rounded-full text-gray-700 text-sm">
                                            <Clock size={14} className="mr-1" />
                                            {event.timeLeft}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

            </div>
        </>
    )
}

export default Design