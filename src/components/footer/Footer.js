import "./footer.css"

export const Footer = (props) => {
    return (
        <div>
            <div id='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='social'>
                            <ul>
                                <li>
                                    <a href={props.data ? props.data.git1 : '/'}>
                                        <i className='fa fa-github'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer'>
            </div>
        </div>
    )
}