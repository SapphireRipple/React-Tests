import profilePic from './assets/Adobe Express - file.webp'
function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Russian Spy</h2>
            <p className="card-text">I am learning coding and like to draw.</p>
        </div>
    );
}
export default Card