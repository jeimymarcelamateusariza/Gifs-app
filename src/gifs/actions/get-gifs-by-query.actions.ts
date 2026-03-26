import type { TopLevel } from '../interfaces/giphy.response';
import type { Gif } from '../interfaces/gif.interface';
import { giphyApi } from './api/ghipy.api';



export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

    const response = await giphyApi<TopLevel>('/search', {
        params: {
            q: query,
            limit: 10,
        }
    })

    console.log(response.data)

    //Mapeo de datos de GiphyGif a Gif
    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)
    }));

}