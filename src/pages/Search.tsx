import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { HomePageVideos } from "../Types";
import { clearVideos } from "../store";
import { useNavigate } from "react-router-dom";
import SearchCard from "../components/SearchCard";

const Search = () => {
    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) => state.youtubeApp.videos);
    const navigate = useNavigate();
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

    useEffect(() => {
        dispatch(clearVideos());
        if (searchTerm === "") {
            navigate("/");
        } else {
            dispatch(getSearchPageVideos(false));
        }
    }, [dispatch, navigate, searchTerm]);

    return (
        <div className="max-h-screen overflow-hidden">
            <div style={{ height: "7.5vh" }}>
                <Navbar />
            </div>
            <div className="flex" style={{ height: "92.5vh" }}>
                <Sidebar />
                {videos.length ? (
                    <div className="py-8 pl-8 flex flex-col gap-5 w-full">
                        <InfiniteScroll
                            dataLength={videos.length}
                            next={() => dispatch(getSearchPageVideos(true))}
                            hasMore={videos.length < 500}
                            loader={<Spinner />}
                            height={600}
                        >
                            {videos.map((video: HomePageVideos) => (
                                <div className="my-5">
                                    <SearchCard
                                        data={video}
                                        key={video.videoId}
                                    />
                                </div>
                            ))}
                        </InfiniteScroll>
                    </div>
                ) : (
                    <>
                        <Spinner />
                    </>
                )}
            </div>
        </div>
    );
};

export default Search;
