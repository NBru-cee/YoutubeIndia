import { Link } from "react-router-dom";
import { RecommendedVideos } from "../Types";

const SearchCard = ({ data }: { data: RecommendedVideos }) => {
    return (
        <div className="flex gap-3">
            <div className="relative min-w-fit">
                <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 z-10 py-0 5">
                    {data.videoDuration}
                </span>
                <Link to={`/watch/${data.videoId}`}>
                    <img
                        src={data.videoThumbnail}
                        className="h-24 w-40"
                        alt="thumbnail"
                    />
                </Link>
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-sm">
                    <a href="#" className="line-clamp-2">
                        {data.videoTitle}
                    </a>
                </h3>
                <div className="text-xs text-gray-400">
                    <div>
                        <a href="#" className="hover:text-white">
                            {data.channelInfo.name}
                        </a>
                    </div>
                    <div>
                        <div>
                            <span className="after:content-['&middot;'] after:mx-1">
                                {data.videoViews} views
                            </span>
                            <span>{data.videoAge}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;
