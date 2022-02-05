import {axiosService} from "./axios.service";
import {urls} from "../Config";
import {IPost} from "../interfaces";

export const postsService = {
    getAll: () => axiosService.get<IPost[]>(urls.posts),

};