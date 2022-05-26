import user from './user.png'

const About = () => {

return <div style={{ backgroundColor: "black", width: "80%", height: "86vh", color: "white"  ,opacity:"0.8" }} className='container'>
    <h1 style={{textDecoration:"underline",color:'#f17126'}} className="text-center py-2">About Us</h1>
    <br />
    <br />
    <p className="text-center" >
    This noteapp is the best notes app for most people because it hits all of the most important requirements: it's reliable, fairly fast, and works across Windows, Mac, iPad, iPhone, Android, and the web.
    </p>
    <br/>
    <h2 className="text-center">Developer</h2>

    <div className="container text-center">
        <img style={{borderRadius:"150px", width:"15vw"}} src={user} alt="user" />
    <h4 className="text-center">Sankalp Sachan</h4>
    </div>
    <br/>
    <br/>
    <br/>
    <h1 className="text-center">Thankyou!</h1>
</div>
};

export default About;
