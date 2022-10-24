interface IEpisode {
    season: number,
    episodeNumber: number,
    rating: number,
    releaseDate: string, // Date()
    title: string,
    description: string,
    image: string
}

export default IEpisode;