import {FC} from 'react';
import IEpisode from '../../interfaces/IEpisode';

const EpisodeItem: FC<IEpisode> = ({season, episodeNumber, rating, releaseDate, title, description, image}) => {
    return (
        <article className='col-md-3 mb-3'>
            <div className='thumbnail'>
                <img src={image} alt={title} className=''/>
                <div className='caption'>
                    <h3 className='h4'>S{season} E{episodeNumber} {title}</h3>
                    <p>{rating}/10 - {releaseDate}</p>
                    <p>{description}</p>
                </div>
            </div>
        </article>
    )
}

export default EpisodeItem;