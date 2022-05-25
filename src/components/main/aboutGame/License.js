
import "./aboutGame.css"
import '../../commonText.css'

export const License = () => {
    return (
        <div id='license'>
            <div className='container'>
                <div className="section-title">
                <h1>License</h1></div>
                <div className="ui text container">
                    <p>Secret Hitler был создан <span className='emphasis'>Mike Boxleiter, Tommy
                        Maranges, Max Temkin, and Mac Schubert.</span></p>
                    <p> Secret Hitler лицензирован и распространяется в соответствии с
                        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" rel="nofollow"> Creative Commons
                            Attribution-NonCommercial-ShareAlike 4.0 International</a>
                    </p>
                    <p>Правила и картинки были взяты из открытого доступа</p>
                    <p>Перевод правил был осуществлён ruthus, с использованием руководства в Steam по
                        <a href='http://steamcommunity.com/sharedfiles/filedetails/ ?id=700205324' rel="nofollow"> ссылке
                        </a>, созданного  <a href='http://steamcommunity.com/id/serega6531' >пользователем</a>,
                        исключительно в интересах игроков, если кого-то
                        данный факт задел или возмутил, просьба
                        воздержаться от критики и перестать пользоваться настоящими правилами, спасибо.
                    </p>
                    <img src="img/Cc-by-nc-sa_icon.png" className="img-license" alt="" />{" "}
                </div>
            </div>
        </div>
    )
}
