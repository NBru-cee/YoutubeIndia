import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";
import { YOUTUBE_API_URL } from "../../utils/constants";
import { RecommendedVideos } from "../../Types";
import { parseRecommendedData } from "../../utils";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getRecommendedVideos = createAsyncThunk(
    "youtubeApp/getRecommendedVideos",
    async (videoId: string, { getState }) => {
        const {
            youtubeApp: {
                currentPlaying: {
                    channelInfo: { id: channelId },
                },
            },
        } = getState() as RootState;

        const {
            data: { items },
        } = await axios.get(
            `${YOUTUBE_API_URL}/activities?key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=video&videoId=${videoId}`
        );

        const parsedData: RecommendedVideos[] = await parseRecommendedData(
            items,
            videoId
        );

        return { parsedData };
    }
);
