import {
    MdHistory,
    MdHomeFilled,
    MdOutlineFeedback,
    MdOutlineHelpOutline,
    MdOutlineSlowMotionVideo,
    MdOutlineSmartDisplay,
    MdOutlineSportsVolleyball,
    MdOutlineVideoLibrary,
    MdOutlineWatchLater,
    MdOutlinedFlag,
    MdSettings,
    MdSubscriptions,
    MdThumbUpOffAlt,
} from "react-icons/md";
import { GiFilmStrip } from "react-icons/gi";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";

const Sidebar = () => {
    const mainLinks = [
        {
            icon: <MdHomeFilled className="text-xl" />,
            name: "Home",
        },
        {
            icon: <MdOutlineSlowMotionVideo className="text-xl" />,
            name: "Shorts",
        },
        {
            icon: <MdSubscriptions className="text-xl" />,
            name: "Subscriptions",
        },
    ];

    const secondaryLinks = [
        {
            icon: <MdOutlineVideoLibrary className="text-xl" />,
            name: "Library",
        },
        {
            icon: <MdHistory className="text-xl" />,
            name: "History",
        },
        {
            icon: <MdOutlineSmartDisplay className="text-xl" />,
            name: "Your Videos",
        },
        {
            icon: <MdOutlineWatchLater className="text-xl" />,
            name: "Watch Later",
        },
        {
            icon: <MdThumbUpOffAlt className="text-xl" />,
            name: "Liked Videos",
        },
    ];

    const subscriptionLinks = [
        {
            icon: <TbMusic className="text-xl" />,
            name: "Music",
        },
        {
            icon: <MdOutlineSportsVolleyball className="text-xl" />,
            name: "Sports",
        },
        {
            icon: <TbDeviceGamepad2 className="text-xl" />,
            name: "Gaming",
        },
        {
            icon: <GiFilmStrip className="text-xl" />,
            name: "Films",
        },
    ];

    const helpLinks = [
        {
            icon: <MdSettings className="text-xl" />,
            name: "Settings",
        },
        {
            icon: <MdOutlinedFlag className="text-xl" />,
            name: "Report History",
        },
        {
            icon: <MdOutlineHelpOutline className="text-xl" />,
            name: "Help",
        },
        {
            icon: <MdOutlineFeedback className="text-xl" />,
            name: "Send Feedback",
        },
    ];

    const textLinks = [
        [
            "About",
            "Press",
            "Copyright",
            "Contact us",
            "Creator",
            "Advertise",
            "Developer",
        ],
        [
            "Terms",
            "Privacy",
            "Policy & Safety",
            "How Youtube Works",
            "Test New Features",
        ],
    ];

    const currentYear = new Date().getFullYear();

    return (
        <div className="w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar">
            <ul className="flex flex-col border-b-2 border-gray-700">
                {mainLinks.map(({ name, icon }) => (
                    <li
                        key={name}
                        className={`pl-6 py-3 hover:bg-zinc-600 ${
                            name === "Home" ? "bg-slate-600" : ""
                        }`}
                    >
                        <a href="#" className="flex items-center gap-5">
                            {icon}
                            <span className="tracking-wider text-sm">
                                {name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700">
                {secondaryLinks.map(({ name, icon }) => (
                    <li key={name} className={`pl-6 py-3 hover:bg-zinc-600`}>
                        <a href="#" className="flex items-center gap-5">
                            {icon}
                            <span className="tracking-wider text-sm">
                                {name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700">
                {subscriptionLinks.map(({ name, icon }) => (
                    <li key={name} className={`pl-6 py-3 hover:bg-zinc-600`}>
                        <a href="#" className="flex items-center gap-5">
                            {icon}
                            <span className="tracking-wider text-sm">
                                {name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700">
                {helpLinks.map(({ name, icon }) => (
                    <li key={name} className={`pl-6 py-3 hover:bg-zinc-600`}>
                        <a href="#" className="flex items-center gap-5">
                            {icon}
                            <span className="tracking-wider text-sm">
                                {name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="flex gap-2 flex-wrap p-4">
                {textLinks[0].map((name) => (
                    <li key={name} className="text-sm">
                        {name}
                    </li>
                ))}
            </ul>
            <ul className="flex gap-2 flex-wrap p-4">
                {textLinks[1].map((name) => (
                    <li key={name} className="text-sm">
                        {name}
                    </li>
                ))}
            </ul>
            <span className="px-4 pt-3 text-sm text-zinc-400 mx-auto">
                &copy; {currentYear} Google LLC Youtube, a Google company
            </span>
        </div>
    );
};

export default Sidebar;
