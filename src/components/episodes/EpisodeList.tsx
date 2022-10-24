import IEpisode from "../../interfaces/IEpisode";
import {useState, useEffect} from 'react';
import EpisodeItem from "./EpisodeItem";
import EpisodeModule from "../../modules/EpisodeModule";

const EpisodeList = () => {
    
    const [episodeArray, setEpisodes] = useState<IEpisode[] | null>(null);

    useEffect(() => {
        setEpisodesFromModule();
    }, []);

    const setEpisodesFromModule = () => {
        setEpisodes(EpisodeModule.getAll());
    }

    const getEpisodeItems = () => {
        return episodeArray?.map((episode, index) => 
        <EpisodeItem
            key={`episode-${index}`}
            season={episode.season}
            episodeNumber={episode.episodeNumber}
            rating={episode.rating}
            releaseDate={episode.releaseDate}
            title={episode.title}
            description={episode.description}
            image={episode.image}
        />
        );
    }

    return (
        <section className="container-fluid px-5">
            <h1 className="display-5 text-uppercase border-bottom border-secondary row justify-content-center p-5">House of the Dragon</h1>
            <nav className="row justify-content-around p-2">
                <button className="btn btn-outline-secondary col m-3">Search Episodes</button>
                <button className="btn btn-outline-secondary col m-3">Search Houses</button>
                <button className="btn btn-outline-secondary col m-3">Search Characters</button>
            </nav>
            <section className="row justify-content-center p-3">{getEpisodeItems()}</section>
        </section>
    )
}

export default EpisodeList;