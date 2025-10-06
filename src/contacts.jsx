
import './contacts.css'
function Contacts(props) {  //you can choose whatever names yu want
    console.log(props);
    return (
        <div className='contacts'>
            <article className='contact-card'>
                <img src={props.img}
                    alt='photo of Mr. whiskerson'
                />
                <h3>{props.name}</h3>

                <div className='info-group'>
                    <img
                        src='./src/phone icon.png'
                        alt='phone icon'
                    />
                    <p>{props.phone}</p>
                </div>
                <div className='info-group'>
                    <img
                        src='./src/email icon.png'
                        alt='mail icon'
                    />
                    <p>{props.email}</p>
                </div>
            </article>
        </div>
    )
}

export default Contacts;