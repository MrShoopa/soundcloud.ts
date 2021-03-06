import api from "../API"
import {SoundCloudComment} from "../types"

export class Comments {
    public constructor(private readonly api: api) {}

    /**
     * Gets a comment using its ID.
     */
    public get = async (commentID: number) => {
        const response = await this.api.get(`/comments/${commentID}`)
        return response as Promise<SoundCloudComment>
    }
}
