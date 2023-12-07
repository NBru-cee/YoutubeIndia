import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import Navbar from "../components/Navbar";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { HiScissors } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import WatchCard from "../components/WatchCard";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { RecommendedVideos } from "../Types";

const Watch = () => {
    const [showMoreStatus, setShowMoreStatus] = useState<boolean>(false);
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const currentPlaying = useAppSelector(
        (state) => state.youtubeApp.currentPlaying
    );
    const recommendedVideos = useAppSelector(
        (state) => state.youtubeApp.recommendedVideos
    );

    useEffect(() => {
        if (id) {
            dispatch(getVideoDetails(id));
            setShowMoreStatus(false);
        } else {
            navigate("/");
        }
    }, [id, navigate, dispatch]);

    useEffect(() => {
        if (currentPlaying && id) {
            dispatch(getRecommendedVideos(id));
        }
    }, [currentPlaying, dispatch, id]);

    return (
        <>
            {currentPlaying && currentPlaying?.videoId === id && (
                <div className="max-h-screen overflow-hidden">
                    <div style={{ height: "7.5vh" }}>
                        <Navbar />
                    </div>
                    <div className="w-full flex" style={{ height: "92.5vh" }}>
                        <div className="flex gap-y-10 gap-x-5 p-7 mx-20 mr-0 w-full overflow-auto">
                            <div style={{ maxWidth: "900px" }}>
                                <div>
                                    <iframe
                                        width="900"
                                        height="502"
                                        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <div className="mt-5">
                                        <p className="text-xl">
                                            {currentPlaying.videoTitle}
                                        </p>
                                        <div className="flex justify-between mt-1">
                                            <div className="text-sm text-gray-400">
                                                <span className="after:content-['&middot;'] after:mx-1">
                                                    {currentPlaying.videoViews}{" "}
                                                    views
                                                </span>
                                                <span>
                                                    {currentPlaying.videoAge}{" "}
                                                    ago
                                                </span>
                                            </div>
                                            <div className="flex items-center uppercase gap-">
                                                <div className="flex items-center gap-1 cursor-pointer">
                                                    <BiLike className="text-sm" />
                                                    <strong className="text-sm">
                                                        {
                                                            currentPlaying.videoLikes
                                                        }
                                                    </strong>
                                                </div>
                                                <div className="flex items-center gap-1 cursor-pointer">
                                                    <BiDislike className="text-sm" />
                                                    <strong className="text-sm">
                                                        Dislike
                                                    </strong>
                                                </div>
                                                <div className="flex items-center gap-1 cursor-pointer">
                                                    <FaShare className="text-sm" />
                                                    <strong className="text-sm">
                                                        Share
                                                    </strong>
                                                </div>
                                                <div className="flex items-center gap-1 cursor-pointer">
                                                    <HiScissors className="text-sm" />
                                                    <strong className="text-sm">
                                                        Clip
                                                    </strong>
                                                </div>
                                                <div className="flex items-center gap-1 cursor-pointer">
                                                    <MdOutlinePlaylistAdd className="text-sm" />
                                                    <strong className="text-sm">
                                                        Save
                                                    </strong>
                                                </div>
                                                <div className="flex items-center gap-1 cursor-pointer">
                                                    <BsThreeDots className="text-sm" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 flex-col border-solid border-gray-400 border-2 my-5 pb-3 border-l-transparent border-r-transparent">
                                            <div className="flex items-center gap-5 mr-5 mt-4">
                                                <div>
                                                    <img
                                                        src={
                                                            currentPlaying
                                                                .channelInfo
                                                                .image
                                                        }
                                                        alt=""
                                                        className="rounded-full h-12 w-12"
                                                    />
                                                </div>
                                                <div className="w-5/6">
                                                    <h5 className="text-sm">
                                                        <strong>
                                                            {
                                                                currentPlaying
                                                                    .channelInfo
                                                                    .name
                                                            }
                                                        </strong>
                                                    </h5>
                                                    <h6 className="text-gray-400 text-xs">
                                                        {
                                                            currentPlaying
                                                                .channelInfo
                                                                .subscribers
                                                        }
                                                    </h6>
                                                </div>
                                                <div>
                                                    <button className="uppercase bg-red-600 rounded-sm p-2 text-sm tracking-wider">
                                                        Subscribe
                                                    </button>
                                                </div>
                                            </div>
                                            <div
                                                className={`${
                                                    !showMoreStatus
                                                        ? "max-h-16 overflow-hidden"
                                                        : ""
                                                } text-sm w-11/12`}
                                            >
                                                <pre
                                                    style={{
                                                        fontFamily: `"Roboto", sans-serif`,
                                                    }}
                                                    className="whitespace-pre-wrap"
                                                >
                                                    {
                                                        currentPlaying.videoDescription
                                                    }
                                                </pre>
                                            </div>
                                            <div>
                                                <button
                                                    className="uppercase text-sm cursor-pointer"
                                                    onClick={() =>
                                                        setShowMoreStatus(
                                                            !showMoreStatus
                                                        )
                                                    }
                                                >
                                                    Show{" "}
                                                    {showMoreStatus
                                                        ? "less"
                                                        : "more"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {recommendedVideos.map(
                                    (video: RecommendedVideos) => (
                                        <div
                                            className="mb-5"
                                            key={video.videoId}
                                        >
                                            <WatchCard data={video} />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Watch;
