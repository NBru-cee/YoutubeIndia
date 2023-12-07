import { Link } from "react-router-dom";
import { HomePageVideos } from "../Types";

const Card = ({ data }: { data: HomePageVideos }) => {
    return (
        <div className="w-64 h-60 flex flex-col gap-3">
            <div className="relative">
                <span className="absolute bottom-3 right-3 bg-gray-900 text-sm px-2 z-10 py-0.5">
                    {data.videoDuration}
                </span>
                <Link to={`/watch/${data.videoId}`}>
                    <img
                        src={data.videoThumbnail}
                        alt="thumbnail"
                        className="h-44 w-72"
                    />
                </Link>
            </div>
            <div className="flex gap-2">
                <div className="min-w-fit">
                    <a href="#">
                        <img
                            src={data.channelInfo.image}
                            alt="channel"
                            className="h-9 w-9 rounded-full"
                        />
                    </a>
                </div>
                <div>
                    <h3>
                        <a href="#" className="line-clamp-2">
                            {data.videoTitle}
                        </a>
                    </h3>
                    <div className="text-sm text-gray-400">
                        <div>
                            <a href="#" className="hover:text-white">
                                {data.channelInfo.name}
                            </a>
                        </div>
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

export default Card;
