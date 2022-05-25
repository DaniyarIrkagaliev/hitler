import "./style.css"

export const Team = (props) => {
    return (
        <div id='team' className='text-center'>
            <div className='container'>
                <div className='col-md-8 col-md-offset-2 section-title'>
                    <h2>Команда разработки</h2>
                    <p>
                        Над проектом работали эти замечательные люди
                    </p>
                </div>
                <div id='row'>
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className='col-md-6 col-sm-6 team'>
                                <div className='thumbnail'>
                                    {' '}
                                    <img src={d.img} alt='...' className='team-img'/>
                                    <div className='caption'>
                                        <h4>{d.name}</h4>
                                        <p>{d.job}</p>
                                    </div>
                                    <div className='col-md-12'>
                                        <ul className="list-inline banner-social-buttons">
                                            <li><a href={d.link} className="btn btn-default btn-lg">
                                                <i className="fa fa-vk"> </i></a>
                                            </li>
                                            <li><a href={d.link2} className="btn btn-default btn-lg">
                                                <i className="fa fa-git"> </i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                        : 'loading'}
                </div>
            </div>
        </div>
    )
}
