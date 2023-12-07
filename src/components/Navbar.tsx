import { BsBell, BsYoutube, BsCameraVideo } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { TiMicrophone } from "react-icons/ti";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeSearchTerm, clearSearchTerm, clearVideos } from "../store";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import { menu } from "../assets";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

    const handleSearch = () => {
        if (location.pathname !== "/search") {
            navigate("/search");
        } else {
            dispatch(clearVideos());
            dispatch(getSearchPageVideos(false));
        }
    };

    return (
        <nav className="flex justify-between items-center px-14 h-14 opacity-95 bg-[#212121] z-50 sticky top-0">
            <div className="flex gap-8 items-center text-2xl">
                <div>
                    <img src={menu} alt="menu" className="text-xl fill-white" />
                </div>
                <Link to="/">
                    <div className="flex gap-1 items-center justify-center">
                        <BsYoutube className="text-3xl text-red-600" />
                        <span className="text-xl font-medium">Youtube</span>
                    </div>
                </Link>
            </div>
            <div className="flex items-center justify-center gap-5">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSearch();
                    }}
                >
                    <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
                        <div className="flex gap-4 items-center pr-5">
                            <div>
                                <AiOutlineSearch className="text-xl hidden active:block" />
                            </div>
                            <input
                                type="text"
                                className="w-96 bg-zinc-900 focus:outline-none border-none placeholder:text-zinc-400"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) =>
                                    dispatch(changeSearchTerm(e.target.value))
                                }
                            />
                            <AiOutlineClose
                                className={`text-xl cursor-pointer ${
                                    !searchTerm ? "invisible" : "visible"
                                }`}
                                onClick={() => dispatch(clearSearchTerm())}
                            />
                        </div>
                        <button className="h-10 w-16 bg-zinc-800 flex items-center justify-center">
                            <AiOutlineSearch className="text-xl" />
                        </button>
                    </div>
                </form>
                <div className="text-xl p-3 bg-zinc-900 rounded-full">
                    <TiMicrophone />
                </div>
            </div>
            <div className="flex gap-5 items-center text-xl">
                <BsCameraVideo />
                <IoAppsSharp />
                <div className="relative">
                    <BsBell />
                    <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full p">
                        9+
                    </span>
                </div>
                <img
                    src="/imgs/bruce.png"
                    alt="user"
                    className="w-9 h-9 rounded-full object-cover"
                />
            </div>
        </nav>
    );
};

export default Navbar;
