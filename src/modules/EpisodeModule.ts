import IEpisode from "../interfaces/IEpisode";

const EpisodeModule = (
    () => {

        const episodeArray: IEpisode[] = [
            {
                season: 1,
                episodeNumber: 1,
                rating: 8.7,
                releaseDate: "2022-08-21",
                title: "The Heirs of the Dragon",
                description: "Viserys hosts a tournament to celebrate the birth of his second child. Rhaenyra welcomes her uncle Daemon back to the Red Keep.",
                image: "https://m.media-amazon.com/images/M/MV5BMGQyNWE0OTAtYmE0Ny00NWExLTk1MWMtODBkOWRlN2U5NDZjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX224_CR0,0,224,126_AL_.jpg"
            },
            {
                season: 1,
                episodeNumber: 2,
                rating: 8.4,
                releaseDate: "2022-08-28",
                title: "The Rogue Prince",
                description: "Rhaenyra oversteps at the Small Council. Viserys is urged to secure the succession through marriage. Daemon announces his intentions.",
                image: "https://m.media-amazon.com/images/M/MV5BZDU2ZTBmNDMtYjkwNS00MjFhLWFiYzQtYWE2MGE1MWE0ZjI2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX224_CR0,0,224,126_AL_.jpg"
            },
            {
                season: 1,
                episodeNumber: 3,
                rating: 8.7,
                releaseDate: "2022-09-04",
                title: "Second of His Name",
                description: "Daemon and the Sea Snake battle the Crabfeeder. The realm celebrates Aegon's second nameday. Rhaenyra faces the prospect of marriage.",
                image: "https://m.media-amazon.com/images/M/MV5BZWFhZjZhMWMtY2JjOS00MDNhLWFjNjItNDdiOGUzNzc3NmE5XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX224_CR0,0,224,126_AL_.jpg"
            },
            {
                season: 1,
                episodeNumber: 4,
                rating: 8.5,
                releaseDate: "2022-09-11",
                title: "King of the Narrow Sea",
                description: "Rhaenyra continues her search for a suitable match, Daemon returns to Kings Landing and stirs more trouble for the King. Rhaenyra learns a valuable lesson.",
                image: "https://m.media-amazon.com/images/M/MV5BOTdkN2Q0ZTctZmY2Zi00NzI0LTk3M2ItOTM5ZWJhNzMwOTMxXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_UX224_CR0,0,224,126_AL_.jpg"
            },
            {
                season: 1,
                episodeNumber: 5,
                rating: 8.9,
                releaseDate: "2022-09-18",
                title: "We Light the Way",
                description: "Daemon visits his wife in the Vale. Viserys and Rhaenyra broker agreements with the Velaryons. Alicent seeks the truth about the princess.",
                image: "https://m.media-amazon.com/images/M/MV5BZDU4NzcyZGItZTE0NS00NzkxLTljZTMtZjFmNDI1YjliMGIwXkEyXkFqcGdeQXVyMTAzMjg5NDQ3._V1_UY126_UX224_AL_.jpg"
            },
            {
                season: 1,
                episodeNumber: 6,
                rating: 8.1,
                releaseDate: "2022-09-25",
                title: "The Princess and the Queen",
                description: "Ten years later. Rhaenyra navigates Alicent's continued speculation about her children, while Daemon and Laena weigh an offer in Pentos.",
                image: "https://m.media-amazon.com/images/M/MV5BNGUzMDIzZGYtNWM5Yi00NDhlLTkxOTktYmMzYjVmMzQ0OGU0XkEyXkFqcGdeQXVyMTAzMjg5NDQ3._V1_UY126_UX224_AL_.jpg"
            },
            {
                season: 1,
                episodeNumber: 7,
                rating: 9.3,
                releaseDate: "2022-10-02",
                title: "Driftmark",
                description: "As the families gather on Driftmark for a funeral, Viserys calls for an end to infighting and Alicent demands justice.",
                image: "https://m.media-amazon.com/images/M/MV5BZDlkY2Y5MWYtMzYzNi00MWM3LWIyYzktMDM3ZDAzNDdkODJkXkEyXkFqcGdeQXVyMTAzMjg5NDQ3._V1_UX224_CR0,0,224,126_AL_.jpg"
            },
            {
                season: 1,
                episodeNumber: 8,
                rating: 9.4,
                releaseDate: "2022-10-09",
                title: "Lord of the Tides",
                description: "Six years later. With the Driftmark succession suddenly critical, Rhaenyra attempts to strike a bargain with Rhaenys.",
                image: "https://m.media-amazon.com/images/M/MV5BY2E2YTQ5OTgtYjFjNi00NzQwLThkOGEtYTEzMWVkMzZhMjQ2XkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_UX224_CR0,0,224,126_AL_.jpg"
            },
            {
                season: 1,
                episodeNumber: 9,
                rating: 9.0,
                releaseDate: "2022-10-16",
                title: "The Green Council",
                description: "While Alicent enlists Cole and Aemond to track down Aegon, Otto gathers the great houses of Westeros to affirm their allegiance.",
                image: "https://m.media-amazon.com/images/M/MV5BMjA3NDIyNzgtNmRiNi00NmFkLWEwZjUtMDMyZTA0MGNiNjk4XkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_UY126_CR12,0,224,126_AL_.jpg"
            },
            {
                season: 1,
                episodeNumber: 10,
                rating: 0.0,
                releaseDate: "2022-10-23",
                title: "The Black Queen",
                description: "Yet to be released...",
                image: "https://m.media-amazon.com/images/M/MV5BMzllY2ZhOGItNGQ4My00MWIyLTgyYjQtM2ZiZWNkODdiZjYzXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_UY126_CR13,0,224,126_AL_.jpg"
            }
        ];

        const getAll = () :IEpisode[] => episodeArray;

        const getEpisodeByNumber = (episodeNumber: number) :IEpisode => {
            const selectedEpisode = episodeArray.find
            (episode => episode.episodeNumber === episodeNumber);

            return selectedEpisode as IEpisode;
        }

        return {
            getAll,
            getEpisodeByNumber
        }
    }
)();

export default EpisodeModule;