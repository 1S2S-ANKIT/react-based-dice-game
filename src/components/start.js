
import Button from 'react-bootstrap/Button';
const start = ({ toggle }) => {
    return (
        <div className="box1">
            <div className="box1-1">
                <img src="/images/image_dice_1.jpg" />
            </div>
            <div className="box1-2">
                <div className='container'>
                    <h1>Dice Game</h1>
                    <Button variant="primary" onClick={toggle}> Play Now</Button>
                </div>
            </div>
        </div>
    )
}

export default start;

