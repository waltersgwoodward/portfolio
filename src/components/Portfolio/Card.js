import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faServer, faDatabase, faRocket, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ToolIcons from './ToolIcons.js';

const Card = props => {
    const { tool_icons, title, frontend_tools, backend_tools, database_tools, deploy_link, deployment_tools, code_link, text } = props.card;
    return (
        <div className='card__wrap' key={props.id}>
            <div className="card__row--row">{tool_icons ? <ToolIcons tool_icons={tool_icons} /> : null}</div>
            <div className="card__row">
                <div className='card__title'>{title}</div>
            </div>
            <div className="card__row card__row--tools">
                {frontend_tools ? <div className='card__languages'>
                    <FontAwesomeIcon icon={faDesktop} aria-hidden="false" />
                    <b> {frontend_tools}</b>
                </div> : null}
                {backend_tools ? <div className='card__languages'>
                    <FontAwesomeIcon icon={faServer} aria-hidden="false" />
                    <b> {backend_tools}</b>
                </div> : null}

                {database_tools ? <div className='card__languages'>
                    <FontAwesomeIcon icon={faDatabase} aria-hidden="false" />
                    <b> {database_tools}</b>
                </div> : null}
                {deployment_tools ? <div className='card__languages'>
                    <FontAwesomeIcon icon={faRocket} aria-hidden="false" />
                    <b> {deployment_tools}</b>
                </div> : null}

            </div>
            <div className="card__row">
                <div className='card__description'>{text}</div>
                <div>
                    {deploy_link ? (<a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={deploy_link}
                        className='card__button'
                        aria-label={"Click on this link to view the live deployment of this project" + title}
                    >
                        <FontAwesomeIcon icon={faLink} aria-hidden="false" />
                    </a>) : null
                    }
                    {code_link ? (
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            className='card__button'
                            href={code_link}
                            aria-label='Click on this link to view the code for this project.'
                        >
                            <FontAwesomeIcon icon={faGithub} aria-hidden="false" />
                        </a>
                    ) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;